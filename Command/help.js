const Discord = require('discord.js');

module.exports.run = async (client, message, member) => {

    message.delete();

    //Création d'un embed dans une constant (car il ne change jamais)
    const embed = new Discord.MessageEmbed()
    .setColor("#5361ad")
    .setTitle('Panneau des commandes du StreamBot')
    .setAuthor('Alexandre', 'https://i.imgur.com/wSTFkRM.png', 'https://github.com/AlexandreSama')
	.setDescription('Toutes les infos sur les commandes du StreamBot')
	.addFields(
	{ name: ',help', value: 'Donne l\'accés au panneau d\'information' },
	{ name: ',retard', value: 'Vous préviendra si Alexλndre a du retard'},
	{ name: ',calendrier', value: 'montre le calendrier de la semaine pour les stream'},
    { name: ',mutestream', value: 'Permet de mute un viewer s\'il parle trop (accessible uniquement si vous faites parti du staff)'},
    { name: ',unmutestream', value: 'Permet de demute un viewer a la fin du stream (accessible uniquement si vous faites parti du staff)'},
    { name: ',stream', value: 'Permet de voir le jeu de ce soir'}
    )
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
    .setFooter('Made With Love By Alexandre for the server Gang des Chouchous', 'https://i.imgur.com/wSTFkRM.png');
    
    //Envoi de l'embed dans le channel
    message.author.send(embed);

}

module.exports.help = {
    name: 'help'
}
