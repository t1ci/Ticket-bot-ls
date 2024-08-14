const fs = require("node:fs");

const { REST, Routes } = require('discord.js');

const { Token, clientID } = require('../config.json')

const rest = new REST({ version: '10' }).setToken(process.env.token);

module.exports = (client) => {
  const commands = [];

  fs.readdirSync("./SlashCommnds/").forEach(async dir => {
    const commandsFiles = fs.readdirSync(`./SlashCommnds/${dir}`).filter(file => file.endsWith(".js"))
    for (const file of commandsFiles) {
      const command = require(`../SlashCommnds/${dir}/${file}`)
      commands.push(command.data.toJSON())
      client.slashCommands.set(command.data.name, command)
    };
  });

  (async () => {
    try {
      console.log(require('chalk').magenta(`STARTED REFRESHING ${commands.length} APPLICATIONS {/} COMMANDS`));
      
      const data = await rest.put(Routes.applicationCommands(clientID), { body : commands })

        console.log(require('chalk').underline.red(`SUCESSFULLY RELOADED ${data.length} APPLICATIONS {/} COMMANDS`));
    } catch (error) {
      console.log(error)
    };
  })();
};