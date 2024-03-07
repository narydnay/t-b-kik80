const express = require("express");
const bot = require('./src/telegram/index');
const config = require('./src/config/config');
const bodyParser = require('body-parser');


const TOKEN = config.get('token-bot');
const WH_PATH = '/bot' + TOKEN;

const app = express();

app.use(bodyParser.json())
app.use(bot.webhookCallback(WH_PATH));
bot.telegram.setWebhook('https://t-bot-kik.vercel.app' + WH_PATH);


app.get("/", (req, res) => {
  res.send("Express on Vercel--- add telegraf v5");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
