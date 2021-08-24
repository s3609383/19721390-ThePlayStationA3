//Function which activates the scrolling animation upon clicking the link.
//w3schools, n.d. How TO - Smooth Scroll.
//https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll

var src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";

function scroll() {
  $(document).ready(function() {
    $("a").on('click', function(event) {
        if(this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate( {
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.has = hash;
            });
        }
    });

});
}

//Allowing a smooth transition from one section to the next through the click of a link.  
let anchorSelector = 'a[href^="#"]';

let anchorList = document.querySelectorAll(anchorSelector);

anchorList.forEach(link => {
  link.onClick = function (e) {

     e.preventDefault();

    let destination = document.querySelector(this.hash);

    destination.scrollIntoView({
      behavior: 'smooth'
    });
  };
});

/*function to play an audio cue upon user intercation
Title: How to Play Audio with JavaScript
Author: Cukmekerb's Coding Class
Date: 2018
Code version: n/a
Availability: https://www.youtube.com/watch?v=p4OHVJxd2FI*/
function playAudio() {
  var audio = new Audio("Audio/PS4TrophySound.wav");
  audio.play();
}

/*Slideshow container
Title: <title of program/source code>
Author: w3schools
Date: 2021
Code version: n/a
Availability: https://www.w3schools.com/howto/howto_js_slideshow.asp*/
var slideIndex = 1;

showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

 if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/*Slideshow container
Title: How TO - Slideshow
Author: w3schools
Date: 2021
Code version: n/a
Availability: https://www.w3schools.com/howto/howto_js_slideshow.asp*/

var slideIndex2 = 1;

//Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

//Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySecondSlides");
  var dots = document.getElementsByClassName("dot2");

  if (n > slides2.length) 
  {
    slideIndex2 = 1;
  }
  if (n < 1) 
  {
    slideIndex2 = slides2.length;
  }
  for (i = 0; i < slides2.length; i++) 
  {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides2[slideIndex2-1].style.display = "block";
  dots[slideIndex2-1].className += " active";
}


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

