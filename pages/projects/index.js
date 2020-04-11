const html = require('html-template-tag')
const { projects } = require('../../public/data/projects.json')

const ProjectCard = ({ title, description, link = false }) => html`
  <a class="card" ${link ? `href=${link}` : ''}>
    <h2>${title}</h2>
    <p>${description}</p>
  </a>
`

const page = () =>  html`
  <main class="Layout-content">
    <div class="Layout-row Smaller-width">
      ${projects.map(ProjectCard)}
    </div>
    <style>
      .card {
        padding: 5px 20px 10px 20px;
        border: 1px solid var(--accent);
        border-radius: 4px;
        width: 100%;
        margin: 7px 0px;
        cursor: pointer;
        text-decoration: none;
        color: var(--base)
      }

      .card:nth-child(3n+1) {
        border-left: 3px solid #ecb31e;
      }

      .card:nth-child(3n+2) {
        border-left: 3px solid #105ea9;
      }

      .card:nth-child(3n+3) {
        border-left: 3px solid #eb5022;
      }

      .card:hover {
        box-shadow: rgba(116, 129, 141, 0.1) 0px 3px 8px;
      }
    </style>
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