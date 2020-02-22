const html = require('html-template-tag')

module.exports = ({ title, content }) => html `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="/public/main.css">
      <script src="/public/darkmode.js"></script>
    </head>
    <body>
      <div class="Layout">
        $${content}
      </div>
    </body>
    <script src="/public/main.js" defer async></script>
  </html>
`