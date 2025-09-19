// menu burger mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
//menuToggle.addEventListener('click', () => {
//  menu.classList.toggle('active');
//  menuToggle.setAttribute('aria-expanded', menu.classList.contains('active'));
//});

// mode sombre
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
};
// Charger la préférence utilisateur
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

