const Discord = require('discord.js');

module.exports.run = (client, message) => {

  message.delete();

    //On récupère les infos de l'utilisateur
    let user = message.author;
    //On indique que channelName veut dire 'ticket-de-' + le pseudo de l'utilisateur en minuscule !
    var channelName = `❤️ ticket-de-` + user.username.toLowerCase() + ' ❤️';
    //On indique que le nom de la catégorie pour les tickets est "tickets"
    let categoryTicketName = "⭐║LA SALLE DU TRÔNE ║⭐"
    //On cherche dans le serveur s'il y a une catégorie se nomment comme categoryTicketName
    let categoryTicket = message.guild.channels.cache.find(cat=> cat.name === categoryTicketName)
    //On cherche s'il existe déjà un ticket pour cet personne
    let channel = message.guild.channels.cache.find(channel => channel.name === channelName)
    let myRole = message.guild.roles.cache.get("717082752121569311");

    //Si il n'y a pas de ticket pour cet utilisateur
    if(channel === undefined){
        // on crée un channel a son nom
        message.guild.channels.create(channelName, {
            type: 'text',
            parent: categoryTicket.id,
            permissionOverwrites: [
                {
                  id: message.guild.id, // shortcut for @everyone role ID
                  deny: 'VIEW_CHANNEL'
                },
                {
                  id: user.id,
                  allow: 'VIEW_CHANNEL'
                },
                {
                  id: myRole.id,
                  allow: 'VIEW_CHANNEL'
                }
              ]
        }).then(() => {
            //Puis on revérifie si le channel existe
            let channel = message.guild.channels.cache.find(channel => channel.name === channelName)
            //Et on envoie un message 
            channel.send("Bienvenue <@" + user.id + ">" + ", tu peut désormais poser tes questions ici et l'on te répondra sous peu !");
        })
        //Si le channel existe déjà
    }else {
        //On le préviens
        message.channel.send("Tu a déjà un ticket ouvert !")
    }

}

module.exports.help = {
    name: 'createticket'
};