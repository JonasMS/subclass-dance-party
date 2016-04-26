$(document).ready(function() {

  $('.lineUpButton').on('click', function() { lineUp(); }); 
  $('.cotillionButton').on('click', function() { cotillion(); }); 
  //make another button function here

  var lineUp = function() {
    var styleSettings = {
      top: 100,
      left: 100      
    };
    //give all dancers a new position
    
    //iterate through dancer objects
    _.each(dancers, function(dancer) {
      //get html object that has class dancer- + dancer.id
      styleSettings.left += 30;
      dancer.danceMode = 'stop'; 
      $('.dancer-' + dancer.id).animate({
        top: styleSettings.top,
        left: styleSettings.left
      }, 2000);
    });  

  };

  var cotillion = function () {
    var hasHalved = false;

    var styleSettings = {
      top: 100,
      left: '100px'      
    };

    //give each group of dancers the same x-axis, different y-axis
    _.each(dancers, function(dancer, idx, collection) {
      dancer.danceMode = 'stop';
      if ( idx >= (collection.length / 2) && !hasHalved ) {
      //when half of dancers are linedUp, left += x, reset top
        styleSettings.left = 400;
        styleSettings.top = 100;
        hasHalved = true;
      }
      styleSettings.top += 30;
      $('.dancer-' + dancer.id).animate({
        top: styleSettings.top,
        left: styleSettings.left
      }, 2000);
    });
  };

});