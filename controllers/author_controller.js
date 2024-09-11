const Author =  ("../models/author-model");

exports.createAuthor = async (req, res) => {
  try {
    const author = Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (error) {
    res.status(400).json({ message: "Internal Server Error" });
  }
};
exports.updateAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const updatedinfo = req.body;
    const update_book = await Author.updateOne({ _id: authorId }, updatedinfo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;
    const author = await Author.deleteOne({ _id: authorId });
    res.status(200).json({ message: "Author Deletedd Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.getAuthorById = async (req, res) => {
  try {
    const authorId = req.params.id;
    const findingbyid = await Author.findById(authorId);
    res.status(200).json(findingbyid); 
    if (!findingbyid)
      return res.status(404).json({ error: "Author Not Found" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};    res.status(200).json({ message: "Author Data Updated Successfully" });

exports.getAllauthors = async (req, res) => {
  try {
    const Allauthors = await Author.find(req.body);
    res.status(200).json(Allauthors);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
