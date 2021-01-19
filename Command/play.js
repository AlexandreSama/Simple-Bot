const { Util } = require('discord.js');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports.run = async (client, message, args) => {

    const voiceChannel = message.member.voice.channel;
 
    if (!voiceChannel) return message.channel.send('Tu dois être dans un channel vocal pour faire cet commande!');
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send('Tu n\'a pas la permission de faire ca');
    if (!permissions.has('SPEAK')) return message.channel.send('Tu n\'a pas la permission de faire ca');
    if (!args.length) return message.channel.send('Tu dois me donner le nom de la musique!');

    const validURL = (str) =>{
        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if(!regex.test(str)){
            return false;
        } else {
            return true;
        }
    }

    if(validURL(args[0])){

        const  connection = await voiceChannel.join();
        const stream  = ytdl(args[0], {filter: 'audioonly'});
        connection.play(stream, {seek: 0, volume: 0.5})
        .on('finish', () =>{
            voiceChannel.leave();
            message.channel.send('Adieu mon ami....');
        });

        await message.reply(`:thumbsup: Je joue maintenant ***${video.title}***`)

        return

    }

    const  connection = await voiceChannel.join();

    const videoFinder = async (query) => {
        const videoResult = await ytSearch(query);

        return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

    }

    const video = await videoFinder(args.join(' '));

    if(video){
        const stream  = ytdl(video.url, {filter: 'audioonly'});
        connection.play(stream, {seek: 0, volume: 0.5})
        .on('finish', () =>{
            voiceChannel.leave();
            message.channel.send('Adieu mon ami....');
        });

        await message.reply(`:thumbsup: Je joue maintenant ***${video.title}***`)
    } else {
        message.channel.send('Je n\'ai pas trouvé de vidéo avec ce que tu m\'a donné');
    }
}

module.exports.help = {
    name: 'play'
}