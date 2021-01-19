const Discord = require('discord.js');

module.exports.run = async (client, message) => {

    const voiceChannel = message.member.voice.channel;
 
    if(!voiceChannel) return message.channel.send("Tu dois être dans un channel vocal pour couper la musique!");
    await voiceChannel.leave();
    await message.channel.send('Adieu mon ami... :smiling_face_with_tear:')

}

module.exports.help = {
    name: 'stop'
};