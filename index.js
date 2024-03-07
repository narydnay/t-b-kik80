const express = require("express");
const bot = require('./src/telegram/index');

const TOKEN = '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc';
const WH_PATH = '/bot' + TOKEN;

const app = express();

app.use(bot.webhookCallback(WH_PATH));
bot.telegram.setWebhook('https://t-bot-kik.vercel.app' + WH_PATH);


app.get("/", (req, res) => {
  res.send("Express on Vercel--- add telegraf v4");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
