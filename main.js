const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
const prefix = ',';
const canvas = require("discord-canvas"),
  goodbyeCanvas = new canvas.Goodbye(),
  welcomeCanvas = new canvas.Welcome();
const { Player } = require("discord-music-player");
const player = new Player(client);
    client.player = player;
    
fs.readdir('./Command/', (error, f) => {
    if (error) {
      return console.error(error);
    }
    const commandes = f.filter((f) => f.split('.').pop() === 'js');
    if (commandes.length <= 0) {
      return console.log('Aucune commande trouvée !');
    }
  
    commandes.forEach((f) => {
      const commande = require(`./Command/${f}`);
      console.log(`${f} commande chargée !`);
      client.commands.set(commande.help.name, commande);
    });
  });
  
  fs.readdir('./Events/', (error, f) => {
    if (error) {
      return console.error(error);
    }
    console.log(`${f.length} events chargés`);
  
    f.forEach((f) => {
      const events = require(`./Events/${f}`);
      const event = f.split('.')[0];
      client.on(event, events.bind(null, client, fs, welcomeCanvas, goodbyeCanvas));
    });
});

client.on('message', async (message) => {

    const messageArray = message.content.split(/\s+/g);
    const command = messageArray[0];
    const args = messageArray.slice(1);
  
    if (!command.startsWith(prefix)) return;
  
    const cmd = client.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(client, message, args);
    if (message.author.bot) {
      return;
    }

});
client.login('NzgzNDYxNDM4NDgzNDY0MjIz.X8bFUg.DWSuhqOfMHXxiHOCYPD02id_JHU');
