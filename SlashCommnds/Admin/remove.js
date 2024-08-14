const { SlashCommandBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder, EmbedBuilder } = require("discord.js");
const { support } = require('../../config.json')
const db = require('pro.db')

module.exports = {
     data: new SlashCommandBuilder()
     .setName('remove')
     .setDescription('remove someone from ticket')
     .addUserOption(option => option .setName('member').setDescription('select user').setRequired(true)),
     async execute( Interaction ) {
        if (!Interaction.member.roles.cache.has(support)) {
return Interaction.reply({content: "Check your permissions for your own", ephemeral: true});
                    }
       if (interaction.channel.parent.id !== "1184229095404486786" && interaction.channel.parent.id !== "1184227660763770910" && interaction.channel.parent.id !== "1184227903370698922" && interaction.channel.parent.id !== "1184227813306421340") return interaction.reply({content: `Make sure to use command in ticket categories`, ephemeral: true});
                                                                                                                                                                                                                                                                 
      const member = Interaction.options.getUser('member')
     Interaction.channel.permissionOverwrites.edit(member , { SendMessages: false, ViewChannel: false }) 
     const embed = new EmbedBuilder()
       .setDescription(`User removed ${member}`)
       .setColor(`Random`)
     Interaction.reply({embeds: [embed]})  
     }}
