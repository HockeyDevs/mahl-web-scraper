const {fetchHtml, puppetContent} = require('./scraper')
const url =
  'http://mahockeyleague.com/Registration/Default.asp?n=&org=mahockeyleague.com&cat=Skills+Clinics'

puppetContent(url)
