# ❔ About

Discord-Mod-Bot is a package that makes it easier to make a moderation discord bot, with easily functions to kick, ban, mute members etc.
And last but not least.. Why are you still reading this?! Go for it and install it!

<div align="center">

<p>

<a  href="https://nodei.co/npm/discord-mod-bot/"><img  src="https://nodei.co/npm/discord-mod-bot.png?downloads=true&stars=true"  alt="NPM info"  /></a>

</p>

</div>

# 📊 Installation

Before installing:

1. You need to have node.js installed
2. You need the NPM package 'discord.js'

After you have/did this.. You can finally install the package!

Terminal Command:

```
$ npm install discord-mod-bot
```

# ✏ Usage

Currently available commands:

- [`Kick`](https://npmjs.com/package/discord-mod-bot#kick) - Kicks a member from the server
- [`Ban`](https://npmjs.com/package/discord-mod-bot#ban) - Bans a member from the server
- [`Mute`](https://npmjs.com/package/discord-mod-bot#mute) - Mutes a member from the server
- [`Unmute`](https://npmjs.com/package/discord-mod-bot#unmute) - Unmutes a member from the server when he/she is muted

*More coming soon..*

## kick

Kicks a member from the server.

**Parameters:**

| Parameter   | Description                         | Type        | Position |
|-------------|-------------------------------------|-------------|----------|
| message     | The param of your message event     | Object      | 1        |
| member      | The member to kick                  | GuildMember | 2        |
| reason      | The reason why the member is kicked | string      | 3        |
| description | The message of the embed            | string      | 4        |
<br>

**Example:**

```js
// Importing the client of the discord.js modules
const client = new (require('discord.js')).Client()

// Setting up the module with the settings
require('discord-mod-bot')(client)

// Requiring the commands of the module
const { command } = require('discord-mod-bot')

// Starting up the client
client.on('ready', async () => {
    console.log(`${client.user.tag} is online!`)
})

client.on('message', async message => {

    // When the message is !kick do..
    if(message.content.startsWith('!kick')) {

        // Getting the member that is mentioned (has to be a GuildMember not a User)
        const member = message.mentions.members.first()

        // The reason of the mute
        const reason = 'Did something wrong!'

        // Running the kick command with the needed params
        // All {} to use with the description: {member.tag}, {member.username}, {member.id}, {author}, {reason}
        command.kick(message, member, reason, '`{member.tag}` ({member.id}) was kicked by {author} with the reason {reason}')

    }

})

// Logging into the client
client.login('TOKEN')
```

## ban

Bans a member from the server.

**Parameters:**

| Parameter   | Description                         | Type        | Position |
|-------------|-------------------------------------|-------------|----------|
| message     | The param of your message event     | Object      | 1        |
| member      | The member to kick                  | GuildMember | 2        |
| reason      | The reason why the member is kicked | string      | 3        |
| days        | The total days of the ban           | integer     | 4        |
| description | The message of the embed            | string      | 5        |


**Example:**

```js
// Importing the client of the discord.js modules
const client = new (require('discord.js')).Client()

// Setting up the module with the settings
require('discord-mod-bot')(client)

// Requiring the commands of the module
const { command } = require('discord-mod-bot')

// Starting up the client
client.on('ready', async () => {
    console.log(`${client.user.tag} is online!`)
})

client.on('message', async message => {

    // When the message is !kick do..
    if(message.content.startsWith('!ban')) {

        // Getting the member that is mentioned (has to be a GuildMember not a User)
        const member = message.mentions.members.first()

        // The reason of the mute
        const reason = 'Did something wrong!'

        // The total days of the ban
        const days = 7

        // Running the ban command with the needed params
        // All {} to use with the description: {member.tag}, {member.username}, {member.id}, {author}, {reason}, {days}
        command.ban(message, member, reason, days, '`{member.tag}` ({member.id}) was banned by {author} with the reason {reason} for {days} days')

    }

})

// Logging into the client
client.login('TOKEN')
```

## mute

Mutes a member from the server.

**Parameters:**

| Parameter   | Description                     | Type        | Position |
|-------------|---------------------------------|-------------|----------|
| message     | The param of your message event | Object      | 1        |
| member      | The member to mute              | GuildMember | 2        |
| role        | The mute role                   | GuildRole   | 3        |
| time        | The time of the mute            | string      | 4        |
| reason      | The reason of the mute          | string      | 5        |
| description | The message of the embed        | string      | 6        |

<br>

**Example:**

```js
// Importing the client of the discord.js modules
const client = new (require('discord.js')).Client()

// Setting up the module with the settings
require('discord-mod-bot')(client)

// Requiring the commands of the module
const { command } = require('discord-mod-bot')

// Starting up the client
client.on('ready', async () => {
    console.log(`${client.user.tag} is online!`)
})

client.on('message', async message => {

    // When the message is !mute do..
    if(message.content.startsWith('!mute')) {

        // Getting the member that is mentioned (has to be a GuildMember not a User)
        const member = message.mentions.members.first()

        // The role the user gets when muted
        const role = message.guild.roles.cache.find(role => role.name === 'muted')

        // The time of the mute, example: 10s / 15m / 2h / 1d
        const time = '10s'
        // If no time 
        const time = null || false

        // The reason of the mute
        const reason = 'Did something wrong!'

        // Running the mute command with the needed params
        // All {} to use with the description: {member.tag}, {member.username}, {member.id}, {author}, {reason}, {time}, {role.name}, {role.id}
        command.mute(message, member, role, time, reason, '`{member.tag}` ({member.id}) has been muted by {author} with the reason {reason} for {time} with the role {role.name} | {role.id}')

    }

})

// Logging into the client
client.login('TOKEN')
```

## unmute

Unmutes a member from the server when he/she is muted.

**Parameters:**

| Parameter   | Description                     | Type        | Position |
|-------------|---------------------------------|-------------|----------|
| message     | The param of your message event | Object      | 1        |
| member      | The member to unmute            | GuildMember | 2        |
| role        | The mute role                   | GuildRole   | 3        |
| reason      | The reason of the mute          | string      | 4        |
| description | The message of the embed        | string      | 5        |

<br>

**Example:**

```js
// Importing the client of the discord.js modules
const client = new (require('discord.js')).Client()

// Setting up the module with the settings
require('discord-mod-bot')(client)

// Requiring the commands of the module
const { command } = require('discord-mod-bot')

// Starting up the client
client.on('ready', async () => {
    console.log(`${client.user.tag} is online!`)
})

client.on('message', async message => {

    // When the message is !unmute do..
    if(message.content.startsWith('!unmute')) {

        // Getting the member that is mentioned (has to be a GuildMember not a User)
        const member = message.mentions.members.first()

        // The mute role of the server
        const role = message.guild.roles.cache.find(role => role.name === 'muted')

        // The reason of the unmute
        const reason = 'Did something wrong!'

        // Running the unmute command with the needed params
        // All {} to use with the description: {member.tag}, {member.username}, {member.id}, {author}, {reason}, {role.name}, {role.id}
        command.unmute(message, member, role, reason, '`{member.tag}` ({member.id}) has been unmuted by {author} with the reason {reason} with the role {role.name} | {role.id}')

    }

})

// Logging into the client
client.login('TOKEN')
```

# 💻 Developers

This package has been developed by:

Koenie06 and I am Intelligent

# 📰 Links

Discord:

Koenie06#9999
<br>
I am Intelligent#0001