/**
 * Porcelain Toast Notification Module
 */
(function() {
  'use strict';

  function showPorcelainToast(message) {
    let toast = document.getElementById('porcelain-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'porcelain-toast';
      toast.className = 'porcelain-toast';
      toast.innerHTML = '<span class="porcelain-toast-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span><span class="porcelain-toast-text"></span>';
      document.body.appendChild(toast);
    }
    const textEl = toast.querySelector('.porcelain-toast-text');
    if (textEl) textEl.textContent = message;

    toast.classList.add('is-visible');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3600);
  }

  window.showPorcelainToast = showPorcelainToast;
})();
