const { SlashCommandBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder, EmbedBuilder, StringSelectMenuBuilder } = require("discord.js");
//const { support } = require('../../config.json')
const db = require('pro.db')
const { ceo } = require('../../config.json')
    const Id1 = db.get(`claimedtickets`)
    const Id2 = db.get(`tickets`)
  //  db.add(`tickets`, 1)
 //   db.add(`claimed`, 1)
 //   db.add(`unclaimed`, 1)


module.exports = {
    data: new SlashCommandBuilder()
    .setName('guide-ze')
   .setDescription('get ze-team guides'),

 async execute( interaction ) {
        if (!interaction.member.roles.cache.has(ceo)) {
return interaction.reply({content: "Check your permissions for your own", ephemeral: true});
        }
    if (interaction.channel.parent.id !== "1258857625739595866" && interaction.channel.parent.id !== "1258858175315185787" && interaction.channel.parent.id !== "1258857818535235694" &&           interaction.channel.parent.id !== "1203328204258017360") return interaction.reply({content: `Make sure to use command in ticket categories`, ephemeral: true}); // ADMIN CHATS IDS


    const check19 = db.get(`ticketID_${interaction.channel.id}`)

   const embed11 = new EmbedBuilder()
     .setDescription(`https://lsgamerz.net/topic/22922-ze-guide-for-trial-admins/`)
     .setColor(`Random`);
//.setFooter({ text: 'VisioCrafters', iconURL: 'https://media.discordapp.net/attachments/1125565245990121544/1184283825803632650/1702424261750.png?ex=658b6943&is=6578f443&hm=fc2fe78a12e132633bcaf07d97c1895306389b604f3c16e9ac4ceb8c4d50d687&' });

   interaction.deferReply();
   interaction.deleteReply(); 
   interaction.channel.send({content: `Feel free to read all of them in case if you planning to apply for DR position in the future. `, embeds: [embed11]});
 }
}