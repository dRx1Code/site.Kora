// mobile nav
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
  navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navList.classList.remove('open')));

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

function toggleSound(event, videoId) {
  event.stopPropagation();
  const video = document.getElementById(videoId);
  video.muted = !video.muted;
  const btn = event.currentTarget;

  const iconMuted = `<path d="M4 9v6h4l5 5V4L8 9H4Z"/><line x1="16" y1="9" x2="21" y2="14" stroke="currentColor" stroke-width="1.6"/><line x1="21" y1="9" x2="16" y2="14" stroke="currentColor" stroke-width="1.6"/>`;
  const iconSound = `<path d="M4 9v6h4l5 5V4L8 9H4Z"/><path d="M16 8.5c1.3 1 1.3 6 0 7" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M18.5 6c2.6 2.4 2.6 9.6 0 12" stroke="currentColor" stroke-width="1.6" fill="none"/>`;

  btn.querySelector('svg').innerHTML = video.muted ? iconMuted : iconSound;
  btn.setAttribute('aria-label', video.muted ? 'Ativar som' : 'Desativar som');
}