const {Client,MessageEmbed} = require('discord.js');
const client = new Client();
const maestros = require('./maestros');
require('dotenv').config();

client.on('ready', () => {
    console.log(`Estoy vivo y me llamo: ${client.user.tag}`);
});

//Help
client.on('message', msg => {
    if (msg.content === '$help') {
      const embed = new MessageEmbed()
        .setTitle('Lista de comandos')
        .setColor('blue')
        .setDescription('Invitacion a el servidor: `$invite` \n'+
            'Avatar propio: `$avatar` \n'+
            'Informacion sobre Escolar: `$escolar` \n'+
            'Calendario de actividades semestre actual: `$calendar`\n');
      msg.channel.send(embed);
    }
  });

//Invite
client.on('message', msg =>{
    if(msg.content === '$invite'){
        msg.channel.send(`Hola ${msg.author}, esta es la invitacion para nuestro servidor: ` + 'https://discord.gg/pXyWC59');
    }
})
//Avatar
client.on('message', msg => {
    if(msg.content === '$avatar'){
        msg.reply(msg.author.displayAvatarURL());
    }
})

//Escolar
client.on('message', msg =>{
    if(msg.content === '$escolar'){
        const attachment = new Discord.MessageAttachment("https://media.discordapp.net/attachments/717597571723558962/801136663673569341/FB_IMG_1611038189410.jpg?width=564&height=564");
        msg.channel.send(attachment);
        msg.reply("¡Hola! A continuación te presento la informacion del departamento de escolar de nuestra facultad:\n" + 
        "\nTelefono Departamento de Escolar: (81)83294020\n" +
        "Ext. 5702, 5704, 5706 y 5710")
    }
})

//Calendario
client.on('message', msg =>{
    if(msg.content === '$calendar'){
        const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/749106602090430555/803806559968428052/IMG-20210126-WA0007.jpg');
        msg.reply("A continuacion te comparto el calendario del semestre actual:");
        msg.channel.send(attachment);
    }
})



client.login(process.env.TOKEN);