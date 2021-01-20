const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let song = await client.player.nowPlaying(message.guild.id);
    message.channel.send(`Chanson actuel: ${song.name}`);

}

module.exports.help = {
    name: 'nowplay'
}