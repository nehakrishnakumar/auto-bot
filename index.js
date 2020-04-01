const Discord = require('discord.js'); //require() connects to the Discord api
const bot = new Discord.Client(); //inherited from Discord library

const token = 'Njk0OTE5MTA0NjkxMzA2NTI2.XoSoKg.B8QRnFv7hkU34LznPsJc7XGyeTw';

bot.on('ready', () =>{  
	console.log('This bot is online!');
})

bot.login(token);
