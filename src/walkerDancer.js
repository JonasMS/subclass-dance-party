var WalkerDancer = function(top, left, character) {
  Dancer.call(this, top, left, character);
  
  // this.$node.addClass('walker-dancer');
  // this.$head = $('<div class="character-head head-' + this.id + '"</div>');
  // this.$body = $('<div class="character-body body-' + this.id + '"</div>');
  // this.$head.css('background', 'url("assets/walkerHead.png") no-repeat');
  // this.$body.css('background', 'url("assets/dress.png") no-repeat');

  // this.$node.append(this.$head);
  // this.$node.append(this.$body);

  this.family = 'White Walker';
};

WalkerDancer.prototype = Object.create(Dancer.prototype);
WalkerDancer.prototype.constructor = WalkerDancer;
WalkerDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};