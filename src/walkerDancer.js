var WalkerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('walker-dancer');
  this.family = 'White Walker';
};

WalkerDancer.prototype = Object.create(Dancer.prototype);
WalkerDancer.prototype.constructor = WalkerDancer;
WalkerDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};