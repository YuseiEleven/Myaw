const Discord = require('discord.js');
const { get } = require("snekfetch"); 
const { Client, Util } = require('discord.js');
const ce = require("embed-creator");
const client = new Discord.Client();
var Themeparks = require("themeparks");
client.login(process.env.token);
const prefix = '!';
const PREFIX = "!";
client.on('ready', () => {
	console.log('Bot en ligne!')});
client.on('warn', console.warn);
client.on('error', console.error);
const activities_list = [
	"😺 !aide", 
	"🙀 Myaaaaw xc",
	"😿", 
	"🦄 Suis un chat licorne",
	"🐾 Pattounes",
	"🐈 !aide",
	"🐱 Meow",
	"😼 Nyahhh",
	"😹 Arrêtez les chatouilles",
	"😽 Miuuuuu"
	];

const activities_list2 = [
	"❤️", 
	"🧡",
	"💛", 
	"💚",
	"💙",
	"💜",
	"🖤",
	"💖",
	"💗",
	"💞"
	];

client.on('ready', () => {
	setInterval(() => {
			const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
			client.user.setActivity(activities_list[index]);
	}, 5000); //10 seconds=10000
});



// Logs

client.on('message', (message)=>{
	var channel = client.channels.get('530820542060822549');
	if (message.channel.type.toLowerCase() == 'dm' || message.channel.type.toLowerCase() == 'text') {
			var embed = new Discord.RichEmbed()
			.setAuthor(message.author.username, message.author.avatarURL)
			.setTitle('#' + message.channel.name)
			.setDescription(message.content)
			.setTimestamp(new Date())
			.setColor('#FFFFFF');
			channel.send(embed);
	}
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel


  if(oldUserChannel === undefined && newUserChannel !== undefined) {

		var channel = client.channels.get('530842390630498314');
				var embed = new Discord.RichEmbed()
				.setAuthor(newMember.user.username, newMember.user.avatarURL)
				.setTitle('🔊 ' + newUserChannel.name)
				.setDescription('Viens de rejoindre un salon Vocal')
				.setTimestamp(new Date())
				.setColor('#00FF00');
				channel.send(embed);

  } else if(newUserChannel === undefined){

		var channel = client.channels.get('530842390630498314');
				var embed = new Discord.RichEmbed()
				.setAuthor(oldMember.user.username, oldMember.user.avatarURL)
				.setTitle('🔊 ' + oldUserChannel.name)
				.setDescription('Viens de quitter un salon Vocal')
				.setTimestamp(new Date())
				.setColor('#FF0000');
				channel.send(embed);

  }
})

// Dialogues

client.on('message', message => {
  if(message.content === 'Elle est comment Alycia?')
		message.channel.send("C'est la plus mignonne de l'univers, elle est.. myaaaaaw :3");
  if(message.content === 'Il est comment Paolo?')
		message.channel.send("Pffff.. Il est pas bo :x");
  if(message.content === 'Bonzour')
		message.channel.send("Bonzour :3");
  if(message.content === 'Bonjour')
		message.channel.send("Bonzour :3");
  if(message.content === 'Salut')
		message.channel.send("Bonzour :3");
	if(message.content === 'Coucou')
		message.channel.send("Bonzour :3");
	if(message.content === 'coucou')
		message.channel.send("Bonzour :3");
});

client.on("message", async message => {
	if(message.author.bot) return;
	if(message.content.indexOf(prefix) !== 0) return;
	var channel = client.channels.get('529356612901535774');
	if (!channel) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if(command === "isay") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    channel.send(sayMessage);
  }
});

//Infos

client.on('guildMemberAdd', member => {
	var channel = client.channels.get('529742556691431454');
	if (!channel) return;
	channel.send(ce(
	  "#00FF00", {"name": member.guild.name, "icon_url": member.guild.iconURL}, "", "",
	  [{"name": "Passez un agréable moment en notre compagnie!", "value": member.user.tag }],
	  {"text": "", "icon_url": member.guild.iconURL}, 
	  {"thumbnail": member.user.displayAvatarURL}, true
	));
  });
  client.on('guildMemberRemove', member => {
	var channel = client.channels.get('529742556691431454');
	if (!channel) return;
	channel.send(ce(
	  "#FF0000", {"name": member.guild.name, "icon_url": member.guild.iconURL}, "", "",
	  [{"name": "A bientôt!", "value": member.user.tag }],
	  {"text": "", "icon_url": member.guild.iconURL}, 
	  {"thumbnail": member.user.displayAvatarURL}, true
	));
  });
  client.on('guildBanAdd', (guild, user) => {
	var channel = client.channels.get('529742556691431454');
	if (!channel) return;
	channel.send(ce(
	  "#010101", {"name": guild.name, "icon_url": guild.iconURL}, "", "",
	  [{"name": user.tag, "value": "est désormais banni." }],
	  {"text": "", "icon_url": guild.iconURL}, 
	  {"thumbnail": user.displayAvatarURL}, true
	));
  });
  client.on('guildBanRemove', (guild, user) => {
	var channel = client.channels.get('529742556691431454');
	if (!channel) return;
	channel.send(ce(
	  "#EE82EE", {"name": guild.name, "icon_url": guild.iconURL}, "", "",
	  [{"name": user.tag, "value": "est autorisé à nous rejoindre de nouveau."}],
	  {"text": "", "icon_url": guild.iconURL}, 
	  {"thumbnail": user.displayAvatarURL}, true
	));
  });

//Utilitaires

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
  const args = message.content.slice(prefix.length).trim().split(';');
  const command = args.shift().toLowerCase();
  if (command === "sondage") {
    if(!message.member.hasPermission("KICK_MEMBERS")) return;
    let question = args[0];
    let choix1 = args[1];
    let choix2 = args[2];
    let choix3 = args[3];
    if (args.length === 0)
      return message.reply('**Mauvais format:** `!sondage;<Question>;<Choix1>;<Choix2>;<Choix3>`')
  message.channel.send("~~-----------~~" + '\n' + '\n' + ":question:" + `**__${question}__**` + '\n'  + '\n' + "" + ":one:" + ` **${choix1}**` +  '\n' + ":two:" + ` **${choix2}**` +  '\n' + ":three:" + ` **${choix3}**` + '\n' + '\n' + "*(Créer par: " + message.author.username + ")*")
  .then(function (message) {
    message.react('1⃣').then(() => message.react('2⃣')).then(() => message.react('3⃣'));
	})}});
client.on('message', message => {
  if (message.content === prefix + 'aide') {
    message.channel.send(ce(
      "#010101", {"name": `Aide`, "icon_url": ""}, "", "",
      [{"name": "!disneyland", "value": "Afficher les temps d'attentes du parc Disneyland Paris."},
      {"name": "!studios", "value": "Afficher les temps d'attentes du parc Walt Disney Studios."},
	  {"name": "!myaw", "value": "Afficher une image de chat aléatoire."},
	  {"name": "!purge <2-100>", "value": "Supprimer des messages dans un salon textuel."},
	  {"name": "!sondage;<Question>;<Choix1>;<Choix2>;<Choix3>", "value": "Lancer un sondage."}],
      {"text": "", "icon_url": ""}, 
      {"thumbnail": "", "image": ""}, true
    ))
  }
});
client.on('message', async message => {
	if(message.author.bot) return;
	if(message.content.indexOf(PREFIX) !== 0) return;
	const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	if(command === "purge") {
	  if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
	  const deleteCount = parseInt(args[0], 10);
	  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
		return message.reply("Veuillez indiquer un nombre compris entre 2 et 100 pour le nombre de messages à supprimer.");
	  const fetched = await message.channel.fetchMessages({limit: deleteCount});
	  message.channel.bulkDelete(fetched)
		.catch(error => message.reply(`Impossible de supprimer les messages en raison de: ${error}`));
	};
  });

// Liste de tout les parcs supportés par la library

for (var park in Themeparks.Parks)

// Accès à un parc

var disneyMagicKingdom = new Themeparks.Parks.DisneylandParisMagicKingdom();

// Informations sur le parc

client.on('message', message => {
  if (message.content === prefix + 'disneyland') {
    message.channel.send(ce(
      "#010101", {"name": "", "icon_url": ""}, "", "",
      [{"name": `Disneyland Paris`, "value": "Temps d'attentes"}],
      {"text": "", "icon_url": ""}, 
      {"thumbnail": "", "image": ""}, false
    ));
    disneyMagicKingdom.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {
    message.channel.send(ce(
    "#010101", {"name": "", "icon_url": ""}, "", "",
    [{"name": ride.name, "value": ride.waitTime + " minutes."}],
    {"text": "", "icon_url": ""}, 
    {"thumbnail": "", "image": ""}, true
    ))}});
}});

var disneyWaltDisneyStudios = new Themeparks.Parks.DisneylandParisWaltDisneyStudios();

client.on('message', message => {
  if (message.content === prefix + 'studios') {
    message.channel.send(ce(
      "#010101", {"name": "", "icon_url": ""}, "", "",
      [{"name": `Walt Disney Studios`, "value": "Temps d'attentes"}],
      {"text": "", "icon_url": ""}, 
      {"thumbnail": "", "image": ""}, false
    ));
    disneyWaltDisneyStudios.GetWaitTimes().then(function(rides) {
    for(var i=0, ride; ride=rides[i++];) {
    message.channel.send(ce(
    "#010101", {"name": "", "icon_url": ""}, "", "",
    [{"name": ride.name, "value": ride.waitTime + " minutes."}],
    {"text": "", "icon_url": ""}, 
    {"thumbnail": "", "image": ""}, true
    ))}});
}});
