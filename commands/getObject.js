const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('getobject')
        .setDescription('Call to RPC')
        .addStringOption(option =>
            option.setName('object')
                .setDescription('The Object')
                .setRequired(true)),
    async execute(interaction, provider) {
        const object = interaction.options.getString('object')

        const result = await provider.getObject(object)
        if (result === undefined) {
            interaction.reply({ content: "RPC Response:\n```" + JSON.stringify(result, null, 2).substring(0, 1980) + "```" })
            return
        }
        else {
            const objectEmbed = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle(result.details.data.fields.name)
                .setURL('https://puppy.tools')
                .setDescription(result.details.data.fields.description)
                .setThumbnail(result.details.data.fields.url)
                .addFields(
                    { name: 'Owner', value: result.details.owner.AddressOwner }
                )
                .setTimestamp()
                .setFooter({ text: 'powered by Puppy.Tools', iconURL: 'https://puppy.tools/PuppyToolsIcon.png' });

            interaction.reply({ embeds: [objectEmbed] });

        }

    },
};