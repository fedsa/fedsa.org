const html = require('html-template-tag')
const homepageData = require('../public/data/homepage.json')
const { Menu } = require('../components')
const md = require('markdown-it')()

const Blurb = ({ title, body }) => html`
  <div class="Blurb">
    <h2 class="Blurb-title">${title}</h2>
    $${md.render(body)}
  </div>
`

const page = () => html`
  <main class="Layout-content">
    <div class="Layout-row">
      <div class="Layout-column">
        ${homepageData.left_column.map(Blurb)}
      </div>
      <div class="Layout-column">
        ${homepageData.middle_column.map(Blurb)}
      </div>
      <div class="Layout-column">
        ${homepageData.right_column.map(Blurb)}
      </div>
    </div>
  </main>
`

module.exports = {
  title: 'FEDSA',
  page,
  head: ({ config }) => [
    ['title', {}, config.name]
  ]
}