const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    bcrypt.genSalt(10, function (error, salt) {
      bcrypt.hash(password, salt, async function (error, hashpwd) {
        if (error) res.status(500).json(error);
        else {
          const user = await userModel.create({
            username,
            password: hashpwd,
            role,
          });
          const token = generateToken(user);
          res.cookie(token); // why necessary
          res.status(200).json("user created successfully");
        }
      });
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Internal Server Error" });
  }
};

exports.getname = (req, res) => {
  res.send("thisispranish");
};

// Add other CRUD operations: getAllBooks, getBookById, updateBook, deleteBook
