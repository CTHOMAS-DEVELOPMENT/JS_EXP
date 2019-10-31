const carousel = document.querySelector(".grid-container-carousel");
const slides = carousel.querySelectorAll(".slider");
const CAROUSEL_ITEM_WIDTH = 12;

const moveRight = _ => {
  slides.forEach(function(slide) {
    let order = parseInt(slide.style.order)
    if (order < slides.length) {
      slide.style.order = order += 1;
    } else {
      slide.style.order = 1;
    }
  });
}

const moveLeft = _ => {
  slides.forEach(function(slide) {
    let order = parseInt(slide.style.order)
    if (order > 1) {
      slide.style.order = order -= 1;
    } else {
      slide.style.order = CAROUSEL_ITEM_WIDTH;
    }
    
  });
}


