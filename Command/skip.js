const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    let song = await client.player.skip(message.guild.id);
    message.channel.send(`**${song.name}** a été ignoré!`);

}

module.exports.help = {
    name: 'skip'
}; 