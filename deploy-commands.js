require('dotenv').config();

const { REST, Routes} = require('discord.js');
const command = require('./commands/rejection');

const commands = [];

commands.push(command.data.toJSON());

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

async function registerCommand() {
    const data = await rest.put(
        Routes.applicationCommands(process.env.APP_ID),
        { body: commands }
    )

    console.log(`Registered ${data.length} command successfully!`);
}

registerCommand();
