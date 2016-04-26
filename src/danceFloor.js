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

  var distanceBetween = function(x1, y1, x2, y2) {
    console.log('distanceBetween Run');
    return Math.sqrt( Math.pow( x2 - x1, 2 ) + Math.pow( y2 - y1, 2 ) );
  };

  var detectCollisions = function() {
    //iterate thru all objects
    for (var i = 0; i < dancers.length; i++) {

      //iterate again
      for (var j = i + 1; j < dancers.length; j++) {
        $dancer1 = $('.dancer-' + i).offset();
        $dancer2 = $('.dancer-' + j).offset();
        if ( distanceBetween( $dancer1.left, $dancer1.top, $dancer2.left, $dancer2.top) <= 20 ) {
        }
      }
    }

    //
  };

  setInterval(detectCollisions, 100);

});