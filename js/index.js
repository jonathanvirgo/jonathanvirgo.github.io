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
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  console.log("abc",window.pageYOffset,sticky)
  if (window.pageYOffset >= 150) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
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
// document.querySelector('.custom-select-wrapper2').addEventListener('click', function () {
//   this.querySelector('.custom-select2').classList.toggle('open');
// })
// for (const option of document.querySelectorAll(".custom-option2")) {
//   option.addEventListener('click', function() {
//       if (!this.classList.contains('selected')) {
//         this.parentNode.querySelector('.custom-option2.selected').classList.remove('selected');
//           this.classList.add('selected');
//           this.closest('.custom-select2').querySelector('.custom-select__trigger2 span').textContent = this.textContent;
//       }
//   })
// }
// window.addEventListener('click', function (e) {
//     const select = document.querySelector('.custom-select2')
//     if (!select.contains(e.target)) {
//         select.classList.remove('open');
//     }
// });
!(function(t) {
  t.fn.extend({
    slimScroll: function(i) {
      var e = {
          axis: "y",
          width: "auto",
          height: "250px",
          size: "7px",
          color: "#000",
          positionX: "bottom",
          positionY: "right",
          distance: "1px",
          startX: "left",
          startY: "top",
          opacity: 0.4,
          alwaysVisible: !1,
          disableFadeOut: !1,
          railVisible: !1,
          railColor: "#333",
          railOpacity: 0.2,
          railDraggable: !0,
          railClassX: "slimScrollRailX",
          barClassX: "slimScrollBarX",
          railClassY: "slimScrollRailY",
          barClassY: "slimScrollBarY",
          wrapperClass: "slimScrollDiv",
          allowPageScroll: !1,
          wheelStep: 20,
          touchScrollStep: 200,
          borderRadius: "7px",
          railBorderRadius: "7px"
        },
        o = t.extend(e, i);
      return (
        (o.axis = o.axis.toLowerCase()),
        this.each(function() {
          function e(t) {
            var i = 0,
              e = 0;
            return (
              "detail" in t && (e = t.detail),
              "wheelDelta" in t && (e = (-1 * t.wheelDelta) / 6),
              "wheelDeltaY" in t && (e = (-1 * t.wheelDeltaY) / 6),
              "wheelDeltaX" in t && (i = t.wheelDeltaX / 6),
              "axis" in t &&
                t.axis === t.HORIZONTAL_AXIS &&
                ((i = -1 * e), (e = 0)),
              i !== i && e !== e && ((i = 0), (e = t.wheelDelta)),
              "deltaY" in t && (e = t.deltaY),
              "deltaX" in t && (i = t.deltaX),
              [i, e]
            );
          }
          function s(i) {
            if (m) {
              i = i || window.event;
              var s = e(i),
                a = s[0],
                r = s[1],
                n = i.target || i.srcTarget || i.srcElement;
              t(n)
                .closest("." + o.wrapperClass)
                .is(E.parent()) && l(a, r, !0),
                i.preventDefault && !V && i.preventDefault(),
                V || (i.returnValue = !1);
            }
          }
          function l(t, i, e, s) {
            if (((V = !1), p)) {
              var l = t,
                a = E.outerWidth() - j.outerWidth();
              if (
                (e &&
                  ((l =
                    parseInt(j.css("left")) +
                    (t * parseInt(o.wheelStep)) / 100),
                  (l = Math.min(Math.max(l, 0), a)),
                  (l = t > 0 ? Math.ceil(l) : Math.floor(l)),
                  j.css({ left: l + "px" })),
                (W =
                  parseInt(j.css("left")) / (E.outerWidth() - j.outerWidth())),
                (l = W * (E[0].scrollWidth - E.outerWidth())),
                s)
              ) {
                l = t;
                var r = (l / E[0].scrollWidth) * E.outerWidth();
                (r = Math.min(Math.max(r, 0), a)), j.css({ left: r + "px" });
              }
              E.scrollLeft(l), E.trigger("slimscrollingX", ~~l), c(), u();
            }
            if (f) {
              var n = i,
                g = E.outerHeight() - Q.outerHeight();
              if (
                (e &&
                  ((n =
                    parseInt(Q.css("top")) + (i * parseInt(o.wheelStep)) / 100),
                  (n = Math.min(Math.max(n, 0), g)),
                  (n = i > 0 ? Math.ceil(n) : Math.floor(n)),
                  Q.css({ top: n + "px" })),
                (M =
                  parseInt(Q.css("top")) / (E.outerHeight() - Q.outerHeight())),
                (n = M * (E[0].scrollHeight - E.outerHeight())),
                s)
              ) {
                n = i;
                var w = (n / E[0].scrollHeight) * E.outerHeight();
                (w = Math.min(Math.max(w, 0), g)), Q.css({ top: w + "px" });
              }
              E.scrollTop(n), E.trigger("slimscrollingY", ~~n), d(), h();
            }
          }
          function a(t) {
            window.addEventListener
              ? (t.addEventListener("DOMMouseScroll", s, !1),
                t.addEventListener("mousewheel", s, !1))
              : document.attachEvent("onmousewheel", s);
          }
          function r() {
            if (j) {
              (I = Math.max(
                (E.outerWidth() / E[0].scrollWidth) * E.outerWidth(),
                O
              )),
                j.css({ width: I + "px" });
              var t =
                p && E[0].scrollWidth > E[0].clientWidth ? "block" : "none";
              j.css({ display: t });
            }
          }
          function n() {
            if (Q) {
              (R = Math.max(
                (E.outerHeight() / E[0].scrollHeight) * E.outerHeight(),
                B
              )),
                Q.css({ height: R + "px" });
              var t =
                f && E[0].scrollHeight > E[0].clientHeight ? "block" : "none";
              Q.css({ display: t });
            }
          }
          function c() {
            if (j) {
              if ((r(), clearTimeout(Y), W == ~~W)) {
                if (((V = o.allowPageScroll), H != W)) {
                  var t = 0 === ~~W ? "left" : "right";
                  E.trigger("slimscrollX", t);
                }
              } else V = !1;
              if (((H = W), I >= E.outerWidth())) return void (V = !0);
              j.stop(!0, !0).fadeIn("fast"),
                o.railVisible && P.stop(!0, !0).fadeIn("fast");
            }
          }
          function u() {
            j &&
              (o.alwaysVisible ||
                (Y = setTimeout(function() {
                  (o.disableFadeOut && m) ||
                    v ||
                    X ||
                    (j.fadeOut("slow"), P.fadeOut("slow"));
                }, 1e3)));
          }
          function d() {
            if (Q) {
              if ((n(), clearTimeout(y), M == ~~M)) {
                if (((V = o.allowPageScroll), D != M)) {
                  var t = 0 === ~~M ? "top" : "bottom";
                  E.trigger("slimscrollY", t);
                }
              } else V = !1;
              if (((D = M), R >= E.outerHeight())) return void (V = !0);
              Q.stop(!0, !0).fadeIn("fast"),
                o.railVisible && N.stop(!0, !0).fadeIn("fast");
            }
          }
          function h() {
            Q &&
              (o.alwaysVisible ||
                (y = setTimeout(function() {
                  (o.disableFadeOut && m) ||
                    x ||
                    X ||
                    (Q.fadeOut("slow"), N.fadeOut("slow"));
                }, 1e3)));
          }
          var p,
            f,
            g,
            w,
            b,
            m,
            v,
            x,
            X,
            Y,
            y,
            C,
            S,
            R,
            I,
            W,
            H,
            M,
            D,
            T = "<div></div>",
            B = 30,
            O = 30,
            V = !1,
            E = t(this),
            k = t(document);
          if (E.parent().hasClass(o.wrapperClass)) {
            t.extend(o, E.data("slimScrollConfig") || {});
            var z = E.scrollLeft(),
              L = E.scrollTop();
            return (
              (j = E.siblings("." + o.barClassX)),
              (P = E.siblings("." + o.railClassX)),
              (Q = E.siblings("." + o.barClassY)),
              (N = E.siblings("." + o.railClassY)),
              (p = "both" == o.axis || "x" == o.axis),
              (f = "both" == o.axis || "y" == o.axis),
              r(),
              n(),
              t.isPlainObject(i) &&
              ("width" in i &&
                p &&
                ("auto" == i.width
                  ? (E.parent().css("width", "auto"),
                    E.css("width", "auto"),
                    (o.width = E.parent()
                      .parent()
                      .width()))
                  : ((o.width = i.width), E.css({ "white-space": "nowrap" }))),
              "height" in i &&
                f &&
                ("auto" == i.height
                  ? (E.parent().css("height", "auto"),
                    E.css("height", "auto"),
                    (o.height = E.parent()
                      .parent()
                      .height()))
                  : (o.height = i.height)),
              E.parent().css({
                position: "relative",
                overflow: "hidden",
                width: o.width,
                height: o.height
              }),
              E.css({ overflow: "hidden", width: o.width, height: o.height }),
              "scrollToX" in i
                ? (z = parseInt(o.scrollToX))
                : "scrollByX" in i && (z += parseInt(o.scrollByX)),
              "scrollToY" in i
                ? (L = parseInt(o.scrollToY))
                : "scrollByY" in i && (L += parseInt(o.scrollByY)),
              "destroy" in i)
                ? (j.remove(),
                  P.remove(),
                  Q.remove(),
                  N.remove(),
                  void E.unwrap())
                : void l(z, L, !1, !0)
            );
          }
          if (!(t.isPlainObject(i) && "destroy" in i)) {
            (p = "both" == o.axis || "x" == o.axis),
              (f = "both" == o.axis || "y" == o.axis),
              (o.height = "auto" == o.height ? E.parent().height() : o.height),
              (o.width = "auto" == o.width ? E.parent().width() : o.width),
              E.data("slimScrollConfig", o);
            var F = t(T)
              .addClass(o.wrapperClass)
              .css({
                position: "relative",
                overflow: "hidden",
                width: o.width,
                height: o.height
              });
            if (
              (E.css({ overflow: "hidden", width: o.width, height: o.height }),
              E.wrap(F),
              p)
            ) {
              "auto" != o.width && p && E.css({ "white-space": "nowrap" });
              var P = t(T)
                  .addClass(o.railClassX)
                  .css({
                    width: "100%",
                    height: o.size,
                    position: "absolute",
                    left: 0,
                    display:
                      o.alwaysVisible && o.railVisible ? "block" : "none",
                    "border-radius": o.railBorderRadius,
                    background: o.railColor,
                    opacity: o.railOpacity,
                    zIndex: 90
                  }),
                j = t(T)
                  .addClass(o.barClassX)
                  .css({
                    background: o.color,
                    height: o.size,
                    position: "absolute",
                    left: 0,
                    opacity: o.opacity,
                    display: o.alwaysVisible ? "block" : "none",
                    "border-radius": o.borderRadius,
                    BorderRadius: o.borderRadius,
                    MozBorderRadius: o.borderRadius,
                    WebkitBorderRadius: o.borderRadius,
                    zIndex: 99
                  }),
                A =
                  "top" == o.positionX
                    ? { top: o.distance }
                    : { bottom: o.distance };
              P.css(A),
                j.css(A),
                E.parent().append(j),
                E.parent().append(P),
                o.railDraggable &&
                  (j
                    .on("mousedown", function(t) {
                      return (
                        (X = !0),
                        (g = parseFloat(j.css("left"))),
                        (w = t.pageX),
                        k.on("mousemove.slimscrollX", function(t) {
                          (currLeft = g + t.pageX - w),
                            j.css("left", currLeft),
                            l(0, 0, j.position().left);
                        }),
                        k.on("mouseup.slimscrollX", function(t) {
                          (X = !1), u(), k.unbind(".slimscrollX");
                        }),
                        !1
                      );
                    })
                    .on("selectstart.slimscrollX", function(t) {
                      return t.stopPropagation(), t.preventDefault(), !1;
                    }),
                  P.on("mousedown", function(t) {
                    var i =
                      ((t.offsetX - I / 2) * E[0].scrollWidth) / E.outerWidth();
                    return (
                      l(i, 0, !1, !0),
                      (g = parseFloat(j.css("left"))),
                      (w = t.pageX),
                      k.on("mousemove.slimscrollX", function(t) {
                        (currLeft = g + t.pageX - w),
                          j.css("left", currLeft),
                          l(0, 0, j.position().left);
                      }),
                      k.on("mouseup.slimscrollX", function(t) {
                        (X = !1), u(), k.unbind(".slimscrollX");
                      }),
                      !1
                    );
                  })),
                P.hover(
                  function() {
                    c();
                  },
                  function() {
                    u();
                  }
                ),
                j.hover(
                  function() {
                    v = !0;
                  },
                  function() {
                    v = !1;
                  }
                ),
                r(),
                "right" === o.startX
                  ? (j.css({ left: E.outerWidth() - j.outerWidth() }),
                    l(0, 0, !0))
                  : "left" !== o.startX &&
                    (l(t(o.startX).position().left, null, null, !0),
                    o.alwaysVisible || j.hide());
            }
            if (f) {
              var N = t(T)
                  .addClass(o.railClassY)
                  .css({
                    width: o.size,
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    display:
                      o.alwaysVisible && o.railVisible ? "block" : "none",
                    "border-radius": o.railBorderRadius,
                    background: o.railColor,
                    opacity: o.railOpacity,
                    zIndex: 90
                  }),
                Q = t(T)
                  .addClass(o.barClassY)
                  .css({
                    background: o.color,
                    width: o.size,
                    position: "absolute",
                    top: 0,
                    opacity: o.opacity,
                    display: o.alwaysVisible ? "block" : "none",
                    "border-radius": o.borderRadius,
                    BorderRadius: o.borderRadius,
                    MozBorderRadius: o.borderRadius,
                    WebkitBorderRadius: o.borderRadius,
                    zIndex: 99
                  }),
                Z =
                  "right" == o.positionY
                    ? { right: o.distance }
                    : { left: o.distance };
              N.css(Z),
                Q.css(Z),
                E.parent().append(Q),
                E.parent().append(N),
                o.railDraggable &&
                  (Q.on("mousedown", function(t) {
                    return (
                      (X = !0),
                      (g = parseFloat(Q.css("top"))),
                      (b = t.pageY),
                      k.on("mousemove.slimscrollY", function(t) {
                        (currTop = g + t.pageY - b),
                          Q.css("top", currTop),
                          l(0, 0, Q.position().top);
                      }),
                      k.on("mouseup.slimscrollY", function(t) {
                        (X = !1), h(), k.unbind(".slimscrollY");
                      }),
                      !1
                    );
                  }).on("selectstart.slimscrollY", function(t) {
                    return t.stopPropagation(), t.preventDefault(), !1;
                  }),
                  N.on("mousedown", function(t) {
                    var i =
                      ((t.offsetY - R / 2) * E[0].scrollHeight) /
                      E.outerHeight();
                    return (
                      l(0, i, !1, !0),
                      (g = parseFloat(Q.css("top"))),
                      (b = t.pageY),
                      k.on("mousemove.slimscrollY", function(t) {
                        (currTop = g + t.pageY - b),
                          Q.css("top", currTop),
                          l(0, 0, Q.position().top);
                      }),
                      k.on("mouseup.slimscrollY", function(t) {
                        (X = !1), h(), k.unbind(".slimscrollY");
                      }),
                      !1
                    );
                  })),
                N.hover(
                  function() {
                    d();
                  },
                  function() {
                    h();
                  }
                ),
                Q.hover(
                  function() {
                    x = !0;
                  },
                  function() {
                    x = !1;
                  }
                ),
                n(),
                "bottom" === o.startY
                  ? (Q.css({ top: E.outerHeight() - Q.outerHeight() }),
                    l(0, 0, !0))
                  : "top" !== o.startY &&
                    (l(null, t(o.startY).position().top, null, !0),
                    o.alwaysVisible || Q.hide());
            }
            E.hover(
              function() {
                (m = !0), c(), d(), u(), h();
              },
              function() {
                (m = !1), u(), h();
              }
            ),
              E.on("touchstart", function(t, i) {
                t.originalEvent.touches.length &&
                  ((C = t.originalEvent.touches[0].pageX),
                  (S = t.originalEvent.touches[0].pageY));
              }),
              E.on("touchmove", function(t) {
                if (
                  (V || t.originalEvent.preventDefault(),
                  t.originalEvent.touches.length)
                ) {
                  var i =
                      (C - t.originalEvent.touches[0].pageX) /
                      o.touchScrollStep,
                    e =
                      (S - t.originalEvent.touches[0].pageY) /
                      o.touchScrollStep;
                  l(i, e, !0),
                    (C = t.originalEvent.touches[0].pageX),
                    (S = t.originalEvent.touches[0].pageY);
                }
              }),
              a(this);
          }
        }),
        this
      );
    }
  }),
    t.fn.extend({ slimscroll: t.fn.slimScroll });
})(jQuery);

$(document).ready(function(){
  $(".select2").select2({
    allowClear: true,
    placeholder :'Lĩnh vực (Multi tags choice)'
    });
    console.log("ABC");
var swiper1 = new Swiper('.swiper-container1', {
  slidesPerView: 1,
  spaceBetween: 10,
  preventClicks: false,
  // loop: true,
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
  // loop: true,
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
      slidesPerView: 4,
      spaceBetween: 10,
    },
  }
});
var swiper3 = new Swiper('.swiper-container3', {
  slidesPerView: 1,
  spaceBetween: 10,
  // loop: true,
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
  // loop: true,
  pagination: {
    el: '.swiper-pagination4',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev',
  },
});
$('.nd-hd').slimScroll({
  height:'500px',
  axis: 'x',
});
});