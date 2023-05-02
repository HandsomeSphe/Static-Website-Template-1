const small_nav_menu = document.querySelector(".smallNav__menu");
const small_nav_lines = document.querySelectorAll(".smallNav__menu--line");
const small_nav_links = document.querySelector(".smallNav__list");

const showRemoveIcon = () => {
  small_nav_lines[1].classList.toggle("removeMiddle");
  small_nav_lines[0].classList.toggle("rotateDown");
  small_nav_lines[2].classList.toggle("rotateUp");
};

small_nav_menu.addEventListener("click", (e) => {
  showRemoveIcon();
  small_nav_links.classList.toggle("revealLinks");
});

/**** Slider from Tailwind****/

// Initialization for ES Users
import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });
