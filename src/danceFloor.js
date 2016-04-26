var distanceBetween = function(x1, y1, x2, y2) {
    return Math.sqrt( Math.pow( x2 - x1, 2 ) + Math.pow( y2 - y1, 2 ) );
  };

var playerAttack = function (playerId, dancerId) {
  $('.dancer-' + dancerId).css('border-color', 'green');
};

$(document).ready(function() {

  $('.lineUp-button').on('click', function() { lineUp(); });
  $('.cotillion-button').on('click', function() { cotillion(); });
  $('.dance-button').on('click', function() { everybodyDance(); });
  //make another button function here

//--------------------
//CONTROL CROWD
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

  var everybodyDance = function () {
    console.log('here');
    //iterate through all objects and change their state to 'dance'
    _.each(dancers, function(dancer) {
      if (dancer.constructor !== PlayerDancer) {
        dancer.danceMode = 'dance';
        dancer.move();
      }
    });
  };



//--------------------
//COLLISIONS


  var detectCollisions = function() {
    //iterate thru all objects
    for (var i = 0; i < dancers.length; i++) {

      //iterate again
      for (var j = i + 1; j < dancers.length; j++) {
        pos1 = $('.dancer-' + i).offset();
        pos2 = $('.dancer-' + j).offset();
        if ( distanceBetween( pos1.left, pos1.top, pos2.left, pos2.top) <= 20 ) {
          interaction(dancers[i], dancers[j]);
        }
      }
    }
  };

  //TODO: need to lookup dancer's id? Why not just use i and j?
  //Position in dancers array should correlate with id
  var interaction = function (dancer1, dancer2) {
    if ( dancer1.constructor === WalkerDancer ) {
      dancer2.constructor = WalkerDancer;
      $('.dancer-' + dancer2.id).css('border-color', 'blue');
    } else if ( dancer2.constructor === WalkerDancer ) {
      dancer1.constructor = WalkerDancer;
      $('.dancer-' + dancer1.id).css('border-color', 'blue');
    }
  };



  setInterval(detectCollisions, 100);

});

//--------------------
//PLAYER MOVEMENTS
$(document).keydown(function(e) {
  //find the player
  var player;

  var $dancer; //$('.dancer-' + index)
  //TODO: is this each loop necessary?
  _.each(dancers, function(dancer) {
    if (dancer.constructor === PlayerDancer) {
      player = dancer;
    }
  });

  var pos = $('.dancer-' + player.id).offset();
  var increment = 10;
  // left pressed
  if (e.which === 37) {
    $('.dancer-' + player.id).css('left', pos.left - increment);
  }
  // up pressed
  if (e.which === 38) {
    $('.dancer-' + player.id).css('top', pos.top - increment);
  }
  // right pressed
  if (e.which === 39) {
    $('.dancer-' + player.id).css('left', pos.left + increment);
  }
  // down pressed
  if (e.which === 40) {
    $('.dancer-' + player.id).css('top', pos.top + increment);
  }

  // spacebar (attack) pressed
  if (e.which === 32) {
    //detect collisions between player and all dancers
    _.each(dancers, function(dancer, idx) {
      dancer = $('.dancer-' + idx).offset();
      if ( distanceBetween( pos.left, pos.top, dancer.left, dancer.top) <= 40 ) {
        if ( idx !== player.id ){
          playerAttack(player.id, idx);
        }
      }
    });
  }
});

//--------------------










