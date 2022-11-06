const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("requestsuifromfaucet")
        .setDescription("Call to RPC")
        .addStringOption((option) =>
            option
                .setName("address")
                .setDescription("The Address")
                .setRequired(true)
        ),
    async execute(interaction, provider) {
        const address = interaction.options.getString("address");

        try {
            const result = await provider.requestSuiFromFaucet(address);
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
