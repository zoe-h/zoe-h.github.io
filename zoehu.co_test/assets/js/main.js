$(document).ready(function() {

// Add jQuery here

//filter
$('.nav .selected').click(function() {
  $('.project').addClass('hide_project');
  $('.project.selected').removeClass('hide_project');
});

$('.nav .motion').click(function() {
  $('.project').addClass('hide_project');
  $('.project.motion').removeClass('hide_project');
});

$('.nav .branding').click(function() {
  $('.project').addClass('hide_project');
  $('.project.branding').removeClass('hide_project');
});

$('.nav .print').click(function() {
  $('.project').addClass('hide_project');
  $('.project.print').removeClass('hide_project');
});

$('.nav .digital').click(function() {
  $('.project').addClass('hide_project');
  $('.project.digital').removeClass('hide_project');
});

//mobile filter

$('.nav_mobile').click(function() {
  $('.nav_mobile_panel').toggleClass('show_nav_mobile');
  $(this).toggleClass('font-black');
});

$('.nav_mobile_panel').click(function() {
  $(this).removeClass('show_nav_mobile');
  $('.nav_mobile_panel').removeClass('font-black');
});


$('.nav_mobile_panel .selected').click(function() {
  $('.project').addClass('hide_project');
  $('.project.selected').removeClass('hide_project');
  $('.nav_mobile_panel').removeClass('show_nav_mobile');
});

$('.nav_mobile_panel .motion').click(function() {
  $('.project').addClass('hide_project');
  $('.project.motion').removeClass('hide_project');
  $('.nav_mobile_panel').removeClass('show_nav_mobile');
});

$('.nav_mobile_panel .branding').click(function() {
  $('.project').addClass('hide_project');
  $('.project.branding').removeClass('hide_project');
  $('.nav_mobile_panel').removeClass('show_nav_mobile');
});

$('.nav_mobile_panel .print').click(function() {
  $('.project').addClass('hide_project');
  $('.project.print').removeClass('hide_project');
  $('.nav_mobile_panel').removeClass('show_nav_mobile');
});

$('.nav_mobile_panel .digital').click(function() {
  $('.project').addClass('hide_project');
  $('.project.digital').removeClass('hide_project');
  $('.nav_mobile_panel').removeClass('show_nav_mobile');
});

// info

  $('.info').click(function() {
  $('.info_panel').toggleClass('show_info');
  $('.header').toggleClass('font-white');
  $('.info').toggleClass('font-white');
  $('html').toggleClass('white_cursor');
  });

  $('.info_panel').click(function() {
  $(this).removeClass('show_info');
  $('.header').removeClass('font-white');
  $('.info').removeClass('font-white');
  $('html').removeClass('white_cursor');
  });


 //image hover
if(screen.width > 768) {

  $('#whittakers img').mouseenter(function() {
    $('img').addClass('hide_img');
    $(this).removeClass('hide_img');
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
