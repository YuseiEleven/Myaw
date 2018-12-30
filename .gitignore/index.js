const Discord = require('discord.js');
const { get } = require("snekfetch"); 
const { Client, Util } = require('discord.js');
const ce = require("embed-creator");
const client = new Discord.Client();
client.login(process.env.token);
const prefix = '!';
client.on('ready', () => {
	console.log('Bot en ligne!');
	client.user.setActivity('🐱 Myaw')});
client.on('warn', console.warn);
client.on('error', console.error);

client.on('message', msg => {
	if(msg.content.startsWith(prefix + 'myaw')) {
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setImage(res.body.file)
				return msg.channel.send({embed});
			});
		} catch(err) {
			return msg.channel.send(error.stack);
		}
	}});

client.on('message', message => {
    if(message.content === 'Elle est comment Alycia?')
		message.channel.send("C'est la plus mignonne de l'univers, elle est.. myaaaaaw :3");
});
client.on('message', message => {
    if(message.content === 'Il est comment Paolo?')
		message.channel.send("Pffff.. Il est pas bo :x");
});