/**
 * XLINHX JADE BOOK JOURNEY — MASTER ORCHESTRATOR (Revision 02)
 * Micro-module initialization across 10 sections (<25 lines)
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  if ('scrollRestoration' in history && !window.location.hash) {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  if (typeof window.initNavigation === 'function') window.initNavigation();
  if (typeof window.initHero === 'function') window.initHero();
  if (typeof window.initProjects === 'function') window.initProjects();
  if (typeof window.initNeedsSelector === 'function') window.initNeedsSelector();
  if (typeof window.initScopeFlow === 'function') window.initScopeFlow();
  if (typeof window.initCollaborationDemo === 'function') window.initCollaborationDemo();
  if (typeof window.initResponsivePreview === 'function') window.initResponsivePreview();
  if (typeof window.initPersonTech === 'function') window.initPersonTech();
  if (typeof window.initFaqAccordion === 'function') window.initFaqAccordion();
  if (typeof window.initContactForm === 'function') window.initContactForm();
  if (typeof window.initContactStageMotion === 'function') window.initContactStageMotion();
});
