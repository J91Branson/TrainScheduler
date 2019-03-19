
    
    
    // Initialize Firebase   
    
    var config = {
      apiKey: "AIzaSyDWC2YRCkUZtkjmRrUo_rAmOpUbk-jYVIA",
      authDomain: "train-scheduler-f0265.firebaseapp.com",
      databaseURL: "https://train-scheduler-f0265.firebaseio.com",
      projectId: "train-scheduler-f0265",
      storageBucket: "train-scheduler-f0265.appspot.com",
      messagingSenderId: "346189852819"
  };
  
  
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  var employeeList = database.ref('/train');

  $("#submit-btn").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrain = $("#firstTrain").val().trim();
    var frequency = $("#frequency").val().trim();

    var newTrain = {
      trainName: trainName,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency,

    }
    database.ref().push(newTrain);



    $("#trainName").val("");
    $("#destination").val("");
    $("#firstTrain").val("");
    $("#frequency").val("");

    

  });
  
  database.ref().on("child_added", function (childSnapshot) {

    

    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination
    var firstTrain = childSnapshot.val().firstTrain;
    var frequency = childSnapshot.val().frequency;
    var currentTime = moment().format('LT');
    var firstTrainConverted = moment(firstTrain, "hh:mm").subtract(1, "years");
    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
    var remainder = diffTime %frequency;
    var MinutesTillTrain = frequency - remainder;
    var nextTrain = moment().add(MinutesTillTrain, "minutes");
    var nextTrain = moment(nextTrain).format("hh:mm");
    

  
    $("#tbody").append("<tr><td>" + trainName + "</td><td>" +
     destination + "</td><td>" + frequency + "</td><td>" + nextTrain
    + "</td><td>" + MinutesTillTrain + "</td");



  
  });

  