$(document).ready(function() {


// Add jQuery here

var $img = $('.hair');
$img.hide();
$('.hair-text').mousemove(function(e) {
    $img.stop(1, 1).show();
    $('.hair').offset({
        top: e.pageY + 20,
        left: e.pageX - ($img.outerWidth()/2)
    });
}).mouseleave(function() {
    $img.hide();
});

var $div2blink = $(".hair img"); // Save reference for better performance
var backgroundInterval = setInterval(function(){
    $div2blink.toggleClass("inverted");
 },300)







  });
