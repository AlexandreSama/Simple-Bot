const Discord = require('discord.js');
const { Player } = require('discord-player');

module.exports.run = (client, message) => {

    message.guild.voice.kick();
    message.channel.send("Adieu !")
}

module.exports.help = {
    name: 'stop'
};