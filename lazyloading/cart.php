<?php

$nod        = $main->get('nod');
if ($act == 'index') {
    if ($nod == 'add') {

        $id = $main->post('id');
        $quantity = $main->post('quantity');
        $size_id = $main->post('idSize');
        $color_id = $main->post('idColor');
        $product_options = new product_options();
        $product = new products();
        $property = new property();
        $cart = new cart();
        $prod_ops = $product_options->getProduct($id, $size_id, $color_id);
        $SKU = "";
        $image = "";
        $name = "";
        $version = "";
        $price = "";

        if ($prod_ops) {
            $prod = $product->getProductById($prod_ops['root_id']);
            $size = $property->get_size($prod_ops['size_id']);
            $color = $property->get_color($prod_ops['color_id']);
            $images = $product_options->getImages($prod_ops['id']);
            $SKU = $prod_ops['SKU'];
            $image = $images[0];
            $name = $prod['name'];
            $version = $size['name'] . " - " . $color['name'];
            $price = $prod_ops['promotion'] > 0 ? $prod_ops['promotion'] : $prod_ops['price'];
            $cart->add_to_cart($SKU, $name, $image, $version, $price, $quantity);
            $total = 0;
            $countCart = 0;
            if (isset($_SESSION['cart'])) {
                $countCart = count($_SESSION['cart']);
                foreach ($_SESSION['cart'] as $key => $value) {
                    $total += $value['total'];
                }
            }
        }
        echo 'done##', $main->toJsonData(200, 'success', array('cart' => $_SESSION['cart'], 'subTotal' => $total, 'domain' => $domain));
    } else if ($nod = "remove") {
        $key = $main->post('key');
        $cart = new cart();
        $result = $cart->delete_cart($key);

        if (!$result) {
            $total = 0;
            if (isset($_SESSION['cart'])) {
                $countCart = count($_SESSION['cart']);
                foreach ($_SESSION['cart'] as $key => $value) {
                    $total += $value['total'];
                }
            }
            echo 'done##', $main->toJsonData(200, 'success', array('cart' => $_SESSION['cart'], 'subTotal' => $total, 'domain' => $domain));
        }
    }
}
