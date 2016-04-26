var WalkerDancer = function(top, left, character) {
  Dancer.call(this, top, left, character);
};

WalkerDancer.prototype = Object.create(Dancer.prototype);
WalkerDancer.prototype.constructor = WalkerDancer;
