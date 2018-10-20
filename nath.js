const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`https://discord.gg/MZMjM5d`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`https://discord.gg/MZMjM5d`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
