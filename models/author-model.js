const mongoose = require("mongoose");
const authorSchema = new mongoose.model({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Author", authorSchema)
