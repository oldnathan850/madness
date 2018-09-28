const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`https://discord.gg/wKRdraB`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`https://discord.gg/wKRdraB`) 
}).catch(console.error)
})
client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`Nathan ${x} `)
          .then(m => {
            count++;
          })
          
        }
      }
});
client.login(process.env.BOT_TOKEN);
