const fetch = require('node-fetch')
const puppeteer = require('puppeteer')

const fetchHtml = async url => {
  console.log('starting fetch...')
  try {
    const response = await fetch(url)
    const html = await response.text()
    // TODO:
    console.log(html)
  } catch (err) {
    console.error(err)
  }
  console.log('end fetch')
}

const puppetContent = async url => {
  console.log('starting puppet...')
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const specificPage = await page.goto(url)
    console.log(specificPage)
  } catch (err) {
    console.error(err)
  }
  console.log('end puppet')
}

module.exports = {fetchHtml, puppetContent}
