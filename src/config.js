const { ActivityType } = require("discord.js");
require("dotenv").config();

module.exports = {
  bot: {
    token: process.env.token || "MTMzODMyMTIyNDI3NDgwODkxMw.GEX1if.d5NVjkK5tXl-NPLYtGjUwhlCxPpxeVixvw9K3I", // Bot token
    clientName: process.env.clientName || "Mzika", // Bot username
    clientId: process.env.clientId || "1338321224274808913", // Bot clientId
    clientSecret: process.env.clientSecret || "GckZMv-E3WdEy662wchOHbstMibKxJa5", // Bot clientSecret
  },

  owner: {
    userId: process.env.userId || "575172368524378113", // Owner userId for developer command
    updateChecker: true, // Check for latest update. set to false if you dont want to check for latest update
  },

  botSettings: {
    mongoUrl: process.env.mongoUrl || "mongodb+srv://mathewlueilwitz1337:Zabba.1337@cluster0.phb6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", // Mongodb url for database
    geniusToken: process.env.geniusToken || "sn39EljS0CYR1T_PYcx9P0dJCXVh5wzo0nxsComZgHbJaU5ph5LAsnf2sM-lhODa", // Genius token use to fetch lyrics, you can leave it blank.
    prefix: process.env.prefix || "!", // Default prefix is set to "?" use prefix command to change
    embedColor: process.env.embedColor || "2F3136", // You can use any HEX Color but without the "#"
  },

  // Lavalink settings. Please use lavalink v4
  // You can remove docker-node if youre not using docker to run the bot.
  nodes: [
    {
      name: "Main",
      host: "15.236.239.143",
      password: "youshallnotpass",
      port: 2333,
      secure: false,
    },
  ],

  // Client Presence
  presence: {
    activities: [
      {
        name: "/play",
        type: ActivityType.Listening,
      },
    ],
    status: "online",
  },
};