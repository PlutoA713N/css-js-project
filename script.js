// When eyes button is clicked, toggle laser class on brain
$(".flash").click(function() {
  $(".brain").toggleClass('laser');
});

// When color button is clicked...
$(".color").click(function() {
  // assign each named color a random number 0-255
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  
  //Generate on RGBA value from red, green, and blue
  // This value is used to generate colors
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  
  //We use jquery to change the background color
    $("body").css("background", randomRGBA);
    
  //Display the three values in an alert window
 // alert(randomRGBA);
});

$(".moves").click(function() {
  $("img").toggle();
});
