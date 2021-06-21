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
- [`Lock`](https://npmjs.com/package/discord-mod-bot#lock) - Locks a channel in the server.
- [`Unlock`](https://npmjs.com/package/discord-mod-bot#unlock) - Unlocks a channel in the server when locked.
- [`Slowmode`](https://npmjs.com/package/discord-mod-bot#slowmode) - Updates the slowmode for a channel.

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
        // All {} to use with the description: {member.tag}, {member.username}, {member.id}, {member.mention}, {author.tag}, {author.username}, {author.id}, {author.mention}, {reason}
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
        // All {} to use with the description: {member.tag}, {member.username}, {member.id}, {member.mention}, {author.tag}, {author.username}, {author.id}, {author.mention}, {reason}, {days}
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
        // All {} to use with the description: {member.tag}, {member.username}, {member.id}, {author.tag}, {author.username}, {author.id}, {author.mention}, {reason}, {time}, {role.name},{role.id}, {role.mention}
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
        // All {} to use with the description: {member.tag}, {member.username}, {member.id}, {member.mention}, {author.tag}, {author.username}, {author.id}, {author.mention}, {reason}, {role.name}, {role.id}, {role.mention}
        command.unmute(message, member, role, reason, '`{member.tag}` ({member.id}) has been unmuted by {author} with the reason {reason} with the role {role.name} | {role.id}')

    }

})

// Logging into the client
client.login('TOKEN')
```

## lock

Locks a channel in the server.

**Parameters:**

| Parameter   | Description                          | Type         | Position |
|-------------|--------------------------------------|--------------|----------|
| message     | The param of your message event      | Object       | 1        |
| channel     | The channel to lock                  | GuildChannel | 2        |
| reason      | The reason why the channel is locked | string       | 3        |
| description | The message of the embed             | string       | 4        |

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

    // When the message is !lock do..
    if(message.content.startsWith('!lock')) {

        // Getting the channel that has to be locked
        const channel = message.mentions.channels.first() || message.channel

        // The reason of the lock
        const reason = 'A raid is happening!'

        // Running the lock command with the needed params
        // All {} to use with the description: {channel.name}, {channel.id}, {channel.mention}, {reason}, {author.tag}, {author.username}, {author.id}, {author.mention}
        command.lock(message, channel, reason, 'The channel {channel.name} ({channel.id}) has been locked by {author.tag} ({author.id}) with the reason {reason}')

    }

})

// Logging into the client
client.login('TOKEN')
```

## unlock

Unlocks a channel in the server when locked.

**Parameters:**

| Parameter   | Description                            | Type         | Position |
|-------------|----------------------------------------|--------------|----------|
| message     | The param of your message event        | Object       | 1        |
| channel     | The channel to unlock                  | GuildChannel | 2        |
| reason      | The reason why the channel is unlocked | string       | 3        |
| description | The message of the embed               | string       | 4        |


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

    // When the message is !unlock do..
    if(message.content.startsWith('!unlock')) {

        // Getting the channel that has to be unlocked
        const channel = message.mentions.channels.first() || message.channel

        // The reason of the unlock
        const reason = 'The raid is over!'

        // Running the unlock command with the needed params
        // All {} to use with the description: {channel.name}, {channel.id}, {channel.mention}, {reason}, {author.tag}, {author.username}, {author.id}, {author.mention}
        command.unlock(message, channel, reason, 'The channel {channel.name} ({channel.id}) has been unlocked by {author.tag} ({author.id}) with the reason {reason}')

    }

})

// Logging into the client
client.login('TOKEN')
```

## slowmode

Updates the slowmode for a channel.

**Parameters:**

| Parameter   | Description                           | Type         | Position |
|-------------|---------------------------------------|--------------|----------|
| message     | The param of your message event       | Object       | 1        |
| channel     | The channel to change slowmode        | GuildChannel | 2        |
| time        | The amount of seconds of the slowmode | Integer      | 3        |
| reason      | The reason of the new slowmode        | string       | 4        |
| description | The message of the embed              | string       | 5        |


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

    // When the message is !slowmode do..
    if(message.content.startsWith('!slowmode')) {

        // Getting the channel for the new slowmode
        const channel = message.mentions.channels.first() || message.channel

        // The new time of the slowmode, example: 10 = 10 seconds (NOTE: Maximum = 21600)
        const time = '10'

        // The reason of the slowmode
        const reason = 'To many spam of messages!'

        // Running the unlock command with the needed params
        // All {} to use with the description: {channel.name}, {channel.id}, {channel.mention}, {time}, {reason}, {author.tag}, {author.username}, {author.id}, {author.mention}
        command.slowmode(message, channel, time, reason, 'The slowmode of the channel {channel.name} ({channel.id}) has been updated to {time} seconds by {author.tag} ({author.id}) with the reason {reason}')

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