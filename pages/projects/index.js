const html = require('html-template-tag')

const page = () =>  html`
  <main class="Layout-content">
    <div class="Layout-row Smaller-width">
      <a class="card" href="https://google.co.za">
        <h2>FrontendConf 2019</h2>
        <p>The first major Frontend Conference in South Africa. FEDSA will be organizing this one</p>
      </a>
      <a class="card">
        <h2>CTFEDS Meetups</h2>
        <p>FEDSA is the organizer of the Cape Town Frontend Developers Meetup</p>
      </a>
      <a class="card">
        <h2>CTFEDS Meetups</h2>
        <p>FEDSA is the organizer of the Cape Town Frontend Developers Meetup</p>
      </a>
      <a class="card">
        <h2>FrontendConf 2019</h2>
        <p>The first major Frontend Conference in South Africa. FEDSA will be organizing this one</p>
      </a>
      <a class="card">
        <h2>CTFEDS Meetups</h2>
        <p>FEDSA is the organizer of the Cape Town Frontend Developers Meetup</p>
      </a>
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
    ['title', {}, config.name]
  ]
}