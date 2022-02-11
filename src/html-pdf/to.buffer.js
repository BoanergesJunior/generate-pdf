const pdf = require('html-pdf')
const fs = require('fs')
const logger = require('js-logger')

module.exports = () => {
  const html = fs.readFileSync('./src/html-pdf/template.html', 'utf8')
  const options = {}

  pdf.create(html, options).toBuffer((err, buffer) => {
    if (err) return logger.error(err)
    console.log(buffer.toString('base64'))
  })
}