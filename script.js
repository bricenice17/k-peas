(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  if (!document.querySelector('.floating-quick-actions')) {
    const quickBar = document.createElement('div');
    quickBar.className = 'floating-quick-actions';
    quickBar.innerHTML = `
      <a class="button primary" href="pricing.html">See pricing</a>
      <a class="button secondary" href="programs.html#schedule">View schedule</a>
      <a class="button secondary" href="connect.html">Message us</a>
    `;
    header?.insertAdjacentElement('afterend', quickBar);
  }

  if (toggle && header && nav) {
    toggle.addEventListener('click', () => {
      header.classList.toggle('nav-open');
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });

    header.addEventListener('click', (event) => {
      const anchor = event.target.closest('.main-nav a');
      if (!anchor) return;
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  const setScrolled = () => {
    if (!header) return;
    if (window.scrollY > 14) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', setScrolled, { passive: true });
  setScrolled();
})();
