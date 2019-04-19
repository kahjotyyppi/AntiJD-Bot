const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.login(config.token);

bot.on('ready', () => {
  console.log("AntiJD Bot Has started!")
  bot.user.setPresence({
    game: {
      name: 'JderbZ',
      type: 'WATCHING'
    },
    status: 'online'
  })
});

bot.on('voiceStateUpdate', async (oldMember, newMember) => {

  if (newMember.id === "255376528710303745") {
    if (newMember.voiceChannelID === "532958542102265856") {
      await newMember.guild.createChannel("Mees ny vittuun", "voice");
      const JDChannel = newMember.guild.channels.find("name", "Mees ny vittuun");
      await newMember.setVoiceChannel(JDChannel);
      await JDChannel.delete();
    }

  }
});