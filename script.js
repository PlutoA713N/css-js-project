<script>
// It turns on/off a brian class
$(".flash").click(function() {
  $(".brain").toggleClass('laser');
});

$(".color").click(function () {
  // We Generate a Random number & use it in rgb() value;
  var red = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
//
  alert(red + "," + green + "," + blue);
  background.style = rgb(red, blue, green, 1);
});
</script>
