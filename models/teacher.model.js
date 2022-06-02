const mongoose = require("mongoose");

const Instructor = new mongoose.Schema({
  name: { type: String, required: true },
  slots: { type: mongoose.Schema.Types.ObjectId, ref: "slotsAll" },
  id: { type: Number, required: true },
  department: [{ type: mongoose.Schema.Types.ObjectId, ref: "department" }],
});

module.exports = mongoose.model("teacher", Teacher);
