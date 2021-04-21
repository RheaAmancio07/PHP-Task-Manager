$(function(){
    $.get('tasks.txt', function (data) {  //kuhaon ang sulod sa text file
      var taskingList = '<ol type = "1">';  // variable that store for the text file value splited
      var myTasks = data.split("\n");  // slpit
      for (i = 0; i < myTasks.length; i++) {  
        if (myTasks[i] != null || myTasks[i] != undefined)  
        taskingList += '<li>' + myTasks[i] + '</li>';  //store
      } 
  
      taskingList += '</ol>';  
      $('#tasking').html(taskingList);  // store the value of 
    });  
  
    $("#taskform").submit(function(e){ 
      e.preventDefault();
      $.ajax({
        type:"POST",
        url:'index.php',
        data:$(this).serialize(),
        success: function(response){
          var jsonData = JSON.parse(response)
          console.log(jsonData);
          alert("Done");
          $.get('tasks.txt', function (data) {  
            var taskingList = '<ol type = "1">';  
            var myTasks = data.split("\n");  
            for (i = 0; i < myTasks.length; i++) {  
              if (myTasks[i] != null || myTasks[i] != undefined)  
              taskingList += '<li>' + myTasks[i] + '</li>';  
            }  
            taskingList += '</ol>';  
            $('#tasking').html(taskingList);  
          });  
                  
       }
      })
    })
  })