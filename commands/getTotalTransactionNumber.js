const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gettotaltransactionnumber")
        .setDescription("Call to RPC"),
    async execute(interaction, provider) {
        try {
            const result = await provider.getTotalTransactionNumber();
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
