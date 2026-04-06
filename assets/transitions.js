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
