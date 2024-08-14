const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { execute } = require("./close");
const { support } = require('../../config.json')
const db = require('pro.db')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rename')
      .setDescription('change ticket name')
    .addStringOption(option => option .setName('name').setDescription('select new name for this ticket')
      .setRequired(true)),

    async execute( interaction ) {
        if (!interaction.member.roles.cache.has(support)) {
return interaction.reply({content: "Check your permissions for your own", ephemeral: true});
                    }
        const name = interaction.options.getString('name')

        interaction.channel.setName(`${name}`)
        const embed = new EmbedBuilder()
          .setColor(`Random`)
           .setDescription(`Ticket renamed to ${name} by ${interaction.user}`) 

      if (interaction.channel.parent.id !== "1258857625739595866" && interaction.channel.parent.id !== "1258858175315185787" && interaction.channel.parent.id !== "1258857818535235694" &&           interaction.channel.parent.id !== "1203328204258017360") return interaction.reply({content: `Make sure to use command in ticket categories`, ephemeral: true});
            
                                                                                                                                                                                                                                                               
       interaction.reply({embeds: [embed]})
    }
}