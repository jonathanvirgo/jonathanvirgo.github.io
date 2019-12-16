function menu(){
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

// for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
//   dropdown.addEventListener('click', function() {
//       this.querySelector('.custom-select').classList.toggle('open');
//   })
// }
document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
  this.querySelector('.custom-select').classList.toggle('open');
})
for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
          this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
          this.classList.add('selected');
          this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
      }
  })
}
window.addEventListener('click', function (e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});
document.querySelector('.custom-select-wrapper1').addEventListener('click', function () {
  this.querySelector('.custom-select1').classList.toggle('open');
})
for (const option of document.querySelectorAll(".custom-option1")) {
  option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
          this.parentNode.querySelector('.custom-option1.selected').classList.remove('selected');
          this.classList.add('selected');
          this.closest('.custom-select1').querySelector('.custom-select__trigger1 span').textContent = this.textContent;
      }
  })
}
window.addEventListener('click', function (e) {
    const select = document.querySelector('.custom-select1')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});
document.querySelector('.custom-select-wrapper2').addEventListener('click', function () {
  this.querySelector('.custom-select2').classList.toggle('open');
})
for (const option of document.querySelectorAll(".custom-option2")) {
  option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
          this.parentNode.querySelector('.custom-option2.selected').classList.remove('selected');
          this.classList.add('selected');
          this.closest('.custom-select2').querySelector('.custom-select__trigger2 span').textContent = this.textContent;
      }
  })
}
window.addEventListener('click', function (e) {
    const select = document.querySelector('.custom-select2')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});
// window.addEventListener('click', function(e) {
//   for (const select of document.querySelectorAll('.custom-select')) {
//       if (!select.contains(e.target)) {
//           select.classList.remove('open');
//       }
//   }
// });
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
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
});
var swiper2 = new Swiper('.swiper-container2', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // init: false,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  breakpoints: {
    425: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  }
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
    prevEl: '.swiper-button-prev3',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
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
    prevEl: '.swiper-button-prev',
  },
});

});