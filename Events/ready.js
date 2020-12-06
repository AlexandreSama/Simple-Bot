module.exports = (client) => {

    console.log("Bot Prêt");

    client.user.setActivity("!help | Je vous surveille lors des stream", {type: 'PLAYING'})
};