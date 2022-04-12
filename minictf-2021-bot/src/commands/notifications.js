const { PREFIX, notiChannelId, roleCtferId } = require('../../config.json')
const sendNotificationCTFd = require('../utils/sendNotificationCTFd')
module.exports = client => {
    client.on('message', async message => {
        if (message.content.includes('-d') && message.content.includes('-t')) {
            const n0tify = {}
            const args = message.content.split(PREFIX).forEach(e => {
                if (e.startsWith('t')) {
                    n0tify.title = e.split('').splice(2).join('').trim()
                }
                if (e.startsWith('d')) {
                    n0tify.desc = e.split('').splice(2).join('').trim()
                }
            })
            message.guild.channels.cache.get(notiChannelId).send({
                embed: {
                    "author": {
                        name: 'THÔNG BÁO🔊🔊'
                    },
                    color: '#ff7675',
                    title: n0tify.title,
                    description: `<@&${roleCtferId}> ` + n0tify.desc,
                    footer: {
                        text: (new Date).toLocaleString()
                    },
                }
            })
            const { title, desc } = n0tify
            await sendNotificationCTFd({ title, desc })
        }

    })
}