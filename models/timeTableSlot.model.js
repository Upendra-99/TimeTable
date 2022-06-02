const mongoose = require("mongoose");

const TimeSlot = new mongoose.Schema({
  finish: { type: Number, required: true },
  begin: { type: Number, required: true },
});

module.exports = mongoose.model("timeTableSlot", timeTableSlot);
