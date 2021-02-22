const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    client.player.setRepeatMode(message.guild.id, true);
        // Get the current song
    let song = await client.player.nowPlaying(message.guild.id);
    message.channel.send(`${song.name} will be repeated indefinitely!`);
    
}

module.exports.help = {
    name: 'repeat'
}
