const express = require("express");
const bot = require('./src/telegram/index');
const config = require('./src/config/config');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bot.webhookCallback(config.getWebHookpath('shot')));
bot.telegram.setWebhook(config.getWebHookpath('full'));


app.get("/", (req, res) => {
  res.send("Express on Vercel--- add telegraf v6");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
