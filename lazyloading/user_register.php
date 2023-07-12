<?php
$nod        = $main->get('nod');

if ($act == 'register') {
    if ($nod == 'insert') {
        // global $db;
        $fullName = isset($_POST['fullName']) ? $_POST['fullName'] : "";
        $email = isset($_POST['email']) ? $_POST['email'] : "";
        $phone = isset($_POST['phone']) ? $_POST['phone'] : 0;
        $password = isset($_POST['password']) ? $_POST['password'] : 0;
        $timestamp1 = strtotime("now");
        $joined_at = date("Y-m-d H:i:s", $timestamp1);
        $user = new user();
        $user->setemail($email);
        $user->setphone($phone);

        $checkEmail = $user->checkEmail();
        $checkPhone = $user->checkPhone();
        if ($checkEmail) {
            echo 'done##', $main->toJsonData(403, 'email exited', null);
        } elseif ($checkPhone) {
            echo 'done##', $main->toJsonData(403, 'phone exited', null);
        } else {
            $data = array('id'=>null,'fullName'=>$fullName,'avatar'=>'avatar.jpg','email'=>$email,'phone'=>$phone,'facebookId'=>'','password'=>md5($password),'role_id'=>0,'joined_at'=>$joined_at,'status'=>0,'deleted'=>0);

            $result = $db->record_insert('user',$data);
            if($result){
                echo 'done##', $main->toJsonData(200, 'success','');
            } else{
                 echo 'done##', $main->toJsonData(403, 'error','');
            }

        }
    }
}
