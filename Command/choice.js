const Discord = require('discord.js');

module.exports.run = (message, client, member) => {

	message.delete();

	const commandName = ",choice";

	let messageArray = message.content.substring(commandName.length).split(",");

	let reactions = [':zombiebuffalo:',':starfish:',':Pandanoel:',':mega-1:',':pig-1:']
	
	let aléatoire = Math.floor(Math.random()*reactions.length);
	message.channel.send();
}

module.exports.help = {
	name: 'choice'
}
