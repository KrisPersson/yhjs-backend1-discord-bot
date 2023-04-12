require('dotenv').config();

const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const command = require('./commands/rejection');
client.commands = new Collection();
client.commands.set(command.data.name, command);



client.on('interactionCreate', async (interaction) => {
    const command = client.commands.get(interaction.commandName);
    
    if(!command) return; // Ifall vi inte hittar något kommando så gör inget

    try {
        await command.execute(interaction);
    } catch (error) {
        console.log(error);
    }
});

client.login(process.env.DISCORD_TOKEN);
