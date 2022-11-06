const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gettransactiondata')
        .setDescription('Call to RPC')
        .addStringOption(option =>
            option.setName('transaction')
                .setDescription('The Transaction')
                .setRequired(true)),
    async execute(interaction, provider) {
        const transaction = interaction.options.getString('transaction')

        const result = await provider.getTransactionData(transaction)
        interaction.reply({content: "RPC Response:\n```" + JSON.stringify(result, null, 2).substring(0, 1980) + "```"})
        return

    },
};