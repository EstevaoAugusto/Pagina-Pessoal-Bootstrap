// ── Theme toggle ──
const html            = document.documentElement;
const toggleBtn       = document.getElementById('themeToggle');
const toggleBtnMobile = document.getElementById('themeToggleMobile');
const themeIcon       = document.getElementById('themeIcon');
const themeIconMobile = document.getElementById('themeIconMobile');
const themeLabel      = document.getElementById('themeLabelMobile');

function updateThemeUI(isDark) {
  const icon  = isDark ? '☀️' : '🌙';
  const label = isDark ? 'Tema claro' : 'Tema escuro';
  if (themeIcon)       themeIcon.textContent       = icon;
  if (themeIconMobile) themeIconMobile.textContent  = icon;
  if (themeLabel)      themeLabel.textContent       = label;
}

function applyThemeToggle() {
  const isDark = html.getAttribute('data-bs-theme') === 'dark';
  html.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
  updateThemeUI(!isDark);
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Respeita preferência salva
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-bs-theme', saved);
updateThemeUI(html.getAttribute('data-bs-theme') === 'dark');

toggleBtn.addEventListener('click', applyThemeToggle);
toggleBtnMobile.addEventListener('click', applyThemeToggle);

// ── Mobile Menu ──
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const line1      = document.getElementById('line1');
const line2      = document.getElementById('line2');
const line3      = document.getElementById('line3');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('open');
  line1.classList.toggle('open', isOpen);
  line2.classList.toggle('open', isOpen);
  line3.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

menuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

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