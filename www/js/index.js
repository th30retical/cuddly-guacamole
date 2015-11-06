// on device ready
$(function() {
  $('.logo').on('click', function() {
    // for browser support take out /www
    $.mobile.changePage('../menu.html', {
      transition: 'slide',
      type:'post'
    });
  })
});
