function scriptInit() {
  new Swiper('.swiper.character', {
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      360: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 150,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 200,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 300,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 350,
      },
    },
    autoHeight: true,
    speed: 2000,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: true,
    loop: true,
    grabCursor: true,
    simulateTouch: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });

  <!-- 第二三部分 文章滑動區塊 swiper -->
  new Swiper(".swiper.article", {
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    autoHeight: false,
    resizeObserver: true,
    speed: 1000,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: false,
    loop: false,
    grabCursor: false,
    simulateTouch: true,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next.article',
      prevEl: '.swiper-button-prev.article',
    },
    allowTouchMove: true,
    preventClicks: true,
  });

  new Swiper(".swiper.dress-head", {
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 200,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    grabCursor: false,
    simulateTouch: false,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next.dress-head',
      prevEl: '.swiper-button-prev.dress-head',
    },
    allowTouchMove: true,
    preventClicks: true,
  });


  new Swiper(".swiper.dress-body", {
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 200,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    grabCursor: false,
    simulateTouch: false,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next.dress-body',
      prevEl: '.swiper-button-prev.dress-body',
    },
    allowTouchMove: true,
    preventClicks: true,
  });

  new Swiper(".swiper.dress-bg", {
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 200,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    grabCursor: false,
    simulateTouch: false,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next.dress-bg',
      prevEl: '.swiper-button-prev.dress-bg',
    },
    allowTouchMove: true,
    preventClicks: true,
  });

  new Swiper(".swiper.dress-eyes", {
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 200,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    grabCursor: false,
    simulateTouch: false,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next.dress-eyes',
      prevEl: '.swiper-button-prev.dress-eyes',
    },
    allowTouchMove: true,
    preventClicks: true,
  });

  new Swiper(".swiper.dress-mouth", {
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 200,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    grabCursor: false,
    simulateTouch: false,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next.dress-mouth',
      prevEl: '.swiper-button-prev.dress-mouth',
    },
    allowTouchMove: true,
    preventClicks: true,
  });

  new Swiper(".swiper.dress-clothes", {
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 3,
    },
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    resizeObserver: true,
    speed: 200,
    allowSlideNext: true,
    allowSlidePrev: true,
    centeredSlides: false,
    centerInsufficientSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    grabCursor: false,
    simulateTouch: false,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next.dress-clothes',
      prevEl: '.swiper-button-prev.dress-clothes',
    },
    allowTouchMove: true,
    preventClicks: true,
  });
}
