const Discord = require('discord.js')
require('discord-reply')
const { TOKEN, guildId, roleCtferId } = require('../config.json')
const client = new Discord.Client()
const { readdirSync } = require('fs');

(['commands', 'events']).forEach(e => readdirSync(__dirname + `/${e}`).forEach(file => require(`./${e}/${file}`)(client)))

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

client.on('ready', () => {
    console.log(client.user.tag)
    let state = true
    const setPresence = async () => {
        let activity = {}
        if (state) {
            activity.name = 'CTF 🚩'
            activity.type = 0
        } else {
            activity.name = client.guilds.cache.get(guildId).roles.cache.get(roleCtferId).members.size + ' ctfer 🚩'
            activity.type = 3
        }
        await client.user.setPresence({ activity })
        state = !state
        await sleep(5000)
        await setPresence()
    }
    setPresence()
})

client.login(TOKEN)

module.exports = {}