const express = require("express");
const { Telegraf } = require("telegraf");
const TOKEN = '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc';
const WH_PATH = '/bot' + TOKEN;
const bot = new  Telegraf(TOKEN);
const app = express();

bot.telegram.setWebhook('https://t-bot-kik.vercel.app' + WH_PATH)
app.use(bot.webhookCallback(WH_PATH))

bot.on('text', ctx => {
  ctx.reply('hi bro we work good')
})

app.get("/", (req, res) => {
  res.send("Express on Vercel------------------------------------------------- add telegraf");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
