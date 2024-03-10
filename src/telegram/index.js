const { Telegraf } = require("telegraf");
const config = require("../config/config");
const { queryDataBase } = require("../models/models");
const { default: axios } = require("axios");

const TOKEN = config.get('token-bot');

const bot = new Telegraf(TOKEN);
const dbFirebase = new queryDataBase();

bot.on('text', async ctx => {
  const { message } = ctx;
  if(message.text === 'список' ){
    try{
      const listPrisoner = await axios.get('http://localhost:5001/api/get-all-prisoners')
      return ctx.reply('hi bro we work good, what are doing? ...' + JSON.stringify(listPrisoner.data, null, 4))
    }catch(err){
      return ctx.reply('ERROR? ...\n' + JSON.stringify(err, null, 4))
    }
  }

  ctx.reply('hi bro we work good, what are doing? ...' + JSON.stringify(message, null, 4))
})



module.exports = bot;