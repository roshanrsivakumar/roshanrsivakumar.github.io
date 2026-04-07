/* ================================================
   ROSHAN R SIVAKUMAR — Transitions & Interactions
   ================================================ */

(function () {
  'use strict';

  /* ── Page Fade-In ─────────────────────────────── */
  const overlay = document.getElementById('pt-overlay');

  function fadeIn() {
    if (overlay) {
      overlay.classList.add('hidden');
      setTimeout(() => overlay.remove(), 600);
    }
    document.body.classList.add('loaded');
  }

  function fadeOut(href) {
    document.body.classList.add('leaving');
    if (overlay) {
      overlay.classList.remove('hidden');
    } else {
      const ov = document.createElement('div');
      ov.id = 'pt-overlay';
      document.body.appendChild(ov);
    }
    setTimeout(() => { window.location.href = href; }, 480);
  }

  /* ── Navigation Intercept ─────────────────────── */
  function initNav() {
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      if (
        href.startsWith('#') ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        link.getAttribute('target') === '_blank' ||
        link.classList.contains('no-transition')
      ) return;

      link.addEventListener('click', e => {
        e.preventDefault();
        fadeOut(link.href);
      });
    });
  }

  /* ── Active Nav Link ──────────────────────────── */
  function initActiveNav() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (
        (path === '/' && href === '/') ||
        (href !== '/' && path.startsWith(href))
      ) {
        a.classList.add('active');
      }
    });
  }

  /* ── Scroll Reveal ────────────────────────────── */
  function initReveal() {
    const els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = parseInt(entry.target.dataset.delay || 0) * 80;
        setTimeout(() => entry.target.classList.add('revealed'), delay);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => io.observe(el));
    /* Fallback: force-reveal elements already in viewport on load */
    setTimeout(() => {
      els.forEach(el => {
        if (el.classList.contains('revealed')) return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          const delay = parseInt(el.dataset.delay || 0) * 80;
          setTimeout(() => el.classList.add('revealed'), delay);
        }
      });
    }, 120);
  }

  /* ── Counter Animation ────────────────────────── */
  function initCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const io = new IntersectionObserver(entries => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        let start = 0;
        const dur = 1400;
        const step = 16;
        const inc = target / (dur / step);
        const tick = setInterval(() => {
          start += inc;
          if (start >= target) {
            el.textContent = Number.isInteger(target) ? target + suffix : target.toFixed(1) + suffix;
            clearInterval(tick);
          } else {
            el.textContent = Math.floor(start) + suffix;
          }
        }, step);
      }, { threshold: 0.5 });
      io.observe(el);
    });
  }

  /* ── Navbar Scroll Behaviour ──────────────────── */
  function initNavScroll() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    let last = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 60) { nav.classList.add('scrolled'); } else { nav.classList.remove('scrolled'); }
      last = y;
    }, { passive: true });
  }

  /* ── Mobile Hamburger ─────────────────────────── */
  function initHamburger() {
    const toggle = document.querySelector('.nav-toggle');
    const links  = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      const [s1, s2, s3] = toggle.querySelectorAll('span');
      if (open) {
        s1.style.transform = 'rotate(45deg) translate(5px,5px)';
        s2.style.opacity   = '0';
        s3.style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        s1.style.transform = '';
        s2.style.opacity   = '';
        s3.style.transform = '';
      }
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });
  }

  /* ── Cherry Blossom Wind Canvas ───────────────── */
  function initSakuraPetals() {
    const canvas = document.createElement('canvas');
    canvas.id = 'sakura-canvas';
    canvas.style.cssText = [
      'position:fixed',
      'top:0','left:0',
      'width:100%','height:100%',
      'pointer-events:none',
      'z-index:1',
      'opacity:1'
    ].join(';');
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }, { passive: true });

    /* Palette */
    const COLORS = [
      '#E8849A', '#F4B8C8', '#C85A76',
      '#D4A0B5', '#F0C8D8', '#FFB7C5',
      '#FADADD', '#F9C4D0'
    ];

    /* Wind state — gentle, gusting */
    let wind       = 0.4;
    let targetWind = 0.4;
    function scheduleGust() {
      setTimeout(() => {
        targetWind = (Math.random() - 0.25) * 2.8;
        scheduleGust();
      }, 2500 + Math.random() * 3500);
    }
    scheduleGust();

    /* Draw one sakura petal shape */
    function drawPetal(ctx, size, color) {
      ctx.fillStyle = color;
      /* Main lobe */
      ctx.beginPath();
      ctx.ellipse(0, -size * 0.2, size * 0.55, size * 0.9, 0, 0, Math.PI * 2);
      ctx.fill();
      /* Second lobe (offset for heart-like silhouette) */
      ctx.globalAlpha *= 0.85;
      ctx.beginPath();
      ctx.ellipse(size * 0.3, -size * 0.15, size * 0.45, size * 0.75, 0.45, 0, Math.PI * 2);
      ctx.fill();
      /* Highlight */
      ctx.globalAlpha *= 0.4;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.ellipse(-size * 0.15, -size * 0.3, size * 0.2, size * 0.35, -0.3, 0, Math.PI * 2);
      ctx.fill();
    }

    /* Petal class */
    class Petal {
      constructor(init) { this.spawn(init); }

      spawn(init) {
        this.x        = Math.random() * (W + 200) - 100;
        this.y        = init ? Math.random() * H : -20 - Math.random() * 80;
        this.size     = 5 + Math.random() * 9;
        this.vy       = 0.4 + Math.random() * 1.1;      /* fall speed */
        this.vx       = (Math.random() - 0.4) * 0.8;    /* base drift */
        this.rot      = Math.random() * Math.PI * 2;
        this.rotV     = (Math.random() - 0.5) * 0.06;   /* tumble */
        this.wobble   = Math.random() * Math.PI * 2;     /* sway phase */
        this.wobbleHz = 0.018 + Math.random() * 0.025;  /* sway speed */
        this.swayAmp  = 0.8 + Math.random() * 1.8;      /* sway width */
        this.alpha    = 0.45 + Math.random() * 0.5;
        this.color    = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.dead     = false;
      }

      update() {
        this.wobble += this.wobbleHz;
        const sway  = Math.sin(this.wobble) * this.swayAmp;
        this.x += this.vx + sway + wind * (0.6 + this.size * 0.04);
        this.y += this.vy;
        this.rot += this.rotV + wind * 0.008;
        if (this.y > H + 30 || this.x < -120 || this.x > W + 120) {
          this.dead = true;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.globalAlpha = this.alpha;
        drawPetal(ctx, this.size, this.color);
        ctx.restore();
      }
    }

    /* Pool */
    const MAX     = window.innerWidth < 600 ? 30 : 55;
    const petals  = [];
    for (let i = 0; i < MAX; i++) petals.push(new Petal(true));

    /* Spawn new petals to replace dead ones */
    let spawnTimer = 0;
    function tick() {
      ctx.clearRect(0, 0, W, H);
      /* Smooth wind */
      wind += (targetWind - wind) * 0.015;

      /* Update & draw */
      for (let i = petals.length - 1; i >= 0; i--) {
        petals[i].update();
        petals[i].draw();
        if (petals[i].dead) petals.splice(i, 1);
      }

      /* Replenish */
      spawnTimer++;
      if (spawnTimer % 18 === 0 && petals.length < MAX) {
        petals.push(new Petal(false));
      }

      requestAnimationFrame(tick);
    }
    tick();
  }

  /* ── Swiper Carousel ──────────────────────────── */
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;
    document.querySelectorAll('.photo-swiper').forEach(el => {
      new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        speed: 700,
        grabCursor: true,
        autoplay: { delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true },
        freeMode: { enabled: true, sticky: false },
      });
    });
  }

  /* ── Lightbox ─────────────────────────────────── */
  function initLightbox() {
    const lb  = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (!lb || !img) return;

    document.querySelectorAll('[data-lightbox]').forEach(el => {
      el.addEventListener('click', () => {
        img.src = el.dataset.lightbox || el.src || el.querySelector('img')?.src;
        lb.classList.add('open');
      });
    });

    lb.addEventListener('click', e => {
      if (e.target === lb || e.target.closest('.lightbox-close')) lb.classList.remove('open');
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') lb.classList.remove('open');
    });
  }

  /* ── Register Form ────────────────────────────── */
  function initRegisterForm() {
    const form = document.getElementById('register-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name     = form.querySelector('[name="name"]')?.value || '';
      const phone    = form.querySelector('[name="phone"]')?.value || '';
      const service  = form.querySelector('[name="service"]')?.value || '';
      const message  = form.querySelector('[name="message"]')?.value || '';
      const subject  = encodeURIComponent('myThrivehood Registration — ' + name);
      const body     = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nService Interested In: ${service}\n\nMessage:\n${message}\n\n---\nSent from myThrivehood registration form`
      );
      window.location.href = `mailto:roshanrsivakumar@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  /* ── Contact Form ─────────────────────────────── */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name    = form.querySelector('[name="name"]')?.value || '';
      const email   = form.querySelector('[name="email"]')?.value || '';
      const subject = form.querySelector('[name="subject"]')?.value || 'Message from website';
      const message = form.querySelector('[name="message"]')?.value || '';
      const sub     = encodeURIComponent(`[roshanrsivakumar.com] ${subject} — from ${name}`);
      const body    = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent via roshanrsivakumar.com`
      );
      window.location.href = `mailto:roshanrsivakumar@gmail.com?subject=${sub}&body=${body}`;
    });
  }

  /* ── Init ─────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    fadeIn();
    initSakuraPetals();   /* canvas first so petals are behind content */
    initNav();
    initActiveNav();
    initReveal();
    initCounters();
    initNavScroll();
    initHamburger();
    initSwiper();
    initLightbox();
    initRegisterForm();
    initContactForm();
  });

})();
