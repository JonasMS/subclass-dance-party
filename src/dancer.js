// Creates and returns a new dancer object that can step
var Dancer = function(top, left, character) {
  this.id = dancers.length;

  //DOM/Jquery Things
  this.$node = $('<div class="dancer dancer-' + this.id + '">' + '</div>');
  this.$head = $('<div class="character-head head-' + this.id + ' ' + character.name + '-head" </div>');
  this.$body = $('<div class="character-body body-' + this.id + ' ' + character.name + '-body" </div>');
  this.$head.css('background', 'url("assets/' + character.name + '.png") no-repeat');
  this.$body.css('background', 'url("assets/' + character.body + '.png") no-repeat');
 
  this.$node.append(this.$head);
  this.$node.append(this.$body);

  //Character Creation

  this.danceMode = '';
  this.isDead = false;

  this.setPosition(top, left);
  //
  if (this.constructor !== PlayerDancer) { 
    this.move();
  }
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

  var top = Math.floor(Math.random() * ($(window).height() - 300));
  var left = Math.floor(Math.random() * ($(window).width() - 300));

  this.$node.animate({
    top: top,
    left: left
  }, 2000, function() {
    // if (this.danceMode !== 'stop') {
    this.move();
    // }
  }.bind(this));
};
