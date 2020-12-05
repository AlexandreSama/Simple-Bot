const Discord = require('discord.js');;

module.exports.run = async (client, message, member) => {

    message.delete();

    const channel = message.guild.channels.cache.find(ch => ch.name === 'blabla');
    if (!channel) return;
    
    let role = message.guild.roles.cache.find(role => role.name === "stream");

    let RoleId = role.id;

    if(message.member.roles.cache.some(role => role.name === 'dev de rêve' || 'modo' || 'garde-rapprochée' || 'admin-technicien' || 'Worker')){
        channel.send(`<@&${RoleId}> Alexandre est actuellement en retard, il arrivera a 19h45 !`)
    }else{
        message.author.send("Désolé mais tu n'a pas la puissance pour utiliser cet commande !")
    }
}

module.exports.help = {
    name: 'retard'
}