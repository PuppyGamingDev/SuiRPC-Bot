const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("geteventsbysender")
        .setDescription("Call to RPC")
        .addStringOption((option) =>
            option
                .setName("sender")
                .setDescription("The sender")
                .setRequired(true)
        ),
    async execute(interaction, provider) {
        const sender = interaction.options.getString("sender");
        try {
            const result = await provider.getEventsBySender(sender);
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
