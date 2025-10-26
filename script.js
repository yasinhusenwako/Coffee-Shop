const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle the mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// close menu when click close button
menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});
// initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // responsive breakpoint
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
