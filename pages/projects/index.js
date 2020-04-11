const html = require('html-template-tag')
const { projects } = require('../../public/data/projects.json')

const ProjectCard = ({ title, description, link = false }) => html`
  <a class="Card" ${link ? `href=${link}` : ''}>
    <h2>${title}</h2>
    <p>${description}</p>
  </a>
`

const page = () =>  html`
  <main class="Layout-content">
    <div class="Layout-row Smaller-width">
      ${projects.map(ProjectCard)}
    </div>
  </main>
`

module.exports = {
  page,
  head: ({ config }) => [
    ['title', {}, `Projects | ${config.name}`],
    ['meta', { name: 'description', content: 'The projects that FEDSA helps organize' }],
    ['meta', { name: 'title', content: `Projects | ${config.name}` }],
    ['meta', { property: 'og:description', content: 'The projects that FEDSA helps organize' }],
    ['meta', { property: 'og:title', content: `Projects | ${config.name}` }],
  ]
}