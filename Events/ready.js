module.exports = (client) => {

    console.log("J'suis ok mek !");

    let activiter = ['Patou le BG','Le Necronomicon pour les Nuls','Made By : Le mec qui n\'a aucun aim','Est-ce que j\'ai vraiment besoin d\'une activité ?', 'Alexandre ? Connais pas', 'Un jour, la Dame arrivera a stream sans lag !', 'Robox ? Trop haut lvl pour moi', 'La légende dit que El Pigeon serait un oiseau ? Ou est-ce un avion ?']

    setInterval(() => {
	const index = Math.floor(Math.random() * (activiter.length - 1) + 1);
	client.user.setActivity(activiter[index], 'WATCHING');
    }, 15000);
};
