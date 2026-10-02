import { Bot, InlineKeyboard } from "grammy";

const bot = new Bot(process.env.BOT_TOKEN); 

bot.command("start", (ctx) => {
    const name = ctx.from.first_name;
    const keyboard = new InlineKeyboard().webApp("Открыть Slotik", process.env.WEBAPP_URL);
    ctx.reply(`Привет, ${name}! Я Slotik`, { reply_markup: keyboard });
});

bot.on("message:text", (ctx) => {
    ctx.reply(`Ты написал: ${ctx.message.text}`);
});

bot.start();
console.log("Бот запущен");
