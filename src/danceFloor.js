$(document).ready(function() {

  $('.lineUpButton').on('click', function() { lineUp(); }); 

  var lineUp = function() {
    //give all dancers a certain position
    var styleSettings = {
      top: '100px',
      left: 100      
    };
    //get all dancers
    var $dancers = $('.dancer');
    //give all dancers a position
    $('.dancer').each(function(dancer) {
      styleSettings.left += 30;

      //TODO
      // left = left of last object + its width that we saw + some fixed value (5px);
      //$(this).css(styleSettings);
      $(this).animate({
        top: '100px',
        left: styleSettings.left
      }, 2000, function() {});
      // styleSettings.left = parseInt(styleSettings.left);
    });
  };

  
//  $( "#clickme" ).click(function() {
//   $( "#book" ).animate({
//     opacity: 0.25,
//     top: '100px',
//     left: '+=50",
//     height: "toggle"
//   }, 1000, function() {
//     // Animation complete.
//   });
// });

});