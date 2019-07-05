const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ('+') 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});




client.on("message", message => {
  
  if(message.content.startsWith(prefix + "embed")) {
    

var color = message.content.split(" ")[1];
  var text = message.content.split(" ").slice(2);
    var tt = text.join(" ")
  if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");
    if(!tt) return message.reply("يجب كتابة كلام لتكراره");
  let embed = new Discord.RichEmbed()
  .setColor(color)
  .setDescription(tt)
  message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
message.channel.send("`Error`:" + Julian)
    })
  }
  });









client.login('"mfa.O7Uw9TCdr0mqM3UP1B3iF-mmo_M4Vx3u5b-Gj9WSnVuPCpQsv0RYsxPv39hERYeThk5XPop_aY2HJS1zG6vL"  ');
