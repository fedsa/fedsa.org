const html = require('html-template-tag')

const Menu = () => html`
  <nav class="Menu-list">
    <div class="Menu-box">
      <a class="Menu-link" href="/">About</a>
      <span style="padding: 0 6px;">&nbsp;|&nbsp;</span>
      <a class="Menu-link" href="/constitution">Constitution</a>
      <span style="padding: 0 6px;">&nbsp;|&nbsp;</span>
      <a class="Menu-link" href="/projects">Projects</a>
      <span style="padding: 0 6px;">&nbsp;|&nbsp;</span>
      <a class="Menu-link" href="/members">Members</a>
      <span style="padding: 0 6px;">&nbsp;|&nbsp;</span>
      <button class="Menu-link">Toggle Dark Mode</button>
    </div>
  </nav>
`
module.exports = {
  Menu,
}
