const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    let SongID = parseInt(args[0])-1; // The index is starting from 0, so we subtract 1.
    // Removes a song from the queue
    client.player.remove(message.guild.id, SongID).then(() => {
        message.channel.send(`La chanson ${args[0]} a été enlevé de la piste !`);
    });

}

module.exports.help = {
    name: 'remove'
}; 