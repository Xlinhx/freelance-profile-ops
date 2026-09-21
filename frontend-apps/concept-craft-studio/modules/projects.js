/**
 * PROJECTS MODULE — XLINHX JADE BOOK JOURNEY
 * S02 Projects scroll-reveal orchestrator.
 * Tuân thủ triết lý Anti-God File (micro-module độc lập < 40 dòng).
 */
(function() {
  'use strict';

  function initProjects() {
    const reveals = document.querySelectorAll('.projects-reveal');
    if (!reveals.length) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      reveals.forEach(function(el) {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.08
    });

    reveals.forEach(function(el) {
      observer.observe(el);
    });
  }

  window.initProjects = initProjects;
})();
