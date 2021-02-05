<?php
  $CN = mysqli_connect("localhost", "root","");
  $DB = mysqli_select_db($CN, "jokescode");

  $EncodedData = file_get_contents('php://input');
  $DecodedData = json_decode($EncodedData, true);

  $persona_phone = $DecodedData['persona_phone'];
  $person_mail = $DecodedData['person_mail'];
  $person_name = $DecodedData['person_name'];

  $IQ = "insert into person(persona_phone, person_mail, person_name) values ('$persona_phone', '$person_mail', '$person_name')";

  $R = mysqli_query($CN, $IQ);

  if($R){
    $Message = "Person has been registered successfully";
  }else{
    $Message = "Server Error";
  }

  $Response[] = array("Message" => $Message);
  echo json_encode($Response);
?>
