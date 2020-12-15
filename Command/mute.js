const Discord = require('discord.js');

module.exports.run = (client, message, member) => {

    message.delete();

    const user =  message.mentions.members.first();

    const commandName = ",mute ";

    let messageArray = message.content.substring(commandName.length).split(",");

    let role = message.guild.roles.cache.find(r => r.name === "Mute");

    if(message.member.roles.cache.some(role => role.name === 'dev de rêve' || 'modo' || 'garde rapprochée' || 'admin-technicien')){
        user.roles.add(role).catch(console.error);
        user.send("Tu a été mute pour :" + messageArray[0])
    }else{
        message.author.send("Désolé mais tu n'a pas la puissance pour utiliser cet commande !")
    }

}

module.exports.help = {
    name: 'mute'
}