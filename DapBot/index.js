const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '?';

client.once('ready', () => {
    console.log('Dap Bot Is Online');
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)
        return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping')
    {
        message.channel.send('kys!!!!!!!');
    }
    else if(command === 'dap-request')
    {
		if (args[0]) {
			const user = getUserFromMention(args[0]);

            return message.channel.send(`${user.username} was dapped up`);
        }

		
    }
    
    
})
function getUserFromMention(mention) {
	// The id is the first and only match found by the RegEx.
	const matches = mention.match(/^<@!?(\d+)>$/);

	// If supplied variable was not a mention, matches will be null instead of an array.
	if (!matches) return;

	// However, the first element in the matches array will be the entire mention, not just the ID,
	// so use index 1.
	const id = matches[1];

	return client.users.cache.get(id);
}




client.login('ODcxOTQxNjA0Mjg4NjMwNzg1.YQio5g.-k60LXdRdlw9fRlW8IS8-GKQm_c')