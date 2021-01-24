const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    let song = await client.player.pause(message.guild.id);
    message.channel.send(`**${song.name}** est en pause !`);

}

module.exports.help = {
    name: 'pause'
}; 