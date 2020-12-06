const Discord = require('discord.js');

module.exports.run = (client, message) => {

    message.delete();

    const user =  message.mentions.members.first();

    const channel = client.channels.cache.get(748223617665466448);

    if(message.member.roles.cache.some(role => role.name === 'dev de rêve' || 'modo' || 'garde rapprochée' || 'admin-technicien') & user.voice.id === channel.id){
        user.voice.setMute(true, "Tu parle trop")
        user.send("Tu a été mute du stream car tu parle trop !")
    }else{
        message.author.send("Désolé mais tu n'a pas la puissance pour utiliser cet commande !")
    }
}


module.exports.help = {
    name: 'mutestream'
}