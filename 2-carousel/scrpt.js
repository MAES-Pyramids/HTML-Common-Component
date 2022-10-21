"use strict";
const button = document.querySelectorAll(".icon");
const dot = document.querySelectorAll(".dot");
//-------------------------------------------------
//accordion
Array.from(button).forEach((link) => {
  link.addEventListener("click", function (event) {
    const target = event.target.closest(".item");
    target.classList.toggle("open");
  });
});
//Carousel
function getAllSiblings(element, parent) {
  const children = [...parent.children];
  return children.filter((child) => child !== element);
}
Array.from(dot).forEach((link) => {
  link.addEventListener("click", function (event) {
    const target = event.target.closest(".dot");
    const allSiblings = getAllSiblings(target, target.parentNode);
    target.classList.toggle("dot-filled");
    allSiblings.map((child) => {
      child.classList?.remove("dot-filled");
    });
  });
});
//
