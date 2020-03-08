const html = require('html-template-tag')

module.exports = ({ content, head }) => html `
  <!DOCTYPE html>
  <html>
    <head>
      $${head}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli&display=swap">
      <link rel="stylesheet" href="/public/main.css">
    </head>
    <body>
      <div class="Layout">
        $${content}
      </div>
    </body>
    <script src="/public/darkmode.js"></script>
    <script src="/public/main.js" defer async></script>
  </html>
`