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
    //          .addIndicators() // add indicators (requires plugin)
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
        //      .addIndicators() // add indicators (requires plugin)
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section2"})
              .setClassToggle("#nav2", "nav_active") // add class toggle
      //        .addIndicators() // add indicators (requires plugin)
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section3"})
              .setClassToggle("#nav3", "nav_active") // add class toggle
      //        .addIndicators() // add indicators (requires plugin)
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section4"})
              .setClassToggle("#nav4", "nav_active") // add class toggle
      //        .addIndicators() // add indicators (requires plugin)
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section5"})
              .setClassToggle("#nav5", "nav_active") // add class toggle
      //        .addIndicators() // add indicators (requires plugin)
              .addTo(controller);
      new ScrollMagic.Scene({triggerElement: "#section6"})
              .setClassToggle("#nav6", "nav_active") // add class toggle
      //        .addIndicators() // add indicators (requires plugin)
              .addTo(controller);


      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});
      new ScrollMagic.Scene({triggerElement: "#section3"})
              .setClassToggle(".nav", "nav_blue") // add class toggle
          //    .addIndicators() // add indicators (requires plugin)
              .addTo(controller);

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});
      new ScrollMagic.Scene({triggerElement: "#section5"})
              .setClassToggle(".nav", "nav_blue") // add class toggle
          //    .addIndicators() // add indicators (requires plugin)
              .addTo(controller);


// animate text

  //section4

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section4"})
              .setClassToggle("#section4 .threat", "show_threat") // add class toggle
      //        .addIndicators() // add indicators (requires plugin)
              .addTo(controller);


      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section4"})
              .setClassToggle("#section4 .description", "show_description") // add class toggle
      //        .addIndicators() // add indicators (requires plugin)
              .addTo(controller);

  //section5

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section5"})
              .setClassToggle("#section5 .threat", "show_threat") // add class toggle
      //        .addIndicators() // add indicators (requires plugin)
              .addTo(controller);

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section5"})
              .setClassToggle("#section5 .header", "show_header") // add class toggle
      //        .addIndicators() // add indicators (requires plugin)
              .addTo(controller);

      var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: section2_top}});

      // build scenes
      new ScrollMagic.Scene({triggerElement: "#section5"})
              .setClassToggle("#section5 .description", "show_description") // add class toggle
      //        .addIndicators() // add indicators (requires plugin)
              .addTo(controller);


  // baffle header

          let b = baffle('#section1 .header', {
              characters: '_',
              speed: 80
          });

          b.start();
          b.reveal(1000);






  });
