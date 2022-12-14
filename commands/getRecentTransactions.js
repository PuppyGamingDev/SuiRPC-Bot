const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("getrecenttransactions")
        .setDescription("Call to RPC")
        .addIntegerOption((option) =>
            option
                .setName("amount")
                .setDescription(
                    "The amount to get (message capped at 2000 characters)"
                )
                .setRequired(true)
        ),
    async execute(interaction, provider) {
        const amount = interaction.options.getInteger("amount");

        try {
            const result = await provider.getRecentTransactions(amount);
            interaction.reply({
                content:
                    "RPC Response:\n```" +
                    JSON.stringify(result, null, 2).substring(0, 1980) +
                    "```",
            });
            return;
        } catch (err) {
            interaction.reply({ content: "RPC Error:\n```" + err + "```" });
        }
    },
};
