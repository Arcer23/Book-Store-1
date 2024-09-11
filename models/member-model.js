const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rentedBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  rentedDate: {
    type: Date,
  },
});

module.exports = mongoose.model("Member", memberSchema);
