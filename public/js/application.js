$(document).ready(function() {
  var backgroundColor = $('body').css({'background-color': getCookie(document.cookie)});

  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').text($(this).data('heading'));
    backgroundColor;
  });

  $('.skill_teller').on('click', function() {
    $('#skill_holder').text(window.location.pathname.split('/').join(' '));
    backgroundColor;
  });
  
  $('.meal_teller').on('click', function() {
    $('#meal_holder').text($('.partial-meal').text());
    $(window.location.reload());
    backgroundColor;
  });

  $(document).on('click', '#submit-color', function() {
    backgroundColor;
  });
});

function getCookie(cookie_name){
  var newCookie = cookie_name.substring(cookie_name.indexOf('%') + 3, cookie_name.length);
  return '#' + newCookie;
};
