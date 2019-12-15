function menu(){
  console.log("ABC")
  var element = document.getElementById("nav_right");
  if (element.classList) { 
      element.classList.toggle("block");
  } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("block");
  
      if (i >= 0) 
      classes.splice(i, 1);
      else 
      classes.push("block");
      element.className = classes.join(" "); 
  }
}
$(document).ready(function(){
var swiper1 = new Swiper('.swiper-container1', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
  navigation: {
    // nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev1',
  },
});
var swiper3 = new Swiper('.swiper-container3', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // init: false,
  pagination: {
    el: '.swiper-pagination3',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next3',
    // prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});
var swiper4 = new Swiper('.swiper-container4', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination4',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next4',
    // prevEl: '.swiper-button-prev',
  },
});
});