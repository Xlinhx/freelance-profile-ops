/**
 * S09: CONTACT BRIEF MODULE — XLINHX JADE BOOK JOURNEY (Revision 03)
 * "Kể mình nghe điều bạn muốn thay đổi. Một vài dòng là đủ để bắt đầu."
 * Xử lý tương tác Form, soạn Mailto, điều hướng cuộn lên đầu trang.
 * Tương thích ngược với các kịch bản gọi từ S03 / S04 / S08.
 * Ground truth: linhnx.developer@gmail.com / Zalo 0932 433 459.
 */
(function() {
  'use strict';

  function initContactForm() {
    const textarea = document.getElementById('contact-message');
    const contactInput = document.getElementById('contact-info');
    const submitBtn = document.getElementById('contact-submit-btn') || document.getElementById('s10-submit-btn');
    const scrollTopBtn = document.getElementById('s09-scroll-top-btn') || document.getElementById('scroll-top-btn');
    const scrollTopLink = document.getElementById('s09-scroll-top-link');

    // Mailto generator trigger
    if (submitBtn && textarea) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const message = textarea.value.trim();
        const contactInfo = contactInput ? contactInput.value.trim() : '';

        if (!message) {
          if (window.showPorcelainToast) {
            window.showPorcelainToast('Vui lòng nhập việc bạn đang cần trao đổi.');
          }
          textarea.focus();
          return;
        }

        const subject = 'Trao đổi ý tưởng dự án với Xlinhx';
        let body = 'Xin chào Xlinhx,\n\n';
        body += 'Mình muốn trao đổi về bài toán sau:\n';
        body += message + '\n\n';
        if (contactInfo) {
          body += 'Thông tin liên hệ lại:\n' + contactInfo + '\n\n';
        }
        body += '—\nGửi từ trang portfolio Xlinhx (Craft Studio)';

        const mailtoUrl = 'mailto:linhnx.developer@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        window.location.href = mailtoUrl;

        if (window.showPorcelainToast) {
          window.showPorcelainToast('Đang mở ứng dụng email của bạn.');
        }
      });
    }

    // Scroll to top triggers
    function scrollToTop(e) {
      if (e) e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', scrollToTop);
    }
    if (scrollTopLink) {
      scrollTopLink.addEventListener('click', scrollToTop);
    }

    // Global setter for S03 / S04 / S08 triggers
    window.setContactBriefScenario = function(scenario) {
      if (!scenario) return;

      // ONLY suggest text if textarea is currently empty
      if (textarea && textarea.value.trim() === '' && scenario.suggestedText) {
        textarea.value = scenario.suggestedText;
      }

      // Smoothly scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (textarea) textarea.focus();
        }, 600);
      }
    };
  }

  window.initContactForm = initContactForm;
})();
