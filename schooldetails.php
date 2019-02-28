<?php
header('Access-Control-Allow-Origin: *');
define('HOST','mysql6.000webhost.com');
define('USER','a6701781_anduser');
define('PASS','*******');
define('DB','a6701781_android');
$con = mysqli_connect(HOST,USER,PASS,DB);
$username = $_GET['username'];
$password = $_GET['password'];
$sql = "select * from schooldata where username=$username and password=$password";
$sql=stripslashes($sql);
$res = mysqli_query($con,$sql);
$result = array();
while($row = mysqli_fetch_array($res)){
array_push($result,array('STUDENTNAME'=>$row[0],'ROLLNUMBER'=>$row[1],'CLASS'=>$row[2],'SECTION'=>$row[3],'GENDER'=>$row[4],'FATHERNAME'=>$row[5],'MOTHERNAME'=>$row[6],'DATEOFBIRTH'=>$row[7],'DATEOFJOINING'=>$row[8],'ADMISSIONNUMBER'=>$row[9],'CASTECATEGORY'=>$row[10],'RELIGION'=>$row[11],'ADDRESS'=>$row[12],'STUDENTPHONE'=>$row[13],'PARENTPHONE'=>$row[14]));
}
echo json_encode(array("result"=>$result)); 
mysqli_close($con);
 
?>
