const html = require('html-template-tag')
const { Menu } = require('../../components')
const md = require('markdown-it')()

const Blurb = ({ title, body }) => html`
  <div class="Blurb">
    <h2 class="Blurb-title">${title}</h2>
    $${md.render(body)}
  </div>
`

const page = () => html`
  <header class="Layout-header">
    <div class="Logo">
      <div class="Logo-shape">
        <div class="Logo-box Logo-box--1">
          <svg class="Logo-instance Logo-instance--1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 518.002 283.149">
            <path
              d="M513.612 245.644a24.235 24.235 0 00-3.765-4.868l-50.005-50.005.159-.159L348.167 78.777l-.159.159-.107-.107v-.219l-71.47-71.47C271.64 2.349 265.316-.028 259.001 0c-6.315-.028-12.639 2.349-17.43 7.14l-71.47 71.47v.219l-.107.107-.159-.159L58 190.611l.159.159-50.005 50.005a24.3 24.3 0 00-3.765 4.868A23.59 23.59 0 000 259.384c0 13.022 10.507 23.589 23.506 23.688v.077h14.236v-.064H201.33v.064h14.236v-.064l43.435-.008 43.435.008v.064h14.236v-.064h163.587v.064h14.236v-.077c12.999-.099 23.507-10.666 23.507-23.688 0-5.123-1.626-9.865-4.39-13.74z">
            </path>
          </svg>
        </div>
        <div class="Logo-box Logo-box--2">
          <svg class="Logo-instance Logo-instance--2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 518.002 283.149"
            style="width: 65%; top: 0; left:100px; overflow: visible; position: absolute; mix-blend-mode: multiply;">
            <path
              d="M513.612 245.644a24.235 24.235 0 00-3.765-4.868l-50.005-50.005.159-.159L348.167 78.777l-.159.159-.107-.107v-.219l-71.47-71.47C271.64 2.349 265.316-.028 259.001 0c-6.315-.028-12.639 2.349-17.43 7.14l-71.47 71.47v.219l-.107.107-.159-.159L58 190.611l.159.159-50.005 50.005a24.3 24.3 0 00-3.765 4.868A23.59 23.59 0 000 259.384c0 13.022 10.507 23.589 23.506 23.688v.077h14.236v-.064H201.33v.064h14.236v-.064l43.435-.008 43.435.008v.064h14.236v-.064h163.587v.064h14.236v-.077c12.999-.099 23.507-10.666 23.507-23.688 0-5.123-1.626-9.865-4.39-13.74z"
              fill=""></path>
          </svg>
        </div>
        <div class="Logo-box Logo-box--3">
          <svg class="Logo-instance Logo-instance--3" xmlns="http://www.w3.org/2000/svg" id="shape-3"
            viewBox="0 0 483.04 231.165">
            <path d="M483.04 231.165L259.02 7.145c-9.526-9.527-25.115-9.527-34.641 0L121.31 110.214v120.951h361.73z">
            </path>
          </svg>
        </div>
        <div class="Logo-box Logo-box--4">
          <svg class="Logo-instance Logo-instance--4" xmlns="http://www.w3.org/2000/svg" id="shape-3"
            viewBox="0 0 483.04 231.165">
            <path d="M121.497 109.576L0 231.073h121.497v-120.95z"></path>
          </svg>
        </div>
      </div>
      <h1 class="Logo-text">FEDSA</h1>
    </div>
    <div class="Menu">
      $${Menu()}
      <div class="Menu-list Menu-list--mobile">
        <select>
          <option disabled="disabled" selected="selected">Change page</option>
          <option>Constitution</option>
          <option>Projects</option>
          <option>Members</option>
        </select>
        <button class="styled">Toggle Dark Mode</button>
      </div>
    </div>
  </header>
  <main class="Layout-content">
    <div class="Layout-member">
      <img  src="https://media-exp1.licdn.com/dms/image/C4D03AQGy-zPHoCnVwQ/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=iIHNVJ2DeX5Z6_ZDgzDK0ya0NLMl6g_WRgIkBS6C6Es">
      <h2>Schalk Venter</h2>
      <p>Passionate about UI/UX development</p>
    </div>
    <div class="Layout-member">
      <img  src="https://media-exp1.licdn.com/dms/image/C4E03AQFeR74Umw2L1A/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=GbIh7_4TPofrMN7kBBTe7o9TIA0rTnom_c5GyXHpttw">
      <h2>Justin Slack</h2>
      <p>Passionate about UI/UX development</p>
    </div>
    <div class="Layout-member">
      <img  src="https://media-exp1.licdn.com/dms/image/C4E03AQEPcCxyfhGgxA/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=pf3v_pOrv7-s5R47vVyo9fSU2elgRChR0il6exkr-kM">
      <h2>Shailen Naidoo</h2>
      <p>Passionate about JavaScript</p>
    </div>
  </main>
`

module.exports = {
  title: 'FEDSA',
  page,
  head: ({ config }) => [
    ['title', {}, `Members | ${config.name}`]
  ]
}