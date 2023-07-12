<?php

$nod        = $main->get('nod');
if ($act == 'wishlist') {
    if ($nod == 'add') {
        $sku = $main->post('sku');
        $wishlists = new wishlists();
        if (!isset($_SESSION['user'])) {
            echo 'done##', $main->toJsonData(403, 'user does not exist', '');
        } else {
            $result = $wishlists->insertWishlist($sku);
            if (isset($result)) {
                $wishlist = $wishlists->getWishlistByUser();
                echo 'done##', $main->toJsonData(200, 'success', array('wishlist'=>$wishlist,'domain'=>$domain));
            }
        }
    } else if($nod =='get'){
        $wishlists = new wishlists();
        $wishlist = $wishlists->getWishlistByUser();
         echo 'done##', $main->toJsonData(200, 'success', array('wishlist'=>$wishlist,'domain'=>$domain));
    } 
    else if($nod =='remove'){
        $sku = $main->post('sku');
        $wishlists = new wishlists();
        $result = $wishlists->removeWishlist($sku);
        if (isset($result)) {
            $wishlist = $wishlists->getWishlistByUser();
            echo 'done##', $main->toJsonData(200, 'success', array('wishlist'=>$wishlist,'domain'=>$domain));
        }

    }
}
