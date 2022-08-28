"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 主選單
var navbarToggler = document.querySelector(".navbar-toggler");
var navbarCollapse = document.querySelector(".navbar-collapse");
var menuIcon = document.querySelector(".menuIcon");
var openMenu = false;
window.addEventListener("resize", reportWindowSize);
navbarToggler.addEventListener("click", function () {
  openMenu = !openMenu;

  if (openMenu) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    reportWindowSize();
  }
}); // 視窗縮放

function reportWindowSize() {
  openMenu = false;
  menuIcon.classList.remove("fa-times");
  menuIcon.classList.add("fa-bars");
  navbarCollapse.classList.remove("show");
} // 冒泡事件


var linkBtn = document.querySelector(".linkBtn");

if (linkBtn) {
  linkBtn.addEventListener("click", function (e) {
    e.stopPropagation();
  });
} // swiper


var common = {
  spaceBetween: 24,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
};
var swiper = new Swiper(".mySwiper", _objectSpread(_objectSpread({}, common), {}, {
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    992: {
      slidesPerView: 3
    }
  }
}));
var otherSwiper = new Swiper(".otherSwiper", _objectSpread(_objectSpread({}, common), {}, {
  slidesPerView: 2,
  breakpoints: {
    992: {
      slidesPerView: 3
    },
    1296: {
      slidesPerView: 4
    }
  }
}));
var gridMasonry = document.querySelector("grid-masonry");

if (gridMasonry) {
  window.addEventListener("load", function () {
    masonry();
  });
} // 解決瀑布流 tab 切換取不到高度


var dataTabs = document.querySelectorAll("button[data-bs-toggle=tab]");
dataTabs.forEach(function (dataTab) {
  dataTab.addEventListener("shown.bs.tab", function () {
    masonry();
  });
});

function masonry() {
  var msnry = new Masonry(".grid-masonry", {
    itemSelector: ".grid-masonry-item"
  });
} // 手機版市值


var priceAccording = document.querySelectorAll(".price-according");
priceAccording.forEach(function (e) {
  if (e.classList.contains("open")) {
    e.nextSibling.nextSibling.classList.remove("d-none");
  }

  e.addEventListener("click", function () {
    this.classList.toggle("open");

    if (this.classList.contains("open")) {
      this.nextSibling.nextSibling.classList.remove("d-none");
    } else {
      this.nextSibling.nextSibling.classList.add("d-none");
    }
  });
}); // 主選單搜尋

var navbar__search = document.querySelector(".navbar__search");
var search__bar = document.querySelector(".search__bar");
var search__back = document.querySelector(".search__back");
navbar__search.addEventListener("click", function () {
  search__bar.classList.remove("d-none");
});
search__back.addEventListener("click", function () {
  search__bar.classList.add("d-none");
});
//# sourceMappingURL=all.js.map
