const Discord = require('discord.js'); //require() connects to the Discord api
const bot = new Discord.Client(); //inherited from Discord library

const { token } = require('./config.json');

bot.on('ready', () =>{  
	console.log('This bot is online!');
})

bot.on('message', msg=>{
	//if (msg.author.bot) return;
	//else if (msg.channel.type === 'dm') return;
	
	//TEMPORARY FOR TESTING
	if (msg.content === "ur an idiot") {
		//msg.reply ("Hey! I'm still in development so don't talk to me right now!")
		msg.reply ("I would really, really insult you but this is on a public repository so I don't want my future boss to get mad");
		msg.reply ("We can still definitely throw hands though");
	}
})

bot.login(token);
