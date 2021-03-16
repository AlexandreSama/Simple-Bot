const Discord = require('discord.js');

module.exports.run = (client, message) => {

  message.delete();

    //On récupère les infos de l'utilisateur
    let user = message.author;
    //On indique que channelName veut dire 'ticket-de-' + le pseudo de l'utilisateur en minuscule !
    var channelName = `ticket-de-` + user.username.toLowerCase();
    //On indique que le nom de la catégorie pour les tickets est "tickets"
    let categoryTicketName = "⭐║LA SALLE DU TRÔNE ║⭐"
    //On cherche dans le serveur s'il y a une catégorie se nomment comme categoryTicketName
    let categoryTicket = message.guild.channels.cache.find(cat=> cat.name === categoryTicketName)
    //On cherche s'il existe déjà un ticket pour cet personne
    let channel = message.guild.channels.cache.find(channel => channel.name === channelName)
    let channelStaff = message.guild.channels.cache.get("715494139592048641");
    let myRole1 = message.guild.roles.cache.get("670908206087929856");
    let myRole2 = message.guild.roles.cache.get("774690121173565470");

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
                  id: myRole1.id,
                  allow: 'VIEW_CHANNEL'
                },
                {
                  id: myRole2.id,
                  allow: 'VIEW_CHANNEL'
                }
              ]
        }).then(() => {
            //Puis on revérifie si le channel existe
            let channel = message.guild.channels.cache.find(channel => channel.name === channelName)
            //Et on envoie un message
            channel.send("Bienvenue <@" + user.id + ">" + ", tu peut désormais poser tes questions ici et l'on te répondra sous peu !");

            let testRoleListMember = message.guild.roles.cache.get("774690121173565470");

            let idRoleListMember = testRoleListMember.members.map(m => m.user.id);

            let idStaffConnected = [];

            idRoleListMember.forEach(element => {
              let userStaff = client.users.cache.find(user => user.id === element)
              if(userStaff.presence.status == "online" || "dnd"){
                idStaffConnected.push("<@" + userStaff.id + ">")
              }
            });

            function sendEmbed(){
              const exampleEmbed = new Discord.MessageEmbed()
              .setColor('#0099ff')
              .setTitle('Nouveau Ticket !')
              .setAuthor(message.author.username)
              .setDescription(message.author.username + ' A crée un nouveau ticket !')
              .addFields(
                { name: 'On vous demande !', value:  idStaffConnected.join(', ') + " sont demandés dans le channel : " + "#" + channelName},
              )
              .setTimestamp()
              .setFooter('Embed crée par Alexandre');
              channelStaff.send(exampleEmbed)
            };
            setTimeout(sendEmbed(), 8000);
        })
    }else {
        //On le préviens
        message.channel.send("Tu a déjà un ticket ouvert !")
    }

}

module.exports.help = {
    name: 'createticket'
};