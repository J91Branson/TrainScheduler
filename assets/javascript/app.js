var config = {
    

    // Initialize Firebase
    
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
  
   employeeList.on('child_added', function(snap){
  
         var formattedDate = moment.unix(record.start).format('MM/DD/YYYY');
  
       $('tbody').append(`
           <tr>
               <td>${snap.val().name}</td>
               <td>${snap.val().role}</td>
               <td>${snap.val().email}</td>
               <td>${snap.val().rate}</td>
               <td>${snap.val().startDate}</td>
               <td>${snap.val()}
           </tr>
         `)
   })
  
   $("#submitButton").on("click", function() {
     event.preventDefault();
  
       var newRow = $("<div>");
       newRow.addClass("doesThisWork");
       newRow.append("<div class='row'>");
  
       var name = "";
       var role = "";
       var email = "";
       var rate = "";
       var startDate = "";
  
  
       name = $("#employeeName").val().trim();
       role = $("#employeeRole").val().trim();
       email = $("#employeeEmail").val().trim();
       rate = $("#employeeRate").val().trim();
       startDate = $("#employeeStart").val().trim();
  
       database.ref("/employee").push({
         name: name,
         role: role,
         email: email,
         rate: rate,
         startDate: startDate
  
       })
     });