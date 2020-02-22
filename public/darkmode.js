window.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('button');

  let { dark = false } = JSON.parse(localStorage.getItem('app')) || {}


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
})