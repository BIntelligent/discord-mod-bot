const { Client } = require('discord.js')
let userClient;

module.exports = async(client) => {

    const ClientCheck = client instanceof Client
    if (!client || ClientCheck === false) throw new Error("INVALID_CLIENT: There is no discord.js Client provided or it is invalid..")
    if (!client || !client instanceof Client)

    userClient = client
    console.log(`Discord-Mod-Bot Package succesfully started up.. And works!`)

}

module.exports.client = userClient
module.exports.command = require('./commands')