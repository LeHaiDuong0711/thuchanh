<?php
$nod        = $main->get('nod');

if ($act == 'login') {
    if ($nod == 'login') {
        // global $db;
        
        $typeAccount = isset($_POST['typeAccount']) ? $_POST['typeAccount'] : "";
        $pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/";
        $email="";
        $phone="";
        if (preg_match($pattern, $typeAccount)) {
            $user->setemail($typeAccount);
          } else {
            $user->setphone($typeAccount);
          }
        $password = isset($_POST['password']) ? $_POST['password'] : 0;
        $user->setpassword(md5($password));
       $checkLogin= $user->check_login();
       if( $checkLogin){
        $_SESSION['user']=$checkLogin;
        echo 'done##', $main->toJsonData(200, 'success',array('user'=>$_SESSION['user'],'domain'=>$domain));
       } else {
        echo 'done##', $main->toJsonData(403, 'error','');

       }
    }
    if($nod == 'logout'){
        unset($_SESSION['user']);
        echo 'done##', $main->toJsonData(200, 'success','');
    }
}
