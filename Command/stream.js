const Discord = require('discord.js');
const fs = require('fs')

module.exports.run = async (client, message) => {

    message.delete();

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "dimanche";
    weekday[1] = "lundi";
    weekday[2] = "mardi";
    weekday[3] = "mercredi";
    weekday[4] = "jeudi";
    weekday[5] = "vendredi";
    weekday[6] = "samedi";

    var n = weekday[d.getDay()];

    fs.readFile("./streamCalendar.json", async (err, data) => {
        let datas = JSON.parse(data)
        message.channel.send("Aujourd'hui, nous allons faire un live sur " + datas[n] + " !")
    })

}

module.exports.help = {
    name: 'stream'
}