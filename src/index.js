const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const logo = document.getElementById('logo');
const logoMode = document.getElementById('logo-mode');
const design = document.getElementById('design');
const designMode = document.getElementById('design-mode');
const html = document.documentElement;

moonIcon.addEventListener('click', () => {
  html.classList.add('dark');
  moonIcon.classList.add('hidden');
  sunIcon.classList.remove('hidden');
  logo.classList.add('hidden');
  logoMode.classList.remove('hidden');
  design.classList.add('hidden');
  designMode.classList.remove('hidden');
});

sunIcon.addEventListener('click', () => {
  html.classList.remove('dark');
  sunIcon.classList.add('hidden');
  moonIcon.classList.remove('hidden');
  logoMode.classList.add('hidden');
  logo.classList.remove('hidden');
  designMode.classList.add('hidden');
  design.classList.remove('hidden');
});