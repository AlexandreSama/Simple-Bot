const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send("Tu dosi être connecté a un channel vocal pour faire cet commande.");

    const permissions = voiceChannel.permissionsFor(client.user);
    if (!permissions.has("CONNECT")) return message.channel.send("Je ne peut pas me connecter dans ce channel, vérifie que j'ai les permissions pour le faire!");
    if (!permissions.has("SPEAK")) return message.channel.send("Je ne peut pas me connecter dans ce channel, vérifie que j'ai les permissions pour le faire!");

    let isPlaying = client.player.isPlaying(message.guild.id);
    console.log(isPlaying)

    // If there's already a song playing
    if(isPlaying){
        // Add the song to the queue
        let song = await client.player.addToQueue(message.guild.id, args.join(' '), {}, message.author.tag);
        song = song.song;
        message.channel.send(`La chanson ${song.name} a été ajouté a la liste !`);
    } else {
        // Else, play the song
        let song = await client.player.play(message.member.voice.channel, args.join(' '), {}, message.author.tag);
        song = song.song;
        message.channel.send(`Je joue maintenant ${song.name}!`);
    }

    let progressBar = client.player.createProgressBar(message.guild.id, 20);

    message.channel.send(progressBar);

}

module.exports.help = {
    name: 'play'
}
