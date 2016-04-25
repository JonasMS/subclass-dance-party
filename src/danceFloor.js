$(document).ready(function() {

  $('.lineUpButton').on('click', function() { lineUp(); }); 

  var lineUp = function() {
    //give all dancers a certain position
    var styleSettings = {
      top: '100px',
      left: 100      
    };
    //get all dancers
    var $dancers = $('.dancer');
    //give all dancers a position
    $('.dancer').each(function(dancer) {
      styleSettings.left += 30;
      styleSettings.left += 'px';

      //TODO
      // left = left of last object + its width that we saw + some fixed value (5px);
      $(this).css(styleSettings);
      styleSettings.left = parseInt(styleSettings.left);
    });
  };


});