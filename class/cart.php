<?php class cart extends model
{
    protected $class_name = 'cart';
    
 
    function delete_cart($key)
    {
        unset($_SESSION['cart'][$key]);
        $_SESSION['cart'] = array_values($_SESSION['cart']);
    }

    //cập nhật giỏ hàng
    function update_cart($key, $quantity)
    {
        if ($quantity <= 0) {
            $this->delete_cart($key);
        } else {
        
            $_SESSION['cart'][$key]['quantity'] = $quantity;
            $new_total = $_SESSION['cart'][$key]['quantity'] * $_SESSION['cart'][$key]['price'];
            $_SESSION['cart'][$key]['total'] = $new_total;
        }


      
    }

  


    //thêm vào giỏ hàng
    function add_to_cart($SKU, $name, $image, $version, $price, $quantity)
    {
        if (!isset($_SESSION['cart'])) {
            $_SESSION['cart'] = array();
        }
        $total = $quantity * $price;

        $item = array(
            'id' => $SKU,
            'img' => $image,
            'name' => $name,
            'version' => $version,
            'quantity' => $quantity,
            'price' => $price,
            'total' => $total
        );

        $flag = 0;
        foreach ($_SESSION['cart'] as $key => $element) {
            if ($element['id'] == $item['id']) {
                $flag = 1;
                $element['quantity'] += $item['quantity'];
                $this->update_cart($key, $element['quantity']);
                break;
            }
        }
        if ($flag == 0) {
            $_SESSION['cart'][] = $item;
        }

        return 0;
    }

    function getTotalCart(){
        $totalCart = 0;
        foreach ($_SESSION['cart'] as $key => $value) {
            $totalCart+=$value['total'];
        }
        return $totalCart;
        
    }

    
}
