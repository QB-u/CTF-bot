const { welcomeChannelId, rulesChannelId } = require('../../config.json')
module.exports = client => {
    client.on('guildMemberAdd', member => {
        const message = `Hello <@${member.id}>, chào mừng bạn đã đến với **${member.guild.name}**, bạn vui lòng đọc kĩ nội quy tại <#${rulesChannelId}> để lấy role và tương tác với các _ctfer_ khác nhóe  (✿◠‿◠)`
        member.guild.channels.cache.get(welcomeChannelId).send(message)
    })
}