const { SlashCommandBuilder } = require('discord.js');
const { createRejection } = require('./createRejection');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reject')
        .setDescription('Reject me'),
    async execute(interaction) {
        await interaction.reply(createRejection());
    }
}
