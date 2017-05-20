<?php
header('Access-Control-Allow-Origin: *');
define('HOST','mysql6.000webhost.com');
define('USER','a6701781_anduser');
define('PASS','samanthakajal');
define('DB','a6701781_android');
$con = mysqli_connect(HOST,USER,PASS,DB);
$sql = "select * from schooldata";
 
$res = mysqli_query($con,$sql);
 
$result = array();
 
while($row = mysqli_fetch_array($res)){
array_push($result,
array('STUDENTNAME'=>$row[1],'ROLL NUMBER'=>$row[2],'CLASS'=>$row[3],'SECTION'=>$row[4]),'GENDER'=>$row[5],'FATHER NAME'=>$row[6],'MOTHER NAME'=>$row[7],'DATE OF BIRTH'=>$row[8],'DATE OF JOINING'=>$row[9],'ADMISSION NUMBER'=>$row[10],'CASTE CATEGORY'=>$row[11],'RELIGION'=>$row[12],'ADDRESS'=>$row[13],'STUDENT PHONE'=>$row[14],'PARENT PHONE'=>$row[15]);
}
 
echo json_encode(array("result"=>$result));
 
mysqli_close($con);
 
?>