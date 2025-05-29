function initSwiperBullet() {
  const swiper = new Swiper('.swiper-bullet', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.bullet-pagination',
      clickable: true,
    },
    updateOnWindowResize: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperAbout() {
  const swiper = new Swiper('.swiper-about', {
    speed: 550,
    effect: 'slide',
    rewind: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.about-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      200: {
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        spaceBetween: 10,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1400: {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  })
}

function initSwiperCity() {
  const swiper = new Swiper('.swiper-city', {
    speed: 550,
    effect: 'slide',
    rewind: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.city-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      prevEl: '.button-prev',
      nextEl: '.button-next',
    },
    breakpoints: {
      200: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 10,
        slidesPerView: 1,
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      1400: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
    },
  })
}

$(document).ready(function () {
  initSwiperBullet()
  initSwiperAbout()
  initSwiperCity()
})
