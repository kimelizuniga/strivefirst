let quoteSlides = document.getElementsByClassName("testimonials");

let randNum = Math.floor(Math.random() * quoteSlides.length + 1);
let slideQuoteIndex = randNum;
showQuoteSlides(slideQuoteIndex);

// Next/previous controls
function plusQuoteSlides(n) {
  showQuoteSlides(slideQuoteIndex += n);
}

// Thumbnail image controls
function currentQuoteSlide(n) {
  showQuoteSlides(slideQuoteIndex = n);
}

function showQuoteSlides(n) {
  let i;
  if (n > quoteSlides.length) {slideQuoteIndex = 1}
  if (n < 1) {slideQuoteIndex = slides.length}
  for (i = 0; i < quoteSlides.length; i++) {
      quoteSlides[i].style.display = "none";
  }
  quoteSlides[slideQuoteIndex-1].style.display = "block";
}