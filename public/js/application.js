$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').text($(this).data('heading'));
  });

  $('.skill_teller').on('click', function() {
    $('#skill_holder').text(window.location.pathname.split('/').join(' '));
  });
  
  $('.meal_teller').on('click', function() {
    $('#meal_holder').text($('.partial-meal').text());
    $(window.location.reload());
  });

  // $('#submit-color').on('click', function() {
  //   console.log($(this).val());
  // });
});
