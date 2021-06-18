const { Message, MessageEmbed } = require('discord.js')
const client = require('./index').client

class command {

    kick = async(message, member, reason) => {

        const messageCheck = message instanceof Message
        if(!message || messageCheck === false) throw new Error(`INVALID_MESSAGE_KICK: There is no discord.js Message provided or it is invalid..`)  
        if(!member || !client.users.cache.get(member.user.id) || !member.user) throw new Error(`INVALID_MEMBER_KICK: No valid member has been given`)
        if(!reason || typeof reason !== 'string') reason = 'No Reason Provided'

        member.kick(reason)

        const embed = new MessageEmbed()
        .setDescription(`**👊 | ${member.user.tag} has been kicked by ${message.author.tag}**`)
        .setFooter(`Reason: ${reason}`)
        await message.channel.send({ embed: embed })

    }

}

module.exports = command