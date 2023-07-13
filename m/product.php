<?php

global $main;

if ($act == 'index') {
    $products = new products();

    $limit = $paging->set('limit',8);
    $limit = $paging->get('limit');
    $page = $main->get('page');
    
    if($page<1|| !isset($page))$page =1;
    
    $paging->page = $page;
    // $page = $paging->get('page');
    $offset = ($page - 1) * $limit;
    $AllProducts = $products->list_product();
    $paging->set('total', count($AllProducts));

    $lProducts = $products->list_product($keyword='',$offset, $limit);
    $pagination = $paging->display_ajax();
    $st->assign('pagination', $pagination);
    $st->assign('lProducts', $lProducts);
} else
if ($act == 'detail') {
    $title .= 'Chi tiết sản phẩm';
    $product = new products();
    $product_options = new product_options();
    $property = new property();
    $id = $main->get('id');
    $product->set('id', $id);
    $dProduct = $product->get_detail();
    $images = $product->getImages($id);
    $sizes = $product_options->get_size($id);

    foreach ($sizes as $key => $value) {
        $size = $property->get_size($value);
        $sizes[$key] = array('id' => $size['id'], 'name' => $size['name'], 'value' => $size['value']);
    }
    $colors = $product_options->get_color($id);
    foreach ($colors as $key => $value) {
        $color = $property->get_color($value);
        $colors[$key] = $color['value'];
        $colors[$key] = array('id' => $color['id'], 'name' => $color['name'], 'value' => $color['value'],'image_icon'=>$color['image_icon']);
    }
    $st->assign('dProduct', $dProduct);
    $st->assign('images', $images);
    $st->assign('sizes', $sizes);
    $st->assign('colors', $colors);
}
