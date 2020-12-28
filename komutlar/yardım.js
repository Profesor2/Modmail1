const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#140589")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("<a:moneyGF:727895223384014962> Arrow Bot | Kullanıcı Menüsü <a:moneyGF:727895223384014962>")
.setThumbnail("https://cdn.discordapp.com/emojis/727895499482595368.gif?v=1")
    .setDescription(`
                                                                   
**»** \`\`\a!yardım\`\`\ **__Botun Tüm Komutlarına Ulaşa Bilirsiniz.__**
**»** \`\`\a!yardım\`\`\ **__







`) 
.setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["kullanıcı-menüsü"], 
    permLevel: 0 
  };
                                       
  exports.help = {
    name: 'kullanıcı', 
    description: '',
    usage: 'help'
  };     