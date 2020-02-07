var i=1;
var dawg =0, lun =0, din =0, noon=0;
var days=["日","一","二","三","四","五","六"];
//var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
window.onload = function()
{ loadImage();
  var images = ["assets/redCircle.jpg", "assets/greenCircle.png"];
  var img = document.getElementById("circle1");
  //img.onclick = changeImage;
  var date = new Date();
  var year = date.getFullYear();
  //var month = months[date.getMonth()];

  var day = date.getDate();
  document.getElementById("mydate").innerHTML=(date.getMonth()+1) +"月 "+day+ ", "+year +" 星期: "+days[date.getDay()];
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
/*     var images = ["assets/redCircle.jpg", "assets/greenCircle.png"];
    firebase.database().ref('medicineMorning').child('morning').once('value',function (update){
    var mornVal = (update.val());
    console.log(mornVal+"hi");
      $("circle1").src= images[(mornVal)];
  });
        firebase.database().ref('medicineLunch').child('lunch').once('value',function (update2){
    var lunVal = (update2.val());
    console.log(lunVal+"hi");
      $("circle2").src= images[(lunVal)];
  });
            firebase.database().ref('medicineAfternoon').child('afternoon').once('value',function (update3){
    var afterVal = (update3.val());
    console.log(afterVal+"hi");
      $("circle3").src= images[(afterVal)];
  });
                firebase.database().ref('medicineDinner').child('dinner').once('value',function (update4){
    var dinVal = (update4.val());
    console.log(dinVal+"hi");
      $("circle4").src= images[(dinVal)];
  });
  */
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
  modal.style.display = "none";
}
  var modal = document.getElementById("myModal");
  modal.on('load', function(){
    modal.style.display = "block";
  });
}

function loadImage(){
   var images = ["assets/redCircle.jpg", "assets/greenCircle.png"];
    firebase.database().ref('medicineMorning').child('morning').once('value',function (update){
    var mornVal = (update.val());
    console.log(mornVal+"hi");
      $("circle1").src= images[(mornVal)];
  });
        firebase.database().ref('medicineLunch').child('lunch').once('value',function (update2){
    var lunVal = (update2.val());
    console.log(lunVal+"hi");
      $("circle2").src= images[(lunVal)];
  });
            firebase.database().ref('medicineAfternoon').child('afternoon').once('value',function (update3){
    var afterVal = (update3.val());
    console.log(afterVal+"hi");
      $("circle3").src= images[(afterVal)];
  });
                firebase.database().ref('medicineDinner').child('dinner').once('value',function (update4){
    var dinVal = (update4.val());
    console.log(dinVal+"hi");
      $("circle4").src= images[(dinVal)];
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
  //var morningRef = firebase.database.ref();
  if (i==0) {
    firebase.database().ref('medicineLunch').set({
      lunch: 1
    });
    i++;
    if(i>1){
      i=0
    }
  }else {
    firebase.database().ref('medicineLunch').set({
      lunch: 0
    });
    i++;
    if(i>1){
      i=0
    }
  }
  firebase.database().ref('medicineLunch').child('lunch').once('value',function (update2){
    var lun = (update2.val());
    console.log(lun);
      $("circle2").src= images[lun];
  });
    }


    function myFunction3(  ) {
            var images = ["assets/redCircle.jpg", "assets/greenCircle.png"];
  //var morningRef = firebase.database.ref();
  if (i==0) {
    firebase.database().ref('medicineAfternoon').set({
      afternoon: 1
    });
    i++;
    if(i>1){
      i=0
    }
  }else {
    firebase.database().ref('medicineAfternoon').set({
      afternoon: 0
    });
    i++;
    if(i>1){
      i=0
    }
  }
  firebase.database().ref('medicineAfternoon').child('afternoon').once('value',function (update3){
    var noon = (update3.val());
    console.log(noon);
      $("circle3").src= images[noon];
  });
      }

    function myFunction4(  ) {
             var images = ["assets/redCircle.jpg", "assets/greenCircle.png"];
  //var morningRef = firebase.database.ref();
  if (i==0) {
    firebase.database().ref('medicineDinner').set({
      dinner: 1
    });
    i++;
    if(i>1){
      i=0
    }
  }else {
    firebase.database().ref('medicineDinner').set({
      dinner: 0
    });
    i++;
    if(i>1){
      i=0
    }
  }
  firebase.database().ref('medicineDinner').child('dinner').once('value',function (update4){
    var din = (update4.val());
    console.log(din);
      $("circle4").src= images[din];
  });
      }
