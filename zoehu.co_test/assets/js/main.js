$(document).ready(function() {

// Add jQuery here


 //image hover
if(screen.width < 768) {
  return;
} else {
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


      $('#sock img').mouseenter(function() {
        $('img').addClass('hide_img');
        $('#sock img').removeClass('hide_img');
        $('body').addClass('sock_bg');
      });

      $('#sock img').mouseleave(function() {
        $('img').removeClass('hide_img');
        $('body').removeClass('sock_bg');
      });

      $('#mirror img').mouseenter(function() {
        $('img').addClass('hide_img');
        $('#mirror img').removeClass('hide_img');
        $('body').addClass('mirror_bg');
      });

      $('#mirror img').mouseleave(function() {
        $('img').removeClass('hide_img');
        $('body').removeClass('mirror_bg');
      });

}

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


// time

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();



});
