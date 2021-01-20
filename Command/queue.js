const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let queue = await client.player.getQueue(message.guild.id);
    message.channel.send('Queue:\n'+(queue.songs.map((song, i) => {
        return `${i === 0 ? 'Now Playing' : `#${i+1}`} - ${song.name} | ${song.author}`
    }).join('\n')));

}

module.exports.help = {
    name: 'nowplay'
}