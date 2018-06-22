<?php
$db_host = 'localhost';
$db_user = 'samsoft';
$db_pass = 'nanaban63';
$db_name = 'cgdata';
$conn = mysql_connect($db_host, $db_user, $db_pass) or die                      ('Error connecting to mysql');
mysql_select_db($db_name,$conn);

$query  = "SELECT * FROM news  " ;
$result = mysql_query($query);
while($row=mysql_fetch_array($result)){
	$data[]=$row;
}
print json_encode($data);

mysql_close($conn);
?>
