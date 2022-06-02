const express = require("express");
const router = express.Router();

const controller = require("./controller");

const slotsAll = require("../models/slotsAll.model");
const teacher = require("../models/teacher.model");


router.get("/getAllSlots", controller(slotsAll).slotsAll);

router.post("/getTeacherSlot", controller(teacher).teacher);

module.exports = router;
