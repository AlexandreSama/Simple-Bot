const Discord = require('discord.js');
const { Player } = require("discord-player");

module.exports.run = (client, message) => {

    settings = {
        prefix: ":",
        token: "Your Discord Token"
    };

    const player = new Player(client);
    // To easily access the player
    client.player = player;
    // add the trackStart event so when a song will be played this message will be sent
    client.player.on('trackStart', (message, track) => message.channel.send(`Now playing ${track.title}...`))

    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    // !play Despacito
    // will play "Despacito" in the member voice channel

    client.player.play(message, args[0]);
}

module.exports.help = {
    name: 'play'
}