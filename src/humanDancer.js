var HumanDancer = function(top, left, character) {
  Dancer.call(this, top, left, character);

};

HumanDancer.prototype = Object.create(Dancer.prototype);
HumanDancer.prototype.constructor = HumanDancer;
