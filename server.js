require("dotenv").config();
const app = require("./app");
require("./cron/reminderJob"); // start cron

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
