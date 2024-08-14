const { Client , GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, Collection, Events, ChannelType, TextInputStyle, StringSelectMenuBuilder, PermissionsBitField, MessageType, Colors } = require('discord.js')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages
    ]
})
//const express = require('express');
//const app = express();
const chalk = require("chalk");

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});


app.post("/uptime_devtools", (req, res) => {
 console.log("uptime is run by Developer tools")
  res.send({
    msg: "done uptime",
    access: "by_devtools",
  })
})

const Discord = require("discord.js")
//const { Token } = require('./config.json')
client.on('ready', () => {
client.user.setPresence({
status: 'online',
 activities: [{
name: "اللهم صل وسلم على سيدنا محمد",
type: Discord.ActivityType.Playing,
}]
})
})  

console.log(require('chalk').inverse.green('Connection established! Sending statistics'))

const fs = require('fs')

client.on('messageCreate', async Message => {
    const Prefix = '$'
    if (Message.content.startsWith( Prefix + 'start')) {
    //  Message.delete()
      if (!Message.member.permissions.has("ManageGuild")) return Message.reply({content: `Check your own permsision !`, ephemeral:true})
    const Embed = new EmbedBuilder()
      .setTitle(`Ticket System`)
    .setDescription(`**> - Before anything, if you are unable to create a ticket, maybe there is a lot of tickets available because that is maximum limit To avoid this problem, you can wait for someone to close their own ticket and try again later.
    
> - 📢 How to create a ticket: If you got any problems in our server or have any questions, feel free to create a ticket by clicking on button labeled "Create an ticket".

> - ⚠️ Important notice : Before opening a ticket, please make sure to take a look and understand all rule, Any violation of these rules will result in actions being taken against you according to server rules. You must strictly adhere to the rules to avoid any problems.

> - 🌐 Translation System: If you don’t understand anything, you can click on "Select available languages" to translate the content.

**`)
    .setColor(`Random`) 
    .setTimestamp()
    .setFooter({ text: 'Lost Souls & GamerClub, Ticket System', iconURL: 'https://cdn.discordapp.com/avatars/1196966276048891954/cdb61c9b884a482dce4f068f3ac27391.png?size=1024' });

    const Row1 = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder().setCustomId('openticket').setStyle(ButtonStyle.Primary).setLabel('Create an ticket'),
        new
          ButtonBuilder().setCustomId('trules').setStyle(ButtonStyle.Success).setLabel('Ticket Rules'),
      )
       const Row2 = new ActionRowBuilder().addComponents(
         new StringSelectMenuBuilder()
         .setCustomId('translation')
         .setPlaceholder('Select available languages')
         .setOptions(
            { label: 'Spanish', value: 'span1sh' },
             { label: 'Arabic ', value: 'arabi0c' },
         )
       )
      
    Message.channel.send({ embeds: [Embed], components: [Row1, Row2]})
}
})

client.slashCommands = new Collection()
module.exports = client;
fs.readdirSync('./handlers').forEach((handler) => {
    require(`./handlers/${handler}`)(client);
   })

client.login(process.env.token)

setTimeout(() => {
  if (!client || !client.user) {
    console.log("Client Not Login, Process Kill")
    process.kill(1);
  } else {
    console.log("Client Login")
  }
}, 3*1000*15);

process.on("uncaughtException" , err => {
return;
})
process.on("unhandledRejection" , err => {
return;
})
process.on("rejectionHandled", error => {
return;
});


