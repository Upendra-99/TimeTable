const express = require("express");
const app = express();
const cors = require("cors");
const timeTableSlot = require("./timeTable.controller");

app.use(cors());

app.use(express.json([]));

app.use("/", timeTableSlot);

module.exports = app;
