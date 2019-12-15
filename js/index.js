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
var swiper = new Swiper('.swiper-container', {
  cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
});
});