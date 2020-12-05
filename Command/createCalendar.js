const Discord = require('discord.js');
const Canvas = require('canvas');
const fs = require('fs');

module.exports.run = async (client, message, member) => {

    message.delete();

    // Const pour retenir le nom de la commande (on ajoute un espace a la fin pour ne pas mal découpé le message)
    const commandName = "!createcalendar ";

    // on retire le commandName du message et on découpe chaque String a chaque |
    let messageArray = message.content.substring(commandName.length).split(",");

    let student = { 
        lundi: `${messageArray[0]}`,
        mardi: `${messageArray[1]}`, 
        mercredi: `${messageArray[2]}`,
        jeudi: `${messageArray[3]}`,
        vendredi: `${messageArray[4]}`,
        samedi: `${messageArray[5]}`,
        dimanche: `${messageArray[6]}`
    };
     
    let data = JSON.stringify(student);
    fs.writeFileSync('streamCalendar.json', data);

    message.author.send(`Calendrier de la semaine crée avec succés !`);

}

module.exports.help = {
    name: 'createcalendar'
}