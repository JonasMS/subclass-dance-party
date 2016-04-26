$(document).ready(function() {

  $('.lineUpButton').on('click', function() { lineUp(); }); 

  var lineUp = function() {
    var styleSettings = {
      top: '100px',
      left: 100      
    };
    //give all dancers a new position
    
    //iterate through dancer objects
    // _.each(dancers, function(dancer) {

    // });  
    //dancerNode = $('.dancer-' + dancer.id) ....


    $('.dancer').each(function(dancer) {
      styleSettings.left += 30;

      //TODO
      // left = left of last object + its width that we saw + some fixed value (5px);
      //$(this).css(styleSettings);
      $(this).animate({
        top: '100px',
        left: styleSettings.left
      }, 2000, function() {});
    });
  };

});