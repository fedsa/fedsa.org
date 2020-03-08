const html = require('html-template-tag')
const md = require('markdown-it')()

const { members } = require('../../public/data/members.json')

const Blurb = ({ title, body }) => html`
  <div class="Blurb">
    <h2 class="Blurb-title">${title}</h2>
    $${md.render(body)}
  </div>
`

const page = () => html`
  <main class="Layout-content">
    ${members.map(({ image, full_name, biography }) => html`
      <div class="Layout-member">
        <img src="${image}">
        <h2>${full_name}</h2>
        <p>${biography}</p>
      </div>
    `)}
  </main>
`

module.exports = {
  title: 'FEDSA',
  page,
  head: ({ config }) => [
    ['title', {}, `Members | ${config.name}`]
  ]
}