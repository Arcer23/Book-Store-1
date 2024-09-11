const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  authors: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports  = mongoose.model('Book', bookSchema)
