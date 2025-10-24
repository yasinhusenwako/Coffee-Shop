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
