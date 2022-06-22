<?php
header("content-type:text/html;charset-uft8");
$user=$_POST["user"];
$password=$_POSt["password"];
$user_h=123;
$password_h=1234;
if ($user==''||$password==' '){
	echo"<script>alert('error1');window.history.go(-1)</script>";
	
}
else if(is_numeric($user)){
	if($user==$user_h&&$password==$password_h){
		echo"<script>alert('inter');window.location='main.php';</script>";
	}else{
		echo"<script>alert('error2');window.history.go(-1)</script>";
	}
	}
else{
	echo"<script>alert('error3');window.history.go(-1)</script>";
}
?>
<?php
header("content-type:text/html;charset-uft8");
$user=$POST
?>

