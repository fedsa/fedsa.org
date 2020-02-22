const root = document.documentElement;
const buttons = document.querySelectorAll('button');
const supportsCssVar = CSS.supports('color', 'var(--test)');

let dark = JSON.parse(localStorage.getItem('app')).dark || false

const blurButtons = () => {
  Array.from(buttons).forEach(instance => instance.blur())
}

if (dark) {
  root.style.setProperty('--background', '#121212');
  root.style.setProperty('--base', 'white');
  root.style.setProperty('--text', '#CDCCCD');
  root.style.setProperty('--accent', '#3F3F3F');
  root.style.setProperty('--surface', '#363636');
  Array.from(buttons).forEach(instance => {
    instance.classList.add('active');
    instance.disabled = false;
  });
} else {
  root.style.setProperty('--background', 'white');
  root.style.setProperty('--base', 'black');
  root.style.setProperty('--text', '#3B454E');
  root.style.setProperty('--accent', '#EEEEEE');
  root.style.setProperty('--surface', '#E0E0E0');
}

const toggleTheme = () => {
  if (dark) {
    root.style.setProperty('--background', 'white');
    root.style.setProperty('--base', 'black');
    root.style.setProperty('--text', '#3B454E');
    root.style.setProperty('--accent', '#EEEEEE');
    root.style.setProperty('--surface', '#E0E0E0');
    dark = false;
    localStorage.setItem('app', JSON.stringify({
      dark: false,
    }))
    buttons.innerText = 'Toggle Dark Mode';
    blurButtons()
    return;
  }

  root.style.setProperty('--background', '#121212');
  root.style.setProperty('--base', 'white');
  root.style.setProperty('--text', '#CDCCCD');
  root.style.setProperty('--accent', '#3F3F3F');
  root.style.setProperty('--surface', '#363636');
  dark = true;
  localStorage.setItem('app', JSON.stringify({
    dark: true,
  }))
  buttons.innerText = 'Toggle Light Mode';
  blurButtons()
  return;
};


if (supportsCssVar) {
  Array.from(buttons).forEach(instance => {
    instance.classList.add('active');
    instance.disabled = false;
    instance.addEventListener('click', toggleTheme);
  });
}

const menuMap = new Map([
  ['/', document.querySelector('a[href="/"]')],
  ['/constitution/', document.querySelector('a[href="/constitution"]')],
  ['/projects/', document.querySelector('a[href="/projects"]')],
  ['/members/', document.querySelector('a[href="/members"]')]
])

for (const [href, el] of menuMap) {
  if (location.pathname === href) {
    el.classList.add('active-link')
  }
}