const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    let song = await client.player.resume(message.guild.id);
    message.channel.send(`**${song.name}** est relancé !`);

}

module.exports.help = {
    name: 'remove'
}; 