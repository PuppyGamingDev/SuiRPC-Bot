const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gettransactionwitheffect")
        .setDescription("Call to RPC")
        .addStringOption((option) =>
            option
                .setName("digest")
                .setDescription("The digest")
                .setRequired(true)
        ),
    async execute(interaction, provider) {
        const digest = interaction.options.getString("digest");
        try {
            const result = await provider.getTransactionWithEffects(digest);
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
