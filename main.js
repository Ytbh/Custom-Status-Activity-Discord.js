const Discord = require('discord.js');

const client = new Discord.Client();
 
client.on('ready', () => {
    console.log('Bot is online')
    client.user.setPresence({
        activity: {
            type: "PLAYING",
            name: "Minecraft"
        }, 
        status: "online"
    })
});

client.login('TOKEN');
