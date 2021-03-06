const Discord = require("discord.js");

// The AboutBot command is used to display information about the bot and it contributos
// Along with the repo and test server

exports.conf = {
    enabled: true,
    aliases: ["test"]
};

exports.help = {
    name: "aboutbot",
    description: "Display info about the bot and its contributors",
    usage: "about"
};

exports.run = (client, message) => { // eslint-disable-line no-unused-vars

    const contributors = [
        ["Abdus", "https://github.com/thisisabdus"],
        ["Matt", "https://github.com/MattCSmith"],
        ["Ankur", "https://github.com/anantAnkur"]
    ]
    

    // Defines Embed
    let embed = new Discord.RichEmbed()
        .setAuthor(`About Io Bot`)
        .setColor(`#e8c123`)
        .setDescription(
            "_IO Bot_ is a custom built bot written in JavaScript using DiscordJS API and `discord.js` library.")
        .addField(` :white_check_mark:  Contributions Welcome`, "[Github Repo](https://github.com/IOStream-OpenEnd/iobot)", true)
        .addBlankField()
        .addField("**Contributors:**", "Name and GitHub profile of Contributors")

        contributors.forEach(c => {
            embed.addField(c[0], `[Github Profile](${c[1]})`, true)
        });
        
        message.channel.send({
            embed: embed
        })
};