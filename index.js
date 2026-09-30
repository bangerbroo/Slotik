import { Bot } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN); 

bot.command("start", (ctx) => {
    ctx.reply("Привет! Я Slotik");
});

bot.on("message:text", (ctx) => {
    ctx.reply("ТЫ напсиал: " + ctx.message.text);
});

bot.start();
console.log("Бот запущен");
