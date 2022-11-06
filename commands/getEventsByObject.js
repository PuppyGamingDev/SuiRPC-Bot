const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("geteventsbyobject")
        .setDescription("Call to RPC")
        .addStringOption((option) =>
            option
                .setName("object")
                .setDescription("The object")
                .setRequired(true)
        ),
    async execute(interaction, provider) {
        const object = interaction.options.getString("object");
        try {
            const result = await provider.getEventsByObject(object);
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
