const Discord = require('discord.js');
const { Player } = require('discord-player');

module.exports.run = async (client, message) => {

    let song = await client.player.skip(message.guild.id);
    message.channel.send(`${song.name} a été ignoré!`);

}

module.exports.help = {
    name: 'skip'
}; 