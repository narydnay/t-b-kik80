const { Telegraf } = require("telegraf");
const config = require("../config/config");
const { queryDataBase } = require("../models/models");
const dbFirebase = new queryDataBase();
const TOKEN = config.get('token-bot');
const bot = new Telegraf(TOKEN);

bot.on('text', async ctx => {
  const { message } = ctx;
  if(message.text === 'список' ){
    const listPrisoner = dbFirebase.getDataFromDb({nameField: 'name', qOperant: '!=', value:false});
    ctx.reply('hi bro we work good, what are doing? ...' + JSON.stringify(listPrisoner.splice(0,3), null, 4))
    listPrisoner
  }

  // ctx.reply('hi bro we work good, what are doing? ...' + JSON.stringify(message, null, 4))
})



module.exports = bot;