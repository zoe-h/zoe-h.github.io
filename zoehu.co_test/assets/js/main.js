$(document).ready(function() {

// Add jQuery here


 //image hover
if(screen.width > 768) {

  $('#whittakers img').mouseenter(function() {
    $('img').addClass('hide_img');
    $('#whittakers img').removeClass('hide_img');
    $('body').addClass('whittakers_bg');
  });

  $('#whittakers img').mouseleave(function() {
    $('img').removeClass('hide_img');
    $('body').removeClass('whittakers_bg');
  });

   $('#lynch img').mouseenter(function() {
     $('img').addClass('hide_img');
     $('#lynch img').removeClass('hide_img');
     $('body').addClass('lynch_bg');
   });

   $('#lynch img').mouseleave(function() {
     $('img').removeClass('hide_img');
     $('body').removeClass('lynch_bg');
   });

   $('#wander img').mouseenter(function() {
     $('img').addClass('hide_img');
     $('#wander img').removeClass('hide_img');
     $('body').addClass('wander_bg');
   });

   $('#wander img').mouseleave(function() {
     $('img').removeClass('hide_img');
     $('body').removeClass('wander_bg');
   });

   $('#graphicdesign img').mouseenter(function() {
     $('img').addClass('hide_img');
     $('#graphicdesign img').removeClass('hide_img');
     $('body').addClass('graphicdesign_bg');
   });

   $('#graphicdesign img').mouseleave(function() {
     $('img').removeClass('hide_img');
     $('body').removeClass('graphicdesign_bg');
   });


//    $('#sock img').mouseenter(function() {
//      $('img').addClass('hide_img');
//      $('#sock img').removeClass('hide_img');
//      $('body').addClass('sock_bg');
//    });

//    $('#sock img').mouseleave(function() {
//      $('img').removeClass('hide_img');
//        $('body').removeClass('sock_bg');
//    });

   $('#mirror img').mouseenter(function() {
     $('img').addClass('hide_img');
     $('#mirror img').removeClass('hide_img');
     $('body').addClass('mirror_bg');
   });

   $('#mirror img').mouseleave(function() {
     $('img').removeClass('hide_img');
     $('body').removeClass('mirror_bg');
   });

   $('#forum img').mouseenter(function() {
     $('img').addClass('hide_img');
     $('#forum img').removeClass('hide_img');
     $('body').addClass('forum_bg');
   });

   $('#forum img').mouseleave(function() {
     $('img').removeClass('hide_img');
     $('body').removeClass('forum_bg');
   });

   $('#spring img').mouseenter(function() {
     $('img').addClass('hide_img');
     $('#spring img').removeClass('hide_img');
     $('body').addClass('spring_bg');
   });

   $('#spring img').mouseleave(function() {
     $('img').removeClass('hide_img');
     $('body').removeClass('spring_bg');
   });

  return;
} else {


};

  // about / info

$('.info').click(function() {
  $('.about').toggleClass('showme');
  $('.header').toggleClass('font-white');
  $('.info').toggleClass('font-white');
  $('img').toggleClass('hide_img_info');
  $('html').toggleClass('white_cursor');
});

$('.about').click(function() {
  $('.about').removeClass('showme');
  $('.header').removeClass('font-white');
  $('.info').removeClass('font-white');
  $('img').removeClass('hide_img_info');
  $('html').removeClass('white_cursor');
});

  // Header typewriter

  $('#header_name').typeIt({
       speed: 50,
       deleteSpeed: 100,
       cursor: false,
       autoStart: true,
       loop: true,
  })
  .tiType('ZOE WHO?')
  .tiPause(1000)
  .tiDelete(4)
  .tiPause(200)
  .tiType('HU.')
  .tiPause(2000)

  // skills typewriter
  $('.skills').typeIt({
     strings: ["MOTION GRAPHICS", "IDENTITY DESIGN", "PRINT DESIGN", "USER INTERFACE", "PHOTOGRAPHY", "ANIMATION", "DIGITAL DESIGN"],
     speed: 100,
     deleteSpeed: 60,
     breakLines: false,
     deleteDelay: 1500,
     autoStart: true,
     cursor: false,
     loop: true,
});






});
