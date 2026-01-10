const express = require("express");
const scheduleRoutes = require("./routes/schedule.routes");

const app = express();
app.use(express.json());

// Routes

app.use("/api/schedules", scheduleRoutes);

module.exports = app;
