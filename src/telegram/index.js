const { Telegraf } = require("telegraf");
const config = require("../config/config");

const TOKEN = config.get('token-bot');
const bot = new Telegraf(TOKEN);

bot.on('text', ctx => {
  const { message } = ctx;
  
  ctx.reply('hi bro we work good, what are doing? ...' + message)
})



module.exports = bot;