const { Telegraf } = require("telegraf");
const config = require("../config/config");

const TOKEN = config.get('token-bot');
const bot = new Telegraf(TOKEN);

bot.on('text', ctx => {
  ctx.reply('hi bro we work good')
})



module.exports = bot;