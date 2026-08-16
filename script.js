(function () {
  const toggle = document.getElementById('menu-toggle');
  const header = document.querySelector('.site-header');
  const quickBarRendered = document.querySelector('.floating-quick-actions');

  if (!quickBarRendered) {
    const quickBar = document.createElement('div');
    quickBar.className = 'floating-quick-actions';

    const ctaButtons = [
      { href: 'pricing.html', label: 'See pricing', type: 'primary' },
      { href: 'programs.html#schedule', label: 'View schedule', type: 'secondary' },
      { href: 'connect.html', label: 'Message us', type: 'secondary' },
    ];

    quickBar.innerHTML = ctaButtons
      .map((item) => `<a class="button ${item.type}" href="${item.href}">${item.label}</a>`)
      .join('');
    header?.insertAdjacentElement('afterend', quickBar);
  }

  if (toggle && header) {
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
})();
