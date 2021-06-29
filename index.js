const {
    Client
} = require('discord.js')

module.exports = async (client, url) => {

    const ClientCheck = client instanceof Client
    if (!client || ClientCheck === false) throw new Error("INVALID_CLIENT: There is no discord.js Client provided or it is invalid..")
    if (!url || typeof url !== "string" || !url.startsWith("mongodb://") || !url.startsWith("mongodb+srv")) throw new Error("INVALID_URL: There is no Mongodb URl provided or it is invalid..")

    console.log(`Discord-Mod-Bot Package succesfully started up.. And works!`)

    module.exports.client = client;

    require('mongodb').MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        client.db = db.db("moderation");
    });

}

module.exports.command = require('./commands')