const { Message, MessageEmbed, Permissions, GuildMemberManager } = require('discord.js')
const ms = require('ms')
const index = require('./index')

class command {

    kick = async(message, member, reason, description) => {

        const messageCheck = message instanceof Message
        if(!message || messageCheck === false) throw new Error(`INVALID_KICK_MESSAGE: There is no discord.js Message provided or it is invalid.`)  
        if(!member || !index.client.users.cache.get(member.user.id) || message.guild.members.cache.get(member.user.id ? member.user.id : '12345') || !member.user) throw new Error(`INVALID_KICK_MEMEBR: No valid member has been given`)
        if(!reason || typeof reason !== 'string') reason = '-'
        if(!description || typeof description !== 'string') throw new Error(`INVALID_KICK_DESCRIPTION: There is no description provided or it isn't a string.`)

        if(!message.guild.me.permissions.has(Permissions.FLAGS['KICK_MEMBERS'])) throw new Error(`NO_KICK_PERMS_BOT: The bot is missing the 'KICK_MEMBERS' permissions.`)
        if(!message.member.permissions.has(Permissions.FLAGS['KICK_MEMBERS'])) throw new Error(`NO_KICK_PERMS_MEMBER: The message member is missing the 'KICK_MEMBERS' permissions.`)

        member.kick(reason)

        const embed = new MessageEmbed()
        .setDescription(description.replace('{member.tag}', member.user.tag).replace('{member.username}', member.user.username).replace('{member.id}', member.user.id).replace('{author}', message.author.tag).replace('{reason}', reason))
        await message.channel.send({ embed: embed })

    }

    ban = async(message, member, days, reason, description) => {

        const messageCheck = message instanceof Message
        if(!message || messageCheck === false) throw new Error(`INVALID_BAN_MESSAGE: There is no discord.js Message provided or it is invalid.`)  
        if(!member || !index.client.users.cache.get(member.user.id) || message.guild.members.cache.get(member.user.id ? member.user.id : '12345') || !member.user) throw new Error(`INVALID_BAN_MEMEBR: No valid member has been given`)
        if(!reason || typeof reason !== 'string') reason = '-'
        if(!days) days = 0
        if(isNaN(days)) throw new Error(`INVALID_BAN_DAYS: No valid day number provided.`)
        if(!description || typeof description !== 'string') throw new Error(`INVALID_BAN_DESCRIPTION: There is no description provided or it isn't a string.`)

        if(!message.guild.me.permissions.has(Permissions.FLAGS['BAN_MEMBERS'])) throw new Error(`NO_BAN_PERMS_BOT: The bot is missing the 'BAN_MEMBERS' permissions.`)
        if(!message.member.permissions.has(Permissions.FLAGS['BAN_MEMBERS'])) throw new Error(`NO_BAN_PERMS_MEMBER: The message member is missing the 'BAN_MEMBERS' permissions.`)

        member.ban({ reason: reason, days: days })

        const embed = new MessageEmbed()
        .setDescription(description.replace('{member.tag}', member.user.tag).replace('{member.username}', member.user.username).replace('{member.id}', member.user.id).replace('{author}', message.author.tag).replace('{reason}', reason).replace('{days}', days))
        await message.channel.send({ embed: embed })

    }

    mute = async(message, member, role, time, reason, description) => {

        const messageCheck = message instanceof Message
        if(!message || messageCheck === false) throw new Error(`INVALID_MUTE_MESSAGE: There is no discord.js Message provided or it is invalid.`)  
        if(!member || !index.client.users.cache.get(member.user.id) || message.guild.members.cache.get(member.user.id ? member.user.id : '12345') || !member.user) throw new Error(`INVALID_MUTE_MEMEBR: No valid member has been given`)
        if(!role || !role.id || !message.guild.roles.cache.get(role.id)) throw new Error(`INVALID_MUTE_ROLE: There is no Mute Role provided or it is invalid.`)
        if(!reason || typeof reason !== 'string') reason = '-'
        if(time) { if(isNaN(time) || !time.endsWith('s' || 'm' || 'h' || 'd')) throw new Error(`INVALID_MUTE_TIME: No valid time number provided or didn't ends with s/m/h/d.`) }
        if(!time) time = false
        if(!description || typeof description !== 'string') throw new Error(`INVALID_MUTE_DESCRIPTION: There is no description provided or it isn't a string.`)
        if(member.roles.cache.has(role.id)) throw new Error(`ALREADY_MUTED: The given member is already muted.`)

        description.replace('{member.tag}', member.user.tag).replace('{member.username}', member.user.username).replace('{member.id}', member.user.id).replace('{role.name}', role.name).replace('{role.id}', role.id).replace('{reason}', reason).replace('{time}', time)

        const embed = new MessageEmbed()
        .setDescription(description)

        if(time === false || time === null) {

            member.roles.add(role.id)
            return message.channel.send({ embed: embed })

        } else {

            member.roles.add(role.id)
            message.channel.send({ embed: embed })

            setTimeout(() => {
                member.roles.remove(role.id)
            }, ms(time))

        }

    }

    unmute = async(message, member, role, reason, description) => {

        const messageCheck = message instanceof Message
        if(!message || messageCheck === false) throw new Error(`INVALID_MUTE_MESSAGE: There is no discord.js Message provided or it is invalid.`)  
        if(!member || !index.client.users.cache.get(member.user.id) || message.guild.members.cache.get(member.user.id ? member.user.id : '12345') || !member.user) throw new Error(`INVALID_MUTE_MEMEBR: No valid member has been given`)
        if(!role || !role.id || !message.guild.roles.cache.get(role.id)) throw new Error(`INVALID_MUTE_ROLE: There is no Mute Role provided or it is invalid.`)
        if(!reason || typeof reason !== 'string') reason = '-'
        if(!description || typeof description !== 'string') throw new Error(`INVALID_MUTE_DESCRIPTION: There is no description provided or it isn't a string.`)
        if(!member.roles.cache.has(role.id)) throw new Error(`NOT_MUTED: The given member isn't muted.`)

        description.replace('{member.tag}', member.user.tag).replace('{member.username}', member.user.username).replace('{member.id}', member.user.id).replace('{role.name}', role.name).replace('{role.id}', role.id).replace('{reason}', reason)

        member.roles.remove(role.id)
        const embed = new MessageEmbed()
        .setDescription(description)
        message.channel.send({ embed: embed })

    }

}

module.exports = command