const express = require("express");
const { createSchedule } = require("../controllers/schedule.controller");

const router = express.Router();
//router

router.post("/", createSchedule);

module.exports = router;
