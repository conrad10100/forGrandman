var i=1;
var dawg =0;

//var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
window.onload = function()
{
  var images = ["assets/redCircle.jpg", "assets/greenCircle.png"];
  var img = document.getElementById("circle1");
  //img.onclick = changeImage;
  var date = new Date();
  var year = date.getFullYear();
  //var month = months[date.getMonth()];

  var day = date.getDate();
  document.getElementById("mydate").innerHTML=(date.getMonth()+1) +"月 "+day+ ", "+year;
  var database = firebase.database();
  var firebaseConfig = {
    apiKey: "AIzaSyAhHWZdJY-4BUgKvnapdMiypVhwJlSiA3o",
    authDomain: "gramgram-c04dd.firebaseapp.com",
    databaseURL: "https://gramgram-c04dd.firebaseio.com",
    projectId: "gramgram-c04dd",
    storageBucket: "gramgram-c04dd.appspot.com",
    messagingSenderId: "790397290686",
    appId: "1:790397290686:web:9a0a0a3d5b6ee37290b6ef",
    measurementId: "G-R29PT80830"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.database().ref('medicineMorning').child('morning').once('value',function (update){
    var mornVal = (update.val());
    console.log(mornVal);
      $("circle1").src= images[mornVal];
  });

}

function myFunction1(  ) {
  var images = ["assets/redCircle.jpg", "assets/greenCircle.png"];
  //var morningRef = firebase.database.ref();
  if (i==0) {
    firebase.database().ref('medicineMorning').set({
      morning: 1
    });
    i++;
    if(i>1){
      i=0
    }
  }else {
    firebase.database().ref('medicineMorning').set({
      morning: 0
    });
    i++;
    if(i>1){
      i=0
    }
  }
  firebase.database().ref('medicineMorning').child('morning').once('value',function (update){
    var dawg = (update.val());
    console.log(dawg);
      $("circle1").src= images[dawg];
  });

}

  function myFunction2(  ) {
    var images = ["assets/redCircle.jpg", "assets/greenCircle.png"];
    firebase.database().ref('medicineLunch').set({
      lunch: 1
    });
    $("circle2").src= images[i];
    i++;
      if(i>1){
        i=0
      }
    }


    function myFunction3(  ) {
      var images = ["assets/redCircle.jpg", "assets/greenCircle.png"];
      firebase.database().ref('medicineAfternoon').set({
        afternoon: 1
      });
      $("circle3").src= images[i];
      i++;
        if(i>1){
          i=0
        }
      }

    function myFunction4(  ) {
      var images = ["assets/redCircle.jpg", "assets/greenCircle.png"];
      firebase.database().ref('medicineDinner').set({
        dinner: 1
      });
      $("circle4").src= images[i];
      i++;
        if(i>1){
          i=0
        }
      }
