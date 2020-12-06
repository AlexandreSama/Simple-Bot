const Discord = require('discord.js');

module.exports.run = (client, message) => {

    message.delete();
    
    const user =  message.mentions.members.first();

    if(message.member.roles.cache.some(role => role.name === 'dev de rêve' || 'modo' || 'garde rapprochée' || 'admin-technicien')){
        user.voice.setMute(false, "Fais attention la prochaine fois")
        user.send("tu a été démute, fais attention la prochaine fois !")
    }else{
        message.author.send("Désolé mais tu n'a pas la puissance pour utiliser cet commande !")
    }
}


module.exports.help = {
    name: 'unmutestream'
}