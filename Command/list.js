const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    let queue = await client.player.getQueue(message.guild.id);
    message.channel.send('Piste musical:\n'+(queue.songs.map((song, i) => {
        return `${i === 0 ? 'En cours d\'écoute' : `#${i+1}`} - **${song.name}** | *${song.author}*`
    }).join('\n')));

}

module.exports.help = {
    name: 'list'
};