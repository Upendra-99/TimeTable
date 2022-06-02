const model1 = require("../models/timeTableSlot");
const model2 = require("../models/classSlot");
const timeSlot = async (req, res) => {
  try {
    let s1 = await model2.find({});

    for (var i = 0; i < s1.length; i++) {
      if (req.body.start >= slot[i].start && req.body.start <= s1[i].end) {
        flag = false;
        break;
      }
    }
    if (flag) {
      const slotNewer = await model1.insertMany([req.body]);

      res.send(slotNewer);
    } else {
      res.send("time slot not available");
    }
  } catch (error) {
    console.log(error);
  }
};

const allSlots = async (req, res) => {
  try {
    let s2 = await model1.find({});
    res.send(s2);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  timeSlot,
  allSlots,
};
