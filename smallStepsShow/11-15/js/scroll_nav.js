const link = $(".menu a");

$(function(){
 link.on('click', function(e){
  const target = $($(this).attr('href'));
  $('html, body').animate({
   scrollTop: target.offset().top
  }, 500);
  // console.log(target.offset());
  e.preventDefault();
 });

 $(window).on('scroll', function(e){
  link.each(function(){
   var container = $(this).attr('href');
   var containerOffset = $(container).offset().top;
   var containerHeight = $(container).outerHeight();
   var containerBottom = containerOffset + containerHeight;
   var sTop = $(window).scrollTop();
   if(sTop >= containerOffset && sTop < containerBottom){
    $(this).addClass('active');
   }else{
    $(this).removeClass('active');
   }
  });
 })
});

//go to top
const goToTopBtn = $(".scrollToTop");
$(function(){
 goToTopBtn.on('click', function(e){
  e.preventDefault();
  $('html, body').animate({
   scrollTop: $("#one").offset().top
  }, 500);
 });
})

$(window).on('scroll', function(e){
  var sTop = $(window).scrollTop();
  // console.log(sTop);
  if(sTop > 600){
   $(goToTopBtn).addClass("show");
  }else{
   $(goToTopBtn).removeClass("show");
  }
 });