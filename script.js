document.addEventListener('DOMContentLoaded', () => {
  // ===== Header scroll effect =====
  const header = document.querySelector('.header');

  const handleScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ===== Scroll animations (Intersection Observer) =====
  const fadeEls = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach((el) => observer.observe(el));

  // ===== Smooth scroll for anchor links =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ===== FAQ Accordion =====
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      // Toggle current item
      item.classList.toggle('active');
      if (!isActive) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

  // ===== Accessibility Widget =====
  const a11yToggle = document.getElementById('a11y-toggle');
  const a11yContainer = document.getElementById('a11y-widget');
  const fontIncreaseBtn = document.getElementById('font-increase');
  const fontDecreaseBtn = document.getElementById('font-decrease');
  const fontResetBtn = document.getElementById('font-reset');
  const htmlEl = document.documentElement;

  // Toggle controls
  a11yToggle.addEventListener('click', () => {
    a11yContainer.classList.toggle('active');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!a11yContainer.contains(e.target) && a11yContainer.classList.contains('active')) {
      a11yContainer.classList.remove('active');
    }
  });

  // Font size control
  // Base font size is 16px (100%)
  let currentFontSize = 100;
  const minFontSize = 100;
  const maxFontSize = 150; // Up to 24px equivalent
  const step = 10;

  const setFontSize = (size) => {
    currentFontSize = size;
    htmlEl.style.fontSize = `${currentFontSize}%`;
    localStorage.setItem('preventSenior_fontSize', currentFontSize);
  };

  // Load saved preference
  const savedFontSize = localStorage.getItem('preventSenior_fontSize');
  if (savedFontSize) {
    setFontSize(parseInt(savedFontSize));
  }

  fontIncreaseBtn.addEventListener('click', () => {
    if (currentFontSize < maxFontSize) {
      setFontSize(currentFontSize + step);
    }
  });

  fontDecreaseBtn.addEventListener('click', () => {
    if (currentFontSize > minFontSize) {
      setFontSize(currentFontSize - step);
    }
  });

  fontResetBtn.addEventListener('click', () => {
    setFontSize(100);
  });

  // ===== Mobile Navigation =====
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });

  // ===== Quick Quote Form =====
  const quoteForm = document.getElementById('quote-form');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const age = document.getElementById('age').value;

      const message = `*Olá! Preenchi o formulário no site e gostaria de uma cotação.*%0A%0A*Nome:* ${name}%0A*Telefone:* ${phone}%0A*Idade:* ${age}`;
      const whatsappNumber = '5511963297689';
      const url = `https://wa.me/${whatsappNumber}?text=${message}`;

      window.open(url, '_blank');
    });
  }

  // ===== Units Carousel (Infinite Loop) =====
  const initCarousel = (trackId, prevId, nextId, dotsId, wrapperId) => {
    const track = document.getElementById(trackId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    const dotsContainer = document.getElementById(dotsId);
    const carousel = document.getElementById(wrapperId);

    if (!track || !prevBtn || !nextBtn || !dotsContainer || !carousel) return;

    const originalCards = Array.from(track.querySelectorAll('.carousel-card'));
    const totalCards = originalCards.length;
    let currentIndex = 0;
    let autoPlayInterval;
    let isTransitioning = false;

    const getPerView = () => window.innerWidth <= 768 ? 1 : 3;
    const getMaxIndex = () => Math.max(0, totalCards - getPerView());

    // Clone cards at end for seamless forward looping
    const setupClones = () => {
      track.querySelectorAll('.carousel-clone').forEach(c => c.remove());
      const pv = getPerView();
      for (let i = 0; i < pv; i++) {
        const clone = originalCards[i].cloneNode(true);
        clone.classList.add('carousel-clone');
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
      }
    };

    const buildDots = () => {
      dotsContainer.innerHTML = '';
      const numDots = getMaxIndex() + 1;
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        if (i === currentIndex % numDots) dot.classList.add('active');
        dot.addEventListener('click', () => {
          if (!isTransitioning) {
            currentIndex = i;
            moveTrack(true);
            restartAutoPlay();
          }
        });
        dotsContainer.appendChild(dot);
      }
    };

    const moveTrack = (animate) => {
      const pv = getPerView();
      const gap = 24;
      const cardW = (track.parentElement.offsetWidth - gap * (pv - 1)) / pv;
      track.style.transition = animate
        ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        : 'none';
      track.style.transform = `translateX(-${currentIndex * (cardW + gap)}px)`;
      // Update dots
      const numDots = getMaxIndex() + 1;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex % numDots);
      });
    };

    const afterTransition = (cb) => {
      const fn = () => { track.removeEventListener('transitionend', fn); cb(); };
      track.addEventListener('transitionend', fn);
    };

    const goNext = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex++;
      moveTrack(true);
      afterTransition(() => {
        if (currentIndex >= totalCards) {
          currentIndex = 0;
          moveTrack(false);
          void track.offsetHeight;
        }
        isTransitioning = false;
      });
    };

    const goPrev = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      if (currentIndex > 0) {
        currentIndex--;
        moveTrack(true);
        afterTransition(() => { isTransitioning = false; });
      } else {
        currentIndex = totalCards;
        moveTrack(false);
        void track.offsetHeight;
        currentIndex = totalCards - 1;
        moveTrack(true);
        afterTransition(() => { isTransitioning = false; });
      }
    };

    prevBtn.addEventListener('click', () => { goPrev(); restartAutoPlay(); });
    nextBtn.addEventListener('click', () => { goNext(); restartAutoPlay(); });

    // Touch/swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    track.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goNext(); else goPrev();
        restartAutoPlay();
      }
    }, { passive: true });

    // Auto-play
    const startAutoPlay = () => { autoPlayInterval = setInterval(goNext, 5000); };
    const restartAutoPlay = () => { clearInterval(autoPlayInterval); startAutoPlay(); };

    carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    carousel.addEventListener('mouseleave', startAutoPlay);

    window.addEventListener('resize', () => {
      setupClones();
      if (currentIndex > getMaxIndex()) currentIndex = getMaxIndex();
      buildDots();
      moveTrack(false);
    });

    // Init
    setupClones();
    buildDots();
    moveTrack(false);
    startAutoPlay();
  };

  // Initialize both carousels
  initCarousel('carousel-track-rj', 'carousel-prev-rj', 'carousel-next-rj', 'carousel-dots-rj', 'units-carousel-rj');
  initCarousel('carousel-track-sp', 'carousel-prev-sp', 'carousel-next-sp', 'carousel-dots-sp', 'units-carousel-sp');
});
