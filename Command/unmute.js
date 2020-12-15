const Discord = require('discord.js');

module.exports.run = (client, message, member) => {

    message.delete();

    const user =  message.mentions.members.first();

    let role = message.guild.roles.cache.find(r => r.name === "Mute");

    if(message.member.roles.cache.some(role => role.name === 'dev de rêve' || 'modo' || 'garde rapprochée' || 'admin-technicien')){
        user.roles.remove(role).catch(console.error);
        user.send("Tu a été unmute, fais attention a toi la prochaine fois")
    }else{
        message.author.send("Désolé mais tu n'a pas la puissance pour utiliser cet commande !")
    }

}

module.exports.help = {
    name: 'unmute'
}