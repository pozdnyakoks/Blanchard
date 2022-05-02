
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


const heroSwiper = new Swiper(".hero-swiper", {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

let nav = document.querySelector(".nav");
let body = document.querySelector("body");
let headerForm = document.querySelector(".header__form");

document.querySelector(".header__burger").addEventListener("click", function () {
  nav.classList.add("active");
  body.classList.add("active");
})

document.querySelector(".header__nav-close").addEventListener("click", function () {
  nav.classList.remove("active");
  body.classList.remove("active");
})

document.querySelectorAll(".nav__list-item").forEach(element => {
  element.addEventListener("click", function () {
    nav.classList.remove("active");
    body.classList.remove("active");
  })
});

document.querySelector(".header__btn-open").addEventListener("click", function () {
  headerForm.classList.add("active");
})

document.querySelector(".header__btn-close").addEventListener("click", function () {
  headerForm.classList.remove("active");
})

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
});


const gallerySwiper = new Swiper('.gallery__slides-container', {
  pagination: {
    el: ".gallery .gallery__swiper-pagination",
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

    577: {
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
      btn.classList.remove('catalog__tabs-nav-btn--active')
    });
    e.currentTarget.classList.add('catalog__tabs-nav-btn--active');
    document.querySelectorAll('.catalog__tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('catalog__tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tabs-item--active');
  });
});

tippy('.projects__button', {
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


const projectsSwiper = new Swiper('.projects__slides-container', {
  navigation: {
    nextEl: ".projects__btn-next",
    prevEl: ".projects__btn-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },

    577: {
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

const eventsSwiper = new Swiper('.events__slides-container', {
  pagination: {
    el: ".events .events__swiper-pagination",
    type: 'bullets',
    clickable: true

  },
  navigation: {
    nextEl: ".events__btn-next",
    prevEl: ".events__btn-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10
    },

    577: {
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
const form = document.querySelector('.form');
const phone = document.querySelector("input[type='tel']")
const im = new Inputmask("+7 (999) 999-99-99")
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
    },

    submitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      thisForm.reset();
    }
  });

// modal

const link = document.querySelectorAll('.gallery__swiper-slide');
const modalOverlay = document.querySelector('.gallery__modal-overlay ');
const modals = document.querySelectorAll('.gallery__modal');

link.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('gallery__modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal--visible');
    modalOverlay.classList.add('gallery__modal-overlay--visible');
  });
});

modalOverlay.addEventListener('click', (e) => {
  console.log(e.target);

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('gallery__modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('gallery__modal--visible');
    });
  }
});

document.querySelectorAll(".modal-btn").forEach(element => {
  element.addEventListener("click", function () {
    document.querySelector(".gallery__modal").classList.remove("gallery__modal--visible");
    document.querySelector(".gallery__modal-overlay").classList.remove("gallery__modal-overlay--visible");
  })
});