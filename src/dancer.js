// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.id = dancers.length;

  
  // this.character = this.getCharacter();
  //DOM/Jquery Things
  this.$node = $('<div class="dancer dancer-' + this.id + '">' + '</div>');
  // this.$head = $('<div class="character-head head-' + this.id + '"</div>');
  // this.$body = $('<div class="character-body body-' + this.id + '"</div>');
  // this.$head.css('background', 'url("assets/' + this.character.name + '.png") no-repeat');
  // this.$body.css('background', 'url("assets/' + this.character.body + '.png") no-repeat');

  // this.$node.append(this.$head);
  // this.$node.append(this.$body);

  //Character Creation

  this.timeBetweenSteps = timeBetweenSteps;
  this.danceMode = '';

  // this.step();
  this.setPosition(top, left);
  //
  if (this.constructor !== PlayerDancer) { 
    //move all but the player
    this.move();
  }
 

  // return dancer;
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(context.step.bind(context), context.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.move = function() {
  //get random numbers for top && left
  //setPosition with top && left
  if (this.danceMode === 'stop') {
    return;
  }

  var top = Math.floor(Math.random() * 500);
  var left = Math.floor(Math.random() * 500);

  this.$node.animate({
    top: top,
    left: left
  }, 2000, function() {
    // if (this.danceMode !== 'stop') {
    this.move();
    // }
  }.bind(this));
};

Dancer.prototype.getCharacter = function() {
  var characters = [
    {
      name: 'joffrey',
      body: 'dress'
    },
    {
      name: 'jonSnow',
      body: 'suit'
    }
  ];
  return characters[0];
};




