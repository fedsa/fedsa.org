const root = document.documentElement;
const buttons = document.querySelectorAll('button');
const supportsCssVar = CSS.supports('color', 'var(--test)');

let dark = false;

const blurButtons = () => {
  Array.from(buttons).forEach(instance => instance.blur())
}

const toggleTheme = () => {
  if (dark) {
    root.style.setProperty('--background', 'white');
    root.style.setProperty('--base', 'black');
    root.style.setProperty('--text', '#3B454E');
    root.style.setProperty('--accent', '#EEEEEE');
    root.style.setProperty('--surface', '#E0E0E0');
    dark = false;
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