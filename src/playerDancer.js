var PlayerDancer = function(top, left, character) {
  Dancer.call(this, top, left, character);

  //Jquery Things
  this.$node.addClass('player-dancer');
  //only player has a sword
  this.$sword = $('<div class = "sword"></div>');
  this.$node.append(this.$sword);

  this.id = dancers.length;
  this.danceMode = 'stop';
};

PlayerDancer.prototype = Object.create(Dancer.prototype);
PlayerDancer.prototype.constructor = PlayerDancer;