/* /* //main nave
$(function(){
    $('#menu').slicknav({
        appendTo:'.top-menu-2'
    });
});

 $(document).ready(function(){
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: 'true',
        autoplaySpeed: '3000'
      });
  });
 


var slideIndex = 0;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
} 

function showSlide(n) {
    var slide = document.getElementsByClassName("carousel-slides");
    var dot = document.getElementsByClassName("slider-dot");
    if (n > slide.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slide.length;
    }
    for (var i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";        
    } 

        
    for (let i = 0; i < dot.length; i++) {
        dot[i].className =  dot[i].className.replace("active", " ") ;        
    }
    slide[slideIndex-1].style.display = "block"; 
    dot[slideIndex-1].className += " active"; 
}

*/
//mobile-menu
 const mobileMenu = document.querySelector('.mobile-menu');
 const mainMenu = document.querySelector('.main-menu');
 
 mobileMenu.addEventListener('click', ()=> {
    if (mainMenu.style.display === 'none') {
        mainMenu.style.display ="block";
    }
    else {
        mainMenu.style.display = "none";
    }
 }) 

 //header-carousel

 var slideIndex = 0;

 function showSlide() {
    let slides = document.querySelectorAll(".carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";        
    }
    slideIndex++; 
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = "block";
    console.log(slideIndex);

 }
 setInterval(showSlide, 3000);