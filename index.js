const { Client } = require('discord.js')

module.exports = async(client) => {

    const ClientCheck = client instanceof Client
    if (!client || ClientCheck === false) throw new Error("INVALID_CLIENT: There is no discord.js Client provided or it is invalid..")

    console.log(`Discord-Mod-Bot Package succesfully started up.. And works!`)

    module.exports.client = client

}

module.exports.command = require('./commands')