const { Command } = require('discord.js-commando');

module.exports = class HelloCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'rolldice',
			memberName: 'rolldice',
			group: 'dice',
			aliases: ['r', 'roll'],
			description: 'Roll a die. Example: !r 2d6  (will roll 2 dice of range 1 to 6)'
		});
	}

	async run(request) {
			console.log("Member " + request.author.username + " run command " + request.content);
			
			var nbDice = request.argString.split("d")[0];
			var maxValueDice = request.argString.split("d")[1];
			var resultat=0;
			var detailResultat = "";
			var lancer = 0;
			
			for(var index=0; index<nbDice; index++){
				lancer = (Math.floor(Math.random()*maxValueDice+1));
				resultat = resultat+lancer;
				detailResultat += lancer + " + ";
			}

            request.say(detailResultat.substring(0, detailResultat.length - 3) + " = " + resultat);
	}
};