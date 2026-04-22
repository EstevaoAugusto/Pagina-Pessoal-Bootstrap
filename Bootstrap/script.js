// ── Theme toggle ──
const html      = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Respect saved preference (default: dark)
const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-bs-theme', saved);
themeIcon.textContent = saved === 'dark' ? '☀️' : '🌙';

toggleBtn.addEventListener('click', () => {
  const current = html.getAttribute('data-bs-theme');
  const next    = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-bs-theme', next);
  themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
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

// ── Mobile hamburger menu ──
const menuBtn     = document.getElementById('menuBtn');
const mobileMenu  = document.getElementById('mobileMenu');
const line1       = document.getElementById('line1');
const line2       = document.getElementById('line2');
const line3       = document.getElementById('line3');
const mobileLinks = document.querySelectorAll('.mobile-link');
const allSections = document.querySelectorAll('section');

function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('open');

  // Hamburger → X animation
  line1.classList.toggle('open', isOpen);
  line2.classList.toggle('open', isOpen);
  line3.classList.toggle('open', isOpen);

  // Lock body scroll
  document.body.style.overflow = isOpen ? 'hidden' : '';

  // Blur background sections
  allSections.forEach(s => s.classList.toggle('blur-sm', isOpen));
}

menuBtn.addEventListener('click', toggleMenu);

// Close menu on link click
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// ── Form submit ──
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('successMsg');
  if (msg) msg.classList.remove('d-none');
  e.target.reset();
}