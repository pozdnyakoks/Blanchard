
const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();


const heroSwiper = new Swiper('.hero__swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});


document.querySelector(".nav__burger").addEventListener("click", function () {
  document.querySelector(".nav").classList.add("active");
  document.querySelector("body").classList.add("active");
})
document.querySelector(".header__nav-close").addEventListener("click", function () {
  document.querySelector(".nav").classList.remove("active");
  document.querySelector("body").classList.remove("active");
})



document.querySelectorAll(".nav__list-item").forEach(element => {
  element.addEventListener("click", function () {
    document.querySelector(".nav").classList.remove("active");
    document.querySelector("body").classList.remove("active");
  })
});

document.querySelector(".header__btn-open").addEventListener("click", function () {
  document.querySelector(".header__form").classList.add("active");
})


document.querySelector(".header__btn-close").addEventListener("click", function () {
  document.querySelector(".header__form").classList.remove("active");
})




const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
});


const gallerySwiper = new Swiper('.gallery-slides-container', {

  pagination: {
    el: ".gallery .gallery-swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },

    662: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }

})

$(".catalog__accordion").accordion({
  heightStyle: "content"
});

document.querySelectorAll('.catalog__tabs-nav-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.catalog__tabs-nav-btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav-btn--active')
    });
    e.currentTarget.classList.add('tabs-nav-btn--active');
    document.querySelectorAll('.catalog__tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

tippy('.projects-button', {
  theme: 'theme-button',
  // default
  placement: 'top',
  // default
  arrow: true,
  // default
  animation: 'fade',
  maxWidth: '275',
  trigger: 'click',
});


const projectsSwiper = new Swiper('.projects-slides-container', {
  navigation: {
    nextEl: ".projects-btn-next",
    prevEl: ".projects-btn-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },

    662: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    956: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },
  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },


  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }

});

const eventsSwiper = new Swiper('.events-slides-container', {
  pagination: {
    el: ".events .events-swiper-pagination",
    type: 'bullets',
    clickable: true

  },
  navigation: {
    nextEl: ".events-btn-next",
    prevEl: ".events-btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },

    662: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },
    996: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1200: {
      slidesPerView: 3,

      spaceBetween: 50
    },
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  }, 

 
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }

})



ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('map');
  const myMap = new ymaps.Map(
    "map",
    {

      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl'],
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition: { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "300px", right: "20px" }
    })

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: 'img/mapIcon.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
  ;
};


let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.contacts__form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true
    },
    phone: {
      required: true,
      function: (name, value) => {
        const ph = phone.inputmask.unmaskedvalue();
        return Number(ph) && ph.length === 10;
      }
    },
  },
  messages: {
    name: "Как вас зовут?",
    phone: {
      required: "Укажите ваш телефон",
      function: "Недостаточное количество символов"
    }
  }
});