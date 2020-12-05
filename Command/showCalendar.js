const Discord = require('discord.js');
const Canvas = require('canvas');
const fs = require('fs');

module.exports.run = async (client, message, member) => {

    message.delete();

    fs.readFile('./streamCalendar.json', async (err, data) => {
        if (err || data.length == 4){
            message.author.send(`Il n'y a pas de calendrier pour le moment !`)
        }
        else{

            let datas = JSON.parse(data)

            const applyText = (canvas, text) => {
                const ctx = canvas.getContext('2d');
                let fontSize = 70;
        
                do {
                    ctx.font = `${fontSize -= 10}px sans-serif`;
                } while (ctx.measureText(text).width > canvas.width - 300);
        
                return ctx.font;
            };

            const canvas = Canvas.createCanvas(1920, 1080);
            const ctx = canvas.getContext('2d');
        
            const background = await Canvas.loadImage('./wallpaper.jpg');
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        
            ctx.strokeStyle = '#74037b';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
            // Titre
            ctx.font = '60px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText('Calendrier de la semaine', canvas.width / 3, canvas.height / 11);
        
            var textTitle = ctx.measureText('Calendrier de la semaine')
            ctx.strokeStyle = 'rgba(0,0,0,1)'
            ctx.beginPath()
            ctx.lineTo(640, 115)
            ctx.lineTo(canvas.width / 3 + textTitle.width, 115)
            ctx.stroke()
        
        
            // Lundi
            ctx.font = applyText(canvas, `Lundi :`);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Lundi :`, canvas.width / 8, canvas.height / 4.4);
        
            ctx.font = '60px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${datas['lundi']}`, canvas.width / 4, canvas.height / 4.4);
        
        
            // Mardi
            ctx.font = applyText(canvas, `Mardi :`);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Mardi :`, canvas.width / 8, canvas.height / 2.5);
        
            ctx.font = '60px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${datas['mardi']}`, canvas.width / 4, canvas.height / 2.5);
        
        
            //Mercredi 
            ctx.font = applyText(canvas, `Mercredi :`);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Mercredi :`, canvas.width / 8, canvas.height / 1.7);
        
            ctx.font = '60px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${datas['mercredi']}`, canvas.width / 3.5, canvas.height / 1.7);
        
        
        
            // Deuxième Colonne
        
        
        
            // Jeudi
            ctx.font = applyText(canvas, `Jeudi :`);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Jeudi :`, canvas.width / 1.5, canvas.height / 4.4);
        
            ctx.font = '60px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${datas['jeudi']}`, canvas.width / 1.2, canvas.height / 4.4);
        
            // Add an exclamation point here and below
            ctx.font = applyText(canvas, `Vendredi :`);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Vendredi :`, canvas.width / 1.5, canvas.height / 2.5);
        
            ctx.font = '60px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${datas['vendredi']}`, canvas.width / 1.2, canvas.height / 2.5);
        
            // Add an exclamation point here and below
            ctx.font = applyText(canvas, `Samedi :`);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Samedi :`, canvas.width / 1.5, canvas.height / 1.7);
        
            ctx.font = '60px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${datas['samedi']}`, canvas.width / 1.2, canvas.height / 1.7);
        
        
            // Dimanche
            ctx.font = applyText(canvas, `Dimanche :`);
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Dimanche :`, canvas.width / 3, canvas.height / 1.4);
        
            ctx.font = '60px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`${datas['dimanche']}`, canvas.width / 1.9, canvas.height / 1.4);
        
            ctx.font = '50px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Je suis en stream a partir de 19h30 habituellement jusqu'a 20h30!`, canvas.width / 7.5, canvas.height / 1.2);
        
            ctx.font = '30px sans-serif';
            ctx.fillStyle = '#ffffff';
            ctx.fillText(`Si je ne suis pas présent a l'heure habituel, faites attention aux ping !`, canvas.width / 4, canvas.height / 1.1);
        
        
            ctx.beginPath();
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
        
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
        
            message.author.send(`Calendrier de la semaine ! (clique sur l'image pour voir en grand)`, attachment);
        }
      });
}

module.exports.help = {
    name: 'calendrier'
}