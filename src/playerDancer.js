var PlayerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('player-dancer');
  this.id = dancers.length;
  this.family = 'player';
  this.danceMode = 'stop';
};

PlayerDancer.prototype = Object.create(Dancer.prototype);
PlayerDancer.prototype.constructor = PlayerDancer;
PlayerDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};