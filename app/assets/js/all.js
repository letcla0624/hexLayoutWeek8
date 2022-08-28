// 主選單
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");
const menuIcon = document.querySelector(".menuIcon");
let openMenu = false;

window.addEventListener("resize", reportWindowSize);
navbarToggler.addEventListener("click", () => {
  openMenu = !openMenu;
  if (openMenu) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    reportWindowSize();
  }
});

// 視窗縮放
function reportWindowSize() {
  openMenu = false;
  menuIcon.classList.remove("fa-times");
  menuIcon.classList.add("fa-bars");
  navbarCollapse.classList.remove("show");
}

// 冒泡事件
const linkBtns = document.querySelectorAll(".linkBtn");
if (linkBtns) {
  linkBtns.forEach(function (e) {
    e.addEventListener("click", (item) => {
      item.stopPropagation();
    });
  });
}

// swiper
const common = {
  spaceBetween: 24,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

const swiper = new Swiper(".mySwiper", {
  ...common,
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
  },
});

const otherSwiper = new Swiper(".otherSwiper", {
  ...common,
  slidesPerView: 2,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    1296: {
      slidesPerView: 4,
    },
  },
});

const gridMasonry = document.querySelector(".grid-masonry");
function masonry() {
  const msnry = new Masonry(gridMasonry, {
    itemSelector: ".grid-masonry-item",
  });
  imagesLoaded(gridMasonry).on("progress", () => {
    msnry.layout();
  });
}

if (gridMasonry) {
  window.addEventListener("load", () => {
    masonry();
  });
}

// 解決瀑布流 tab 切換取不到高度
const dataTabs = document.querySelectorAll("button[data-bs-toggle=tab]");
dataTabs.forEach(function (dataTab) {
  dataTab.addEventListener("shown.bs.tab", () => {
    masonry();
  });
});

// 解決 according 開合取不到高度
const accordionButtons = document.querySelectorAll(".grid-masonry .accordion");
accordionButtons.forEach(function (e) {
  ["hidden.bs.collapse", "shown.bs.collapse"].forEach(function (item) {
    e.addEventListener(item, () => {
      masonry();
    });
  });
});

// 手機版市值
const priceAccording = document.querySelectorAll(".price-according");
priceAccording.forEach((e) => {
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
});

// 主選單搜尋
const navbar__search = document.querySelector(".navbar__search");
const search__bar = document.querySelector(".search__bar");
const search__back = document.querySelector(".search__back");
navbar__search.addEventListener("click", () => {
  search__bar.classList.remove("d-none");
});
search__back.addEventListener("click", () => {
  search__bar.classList.add("d-none");
});
