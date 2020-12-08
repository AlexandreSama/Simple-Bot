const Discord = require('discord.js');
const fs = require('fs')

module.exports.run = async (client, message) => {

    message.delete();

    let date = new Date();

    console.log(date)

    // fs.readFile("./streamCalendar.json", async (err, data) => {

    // })

}

module.exports.help = {
    name: 'stream'
}