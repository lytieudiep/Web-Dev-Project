/* Toggle between adding and removing the "responsive" class to main nav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("dropdown-menu");
    if (x.className.includes("not-hidden")) {
      x.className = "dropdown-menu hidden";
    } else {
      x.className = "dropdown-menu not-hidden";
    }
  }

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles 
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

//Handlebars.js for the H1 title
var src = document.getElementById("template").innerHTML;
// compile the template
var template = Handlebars.compile(src);
Handlebars.registerHelper("caps", function(text){
  return text.toUpperCase();
})
var rendered = template();
document.getElementById("target").innerHTML= rendered;


//Animating numbers on home page banner- source javascript code from: https://codepen.io/shivasurya/pen/FatiB
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

//Carousel images on card for main page
//Reference code from w3school- edited to fix with three different carousel images on three cards
var slideIndex = {};

function showSlides(slideClass, n) {
  var i;
  var slides = document.getElementsByClassName(slideClass);
  var slIndex = (slideIndex[slideClass] || 0) % slides.length;
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slIndex].style.display = "block";
};

function plusSlides(slideClass, n) {
  var nextIndex = slideIndex[slideClass] || 0;
  nextIndex += n;
  slideIndex[slideClass] = nextIndex;
  showSlides(slideClass, nextIndex);
}

function currentSlide(slideClass, n) {
  showSlides(slideClass, n);
}
showSlides("mySlides", slideIndex);
showSlides("mySlides2", slideIndex);
showSlides("mySlides3", slideIndex);

