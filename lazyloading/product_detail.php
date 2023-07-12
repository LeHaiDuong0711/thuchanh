<?php

$nod        = $main->get('nod');
if ($act == 'product') {
   

    if ($nod == 'property') {
        $idColor = isset($_POST['idColor']) ? $_POST['idColor'] : 0;
        $idProduct = isset($_POST['idProduct']) ? $_POST['idProduct'] : 0;
        $product_options = new product_options();
        $product_ops = $product_options->getProductByColor($idProduct, $idColor);
        if ($product_ops) {
            echo 'done##', $main->toJsonData(200, 'success', array('product_ops' => $product_ops, 'domain' => $domain));
        }
    }
} else if ($act = 'category') {

    if ($nod = 'getColorBySize') {
        $idSize = isset($_POST['idSize']) ? $_POST['idSize'] : 0;
        $idProduct = isset($_POST['idProduct']) ? $_POST['idProduct'] : 0;
        $product_options = new product_options();
        $property = new property();

        $color_ids = $product_options->getColorBySize($idProduct, $idSize);
        $colors = array();
        if (isset($color_ids)) {
            foreach ($color_ids as $key => $value) {
                array_push($colors, $property->getPropertyById($value['color_id']));
            }
            echo 'done##', $main->toJsonData(200, 'success', array('colors' => $colors, 'domain' => $domain));
        }
    }
}
