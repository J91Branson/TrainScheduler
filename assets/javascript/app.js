
    

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
    var employeeList = database.ref('/employee');
    var name = "";
    var destination = "";
    var frequency = "";
    var firstTrain = "";
    var currentTime = moment().format('HH:MM');  
    employeeList.on('child_added', function(snap){
        
        //  var formattedDate = moment.unix(record.start).format('MM/DD/YYYY');
        
        $('tbody').append(`
        <tr>
        <td>${snap.val().name}</td>
        <td>${snap.val().destination}</td>
        <td>${snap.val().frequency}</td>
        <td>${snap.val().firstTrain}</td>
        <td>${snap.val()}
        </tr>
        `)
    })
    
    $("#submitButton").on("click", function() {
     event.preventDefault();
     console.log(currentTime);

     
  
       var newRow = $("<div>");
       newRow.addClass("doesThisWork");
       newRow.append("<div class='row'>");
  
       
  
  
       name = $("#trainName").val().trim();
       destination = $("#destination").val().trim();
       frequency = $("#frequency").val().trim();
       firstTrain = $("#firstTrain").val().trim();
       
  
       database.ref("/employee").push({
         name: name,
         destination: destination,
         frequency: frequency,
         firstTrain: firstTrain,
         
  
       })
     });

     