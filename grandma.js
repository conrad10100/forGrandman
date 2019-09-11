var i=1;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
window.onload = function()
{
  var img = document.getElementById("circle1");
  //img.onclick = changeImage;
  var date = new Date();
  var year = date.getFullYear();
  var month = months[date.getMonth()];
  var day = date.getDate();
  document.getElementById("mydate").innerHTML=month+" "+day+", "+year;
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
