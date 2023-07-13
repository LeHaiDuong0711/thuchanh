<?php
$nod        = $main->get('nod');

if ($act == 'product') {
    if ($nod == 'index') {  $products = new products();
        $limit = $paging->set('limit', 8);
        $limit = $paging->get('limit');
        $page = $_POST['page'];
    
        $keyword = $main->post('keyword');
       
        if (!isset($keyword)) $keyword = '';
      
        if ($page < 1 || !isset($page)) $page = 1;
        $paging->page = $page;
        // $page = $paging->get('page');
        $offset = ($page - 1) * $limit;
      
        $AllProducts = $products->list_product($keyword);
        $paging->set('total', count($AllProducts));
        $lProducts = $products->list_product($keyword,$offset, $limit);
        $pagination = $paging->display_ajax();
        echo 'done##', $main->toJsonData(200, 'success', array('lProducts' => $lProducts ,'pagination'=>$pagination,'domain' => $domain));
    } 
    // if ($nod == 'search') {
    //     $limit = $paging->set('limit', 8);
    //     $limit = $paging->get('limit');
    //     $page = $main->post('page');
    //     $keyword = $main->post('keyword');
    //     $products = new products();
    //     if ($page < 1 || !isset($page)) $page = 1;
    //     $paging->page = $page;
    //     // $page = $paging->get('page');
    //     $offset = ($page - 1) * $limit;
    //     $AllProducts = $products->listProductByFilled($keyword);
    //     $paging->set('total', count($AllProducts));
    //     $lProducts = $products->listProductByFilled($keyword,$offset, $limit);
    //     $pagination = $paging->display_ajax();
    //     echo 'done##', $main->toJsonData(200, 'success', array('lProducts' => $lProducts ,'pagination'=>$pagination,'domain' => $domain));
    // }
}
