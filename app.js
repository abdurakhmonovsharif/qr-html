window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll(".tel"), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i);
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}";
        })
        .replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = "";
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false);
  });
});

$(window).scroll(function () {
  var height = $(window).scrollTop();
  /*Если сделали скролл на 100px задаём новый класс для header*/
  if (height > 10) {
    $("header").addClass("header-fixed");
  } else {
    /*Если меньше 100px удаляем класс для header*/
    $("header").removeClass("header-fixed");
  }
});

var swiper = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    1920: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1180: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    1920: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1180: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  breakpoints: {
    1920: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1180: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

const btnNumlike = document.querySelectorAll(".section7-choose-block__main");
const tablike = document.querySelectorAll(".section7-container__main");

btnNumlike.forEach(function (item) {
  item.addEventListener("click", function () {
    btnNumlike.forEach(function (i) {
      i.classList.remove("section7-choose-block-active__main");
    });

    item.classList.add("section7-choose-block-active__main");

    let tubIDlike = item.getAttribute("data-tab");
    let tabActivelike = document.querySelector(tubIDlike);

    tablike.forEach(function (item) {
      item.classList.remove("section7-container-active__main");
    });
    tabActivelike.classList.add("section7-container-active__main");
  });
});
var swiperSlider = new Swiper(".swiperSlider", {
  pagination: {
    el: ".swiper-pagination-slider",
    clickable: true,
  },
  speed: 500,
});

var swiperSample = new Swiper(".swiperSample", {
  navigation: {
    nextEl: ".swiper-button-next-sample2",
    prevEl: ".swiper-button-prev-sample2",
  },
  slidesPerView: 3,
  spaceBetween: 25,
  breakpoints: {
    1920: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1180: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
