const Book = require("../models/book-model");
const Member = require("../models/member-model");

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: "Internal Server Error" });
  }
};
exports.deleteBook = async (req, res) => {
  try {
    const book_id = req.params.id;
    const book = await Book.deleteOne({ _id: book_id });
    res.status(200).json({ message: "Book Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.updateBook = async (req, res) => {
  try {
    const book_id = req.params.id;
    const updated_book = req.body;
    const update = await Book.updateOne({ _id: book_id }, updated_book);
    res.status(200).json({ message: "Book Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.rentingBook = async (req, res) => {
  const { member_id, book_id } = req.body;
  try {
    const book = await Book.findById(book_id);
    const member = await Member.findById(member_id);
    if (!book) return res.status(404).json({ message: "Book Not Found" });
    if (!member) return res.status(404).json({ message: "Member Not Found" });
    if (book.stock <= 0)
      return res.status(404).json({ message: "Book is Out of Stock" });
    if (member.rentedBook)
      return res.status(400).json({ message: "Book Rented" });
    book.stock = book.stock - 1;
    member.rentedBook = book._id;
    member.rentedBook = new Date();

    await book.save();
    await member.save();

    res.status(200).json({ message: "Book Rented" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.returningBook = async (req, res) => {
  try {
    const member_id = req.body;
    const member = await Member.findById(member_id).populate("rentedBook");
    if (!member || !member.rentedBook) {
      return res
        .status(404)
        .json({ message: "You Havent Rented a Book To Return" });
    }

    const book = member.rentedBook;
    book.stock = book.stock + 1;
    member.rentedBook = null;
    member.rentedDate = null;

    await book.save();
    await member.save();
    res.status(200).json({ message: "Book returned Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getallBooks = async (req, res) => {
  try {
    const books = await Book.find(req.body);
    if (!books) return res.status(400).json({ message: "Book not Found" });
    res.status(200).send(books);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getbookById = async (req, res) => {
  try {
    const book_id = req.params.id;
    const findingbyid = await Book.findById(book_id);
    res.status(200).json(findingbyid);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error " });
  }
};
