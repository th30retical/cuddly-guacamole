// on device ready
$(function() {
  $('.logo').on('click', function() {
    // for browser support take out /www
    $.mobile.changePage('../www/menu.html', {
      transition: 'slide',
      changeHash: false
    });
  })
});
