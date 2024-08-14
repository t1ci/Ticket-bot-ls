           const { Events, TextInputBuilder, ChannelType, TextInputStyle, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, ModalBuilder, PermissionsBitField, MessageType, Colors } = require('discord.js');
            const client = require("..")
const { createTranscript }  = require('discord-html-transcripts');
            // const ms = require("ms");
            // const db = require('pro.db')
            const db = require('pro.db')
            const Id99 = db.get(`claimedtickets`)
            const { support, ceo, blacklist } = require('../config.json')
            const config = require('../config.json');
            let LogChannel = config.logChannel;
            client.on(Events.InteractionCreate, async (interaction) => {
            client.emit('YesBuilder', (client, interaction))
            client.emit('ClickBuilder', (client, interaction))
            client.emit('CompleteBuilder', (client, interaction))
            client.emit('closeTicket', (client, interaction))
             //  emitter.setMaxListeners(155)
              if (!interaction.isChatInputCommand()) return;

                const command = interaction.client.slashCommands.get(interaction.commandName);

                if (!command) {
                    console.error(`No command matching ${interaction.commandName} was found.`);
                    return;
                }

                try {
                 if (command.cooldown) {
                    let cooldown = command.cooldown;

                    let lastExec = await db.fetch(`${command.name}_${interaction.user.id}`);

                    if (lastExec !== null && cooldown - (Date.now() - lastExec) > 0) {
                      let timeObj = ms(cooldown - (Date.now() - lastExec));

                     return interaction.reply({content:`**You Can Use This Command After ${timeObj}**`, ephemeral: true}) 
                    } else {
                      db.set(`${command.name}_${interaction.user.id}`, Date.now())
                    } 
                    } 
                    await command.execute(interaction, client);
                } catch (error) {
                    console.error(`Error executing ${interaction.commandName}`);
                    console.error(error);
                }
            })

client.on('interactionCreate', async interaction => {
   if(!interaction.isStringSelectMenu()) return;
     if(interaction.customId === 'translation') {
       if(interaction.values[0] === 'arabi0c') {
         const Embed = new EmbedBuilder()
                         .setTitle(`نظام التكت`)
                         .setDescription(`**> - قبل أي شيء، إذا كنت غير قادر على إنشاء تذكرة، ربما يكون هناك الكثير من التذاكر المتاحة لأن هذا هو الحد الأقصى. لتجنب هذه المشكلة، يمكنك الانتظار حتى يغلق شخص ما تذكرته الخاصة وحاول مرة أخرى لاحقاً.

> - 📢 كيفية إنشاء تذكرة: إذا واجهت أي مشاكل في خادمنا أو لديك أي أسئلة، لا تتردد في إنشاء تذكرة بالنقر على الزر المسمى "إنشاء تذكرة".

> - ⚠️ ملاحظة هامة: قبل فتح تذكرة، يرجى التأكد من الاطلاع وفهم جميع القواعد. أي انتهاك لهذه القواعد سيؤدي إلى اتخاذ إجراءات ضدك وفقاً لقواعد السيرفر. يجب عليك الالتزام الصارم بالقواعد لتجنب أي مشاكل.

> - 🌐 نظام الترجمة: إذا لم تفهم أي شيء، يمكنك النقر على "اختيار اللغات المتاحة" لترجمة المحتوى.
**
`)
           .setColor(`#00ff00`)
interaction.reply({embeds: [Embed], ephemeral: true});
       }
     }
});

client.on('interactionCreate', async interaction => {
   if(!interaction.isStringSelectMenu()) return;
     if(interaction.customId === 'translation') {
       if(interaction.values[0] === 'span1sh') {
         const Embed = new EmbedBuilder()
                         .setTitle(`Sistema de Tickets`)
                         .setDescription(`**> - Antes que nada, si no puedes crear un ticket, puede ser porque hay muchos tickets disponibles debido al límite máximo. Para evitar este problema, puedes esperar a que alguien cierre su propio ticket e intentar nuevamente más tarde.

> - 📢 Cómo crear un ticket: Si tienes algún problema en nuestro servidor o tienes alguna pregunta, no dudes en crear un ticket haciendo clic en el botón etiquetado como "Crear un ticket".

> - ⚠️ Aviso importante: Antes de abrir un ticket, asegúrate de leer y entender todas las reglas. Cualquier violación de estas reglas resultará en acciones contra ti de acuerdo con las normas del servidor. Debes cumplir estrictamente con las reglas para evitar problemas.

> - 🌐 Sistema de Traducción: Si no entiendes algo, puedes hacer clic en "Seleccionar idiomas disponibles" para traducir el contenido.

**
`)
           .setColor(`#FFA500`)
interaction.reply({embeds: [Embed], ephemeral: true});
       }
     }
});
         
            client.on('interactionCreate', async Interaction => {
              if (!Interaction.isButton()) return;
              if (Interaction.customId === 'trules') {
                const Embed = new EmbedBuilder()
                .setTitle(`Ticket Rules`)
                .setDescription(`**1. 🗣️ Respect for everyone:**
- Everyone must use respectful language. Don’t insult or disrespect anyone, Any inappropriate behavior will face consequences.

**2. 🚫 No stealing:**
- Modifying Aps/Xp/Pfg images or attempting to deceive Server Managers or Staff is strictly prohibited.

**3. ⏳ Patience:**
- Avoid bothering the staff team, server managers, or anyone who can see your ticket, Be patient and avoid actions that may cause annoyance to others.

**4. 🚫 Don't open a ticket for jokes:** 
- Tickets should only be opened for serious matters, Don’t open a ticket for joking.

**5. ⚠️ No idleness:**
- Everyone must be active when creating a ticket and avoid negligence.

**6. 🔧 Use buttons to specify your issue:**
- If you encounter a problem and didn’t find a suitable option in the button menu, click on **"Something Else"** button, then clearly explain your problem and wait.

-# • **Breaking the rules may lead to BlackList**`)
  .setColor(`Random`)
                const Row2 = new ActionRowBuilder().addComponents(
                   new StringSelectMenuBuilder()
                   .setCustomId('TrulesTranslation')
                   .setPlaceholder('Select available languages')
                   .setOptions(
                   //   { label: 'Language English 🇺🇸', value: 'usa' },
                 //         { label: 'Language Italian 🇮🇹', value: 'italy3' },
                 //       { label: 'Language Arabic 🇸🇦', value: 'arabic3' },
                      { label: 'Spanish', value: 'spanish' },
                       { label: 'Arabic ', value: 'arabic' },
                   )
                 )

                
                Interaction.reply({embeds: [Embed], components:[Row2], ephemeral: true});
              }
            });


client.on('interactionCreate', async interaction => {
   if(!interaction.isStringSelectMenu()) return;
     if(interaction.customId === 'TrulesTranslation') {
       if(interaction.values[0] === 'arabic') {
             const Embed = new EmbedBuilder()
                         .setTitle(`قوانين التكت`)
                         .setDescription(`**1. 🗣️ الاحترام للجميع:**
- يجب على الجميع استخدام لغة محترمة. ممنوع سب أو تسيء إلى أي شخص في تكت. أي تصرف غير مناسب سيواجه عواقب.

**2. 🚫 عدم تزوير:**
- تعديل صور Aps/Xp/Pfg أو محاولة خداع Server Managers أو Staff Team محظور تماماً.

**3. ⏳ الصبر:**
- تجنب إزعاج فريق الدعم، مديري السيرفر، أو أي شخص يمكنه رؤية تذكرتك. كن صبوراً وتجنب الأفعال التي قد تسبب الإزعاج للآخرين.

**4. 🚫 لا تفتح تذكرة من أجل المزاح:** 
- يجب فتح التذاكر للأمور الجادة فقط، لا تفتح تذكرة للمزاح.

**5. ⚠️ عدم الخمول:**
- يجب على الجميع أن يكونوا نشطين عند إنشاء تذكرة وتجنب الإهمال.

**6. 🔧 استخدم الأزرار لتحديد مشكلتك:**
- إذا واجهت مشكلة ولم تجد خياراً مناسباً في قائمة الأزرار، اضغط على زر **"شيء آخر"**، ثم اشرح مشكلتك بوضوح وانتظر.

-# • ** مخالفة القوانين قد يؤدي إلى إدراجك في القائمة السوداء.**`)
           .setColor(`#00ff00`)
         interaction.update({embeds: [Embed], ephemeral: true})
       }
     }
     });

client.on('interactionCreate', async interaction => {
   if(!interaction.isStringSelectMenu()) return;
     if(interaction.customId === 'TrulesTranslation') {
       if(interaction.values[0] === 'spanish') {
             const Embed = new EmbedBuilder()
                         .setTitle(`Reglas del Ticket`)
                         .setDescription(`**1. 🗣️ Respeto para todos:**
- Todos deben usar un lenguaje respetuoso. No insultes ni faltes al respeto a nadie. Cualquier comportamiento inapropiado tendrá consecuencias.

**2. 🚫 No robar:**
- Modificar imágenes de Aps/Xp/Pfg o intentar engañar a los Administradores o al Personal del Servidor está estrictamente prohibido.

**3. ⏳ Paciencia:**
- Evita molestar al equipo de soporte, administradores del servidor o a cualquier persona que pueda ver tu ticket. Ten paciencia y evita acciones que puedan causar molestia a otros.

**4. 🚫 No abras un ticket para bromas:** 
- Los tickets solo deben abrirse para asuntos serios. No abras un ticket para bromear.

**5. ⚠️ No inactividad:**
- Todos deben estar activos al crear un ticket y evitar la negligencia.

**6. 🔧 Usa los botones para especificar tu problema:**
- Si encuentras un problema y no encuentras una opción adecuada en el menú de botones, haz clic en el botón **"Algo Más"**, luego explica claramente tu problema y espera.

-# **• Romper las reglas puede llevar a estar en la lista negra.**`)
           .setColor(`#FFA500`)
         interaction.update({embeds: [Embed], ephemeral: true})
       }
     }
     });

            client.on('interactionCreate', async Interaction => {
              if (!Interaction.isButton()) return;
              if (Interaction.customId === 'openticket') {

                if (Interaction.member.roles.cache.has('1269670574901301269')) { // IdRole BlackList

                  
                  const embed = new EmbedBuilder()
                  .setDescription(`We have a lot of tickets now please try again`)
                  .setColor(`#Ff0000`)
                 await Interaction.reply({embeds:[embed], ephemeral: true});
                }



                  let channelCount = 0;
                     Interaction.guild.channels.cache.forEach(async channel => {
                      if (channel.parentId === '1258857818535235694' || channel.parentId === '1267213269542895787') {
                            channelCount++;
                        }
                    });


                    if (channelCount > 5) {  // Change Number of tickets
                      const embed = new EmbedBuilder()
                      .setDescription(`We have a lot of tickets now please try again`)
                      .setColor(`#Ff0000`)
                        Interaction.reply({embeds: [embed], ephemeral: true});
                    } else {
                      // if()



                const c = db.get(`Channel_${Interaction.user.id}`)
                if (Interaction.guild.channels.cache.get(c)) {
                  const embed = new EmbedBuilder()
                  .setDescription(`You already have a ticket <#${c}>`)
                  .setColor(`#Ff0000`)
                  return Interaction.reply({embeds: [embed], ephemeral: true})
                } 


                      let row = new ActionRowBuilder().addComponents(
                        new ButtonBuilder()
                        .setCustomId('not')
                        .setLabel('Create an ticket')
                       .setStyle(ButtonStyle.Primary),
                        )
                      const error = new EmbedBuilder()
                      .setDescription(`If you are sure that you are facing a problem, go ahead create a ticket now`)
              .setColor(`#FFA500`)

                Interaction.reply({embeds:[error], components: [row], ephemeral: true })

        


              }} else if (Interaction.customId === 'close') {
                if (!Interaction.member.roles.cache.has(support)) return Interaction.reply({content:`Check your permissions for your own`,ephemeral:true})


                const Roow = new ActionRowBuilder()
                .addComponents(
                  new ButtonBuilder().setCustomId('confirm').setLabel('Confirm').setEmoji("🔒").setStyle(ButtonStyle.Secondary),

                  new
                  ButtonBuilder().setCustomId('Cancel').setLabel('Cancel').setEmoji("🔓").setStyle(ButtonStyle.Secondary),
                )

                const Embed = new EmbedBuilder()
            .setDescription(`Are you sure do you want to close ticket ?`)
                  .setColor(`Random`)

                  Interaction.reply({ embeds: [Embed], components: [Roow]})
              } else if (Interaction.customId === 'confirm') {
                   const categoryID = '1258857818535235694'; // CLOSED TICKETS CATEGORY ID
                const channelID = Interaction.channelId;
                const guild = Interaction.guild;

                // احصل على القناة المطلوب نقلها
                const channel = guild.channels.cache.get(channelID);

                // نقل القناة إلى الفئة الجديدة
                await channel.setParent(categoryID);



                if (!Interaction.member.roles.cache.has(support)) return Interaction.reply({content:`Check your permissions for your own`,ephemeral:true})

                    const check = db.get(`ticketID_${Interaction.channel.id}`)
                      const channel2 = db.get(`Channel_${check}`)



                client.users
                  .fetch(check)
                  .then(async (user) => {

             await Interaction.channel.permissionOverwrites.set(
               [
                  {
                    id: Interaction.guild.id,
                    deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                  },
                 {
                   id: user.id,
                   deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                 },
                  {
                    id: support,
                    deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                  }
               ]
             );

                    const embe999d = new EmbedBuilder()
                //      .setTitle('Successfully hidden the ticket')
                      .setDescription(`Select what you want by clicking the buttons below`)
                       .setColor(`Random`)

                    const row = new ActionRowBuilder()
                      .addComponents(
                        new ButtonBuilder().setCustomId('chdelete').setEmoji("🗑️").setStyle(ButtonStyle.Danger)
                        )
                              .addComponents(

                        new
                                ButtonBuilder().setCustomId('show').setStyle(ButtonStyle.Primary).setEmoji('🔓'),
                  
                     new
                    ButtonBuilder().setCustomId('transcript').setEmoji('🗒').setStyle(ButtonStyle.Success),
                      )  
                    Interaction.update({ embeds: [embe999d], components: [row] });        

                  })
                  .catch((error) => {
                   console.error(error);
                  });


             //   const embed = new EmbedBuilder()
              //    .setDescription(` بعض أمُر الإضافية التي تخُص فريق الدعَم الفَني`) 
              //      .setColor(`#FE2C40`)
              //  const row = new ActionRowBuilder()
                //    .addComponents(
                //      new ButtonBuilder().setLabel('Show').setCustomId('show').setStyle(ButtonStyle.Success),
                //      new ButtonBuilder().setCustomId('button').setLabel('Delete').setEmoji("🗑️").setStyle(ButtonStyle.Secondary),    
               //   ) )    
                    // Interaction.deferUpdate()
                    // Interaction.deleteReply() 
                //    Interaction.reply({ content: `Successfully hidden the ticket`, ephemeral: true })

               // Interaction.channel.send({ embeds: [embed], components: [row] });        
               
              } else if (Interaction.customId === 'Cancel') {
                Interaction.deferUpdate()
                Interaction.deleteReply() 
              } else if (Interaction.customId === 'claim') {
                if (!Interaction.member.roles.cache.has(support)) return Interaction.reply({content:`Check your permissions for your own`,ephemeral:true})


               const categoryID = '1258858175315185787'; // ID CLAIMED TICKETS CATEGORY
                const channelID = Interaction.channelId;
                const guild = Interaction.guild;

                // احصل على القناة المطلوب نقلها
                const channel = guild.channels.cache.get(channelID);
                        const check = db.get(`ticketID_${Interaction.channel.id}`)

                // نقل القناة إلى الفئة الجديدة
                await channel.setParent(categoryID);

                      const user =  await client.users.fetch(check);
                  client.users
                 .fetch(check)
                 .then(async (user) => {
                    await Interaction.channel.permissionOverwrites.set(
                    [
                      {
                        id: Interaction.guild.id,
                        deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                      },
                     {
                       id: user.id,
                       allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                     },
                      {
                        id: support,
                        allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                      }
                    ]
                    );
                 });



               //  });
                db.add(`claimedtickets`, 1)

                      //  });

                // if (!Interaction.member.roles.cache.has(support)) return Interaction.reply({content:`Check your permissions for your own`,ephemeral:true})

                
               const Row = new ActionRowBuilder()
               .addComponents(
                 new ButtonBuilder().setCustomId('close').setStyle(ButtonStyle.Danger).setEmoji("🔒"),

                    new ButtonBuilder().setCustomId('f').setStyle(ButtonStyle.Success).setEmoji('📍'),
                 new ButtonBuilder().setCustomId('noclaim').setStyle(ButtonStyle.Primary).setLabel('UnClaim')
                )
              await Interaction.deferUpdate()
              await Interaction.editReply({ components: [Row]})
                await Interaction.channel.setName(`${Interaction.user.username}`)
             Interaction.channel.send({ embeds: [new EmbedBuilder()
                  .setColor(`Random`)
             .setDescription(`Ticket claimed by ${Interaction.user}`)]})
              } else if (Interaction.customId === 'claimm') {
                   if (!Interaction.member.roles.cache.has(support)) return Interaction.reply({content:`Check your permissions for your own`,ephemeral:true})

            await Interaction.deferUpdate()
             await Interaction.deleteReply()
             }
            })

            //  } else
client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'chdelete') {
    await interaction.channel.delete();
  }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'transcript') {
        try {
            const channel = interaction.channel; // Get the channel from the interaction

            if (!channel) {
                console.error("Channel is undefined");
                return;
            }

            // Create the transcript file
            const file = await createTranscript(channel, {
                limit: -4,
                returnBuffer: false,
                filename: `${channel.name.toLowerCase()}-transcript.html`
            });

            // Send the transcript file to the cache channel
            let cache = client.channels.cache.get('1267213288442171516');
            let msg = await cache.send({ files: [file] });
            const Id = db.get(`tickets`)
           
            // Construct the custom URL
            const transcriptUrl = `https://mahto.id/chat-exporter?url=${msg.attachments.first()?.url}`;
            const download = `${msg.attachments.first()?.url}`

            // Create a button to link to the transcript

            // Reply to the interaction with the transcript link button
            await interaction.reply({
                embeds: [{
                    description: `The transcript has been completed.`,
                    color: Colors.Blurple
                }],
                // Add the button to the response
            });

            // Log the transcript in the log channel
            const logChannel = await client.channels.fetch(config.logChannel);

            if (logChannel) {
                const transcriptFile = await createTranscript(channel); // Ensure the transcript file is correctly created
              const row = new ActionRowBuilder()
              .addComponents(
                  new ButtonBuilder()
                      .setLabel('Direct Transcript')
                      .setStyle(ButtonStyle.Link)
                      .setURL(transcriptUrl),
                new ButtonBuilder()
                .setLabel('Download Transcript')
                .setStyle(ButtonStyle.Link)
                .setURL(download) // Use the constructed URL
              );
              const check = db.get(`ticketID_${interaction.channel.id}`)
              const user = await client.users.fetch(check);
              const check2 = db.get(`Channel_${check}`)

                await logChannel.send({
                    embeds: [{
                        description: `> - Ticket Creator :  **${user}**
> - Ticket Name : **${channel.name}**
> - Ticket Channel-Id **${check}**
> - Transcript of : **${channel}**
-# All information related to this ticket is available in this transcript.`,
                        footer: {
                            text: `This transcript has been successfully sent by ${user.tag}`,
                          iconURL: user.displayAvatarURL() // Include the user's avatar in the footer

                        },
                        color: Colors.Blurple
                    }],
                    // files: [transcriptFile],
                    components: [row] 
                });
            } else {
                console.error("Log channel not found");
            }
        } catch (error) {
            console.error("An error occurred while sending the transcript:", error);
        }
    }

    // Other interaction handling logic...
});




            client.on('interactionCreate', async Interaction => {
              if (!Interaction.isButton()) return;
             if (Interaction.customId === 'noclaim') {
               const Id1 = db.get(`tickets`)
               if (!Interaction.member.roles.cache.has(support)) return Interaction.reply({content:`Check your permissions for your own`,ephemeral:true});

               //  Interaction.channel.send({ embeds: [Embed]
                                                   //  });
            //if (Interaction.customId === 'Unnclaim') {

            const sisi = new EmbedBuilder()
            .setDescription(`Ticket unclaimed by ${Interaction.user}`)
                  .setColor(`Random`)


             //   db.add(`claimedtickets`, 1)
              //  )
              //await
               // Interaction.deferReply()
                await Interaction.deferUpdate()

                 // Interaction.deleteReply() // await
               // Interaction.editReply({ components: [RowX]});  


                let row = new ActionRowBuilder().addComponents(
                   new ButtonBuilder().setCustomId('close').setStyle(ButtonStyle.Danger).setEmoji("🔒"),

                   new ButtonBuilder().setCustomId('f').setStyle(ButtonStyle.Success).setEmoji('📍'),
                  new ButtonBuilder().setCustomId('claim').setEmoji('📌').setStyle(ButtonStyle.Primary)
                )

                Interaction.editReply({ components: [row] })

               Interaction.channel.send({embeds: [sisi]})
            Interaction.channel.setName(`unclaimed ticket`)
              }
            });
               //  Interaction.channel.send({ embeds: [Embed]
                                                   //  });









            client.on('interactionCreate', async interaction => {
              if(!interaction.isButton()) return;
             if(interaction.customId === 'show') {



                  const check = db.get(`ticketID_${interaction.channel.id}`)
                  const channel2 = db.get(`Channel_${check}`)
               db.add(`reopend`, 1)
              const Id0 = db.get(`reopend`)



               if (!interaction.member.roles.cache.has(support)) return Interaction.reply({content:`Check your permissions for your own`,ephemeral:true})

               interaction.channel.setName(`reopend-${Id0}`)

               client.users
                 .fetch(check)
                 .then(async (user) => {
            await interaction.message.delete()
               await interaction.channel.permissionOverwrites.set(
               [
                 {
                   id: interaction.guild.id,
                   deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                 },
                {
                  id: user.id,
                  allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                },
                 {
                   id: support,
                   allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages],
                 }
               ]
               );

            const show = new EmbedBuilder()
                   .setDescription(`Ticket reopend by ${interaction.user}`)
                //   interaction.reply({ content: `Successfully shown the ticket`, ephemeral: true })
                  .setColor(`Random`)
               const R999ew = new ActionRowBuilder()
               .addComponents(
                      new ButtonBuilder().setCustomId('confirm').setLabel('Re-closing').setEmoji("🔒").setStyle(ButtonStyle.Secondary),
                 )

                 interaction.deferUpdate()
                interaction.channel.send({embeds: [show], components: [R999ew]});
                 })
                 .catch((error) => {
                   console.error(error);
                 });


              }
            })


                  client.on('interactionCreate', async interaction => {
                    if(!interaction.isButton()) return;
                   if(interaction.customId === 'not') {
                db.add(`tickets`, 1)
                const Id = db.get(`tickets`)
                 interaction.guild.channels.create({
                  name: `ticket-${Id}`,
                  type: ChannelType.GuildText,
                  permissionOverwrites: [
            { 
            id: interaction.guild.roles.everyone.id, 
            deny: ['ViewChannel']  
            },
            { 
            id: interaction.user.id, 
            allow: ['ViewChannel', 'SendMessages'] 
            },
            {
              id : `1266063239574454464`,
              allow: ['ViewChannel', 'SendMessages'] 
            }
                  ],
                  parent: '1258857818535235694'
              }).then(async Channel => {
                  db.set(`Channel_${interaction.user.id}`, Channel.id)
                  db.set(`ticketID_${Channel.id}`, interaction.user.id)
                   const embed = new EmbedBuilder()
                   .setDescription(`A new ticket has been created for you here. ${Channel}`)
              .setColor(`#00ff00`)
              interaction.update({embeds: [embed] ,components: [], ephemeral: true})
                const Embed1 = new EmbedBuilder()
                .setDescription(`- Thank you for creating a ticket. Now you should be patient and wait for someone to claim your ticket.`) // Change Text
                   .setColor(`Random`)
                   const Embed2 = new EmbedBuilder()
                   .setDescription(`- If you are facing a problem, Please specify what your problem is by clicking on buttons below this message.`) // Change Text
                      .setColor(`Random`)
                   const Embed3 = new EmbedBuilder()
                   .setDescription(`- If you need a translation for languages, click on select menu and choose available languages.`) // Change Text
                      .setColor(`Random`)
                   
                const Row = new ActionRowBuilder()
                .addComponents(
                  new ButtonBuilder().setCustomId('close').setStyle(ButtonStyle.Danger).setEmoji("🔒"),

                   new ButtonBuilder().setCustomId('f').setStyle(ButtonStyle.Success).setEmoji('📍'),
                  new ButtonBuilder().setCustomId('claim').setEmoji('📌').setStyle(ButtonStyle.Primary)
         )
                     const Row1 = new ActionRowBuilder().addComponents(
                        new StringSelectMenuBuilder()
                        .setCustomId('issues')
                        .setPlaceholder('Select available problems')
                        .setOptions(
                        //   { label: 'Language English 🇺🇸', value: 'usa' },
                      //         { label: 'Language Italian 🇮🇹', value: 'italy3' },
                      //       { label: 'Language Arabic 🇸🇦', value: 'arabic3' },
                           { label: 'I Lost my data', value: 'lostdata' },
                            { label: 'I have Payment Issue', value: 'paymentissue' },
                           { label: 'I want to Transfer Data', value: 'transferdata' },
                          { label: 'Im looking for Something Else', value: 'somethingelse' },
                        )
                      )
                   
                   const Row2 = new ActionRowBuilder().addComponents(
                     new StringSelectMenuBuilder()
                     .setCustomId('language')
                     .setPlaceholder('Select available languages')
                     .setOptions(
                     //   { label: 'Language English 🇺🇸', value: 'usa' },
                   //         { label: 'Language Italian 🇮🇹', value: 'italy3' },
                   //       { label: 'Language Arabic 🇸🇦', value: 'arabic3' },
                        { label: 'First Message', value: 'FirstMsg' },
                         { label: 'Second Message ', value: 'SecondMsg' },
                     )
                   )

          

                Channel.send({ content: `- <@&1266201631087661128>`, components: [Row], embeds: [Embed1]}).then(message =>{
                   message.pin(`${message.id}`).then(() => {
                       message.channel.messages.fetch().then(messages => messages.find(m => m.type == MessageType.ChannelPinnedMessage).delete());
                   });
            })
                    Channel.send({embeds: [Embed2], components: [Row1]})
                    Channel.send({embeds : [Embed3], components: [Row2]})
            const me = Channel.createMessageCollector({time: 15000000, filter: m => m.author.id == interaction.user.id});

            me.on('end', co => {
              if(co.size == 0){
                // setTimeout(() => {
                  Channel.delete()
                db.delete(`ticketID_${interaction.channel.id}`)
                db.delete(`Channel_${interaction.user.id}`)

                // }, 20000)
              };
            });

            })
              }
            })



client.on('interactionCreate', async interaction => {
   if(!interaction.isStringSelectMenu()) return;
     if(interaction.customId === 'issues') {
       if(interaction.values[0] === 'lostdata') {
         const embed = new EmbedBuilder()
         .setDescription(`Are you sure this is your problem?`)
         .setColor(`FFA500`)
         const row = new ActionRowBuilder()
         .addComponents(
           new ButtonBuilder().setCustomId('yes1').setLabel('Yes').setStyle(ButtonStyle.Success),
           new ButtonBuilder().setCustomId('no1').setLabel('No').setStyle(ButtonStyle.Danger)
         )

       await interaction.reply({embeds: [embed], components: [row]})
       }
     }
});

client.on('interactionCreate', async interaction => {
   if(!interaction.isStringSelectMenu()) return;
     if(interaction.customId === 'issues') {
       if(interaction.values[0] === 'paymentissue') {
         const embed = new EmbedBuilder()
         .setDescription(`Are you sure this is your problem?`)
         .setColor(`FFA500`)
         const row = new ActionRowBuilder()
         .addComponents(
           new ButtonBuilder().setCustomId('yes2').setLabel('Yes').setStyle(ButtonStyle.Success),
           new ButtonBuilder().setCustomId('no2').setLabel('No').setStyle(ButtonStyle.Danger)
         )

       await interaction.reply({embeds: [embed], components: [row]})
       }
     }
});

client.on('interactionCreate', async interaction => {
   if(!interaction.isStringSelectMenu()) return;
     if(interaction.customId === 'issues') {
       if(interaction.values[0] === 'transferdata') {
         const embed = new EmbedBuilder()
         .setDescription(`Are you sure this is your problem?`)
         .setColor(`FFA500`)
         const row = new ActionRowBuilder()
         .addComponents(
           new ButtonBuilder().setCustomId('yes3').setLabel('Yes').setStyle(ButtonStyle.Success),
           new ButtonBuilder().setCustomId('no3').setLabel('No').setStyle(ButtonStyle.Danger)
         )

        await interaction.reply({embeds: [embed], components: [row]})
       }
     }
});

client.on('interactionCreate', async interaction => {
   if(!interaction.isStringSelectMenu()) return;
     if(interaction.customId === 'issues') {
       if(interaction.values[0] === 'somethingelse') {
         const embed = new EmbedBuilder()
         .setDescription(`Are you sure this is your problem?`)
         .setColor(`FFA500`)
         const row = new ActionRowBuilder()
         .addComponents(
           new ButtonBuilder().setCustomId('yes4').setLabel('Yes').setStyle(ButtonStyle.Success),
           new ButtonBuilder().setCustomId('no4').setLabel('No').setStyle(ButtonStyle.Danger)
         )

       await interaction.reply({embeds: [embed], components: [row]})
       }
     }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'no1') {
        try {
            await interaction.message.delete();
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    }
});
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'no2') {
        try {
            await interaction.message.delete();
        } catch (error) {
            console.error('Error deleting message:', error);
            await interaction.reply({ content: 'Failed to delete message.', ephemeral: true });
        }
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'no3') {
        try {
            await interaction.message.delete();
        } catch (error) {
            console.error('Error deleting message:', error);
            await interaction.reply({ content: 'Failed to delete message.', ephemeral: true });
        }
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'no4') {
        try {
            await interaction.message.delete();
        } catch (error) {
            console.error('Error deleting message:', error);
            await interaction.reply({ content: 'Failed to delete message.', ephemeral: true });
        }
    }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'yes1') {
    try {
      await interaction.message.delete();
      const channel = interaction.channel;

      // Fetch messages from the channel
      const messages = await channel.messages.fetch({ limit: 100 });

      // Find the message to delete based on its embed content
      const messageToDelete = messages.find(msg => 
        msg.embeds.some(embed =>
          embed.description && embed.description.includes('- If you are facing a problem, Please specify what your problem is by clicking on buttons below this message.')
        )
      );

      if (messageToDelete) {
        // Delete the message
        await messageToDelete.delete();

        // Create the embed to update the interaction
        const updateEmbed = new EmbedBuilder()
          .setDescription('Message Updated! The person who created this ticket has been selected **Lost Data**')
          .setColor('Random'); // Use a valid color or a constant if necessary

        // Create the select menu
        const Row1 = new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId('issues')
            .setPlaceholder('Lost data has been selected')
            .setDisabled(true)
            .addOptions([
              { label: 'I Lost my data', value: 'lostdata' },
            ])
        );
        await interaction.deferUpdate();
        await interaction.channel.setName(`lost-data`)
        // Update the original message with the embed and select menu
        await interaction.channel.send({content: `The channel name has been updated `, embeds: [updateEmbed], components: [Row1] });
      } else {
        // Optionally handle the case where the message was not found
        await interaction.update({ content: 'The specified message was not found.', components: [] });
      }
    } catch (error) {
      console.error('Error deleting the message:', error);
    }
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'yes2') {
    try {
      await interaction.message.delete();
      const channel = interaction.channel;

      // Fetch messages from the channel
      const messages = await channel.messages.fetch({ limit: 100 });

      // Find the message to delete based on its embed content
      const messageToDelete = messages.find(msg => 
        msg.embeds.some(embed =>
          embed.description && embed.description.includes('- If you are facing a problem, Please specify what your problem is by clicking on buttons below this message.')
        )
      );

      if (messageToDelete) {
        // Delete the message
        await messageToDelete.delete();

        // Create the embed to update the interaction
        const updateEmbed = new EmbedBuilder()
          .setDescription('Message Updated! The person who created this ticket has been selected **Payment Issue**')
          .setColor('Random'); // Use a valid color or a constant if necessary

        // Create the select menu
        const Row1 = new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId('issues')
            .setPlaceholder('Payment Issue has been selected')
            .setDisabled(true)
            .addOptions([
              { label: 'I Lost my data', value: 'lostdata' },
            ])
        );
        await interaction.deferUpdate();
        await interaction.channel.setName(`payment-issue`)
        // Update the original message with the embed and select menu
        await interaction.channel.send({content: `The channel name has been updated `, embeds: [updateEmbed], components: [Row1] });
      } else {
        // Optionally handle the case where the message was not found
        await interaction.update({ content: 'The specified message was not found.', components: [] });
      }
    } catch (error) {
      console.error('Error deleting the message:', error);
    }
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'yes3') {
    try {
      await interaction.message.delete();
      const channel = interaction.channel;

      // Fetch messages from the channel
      const messages = await channel.messages.fetch({ limit: 100 });

      // Find the message to delete based on its embed content
      const messageToDelete = messages.find(msg => 
        msg.embeds.some(embed =>
          embed.description && embed.description.includes('- If you are facing a problem, Please specify what your problem is by clicking on buttons below this message.')
        )
      );

      if (messageToDelete) {
        // Delete the message
        await messageToDelete.delete();

        // Create the embed to update the interaction
        const updateEmbed = new EmbedBuilder()
          .setDescription('Message Updated! The person who created this ticket has been selected **Transfer Data**')
          .setColor('Random'); // Use a valid color or a constant if necessary

        // Create the select menu
        const Row1 = new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId('issues')
            .setPlaceholder('Transfer data has been selected')
            .setDisabled(true)
            .addOptions([
              { label: 'I Lost my data', value: 'lostdata' },
            ])
        );
        await interaction.deferUpdate();
        await interaction.channel.setName(`transfer-data`)
        // Update the original message with the embed and select menu
        await interaction.channel.send({content: `The channel name has been updated `, embeds: [updateEmbed], components: [Row1] });
      } else {
        // Optionally handle the case where the message was not found
        await interaction.update({ content: 'The specified message was not found.', components: [] });
      }
    } catch (error) {
      console.error('Error deleting the message:', error);
    }
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'yes4') {
    try {
      await interaction.message.delete();
      const channel = interaction.channel;

      // Fetch messages from the channel
      const messages = await channel.messages.fetch({ limit: 100 });

      // Find the message to delete based on its embed content
      const messageToDelete = messages.find(msg => 
        msg.embeds.some(embed =>
          embed.description && embed.description.includes('- If you are facing a problem, Please specify what your problem is by clicking on buttons below this message.')
        )
      );

      if (messageToDelete) {
        // Delete the message
        await messageToDelete.delete();

        // Create the embed to update the interaction
        const updateEmbed = new EmbedBuilder()
          .setDescription('Message Updated! The person who created this ticket has been selected **Transfer Data**')
          .setColor('Random'); // Use a valid color or a constant if necessary

        // Create the select menu
        const Row1 = new ActionRowBuilder().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId('issues')
            .setPlaceholder('Something else has been selected')
            .setDisabled(true)
            .addOptions([
              { label: 'I Lost my data', value: 'lostdata' },
            ])
        );
        await interaction.deferUpdate();
        await interaction.channel.setName(`something-else`)
        // Update the original message with the embed and select menu
        await interaction.channel.send({content: `The channel name has been updated `, embeds: [updateEmbed], components: [Row1] });
      } else {
        // Optionally handle the case where the message was not found
        await interaction.update({ content: 'The specified message was not found.', components: [] });
      }
    } catch (error) {
      console.error('Error deleting the message:', error);
    }
  }
});

client.on('interactionCreate', async interaction => {
   if(!interaction.isStringSelectMenu()) return;
     if(interaction.customId === 'language') {
       if(interaction.values[0] === 'FirstMsg') {

           const Embed1 = new EmbedBuilder()
           .setDescription(`By pressing buttons, you can choose available languages and translate the content.`) // Change Text
         .setColor('Random');
         const Row = new ActionRowBuilder()
         .addComponents(
           new ButtonBuilder()
              .setCustomId('arabi0c')
              .setStyle(ButtonStyle.Success)
              .setLabel('Arabic'), // 'Close' in Spanish  // Disable the button
            new ButtonBuilder()
              .setCustomId('span1sh')
              .setStyle(ButtonStyle.Secondary)
              .setLabel('Spanish'), // 'Help Menu' in Spanish// Disable the button button
         );
          interaction.reply({embeds:[Embed1], components: [Row], ephemeral: true})
       }
     }
});

client.on('interactionCreate', async interaction => {
   if(!interaction.isStringSelectMenu()) return;
     if(interaction.customId === 'language') {
       if(interaction.values[0] === 'SecondMsg') {

         const Embed1 = new EmbedBuilder()
         .setDescription(`By pressing buttons, you can choose available languages and translate the content.`) // Change Text
         .setColor('Random');
         const Row = new ActionRowBuilder()
         .addComponents(
           new ButtonBuilder()
             .setCustomId('arab')
             .setStyle(ButtonStyle.Danger)
             .setLabel('Arabic'), // 'Close' in Spanish // Disable the button
           new ButtonBuilder()
             .setCustomId('esp')
             .setStyle(ButtonStyle.Primary)
             .setLabel('Spanish'), // 'Help Menu' in Spanish // Disable the button
         );
         interaction.reply({embeds:[Embed1], components: [Row], ephemeral: true})
       }
     }
});


client.on('interactionCreate', async Interaction => {
  if (!Interaction.isButton()) return;

  if (Interaction.customId === 'arabi0c') {

           const Embed1 = new EmbedBuilder()
           .setDescription(`- شكرًا لإنشاء التذكرة. يرجى التحلي بالصبر وانتظار أحد ليتولى التذكرة.`) // Change Text
         .setColor('Random');
         const Row = new ActionRowBuilder()
         .addComponents(
           new ButtonBuilder()
             .setCustomId('close')
             .setStyle(ButtonStyle.Danger)
             .setLabel('إغلاق') // 'Close' in Arabic
             .setEmoji("🔒")
             .setDisabled(true),  // Disable the button
           new ButtonBuilder()
             .setCustomId('f')
             .setStyle(ButtonStyle.Primary)
             .setLabel('قائمة المساعدة') // 'Help Menu' in Arabic
             .setEmoji('📍')
             .setDisabled(true),  // Disable the button
           new ButtonBuilder()
             .setCustomId('claim')
             .setStyle(ButtonStyle.Success)
             .setLabel('إستلام') // 'Claim' in Arabic
             .setEmoji("📌")
             .setDisabled(true)   // Disable the button
         );
          Interaction.reply({embeds:[Embed1], components: [Row], ephemeral: true})
       }
});

client.on('interactionCreate', async Interaction => {
  if (!Interaction.isButton()) return;

  if (Interaction.customId === 'span1sh') {

         const Embed1 = new EmbedBuilder()
         .setDescription(`- Gracias por crear un ticket. Por favor, ten paciencia y espera a que alguien se encargue del ticket.`) // Change Text
         .setColor('Random');
         const Row = new ActionRowBuilder()
         .addComponents(
           new ButtonBuilder()
             .setCustomId('close')
             .setStyle(ButtonStyle.Danger)
             .setLabel('Cerrar') // 'Close' in Spanish
             .setEmoji("🔒")
             .setDisabled(true),  // Disable the button
           new ButtonBuilder()
             .setCustomId('f')
             .setStyle(ButtonStyle.Primary)
             .setLabel('Menú de Ayuda') // 'Help Menu' in Spanish
             .setEmoji('📍')
             .setDisabled(true),  // Disable the button
           new ButtonBuilder()
             .setCustomId('claim')
             .setStyle(ButtonStyle.Success)
             .setLabel('Reclamar') // 'Claim' in Spanish
             .setEmoji("📌")
             .setDisabled(true)   // Disable the button
         );
         Interaction.reply({embeds:[Embed1], components: [Row], ephemeral: true})
       
     }
});

client.on('interactionCreate', async Interaction => {
  if (!Interaction.isButton()) return;

  if (Interaction.customId === 'arab') {
    const Embed1 = new EmbedBuilder()
                    .setDescription(`- إذا كنت تواجه مشكلة، يرجى تحديد ما هي مشكلتك من خلال النقر على الأزرار أدناه في هذه الرسالة.`);

    const Row1 = new ActionRowBuilder()
                       .addComponents(
                          new ButtonBuilder().setCustomId('problems').setStyle(ButtonStyle.Primary).setLabel('نقل البيانات & البيانات المفقودة').setEmoji("🛠").setDisabled(true),
                          new ButtonBuilder().setCustomId('payment').setStyle(ButtonStyle.Danger).setLabel('مشكلة في الدفع').setEmoji('📝').setDisabled(true),
                          new ButtonBuilder().setCustomId('other').setStyle(ButtonStyle.Success).setLabel('شيء آخر').setEmoji("🖋").setDisabled(true),
                       );
     Interaction.reply({embeds:[Embed1], components: [Row1], ephemeral: true})
       }
});

  client.on('interactionCreate', async Interaction => {
    if (!Interaction.isButton()) return;

    if (Interaction.customId === 'esp') {

      const Embed1 = new EmbedBuilder()
                      .setDescription(`- Si estás enfrentando un problema, por favor especifica cuál es tu problema haciendo clic en los botones debajo de este mensaje.`);

      const Row1 = new ActionRowBuilder()
                         .addComponents(
                            new ButtonBuilder().setCustomId('problems').setStyle(ButtonStyle.Primary).setLabel('Transferir datos & Datos perdidos').setEmoji("🛠").setDisabled(true),
                            new ButtonBuilder().setCustomId('payment').setStyle(ButtonStyle.Danger).setLabel('Problema de pago').setEmoji('📝').setDisabled(true),
                            new ButtonBuilder().setCustomId('other').setStyle(ButtonStyle.Success).setLabel('Algo más').setEmoji("🖋").setDisabled(true),
                         );

           Interaction.reply({embeds:[Embed1], components: [Row1], ephemeral: true})

       }
  });




    
            client.on('interactionCreate', Interaction => {
              if (!Interaction.isButton()) return;
             if (Interaction.customId === 'f') {
                if (!Interaction.member.roles.cache.has(support)) return Interaction.reply({content:`Check your permissions for your own`,ephemeral:true})

             const emb9d = new EmbedBuilder()
               .setDescription(`Select what you want by clicking the buttons below`)
                  .setColor(`Random`)
            const r00w = new ActionRowBuilder()
                .addComponents(
                  new ButtonBuilder().setCustomId('ex').setStyle(ButtonStyle.Success).setLabel('Questionnaire'),
                  new ButtonBuilder().setCustomId('prices').setStyle(ButtonStyle.Secondary).setLabel('Prices SOON').setDisabled(true),
                 new ButtonBuilder().setCustomId('come').setLabel('Come').setStyle(ButtonStyle.Danger),
 )


                  Interaction.reply({ embeds: [emb9d], ephemeral: false, components: [r00w]});

                if (!Interaction.member.roles.cache.has(support)) return Interaction.reply({content:`Check your permissions for your own`,ephemeral:true});
              }
            })

    client.on('interactionCreate', async Interaction => {
      if (!Interaction.isButton()) return;
     if (Interaction.customId === 'ex') {

       const check19 = db.get(`ticketID_${Interaction.channel.id}`)

       const member = Interaction.guild.members.cache.get(check19);
       await Interaction.message.delete()
       const ex = new EmbedBuilder()
       .setDescription(`- What is the problem exactly?

> - Explain the problem in detail, if you've screenshot send it here.

- When did the problem occur?

> - Specify the date when the problem started with you.`)
       .setColor(`Random`)
        Interaction.channel.send({content: `- Hi <@${check19}> , You must fill out this questionnaire`, embeds: [ex]});
       await Interaction.deferUpdate()

     }
    });
         client.on('interactionCreate', interaction => {
           if (!interaction.isButton()) return;
          if (interaction.customId === 'come') {
                 if (!interaction.member.roles.cache.has(support)) return interaction.reply({content:`Check your permissions for your own`,ephemeral:true})
                    let modal = new ModalBuilder()
                    .setTitle('Select Message')
                    .setCustomId('modal22')
                    .addComponents(
                            new ActionRowBuilder().addComponents(new TextInputBuilder().setCustomId('comeuser').setLabel('Message Input').setRequired(true).setStyle(TextInputStyle.Short).setPlaceholder('Select the message you want !'),)
                    )

                    interaction.showModal(modal)
                  }
         });
                
client.on('interactionCreate', async interaction => {
  if (!interaction.isModalSubmit()) return;

  if (interaction.customId === 'modal22') {
    // تأكد من حذف الرسالة فقط إذا كانت موجودة
    if (interaction.message) {
      await interaction.message.delete();
    }

    // الحصول على القيم المدخلة من النموذج
    const message = interaction.fields.getTextInputValue('comeuser');

    // استرجاع المعرفات من قاعدة البيانات
    const check = db.get(`ticketID_${interaction.channel.id}`);
    const user = await client.users.fetch(check);
    const check2 = db.get(`Channel_${check}`);

    // إنشاء الرسالة باستخدام EmbedBuilder
    const fksaudia = new EmbedBuilder()
      .setDescription(`
        You have received a message sent by ${interaction.user}

        
        > - Message : ${message}

        
        > - Ticket : <#${check2}>
      `)
      .setColor('Random');

    try {
      // إرسال الرسالة للمستخدم
      await user.send({ embeds: [fksaudia] });

      // الرد على التفاعل بنجاح
      await interaction.reply({
        content: `Message sent successfully to ${user}.`,
        ephemeral: true,
      });
    } catch (error) {
      console.error('Error sending message:', error);
      // الرد على التفاعل بفشل العملية
      await interaction.reply({
        content: `Could not send a message to the user.`,
        ephemeral: true,
      });
    }
  }
});
