const { Telegraf } = require("telegraf");
const TOKEN = '6884974307:AAEN0vj63vJ0ntxRoVSiqSnupPg3S2h7ymc';
const bot = new Telegraf(TOKEN);

bot.on('text', ctx => {
  ctx.reply('hi bro we work good')
})



module.exports = bot;