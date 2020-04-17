const Discord = require('discord.js'); //require() connects to the Discord api
const bot = new Discord.Client(); //inherited from Discord library

const { token } = require('./config.json');

bot.on('ready', () =>{  
	console.log('This bot is online!');
})

bot.login(token);
