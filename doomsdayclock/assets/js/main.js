$(document).ready(function() {


// Add jQuery here

//slides

        $(function () { // wait for document ready
          // init
          var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
              triggerHook: 'onLeave'
            }
          });

          // get all slides
          var slides = document.querySelectorAll("section.panel");

          // create scene for every slide
          for (var i=0; i<slides.length; i++) {
            new ScrollMagic.Scene({
                triggerElement: slides[i]
              })
              .setPin(slides[i])
              .addTo(controller);
          }
        });



//nav - scroll

      $('#nav1').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
      });

      var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth,
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;

      var section2_top = y + 800
          section3_top = 2 * (y + 800)
          section4_top = 3 * (y + 800)
          section5_top = 4 * (y + 800)
          section6_top = 5 * (y + 800)

      $('#nav2').on('click', function(){
        $('html, body').animate({scrollTop: section2_top}, 'medium');
      });

      $('#nav3').on('click', function(){
        $('html, body').animate({scrollTop: section3_top}, 'medium');
      });

      $('#nav4').on('click', function(){
        $('html, body').animate({scrollTop: section4_top}, 'medium');
      });

      $('#nav5').on('click', function(){
        $('html, body').animate({scrollTop: section5_top}, 'medium');
      });

      $('#nav6').on('click', function(){
        $('html, body').animate({scrollTop: section6_top}, 'medium');
      });

// nav - active

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section1"})
              .setClassToggle("#nav1", "nav_active") // add class toggle
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section2"})
              .setClassToggle("#nav2", "nav_active") // add class toggle
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section3"})
              .setClassToggle("#nav3", "nav_active") // add class toggle
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section4"})
              .setClassToggle("#nav4", "nav_active") // add class toggle
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section5"})
              .setClassToggle("#nav5", "nav_active") // add class toggle
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section6"})
              .setClassToggle("#nav6", "nav_active") // add class toggle
              .addTo(controller);

// nav - active - blue

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});
      new ScrollMagic.Scene({triggerElement: "#section3"})
              .setClassToggle(".nav", "nav_blue") // add class toggle
              .addTo(controller);

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});
      new ScrollMagic.Scene({triggerElement: "#section5"})
              .setClassToggle(".nav", "nav_blue") // add class toggle
              .addTo(controller);


// animate text

  //section3

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section3"})
              .setClassToggle("#timeline_chart", "show_chart") // add class toggle
              .addTo(controller);

  //section4

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section4"})
              .setClassToggle("#section4 .threat", "show_threat") // add class toggle
              .addTo(controller);


      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section4"})
              .setClassToggle("#section4 .description", "show_description") // add class toggle
              .addTo(controller);

  //section5

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section5"})
              .setClassToggle("#section5 .threat", "show_threat") // add class toggle
              .addTo(controller);

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section5"})
              .setClassToggle("#section5 .description", "show_description") // add class toggle
              .addTo(controller);

  //section5

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section6"})
              .setClassToggle("#section6 .threat", "show_threat") // add class toggle
              .addTo(controller);

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section6"})
              .setClassToggle("#section6 .description", "show_description") // add class toggle
              .addTo(controller);


  // baffle header

      let b1 = baffle('#section1 .header', {
          characters: '_',
          speed: 40
      });

      let b2 = baffle('#section2 .header', {
          characters: '_',
          speed: 40
      });

      let b3 = baffle('#section3 .header', {
          characters: '_',
          speed: 40
      });

      let b4 = baffle('#section4 .header', {
          characters: '_',
          speed: 40
      });
      let b5 = baffle('#section5 .header', {
          characters: '_',
          speed: 40
      });
      let b6 = baffle('#section6 .header', {
          characters: '_',
          speed: 40
      });



       var ctrl = new ScrollMagic.Controller();

       // create scene
       var scene = new ScrollMagic.Scene({
               triggerElement: "#section1 .header"
           })
           .on('start', function () {
             b1.start();
             b1.reveal(1000);
           })
           .addTo(ctrl);

       var ctrl = new ScrollMagic.Controller();

       // create scene
       var scene = new ScrollMagic.Scene({
               triggerElement: "#section2"
           })
           .on('start', function () {
             b2.start();
             b2.reveal(1000);
           })
           .addTo(ctrl);

       var scene = new ScrollMagic.Scene({
               triggerElement: "#section3"
           })
           .on('start', function () {
             b3.start();
             b3.reveal(1000);
           })
           .addTo(ctrl);

       var scene = new ScrollMagic.Scene({
               triggerElement: "#section4"
           })
           .on('start', function () {
             b4.start();
             b4.reveal(1000);
           })
           .addTo(ctrl);

       var scene = new ScrollMagic.Scene({
               triggerElement: "#section5"
           })
           .on('start', function () {
             b5.start();
             b5.reveal(1000);
           })
           .addTo(ctrl);

       var scene = new ScrollMagic.Scene({
               triggerElement: "#section6"
           })
           .on('start', function () {
             b6.start();
             b6.reveal(1000);
           })
           .addTo(ctrl);

  // show header

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section2"})
              .setClassToggle("#section2 .header", "show_header") // add class toggle
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section3"})
              .setClassToggle("#section3 .header", "show_header") // add class toggle
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section4"})
              .setClassToggle("#section4 .header", "show_header") // add class toggle
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section5"})
              .setClassToggle("#section5 .header", "show_header") // add class toggle
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section6"})
              .setClassToggle("#section6 .header", "show_header") // add class toggle
              .addTo(controller);

  });
