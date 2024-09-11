const Member = require("../models/member-model");

exports.createMember = async (req, res) => {
  try {
    const member = await Member.find(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ message: "Internal Server Error" });
  }
};

exports.deleteMember = async (req, res) => {
  try {
    const member_id = req.params.id;
    await Member.deleteOne({ _id: member_id });
    res.status(200).json("Member deleted Successfully");
  } catch (error) {
    res.status(400).json({ message: "Internal Server Error" });
  }
};

exports.updateMember = async (req, res) => {
  try {
    const member_id = req.params.id;
    const updated_info = req.body;
    await Member.updateOne({_id:member_id}, updated_info);
    res.status(200).json("Member Updated Successfully");
  } catch (error) {
    res.status(400).json({ message: "Internal Server Error" });
  }
};


// Add other CRUD operations: getAllBooks, getBookById, updateBook, deleteBook
