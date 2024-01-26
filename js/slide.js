const prev = document.querySelector(".prev");
const slide = document.querySelector(".slide");

const next = document.querySelector(".next");

prev.addEventListener("click", () => {
  slide.scrollLeft -= 300;
});

next.addEventListener("click", () => {
  slide.scrollLeft += 300;
});
