const Discord = require(`discord.js`);
const bot = new Discord.Client();

var token = "MzkzNzcwNzE1MjQyOTU0NzUz.DqxjAw.6-i42Ah6Bmr3NyYUoPZkWuayr4E";

bot.on(`ready`, ()=> {
	console.log(`Started bot as: ${bot.user.tag}!`);
bot.user.setGame(`Dont swear`);
	});

const swears = require(`./swears.js`);

bot.on("message", function(message){
 if (message.author.bot) return;
 
 if (message.guild)
 {
	var string = message.content;
	var lower = string.toLowerCase();
	for (i = 0; i < 554; i++)
	{
 
 if (lower.indexOf(swears.list[i]) >= 0)
	    {
		 console.log(message.author.username + " said " + lower);
	      message.delete();
		  message.reply("Please Don`t say bad words :/")
		  break;
		}
	}
  }

});

client.login(process.env.BOT_TOKEN);
