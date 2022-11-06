const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getobjectsownedbyaddress')
        .setDescription('Call to RPC')
        .addStringOption(option =>
            option.setName('address')
                .setDescription('The Address')
                .setRequired(true)),
    async execute(interaction, provider) {
        const address = interaction.options.getString('address')

        const result = await provider.getObjectsOwnedByAddress(address)
        interaction.reply({content: "RPC Response:\n```" + JSON.stringify(result, null, 2).substring(0, 1980) + "```"})
        return

    },
};