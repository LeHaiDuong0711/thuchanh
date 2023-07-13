<?php

global $main;

if ($act == 'index') {
    $wishlists = new wishlists();
    $products = new products();
    $lProduct = [];
    if (isset($_SESSION['user'])) {
        $wishlist = $wishlists->getWishlistByUser();
        foreach ($wishlist as $key => $value) {
            array_push($lProduct, $products->getProductBySKU($value['pro_SKU']));
            $lProduct[$key]['link'] = $main->convert_link_url($lProduct[$key]['name']);
        }
    }
    $st->assign('wishlist', $lProduct);
}
