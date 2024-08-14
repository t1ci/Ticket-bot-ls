const { SlashCommandBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder, EmbedBuilder } = require("discord.js");
//const { SlashCommandBuilder } = require("discord.js");
const { support } = require('../../config.json')

module.exports = {
     data: new SlashCommandBuilder()
     .setName('add')
     .setDescription('Add someone to this ticket !')
     .addUserOption(option => option .setName('member').setDescription('select user').setRequired(true)),
     async execute( interaction ) {
       console.log(interaction)
        if (!interaction.member.roles.cache.has(support)) {
return interaction.reply({content: "Check your permissions for your own", ephemeral: true});
                    }
     const member = interaction.options.getUser('member')
     interaction.channel.permissionOverwrites.edit(member , { SendMessages: true, ViewChannel: true })
     const embed = new EmbedBuilder() 
     .setDescription(`User added ${member}`)
        .setColor(`Random`)

       
       if (interaction.channel.parent.id !== "1184229095404486786" && interaction.channel.parent.id !== "1184227660763770910" && interaction.channel.parent.id !== "1184227903370698922" && interaction.channel.parent.id !== "1184227813306421340") return interaction.reply({content: `Make sure to use command in ticket categories`, ephemeral: true});

       
     interaction.reply({embeds: [embed]})
     }}