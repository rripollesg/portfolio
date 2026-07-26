/**
* Template Name: iPortfolio - v3.9.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Portfolio modal gallery / video demo
   */
  const initPortfolioGallery = () => {
    const modal = select('#portfolioModal');
    if (!modal) return;

    const modalInner = select('.portfolio-modal-inner');
    const modalTitle = select('.portfolio-modal-title');
    const modalSubtitle = select('.portfolio-modal-subtitle');
    const modalDescription = select('.portfolio-modal-description');
    const modalTech = select('.portfolio-modal-tech');
    const modalMainSwiperEl = select('.portfolio-modal-main-swiper');
    const modalThumbsSwiperEl = select('.portfolio-modal-thumbs-swiper');
    const modalMainWrapper = select('.portfolio-modal-main-swiper .swiper-wrapper');
    const modalThumbsWrapper = select('.portfolio-modal-thumbs-swiper .swiper-wrapper');
    const videoWrap = select('.portfolio-modal-video-wrap');
    const videoEl = select('.portfolio-modal-video');
    let modalMainSwiper = null;
    let modalThumbsSwiper = null;

    const destroyModalSwipers = () => {
      if (modalMainSwiper) {
        modalMainSwiper.destroy(true, true);
        modalMainSwiper = null;
      }
      if (modalThumbsSwiper) {
        modalThumbsSwiper.destroy(true, true);
        modalThumbsSwiper = null;
      }
    };

    const stopVideo = () => {
      if (!videoEl) return;
      videoEl.pause();
      videoEl.removeAttribute('src');
      videoEl.load();
    };

    const fillMeta = (cardEl) => {
      const techRaw = cardEl.getAttribute('data-tech') || '';
      const tech = techRaw.split('|').map((item) => item.trim()).filter(Boolean);
      const layout = cardEl.getAttribute('data-layout') || 'web';

      modalTitle.textContent = cardEl.getAttribute('data-title') || 'Proyecto';
      modalSubtitle.textContent = cardEl.getAttribute('data-subtitle') || '';
      if (modalDescription) {
        modalDescription.textContent = cardEl.getAttribute('data-description') || '';
      }
      if (modalTech) {
        modalTech.innerHTML = tech.map((item) => `<span>${item}</span>`).join('');
      }
      if (modalInner) {
        modalInner.classList.toggle('is-phone', layout === 'phone');
      }
      return layout;
    };

    const closeModal = () => {
      modal.classList.remove('is-visible', 'is-video');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('portfolio-modal-open');
      if (modalInner) {
        modalInner.classList.remove('is-phone', 'is-video');
      }
      if (videoWrap) videoWrap.hidden = true;
      if (modalMainSwiperEl) modalMainSwiperEl.hidden = false;
      if (modalThumbsSwiperEl) modalThumbsSwiperEl.hidden = false;
      stopVideo();
      destroyModalSwipers();
    };

    const openGallery = (cardEl) => {
      const galleryRaw = cardEl.getAttribute('data-gallery') || '';
      const images = galleryRaw.split('|').map((img) => img.trim()).filter(Boolean);
      if (images.length === 0) return;

      const layout = fillMeta(cardEl);
      stopVideo();
      if (videoWrap) videoWrap.hidden = true;
      if (modalMainSwiperEl) modalMainSwiperEl.hidden = false;
      if (modalThumbsSwiperEl) modalThumbsSwiperEl.hidden = false;
      if (modalInner) modalInner.classList.remove('is-video');
      modal.classList.remove('is-video');

      modalMainWrapper.innerHTML = '';
      modalThumbsWrapper.innerHTML = '';

      images.forEach((imgSrc, index) => {
        modalMainWrapper.insertAdjacentHTML(
          'beforeend',
          `<div class="swiper-slide"><img src="${imgSrc}" alt="Vista ${index + 1}"></div>`
        );
        modalThumbsWrapper.insertAdjacentHTML(
          'beforeend',
          `<div class="swiper-slide"><img src="${imgSrc}" alt="Miniatura ${index + 1}"></div>`
        );
      });

      modal.classList.add('is-visible');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('portfolio-modal-open');

      destroyModalSwipers();

      modalThumbsSwiper = new Swiper('.portfolio-modal-thumbs-swiper', {
        spaceBetween: 10,
        slidesPerView: layout === 'phone' ? 5 : 4,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          0: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: layout === 'phone' ? 5 : 4
          }
        }
      });

      modalMainSwiper = new Swiper('.portfolio-modal-main-swiper', {
        spaceBetween: 10,
        loop: true,
        keyboard: {
          enabled: true
        },
        thumbs: {
          swiper: modalThumbsSwiper
        }
      });
    };

    const openVideo = (cardEl) => {
      const videoSrc = cardEl.getAttribute('data-video');
      if (!videoSrc || !videoEl || !videoWrap) return;

      fillMeta(cardEl);
      destroyModalSwipers();
      modalMainWrapper.innerHTML = '';
      modalThumbsWrapper.innerHTML = '';

      if (modalMainSwiperEl) modalMainSwiperEl.hidden = true;
      if (modalThumbsSwiperEl) modalThumbsSwiperEl.hidden = true;
      videoWrap.hidden = false;
      if (modalInner) modalInner.classList.add('is-video');
      modal.classList.add('is-visible', 'is-video');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('portfolio-modal-open');

      videoEl.src = videoSrc;
      videoEl.play().catch(() => {});
    };

    on('click', '.portfolio-open', function(e) {
      e.preventDefault();
      const cardEl = this.closest('.portfolio-card');
      if (cardEl) openGallery(cardEl);
    }, true);

    on('click', '.portfolio-demo-video', function(e) {
      e.preventDefault();
      const cardEl = this.closest('.portfolio-card');
      if (cardEl) openVideo(cardEl);
    }, true);

    on('click', '.portfolio-modal-close', function() {
      closeModal();
    });

    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
        closeModal();
      }
    });
  };

  initPortfolioGallery();

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  /*new PureCounter();*/

})()
