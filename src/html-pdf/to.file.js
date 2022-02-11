const pdf = require('html-pdf')
const fs = require('fs')
const logger = require('js-logger')

module.exports = () => {
  const html = fs.readFileSync('./src/html-pdf/template.html', 'utf8')
  const options = {}

  return pdf.create(html, options).toFile('./src/html-pdf/assets/file.pdf', (err, data) => {
    if (err) {
      logger.error(err)
    }
    return data
  })
}