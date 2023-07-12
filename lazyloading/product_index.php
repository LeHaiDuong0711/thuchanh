<?php
$nod        = $main->get('nod');

if ($act == 'product') {
    if ($nod == 'index') {
        $limit = $paging->set('limit', 8);
        $limit = $paging->get('limit');
        $page = $_POST['page'];
        $products = new products();
        if ($page < 1 || !isset($page)) $page = 1;
        $paging->page = $page;
        // $page = $paging->get('page');
        $offset = ($page - 1) * $limit;
      
        $AllProducts = $products->list_product();
        $paging->set('total', count($AllProducts));
        $lProducts = $products->list_product($offset, $limit);
        $pagination = $paging->display_ajax();
        echo 'done##', $main->toJsonData(200, 'success', array('lProducts' => $lProducts ,'pagination'=>$pagination,'domain' => $domain));
    }
}
