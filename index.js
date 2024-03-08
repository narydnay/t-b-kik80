const express = require("express");
const bot = require('./src/telegram/index');
const config = require('./src/config/config');
const bodyParser = require('body-parser');
const routers = require("./src/routers/admin..router");
const { noFound } = require("./src/middlewares/noFound");

const app = express();
app.use(noFound)
app.use(bodyParser.json())
app.use(bot.webhookCallback(config.getWebHookpath('shot')));
bot.telegram.setWebhook(config.getWebHookpath('full'));
app.use(routers)
app.listen(5000, () => {
  console.log("Running on port 5000.");
});


// Export the Express API


module.exports = app;
