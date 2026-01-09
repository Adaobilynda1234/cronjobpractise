const cron = require("node-cron");
const db = require("../config/db");
const transporter = require("../config/mailer");

cron.schedule("* * * * *", async () => {
  console.log("Checking for reminders...");

  const [rows] = await db.query(`
    SELECT s.id, s.title, u.email
    FROM schedules s
    JOIN users u ON s.user_id = u.id
    WHERE s.reminder_time <= NOW()
    AND s.is_sent = FALSE
  `);

  for (const reminder of rows) {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: reminder.email,
      subject: "Reminder Notification",
      text: `Reminder: ${reminder.title}`,
    });

    await db.query("UPDATE schedules SET is_sent = TRUE WHERE id = ?", [
      reminder.id,
    ]);
  }
});
