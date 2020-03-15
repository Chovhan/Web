const TelegramBot = require('node-telegram-bot-api');
const commandsExecuting = require('./FileCommands.js');

const token = '1109158893:AAEXYNjDGKzbK5w2b5kYyUInCoIVQE1d7io';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/createfile (.+)/, (msg, [source, match])=> {
    commandsExecuting(`type nul > ${match}`);
    bot.sendMessage(chatId, `File is created by path  ${resp}`);
});

bot.onText(/\/deletefile (.+)/, (msg, [source, match])=> {
    const chatId = msg.chat.id;
    commandsExecuting(`del ${match}`);
    bot.sendMessage(chatId, `File is deleted by path  ${match}`);
});

bot.onText(/\/openpage/, (msg, [source, match]) => {
   const chatId = msg.chat.id;
   bot.sendMessage(chatId, 'What site do you want to open?', {
       reply_markup: {
           inline_keyboard: [
               [
                   {
                       text: 'YouTube',
                       callback_data: 'start http://youtube.com'
                   },
                   {
                       text: 'Easter Egg',
                       callback_data: 'start https://1x-bet-ua.com/ua/'
                   }
               ],
               [
                   {
                       text: 'Google',
                       callback_data: 'start https://youtu.be/FOWg2vSheHg?t=11'
                   }
               ]
           ],
       }
   })
});

bot.on('callback_query', query => {
   bot.answerCallbackQuery(query.id, `${query.data}`);
    commandsExecuting(`${query.data}`)
});
