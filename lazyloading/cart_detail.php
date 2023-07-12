<?php

$nod        = $main->get('nod');
if ($act == 'cart') {
    if ($nod == 'update') {
       $key = isset($_POST['key'])?$_POST['key']:0;
       $quantity = isset($_POST['quantity'])?$_POST['quantity']:0;
       $cart = new cart();
       $cart->update_cart($key,$quantity);
       echo 'done##', $main->toJsonData(200, 'success', array('cart'=>$_SESSION['cart'][$key],'domain'=>$domain));
    }
}