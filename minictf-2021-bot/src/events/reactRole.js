const { rulesChannelId, roleCtferId } = require('../../config.json')
const flagEmoji = '🚩'
module.exports = client => {
    client.on('messageReactionAdd', async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch()
        if (reaction.partial) await reaction.fetch()
        if (user.bot) return
        if (!reaction.message.guild) return
        if (!reaction.message.channel.id === rulesChannelId) return
        if (reaction.emoji.name === flagEmoji) {
            const roleCtfer = reaction.message.guild.roles.cache.get(roleCtferId)
            await reaction.message.guild.members.cache.get(user.id).roles.add(roleCtfer)
        }
    })
}