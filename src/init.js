$(document).ready(function() {
  window.dancers = [];
  window.characters = [
    {
      name: 'joffrey',
      body: 'dress'
    },
    {
      name: 'snow',
      body: 'dress'
    },
    {
      name: 'tyrion',
      body: 'dress'
    },
    {
      name: 'arya',
      body: 'dress'
    },
    {
      name: 'khaleesi',
      body: 'dress'
    },
    {
      name: 'cersei',
      body: 'dress'
    }
  ];
  window.whiteWalker = {
    name: 'walkerHead',
    body: 'dress'
  };
  window.player;

  var createDancer = function(creatorClass, character) {
    var dancer = new creatorClass(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        character
      );
    $('.container').append(dancer.$node);
    dancers.push(dancer);
    if ( dancer.constructor === PlayerDancer ) {
      player = dancer;
    }
  };

  $('.add-all-button').on('click', function(event) {
    //iterate thru characters
    _.each(window.characters, function(character) {
      createDancer(HumanDancer, character);
    });
  });

  $('.winter-button').on('click', function(event) {    
    createDancer(WalkerDancer, whiteWalker);
  });

  $('.human-button, .player-button').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    createDancer( dancerMakerFunction, characters[_.random(0, characters.length - 1)] );
  });
});

