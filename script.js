// Birthday celebration page client-side logic
// Handles interactive features for Shafiq's birthday

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('header');

  if (navLinks) {
    // Toggle mobile menu
    navLinks.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        navLinks.classList.toggle('open');
      }
    });
  }

  // Close mobile menu when a link is clicked
  const navLinksAnchors = document.querySelectorAll('.nav-links a');
  navLinksAnchors.forEach(anchor => {
    anchor.addEventListener('click', function() {
      if (window.innerWidth <= 768 && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
      }
    });
  });

  // Scroll reveal effect for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });
  }

  // Button ripple effect
  const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.style.position = 'absolute';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.style.width = '0';
      ripple.style.height = '0';
      ripple.style.background = 'rgba(255, 255, 255, 0.3)';
      ripple.style.borderRadius = '50%';
      ripple.style.transform = 'scale(0)';
      ripple.style.pointerEvents = 'none';
      ripple.style.transition = 'width 0.6s ease, height 0.6s ease, opacity 0.6s ease';

      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);

      setTimeout(function() {
        ripple.style.width = '200%';
        ripple.style.height = '200%';
        ripple.style.opacity = '0';
        setTimeout(function() {
          ripple.remove();
        }, 600);
      }, 10);
    });
  });

  // Form validation for any message form
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const input = form.querySelector('input');
      if (input && !input.value.trim()) {
        e.preventDefault();
        showError(input, 'Please enter a message');
      }
    });
  });

  function showError(input, message) {
    clearError(input);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.75rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.style.textAlign = 'left';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
    input.style.borderColor = '#ef4444';
  }

  function clearError(input) {
    const existingError = input.parentElement.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }
    input.style.borderColor = '';
  }
});