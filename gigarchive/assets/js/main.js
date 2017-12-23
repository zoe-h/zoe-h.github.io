$(document).ready(function() {


// Add jQuery here

//table row clickable

$(".clickable-row tr").click(function() {
  window.location = $(this).data('url');
});

// image hover


$("tr").hover(function () {
    var data_id = $(this).data('id');

    $('img').each(function() {
        var el = $(this);

        if(el.attr('id') == data_id)
            el.show();
        else
            el.hide();
    });
});

//$('table .paramore').mouseenter(function() {
  //$('img').addClass('image-hide');
  //$(this).data('class').removeClass('image-hide');
//});

















  });
