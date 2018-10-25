var i=1;

window.onload = function()
{
  var img = document.getElementById("circle1");
  img.onclick = changeImage;
};

function myFunction1(  ) {
  var images = ["redCircle.jpg", "greenCircle.png"];
  $("circle1").src= images[i];
  i++;
    if(i>1){
      i=0
    }
  }

  function myFunction2(  ) {
    var images = ["redCircle.jpg", "greenCircle.png"];
    $("circle2").src= images[i];
    i++;
      if(i>1){
        i=0
      }
    }


    function myFunction3(  ) {
      var images = ["redCircle.jpg", "greenCircle.png"];
      $("circle3").src= images[i];
      i++;
        if(i>1){
          i=0
        }
      }
