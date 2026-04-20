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
