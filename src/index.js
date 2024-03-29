const { Client, IntentsBitField, ColorResolvable, DiscordAPIError, MessageOptions, TextChannel } = require("discord.js");
import { zkillSubscriber } from './events/zKillSubscriber'
// const path = require("node:path");
// const fs = require("fs");

require("dotenv").config();

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

// const eventsPath = path.join(__dirname, "events");
// const eventFiles = fs
//   .readdirSync(eventsPath)
//   .filter((file) => file.endsWith(".js"));

// Handles all event files
// for (const file of eventFiles) {
//   const filePath = path.join(eventsPath, file);
//   const event = require(filePath);
//   if (event.once) {
//     client.once(event.name, (...args) => event.execute(...args));
//   } else {
//     client.on(event.name, (...args) => event.execute(...args));
//   }
// }

//Login with discord bot token
client.login(process.env.TOKEN);