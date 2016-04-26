var HumanDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

HumanDancer.prototype = Object.create(Dancer.prototype);
HumanDancer.prototype.constructor = HumanDancer;
HumanDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};