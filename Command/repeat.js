const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    let toggle = client.player.toggleLoop(message.guild.id);

    // Send a message with the toggle information
    if (toggle){
        message.channel.send('I will now repeat the current playing song.');
    }
    else{
        message.channel.send('I will not longer repeat the current playing song.');
    }
}

module.exports.help = {
    name: 'repeat'
}
