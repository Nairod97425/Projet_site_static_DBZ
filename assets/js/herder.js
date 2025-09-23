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

// monde sombre
document.getElementById("gris").onclick = partyGirs;
document.getElementById("blanc").onclick = partyBlanc;

function partyGirs() {
  document.querySelector("body").style.backgroundColor = "rgba(51, 47, 51, 1)";
  document.querySelector("body").style.color = "white";
  document.querySelector("p").style.color = "white";
  document.querySelector("h1").style.color = "white";
}


function partyBlanc() {
  document.querySelector("body").style.backgroundColor = "rgba(255, 255, 255, 1)";
  document.querySelector("body").style.color = "white";
  document.querySelector("p").style.color = "black";
  document.querySelector("h1").style.color = "black";
}