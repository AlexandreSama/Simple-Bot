const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    let progressBar = client.player.createProgressBar(message.guild.id, 20);

        message.channel.send(progressBar);

}

module.exports.help = {
    name: 'progress'
};