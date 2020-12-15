const Discord = require('discord.js');

module.exports.run = (client, message, member) => {

    message.delete();

    const commandName = ",ban ";

    let messageArray = message.content.substring(commandName.length).split(",");

    if(message.member.roles.cache.some(role => role.name === 'dev de rêve' || 'modo' || 'garde rapprochée' || 'admin-technicien')){

        message.guild.members.unban(messageArray[0])

    }else{

        message.author.send("Désolé mais tu n'a pas la puissance pour utiliser cet commande !");
        
    }

}

module.exports.help = {
    name: 'unban'
}