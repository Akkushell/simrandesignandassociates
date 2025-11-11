// Smooth scroll effect for on-page navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    // Only prevent default for in-page anchors that exist
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Mobile nav toggle
const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.nav-toggle');
const menu = document.getElementById('primary-menu');

if (toggleBtn && navbar && menu) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close the menu when a link is clicked (mobile) - except dropdown parent
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      // Don't close if clicking on dropdown parent
      if (link.parentElement.classList.contains('dropdown') && window.innerWidth <= 900) {
        return;
      }
      if (navbar.classList.contains('open')) {
        navbar.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > .nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const dropdown = link.parentElement;
      dropdown.classList.toggle('active');
    }
  });
});

// Handle window resize - close mobile menu when resizing to desktop
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.innerWidth > 900 && navbar && navbar.classList.contains('open')) {
      navbar.classList.remove('open');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
    }
    // Remove active state from dropdowns when resizing to desktop
    if (window.innerWidth > 900) {
      document.querySelectorAll('.dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  }, 250);
});

// Add scrolled class for visual depth after hero
const onScroll = () => {
  if (!navbar) return;
  const threshold = 20; // px
  if (window.scrollY > threshold) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Slider Logic =====
(function() {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('.slider-arrow.prev');
  const nextBtn = slider.querySelector('.slider-arrow.next');
  const dots = Array.from(slider.querySelectorAll('.dot'));

  let index = 0;
  let timer = null;
  const duration = 6000; // ms

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle('active', idx === index));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === index));
  }

  function next() { show(index + 1); }
  function prev() { show(index - 1); }

  function start() {
    stop();
    timer = setInterval(next, duration);
  }
  function stop() { if (timer) clearInterval(timer); timer = null; }

  // Events
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); start(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); start(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { show(i); start(); }));

  // Pause on hover (desktop)
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);

  // Touch events for mobile swipe
  let touchStartX = 0;
  let touchEndX = 0;
  
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stop();
  }, { passive: true });
  
  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    start();
  }, { passive: true });
  
  function handleSwipe() {
    const swipeThreshold = 50; // minimum distance for swipe
    if (touchEndX < touchStartX - swipeThreshold) {
      next(); // swipe left
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prev(); // swipe right
    }
  }

  // Keyboard accessibility
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { next(); start(); }
    if (e.key === 'ArrowLeft') { prev(); start(); }
  });

  show(0);
  start();
})();
