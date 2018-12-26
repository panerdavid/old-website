$(document).ready(function() {

  $('#wrapper').fullpage({
    anchors: ["site"],
    loopHorizontal: false,
    controlArrows: false,
    

  });


  $('#me').typeIt({
    strings: ["Student", "Musician", "Programmer", "Educator", "Dog lover"],
    speed: 175,
    breakLines: false,
    loop: true,
    startDelay: 150,
    deleteDelay: 1000,
    loopDelay: 900

  });
});
var slideIndex = 1;
next(slideIndex);


function plusSlides(n) {
  next(slideIndex += n);
}


function currentSlide(n) {
  next(slideIndex = n);
}

function next(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
