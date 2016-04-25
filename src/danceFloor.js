$(document).ready(function() {

  $('.lineUpButton').on('click', function() { lineUp(); }); 

  var lineUp = function() {
    //give all dancers a certain position
    var styleSettings = {
      top: '100px',
      left: '100px'      
    };
    //get all dancers
    var $dancers = $('.dancer');
    //give all dancers a position
    $('.dancer').each(function(dancer) {
      $(this).css(styleSettings);
    });
  };


});