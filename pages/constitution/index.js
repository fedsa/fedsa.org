const html = require('html-template-tag')
const md = require('markdown-it')()

const { text } = require('../../public/data/constitution.json')

const { Menu } = require('../../components')

const page = () => html`
  <main class="Layout-content">
    <div class="Layout-row Smaller-width">
      $${md.render(text)}
    </div>
  </main>
`

module.exports = {
  page,
}