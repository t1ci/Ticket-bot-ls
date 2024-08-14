const { SlashCommandBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder, EmbedBuilder } = require("discord.js");
const db = require('pro.db')
//const { support } = require('../../config.json')
const { support } = require('../../config.json')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('delete')
   .setDescription('Deleting tickets !'),

 async execute( interaction ) {
        if (!interaction.member.roles.cache.has(support)) {
return interaction.reply({content: "Check your permissions for your own", ephemeral: true});
        }
    //const Roow = new ActionRowBuilder()
    //.addComponents(
     //  new ButtonBuilder().setCustomId('confirm').setLabel('تأكِيد هَذا الإجَراء').setEmoji("1111074775620657192").setStyle(ButtonStyle.Secondary),
 //     new ButtonBuilder().setCustomId('Cancel').setLabel('إلغَاء هَذا الإجَراء').setEmoji("1111074800841007155").setStyle(ButtonStyle.Secondary),
   // )
  //  const Embed = new EmbedBuilder()
 //.setColor("#767A91")
    
//.setDescription(`> مَهلاً أنتَ على وشَك غَلق هذه التَذكرةَ هل أنت مُتأكد ؟`)
   
   if (interaction.channel.parent.id !== "1258857818535235694" && interaction.channel.parent.id !== "1258857818535235694" && interaction.channel.parent.id !== "1258858175315185787" && interaction.channel.parent.id !== "1258857818535235694") return interaction.reply({content: `Make sure to use command in ticket categories`, ephemeral: true});
   
 // await interaction.channel.setName(`closed-ticket`)
 // await interaction.reply({ embeds: [Embed], components: [Roow]})

 interaction.channel.delete()  
 }
}