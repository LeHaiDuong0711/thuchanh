<?php

$nod        = $main->get('nod');
if ($act == 'cart') {
    if ($nod == 'index') {
        
        echo 'done##', $main->toJsonData(200, 'success', array('lCart'=>$_SESSION['cart'],'domain'=>$domain));
    }
}