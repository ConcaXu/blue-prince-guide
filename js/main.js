// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Smooth scroll for anchor links (works on browsers without CSS smooth-scroll)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + id);
      }
    });
  });

  // Highlight TOC link as you scroll
  const tocLinks = document.querySelectorAll('.toc a');
  if (tocLinks.length) {
    const sections = Array.from(tocLinks).map(a => {
      const id = a.getAttribute('href').slice(1);
      return { link: a, el: document.getElementById(id) };
    }).filter(s => s.el);

    const onScroll = () => {
      const y = window.scrollY + 120;
      let active = sections[0];
      for (const s of sections) {
        if (s.el.offsetTop <= y) active = s;
      }
      tocLinks.forEach(l => l.style.color = '');
      if (active) active.link.style.color = 'var(--accent-bright)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
});
