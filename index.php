<?php
$task = $_POST['tasks']; // get the value of the input
if ($task != ""){
  $datahandler = fopen("tasks.txt","a+"); //open file
  fwrite($datahandler,$task ."\n"); // add the input in the file
}

$taskarray = [$task]; // store the tasks in an array


while(!feof($datahandler)){
  fgets($datahandler); 
  echo json_encode(array("tasks"=>$taskarray));  
}
fclose($datahandler); //close file
   
    


