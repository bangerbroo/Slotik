import { Bot } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN); 

bot.command("start", (ctx) => {
    const name = ctx.from.first_name;
    ctx.reply(`Привет, ${name}! Я Slotik`);
});

bot.on("message:text", (ctx) => {
    ctx.reply(`ТЫ написал: ${ctx.message.text}`);
});

bot.start();
console.log("Бот запущен");
