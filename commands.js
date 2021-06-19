const { Message, MessageEmbed, Permissions } = require('discord.js')
const index = require('./index')

class command {

    kick = async(message, member, reason, description) => {

        const messageCheck = message instanceof Message
        if(!message || messageCheck === false) throw new Error(`INVALID_KICK_MESSAGE: There is no discord.js Message provided or it is invalid.`)  
        if(!member || !index.client.users.cache.get(member.user.id) || message.guild.members.cache.get(member.id ? member.id : '12345') || !member.user) throw new Error(`INVALID_KICK_MEMEBR: No valid member has been given`)
        if(!reason || typeof reason !== 'string') reason = 'No Reason Provided'

        if(!message.guild.me.permissions.has(Permissions.FLAGS['KICK_MEMBERS'])) throw new Error(`NO_KICK_PERMS_BOT: The bot is missing the 'KICK_MEMBERS' permissions.`)
        if(!message.member.permissions.has(Permissions.FLAGS['KICK_MEMBERS'])) throw new Error(`NO_KICK_PERMS_MEMBER: The message member is missing the 'KICK_MEMBERS' permissions.`)

        member.kick(reason)

        const embed = new MessageEmbed()
        .setDescription(description.replace('{member.tag}', member.user.tag).replace('{member.username}', member.user.username).replace('{member.id}', member.user.id).replace('{author}', message.author.tag).replace('{reason}', reason))
        await message.channel.send({ embed: embed })

    }

    ban = async(message, member, reason, days, description) => {

        const messageCheck = message instanceof Message
        if(!message || messageCheck === false) throw new Error(`INVALID_BAN_MESSAGE: There is no discord.js Message provided or it is invalid.`)  
        if(!member || !index.client.users.cache.get(member.user.id) || message.guild.members.cache.get(member.id ? member.id : '12345') || !member.user) throw new Error(`INVALID_BAN_MEMEBR: No valid member has been given`)
        if(!reason || typeof reason !== 'string') reason = 'No Reason Provided'
        if(!days) days = 0
        if(isNaN(days)) throw new Error(`INVALID_BAN_DAYS: No valid day number provided.`)

        if(!message.guild.me.permissions.has(Permissions.FLAGS['BAN_MEMBERS'])) throw new Error(`NO_BAN_PERMS_BOT: The bot is missing the 'BAN_MEMBERS' permissions.`)
        if(!message.member.permissions.has(Permissions.FLAGS['BAN_MEMBERS'])) throw new Error(`NO_BAN_PERMS_MEMBER: The message member is missing the 'BAN_MEMBERS' permissions.`)

        member.ban({ reason: reason, days: days })

        const embed = new MessageEmbed()
        .setDescription(description.replace('{member.tag}', member.user.tag).replace('{member.username}', member.user.username).replace('{member.id}', member.user.id).replace('{author}', message.author.tag).replace('{reason}', reason).replace('{days}', days))
        await message.channel.send({ embed: embed })

    }

}

module.exports = command