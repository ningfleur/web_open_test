//w3scroll
$(window).scroll(function() {
  if ($(document).scrollTop() > 90) {
    $(".header").addClass("is-sticky");
  } else {
    $(".header").removeClass("is-sticky");
  }
});

//
$(window).scroll(function() {
  if ($(document).scrollTop() > 90) {
    $(".brand_logo_img").addClass("scroll-top");
  } else {
    $(".brand_logo_img").removeClass("scroll-top");
  }
});