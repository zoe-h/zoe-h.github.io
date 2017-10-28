$(document).ready(function() {


// Add jQuery here

//filter

$('.nav_all').click(function(event) {
  $('.item').removeClass('hide');
  $('.item').addClass('show');
});

$('.nav_cache').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');
  $('.item.cache').removeClass('hide');
  $('.item.cache').addClass('show');
});

$('.nav_container').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');
  $('.item.containers').removeClass('hide');
  $('.item.containers').addClass('show');
});

$('.nav_tott').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');
  $('.item.tott').removeClass('hide');
  $('.item.tott').addClass('show');
});

$('.nav_puzzle').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');
  $('.item.puzzle').removeClass('hide');
  $('.item.puzzle').addClass('show');
});

$('.nav_swag').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');
  $('.item.swag').removeClass('hide');
  $('.item.swag').addClass('show');
});

$('.nav_log').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');
  $('.item.log').removeClass('hide');
  $('.item.log').addClass('show');
});

$('.nav_map').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');
  $('.item.map').removeClass('hide');
  $('.item.map').addClass('show');
});

//other

$('.item').click(function(event) {
  $(this).addClass('reveal');
  $('.nav-wrapper').addClass('show');
  $('.congratulations').addClass('show');
});

$('.nav_all').click(function(event) {
  $('.item').removeClass('hide');
  $('.item').addClass('show');
});

$('.nav_huntmode').click(function(event) {
  $('.item').removeClass('reveal');
});

$('.nav_revealall').click(function(event) {
  $('.item').addClass('reveal');
});

$('.nav_thumbnail').click(function(event) {
  $('.item').addClass('thumbnail');
  $('.longlog').addClass('logthumbnail');
  $('.container').addClass('flexcenter');
});

$('.nav_full').click(function(event) {
  $('.item').removeClass('thumbnail');
  $('.longlog').removeClass('logthumbnail');
  $('.container').removeClass('flexcenter');
  $('.item').addClass('reveal');
});




  });
