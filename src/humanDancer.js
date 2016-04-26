var HumanDancer = function(top, left, character) {
  Dancer.call(this, top, left, character);

  // this.character = this.getCharacter();

  // this.$head = $('<div class="character-head head-' + this.id + '"</div>');
  // this.$body = $('<div class="character-body body-' + this.id + '"</div>');
  // this.$head.css('background', 'url("assets/' + character.name + '.png") no-repeat');
  // this.$body.css('background', 'url("assets/' + character.body + '.png") no-repeat');

  // this.$node.append(this.$head);
  // this.$node.append(this.$body);

  this.character = 'human';
};

HumanDancer.prototype = Object.create(Dancer.prototype);
HumanDancer.prototype.constructor = HumanDancer;
HumanDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};
// HumanDancer.prototype.getCharacter = function() {
//   var characters = [
//     {
//       name: 'joffrey',
//       body: 'dress'
//     },
//     {
//       name: 'jonSnow',
//       body: 'suit'
//     }
//   ];
//   return characters[0];
// };