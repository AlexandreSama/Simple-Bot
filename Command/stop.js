const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    client.player.stop(message.guild.id);
    message.channel.send('La chanson a été coupé et la Piste a été vidé !');

}

module.exports.help = {
    name: 'stop'
};