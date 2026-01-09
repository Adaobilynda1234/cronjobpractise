const db = require("../config/db");

exports.createSchedule = async (req, res) => {
  const { user_id, title, reminder_time } = req.body;

  await db.query(
    "INSERT INTO schedules (user_id, title, reminder_time) VALUES (?, ?, ?)",
    [user_id, title, reminder_time]
  );

  res.status(201).json({ message: "Schedule created" });
};
