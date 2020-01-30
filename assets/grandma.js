var i=1;
var dawg =0, lun =0, din =0, noon=0;

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
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
  firebase.initializeApp(firebaseConfig);
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
