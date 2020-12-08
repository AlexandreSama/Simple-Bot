const Discord = require('discord.js');
const fs = require('fs')

module.exports.run = async (client, message) => {

    message.delete();

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Dimanche";
    weekday[1] = "Lundi";
    weekday[2] = "Mardi";
    weekday[3] = "Mercredi";
    weekday[4] = "Jeudi";
    weekday[5] = "Vendredi";
    weekday[6] = "Samedi";

    var n = weekday[d.getDay()];

    console.log(n)

    // fs.readFile("./streamCalendar.json", async (err, data) => {

    // })

}

module.exports.help = {
    name: 'stream'
}