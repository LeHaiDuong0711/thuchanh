<php?>


    <?php

    $nod        = $main->get('nod');
    if ($act == 'login') {
        if ($nod == 'index') {
            
            echo 'done##', $main->toJsonData(200, 'success', array('formRegister', 'domain' => $domain));
        }
        
    }
