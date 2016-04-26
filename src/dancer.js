// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.id = dancers.length;
 
  this.$node = $('<span class="dancer dancer-' + this.id + '"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  
  this.danceMode = '';

  this.step();
  this.setPosition(top, left);
  this.move();


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

  console.log('primary called');
  this.$node.animate({
    top: top,
    left: left
  }, 2000, function() {
    console.log('callback called');
    if (this.danceMode !== 'stop') {
      this.move();
    }
  }.bind(this));


};




