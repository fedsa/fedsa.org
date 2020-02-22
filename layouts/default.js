const html = require('html-template-tag')

module.exports = ({ content, head }) => html `
  <!DOCTYPE html>
  <html>
    <head>
      $${head}
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