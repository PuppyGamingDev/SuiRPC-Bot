const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('commandname')
        .setDescription('Call to RPC')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to receive market updates')
                .setRequired(true)
                .addChannelTypes(ChannelType.GuildText)),
    async execute(interaction, provider) {
        
    },
};