const Discord = require('discord.js');

module.exports.run = (client, message) => {

    message.delete();

    message.channel.send("règles du stream : désactivé son micro pendant les cinématiques vous pouvez parler pour aider Alexandre dans le jeux et aussi ne pas parler hors sujet je vous rappel que c'est un stream pas une discussion")

}

module.exports.help = {
    name: 'rules'
}