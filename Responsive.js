document.getElementById("bigcontent").style.display = "none"
function bigMenu() {
    if (document.getElementById("bigcontent").style.display == "none") {
        document.getElementById("bigcontent").style.display = "block"
        document.getElementById("smallMenu").style.display = "none"


        if (document.getElementById("smallcontent").style.display == "block") {
            document.getElementById("smallcontent").style.display = "none"
        }
    }

    else {
        document.getElementById("bigcontent").style.display = "none"
        document.getElementById("smallMenu").style.display = "block"
}
}document.getElementById("smallcontent").style.display = "none"
function smallMenu() {
    if (document.getElementById("smallcontent").style.display == "none") {
        document.getElementById("smallcontent").style.display = "block"
    }
    else {
        document.getElementById("smallcontent").style.display = "none"
}
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
dot()
  window.timer = setTimeout(showSlides, 4500);
} 
function dot() {

    if (slideIndex == 1) {
        document.getElementById("dot1").style.backgroundColor = "rgb(80, 80, 80)"
        document.getElementById("dot2").style.backgroundColor = ""
        document.getElementById("dot3").style.backgroundColor = ""
    }

    else if (slideIndex == 2) {
        document.getElementById("dot1").style.backgroundColor = ""
        document.getElementById("dot2").style.backgroundColor = "rgb(80, 80, 80)"
        document.getElementById("dot3").style.backgroundColor = ""
    }

    else if(slideIndex == 3) {
        document.getElementById("dot1").style.backgroundColor = ""
        document.getElementById("dot2").style.backgroundColor = ""
        document.getElementById("dot3").style.backgroundColor = "rgb(80, 80, 80)"
    }
}

  function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);

  }