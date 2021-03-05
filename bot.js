const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
	commandPrefix: '!', 			// Préfixe des commandes (ex: ?help)
	owner: ['XXXXXXXXXXXXXXXX'], 	// ID des propiétaire du bot
	disableMentions: 'everyone' // Désactive l'utilisation du everyone par le bot
});


client.registry
	.registerDefaultTypes()
    .registerGroups(['dice','dice'])
	.registerCommandsIn(path.join(__dirname, 'commands'))
;

client.once('ready', () => {
    console.log('Bot online and waiting for commands !');
});

client.on('error', console.error); // Afficher les erreurs

client.login('XXXXXXXXXXXXXXXXXXXXXX');