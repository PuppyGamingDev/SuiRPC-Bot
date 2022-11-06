const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("getobjectsownedbyobject")
        .setDescription("Call to RPC")
        .addStringOption((option) =>
            option
                .setName("object")
                .setDescription("The Object")
                .setRequired(true)
        ),
    async execute(interaction, provider) {
        const object = interaction.options.getString("object");
        try {
            const result = await provider.getObjectsOwnedByObject(object);
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
