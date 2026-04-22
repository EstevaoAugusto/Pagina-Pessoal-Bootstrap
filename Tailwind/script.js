// ── Theme toggle ──
const html   = document.documentElement;
const toggleBtn  = document.getElementById('themeToggle');
const themeIcon  = document.getElementById('themeIcon');

// Respect saved preference
if (localStorage.getItem('theme') === 'light') {
  html.classList.remove('dark');
  themeIcon.textContent = '🌙';
}

toggleBtn.addEventListener('click', () => {
  const isDark = html.classList.toggle('dark');
  themeIcon.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
if (e.isIntersecting) {
  e.target.classList.add('visible');
  observer.unobserve(e.target);
}
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Form submit ──
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('successMsg').classList.remove('hidden');
  e.target.reset();
}

// -- Menu Hamburger --
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const mobileLinks = document.querySelectorAll('.mobile-link');
const allSections = document.querySelectorAll('section');
const navBar = document.querySelector('nav');
const logoHero = document.getElementById('logoHero');

function toggleMenu() {
    // Abre/Fecha o menu
    mobileMenu.classList.toggle('translate-x-full');
   


    // Animação do ícone Hambúrguer vira "X"
    line1.classList.toggle('rotate-[42deg]');
    line2.classList.toggle('opacity-0');
    line3.classList.toggle('-rotate-[42deg]');
    
    // Bloqueia o scroll do corpo quando o menu está aberto
    document.body.classList.toggle('overflow-hidden');

    allSections.forEach(section => {
        section.classList.toggle('blur-sm');
    });
  }

menuBtn.addEventListener('click', toggleMenu);

// Fecha o menu ao clicar em qualquer link
mobileLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
});