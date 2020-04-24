const Discord = require('discord.js'); //require() connects to the Discord api
const bot = new Discord.Client(); //inherited from Discord library

const { token } = require('./config.json');
const prefix = "?";

bot.on('ready', () =>{  
	console.log('This bot is online!');
})

bot.on('message', msg=>{
	//if (msg.author.bot) return;
	//else if (msg.channel.type === 'dm') return;
	let args = msg.content.substring(prefix.length).split(" ");
	//TEMPORARY FOR TESTING
	switch(args[0]) {
		case 'Heyyo':
			msg.reply('Hey ya! I am still in development right now so talk to me later!');
			break;
		case 'Hi':
			msg.reply ("Hi there. I'm still being developed so talk to me later!");
			break;
		case 'banme':
			msg.reply("Did you mean wrpwerwpet");  //temporary
			break;
		/*default:
			msg.reply("Hi! I don't know what you're saying. Reply with ?Heyyo or ?Hi if you want a greeting!");
			break;
			*/

	}

})

bot.login(token);
