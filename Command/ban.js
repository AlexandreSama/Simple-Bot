const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = (client, message, member) => {

    message.delete();

    const user =  message.mentions.members.first();

    const commandName = ",ban ";

    let messageArray = message.content.substring(commandName.length).split(",");

    if(message.member.roles.cache.some(role => role.name === 'dev de rêve' || 'modo' || 'garde rapprochée' || 'admin-technicien')){

        user.ban({
            reason: messageArray[1]
        }).catch(console.error);

        user.send("Tu a été unmute, fais attention a toi la prochaine fois");

    }else{

        message.author.send("Désolé mais tu n'a pas la puissance pour utiliser cet commande !");

    }

}

module.exports.help = {
    name: 'ban'
}