const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("geteventsbyrecipient")
        .setDescription("Call to RPC")
        .addStringOption((option) =>
            option
                .setName("receiver")
                .setDescription("The receiver")
                .setRequired(true)
        ),
    async execute(interaction, provider) {
        const receiver = interaction.options.getString("receiver");
        try {
            const result = await provider.getEventsByRecipient(receiver);
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
