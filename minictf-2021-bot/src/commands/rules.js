const { PREFIX, rulesChannelId, roleCtferId, notiChannelId, roleBtcId, roleAuthorId } = require('../../config.json')
module.exports = client => {
    client.on('message', message => {
        if (message.author.id !== '406974728973320192') return
        if (message.content === `${PREFIX}rules`) {
            const flagEmoji = '🚩'
            message.guild.channels.cache.get(rulesChannelId).send(
                `Link tham gia CTF tại: https://ctf.infosecptit.club` + '\n' +
                `ISP Club - CLB ATTT PTIT Fanpage: \`https://www.facebook.com/ATTT.PTIT\`` + '\n\n' +


                `ISP MINICTF 2021 RULES:` + '\n' +

                `1. Tôn trọng BTC và mọi người trong server, hạn chế cà khịa người khác.` + '\n' +

                `2. <@&${roleCtferId}> lưu ý không gợi ý lời giải, không mua bán flag,... nhưng vẫn có thể thảo luận về challenge.` + '\n' +

                `3. Sẽ có các channel ứng với từng mảng challenge đã có, nếu có gì khó khăn về khâu làm bài thi, do web ctf hay do challenge lỗi bạn vui lòng ping cho BTC hoặc Author để giải quyết kịp thời nhé.` + '\n' +

                `Theo dõi channel <#${notiChannelId}> để nhận được thông báo mới nhất về challenge nhé.` + '\n' +

                `Sẽ có 3 mức role trong server:` + '\n' +
                `* <@&${roleBtcId}>: role ban tổ chức chương trình.` + '\n' +
                `* <@&${roleAuthorId}>: role dành cho tác giả của các challenge.` + '\n' +
                `* <@&${roleCtferId}>: role dành cho người chơi tham gia CTF.` + '\n' +

                `4. Không spam hoặc ddos server hay các challenge dưới bất kì hình thức nào, nếu BTC phát hiện nhẹ nhất là bị cảnh cáo sau đó bị kick khỏi server và xóa account trên trang web CTF.` + '\n\n' +


                `Nếu bạn đồng ý tuân thủ tất cả những quy định trên thì vui lòng react vào emoji 🚩 để lấy role <@&${roleCtferId}> cùng các bạn khác nhé.` + '\n' +

                `HAPPY HACKINGGG!!!` + '\n\n' +

                `\`ISPCLUB {4r3_y0u_r34dy}\``
            ).then(message => {
                message.react(flagEmoji)
            })
        }
    })
}