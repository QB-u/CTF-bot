const puppeteer = require('puppeteer')
const { user, pass, ctf } = require('../../config.json')
const run = async ({ title, desc }) => {
    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(`${ctf}/login`)
        await page.type('#name', user)
        await page.type('#password', pass)
        await page.click('#_submit')
        await page.waitForTimeout(1000)
        await page.goto(`${ctf}/admin/notifications`)
        await page.type('#title', title)
        await page.type('#content', desc)
        await page.click('#_submit')
        await browser.close()
        return await true
    } catch (error) {
        console.error(error)
        return await false
    }
}
module.exports = run