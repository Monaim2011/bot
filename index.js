const express = require('express');
const app = express();
app.get('/', (req, res) => {	res.send('Hello Express app!');
});
app.listen(3000, () => {
	console.log('\033[32m SERVER STARTED');
});
app.use('/ping', (req, res) => {
	res.send(new Date());
});

//=================================

const Discord = require('discord.js'); 
const client = new Discord.Client();
const ms = require('ms')
const fs = require('fs')
const disbut = require('discord-buttons')
disbut(client)
const axios = require('axios');

//=================================

client.on('ready', () => {
console.log(`[NAME] ${client.user.tag}`)
console.log(`[ID] ${client.user.id}`)
console.log(`[GUILDS] ${client.guilds.cache.size}`)
console.log(`[PING] ${client.ws.ping}`)
client.user.setStatus("online")//تقد تعدلها اذا تبي
  //dnd idle online
function msg() { 
 let status = [`h`];//حاله البوت
 let S = Math.floor(Math.random() * status.length);
 client.user.setActivity(status[S],{ type : 'WATCHING'})//PLAYING, STREAMING , تقدر تعدل لذول و في اكثر
};

setInterval(msg,7000)
}) 

//=================================

let sug = ['991583181386039346'];//ايدي الشات 

let link = "https://media.discordapp.net/attachments/988075386766241833/991636283573153872/unknown_3_copy.png";//رابط الخط
//=================================

client.on('message', function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
.setColor(`RANDOM`)     .setThumbnail(message.author.avatarURL({ dynamic: true })) //كلمه random ذا الون اذا تبي عدله
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}  
message.channel.send(embed).then(msg => {
 msg.react(`✔️`).then(() => {
 msg.react('❌') //الرياكشن
      })
    message.channel.send({files: [link]});
    })
message.author.send(`Think you for <#${message.channel.id}>`).catch(console.error) 
  }
});  //تقدر تعدل الرساله 

//لا تعدل فيه شي
client.login(process.env.token).catch((err) => {
	console.warn("\033[31m Token Invalid")
})
