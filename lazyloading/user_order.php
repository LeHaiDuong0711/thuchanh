<?php
$nod        = $main->get('nod');

if ($act == 'order') {
    if ($nod == 'order') {
        $fullName = $main->post('fullName');
        $address = $main->post('address');
        $phone = $main->post('phone');
        $note = $main->post('note');
        $payment_id = $main->post('payment');
        $payments = new payments();
        $cart = new cart();
        $totalCart = $cart->getTotalCart();
        $payment = $payments->getPaymentById($payment_id);
        $intMoney = $payment['value'] + $totalCart;
        $orders = new orders();




        $result = $orders->insertOrder($_SESSION['user']['id'], $fullName, $phone, $address, $note, $intMoney, $totalCart, $payment['id']);
        if ($result) {
            $idOder = $orders->getIdOrder();
            foreach ($_SESSION['cart'] as $key => $value) {
                $version = explode('-', $value['version']);
                $size = $version[0];
                $color = $version[1];
                $orderdetails = new orderdetails();
                $r = $orderdetails->insertOrderDetail($idOder['id'], $value['id'], $value['name'], $value['img'], $value['price'], $value['quantity'], $size, $color, $value['total']);
            }
            unset($_SESSION['cart']);
            echo 'done##', $main->toJsonData(200, 'success', $domain);
        }
    } elseif ($nod == 'cancel') {
        $orders = new orders(); 
        $orderDetails = new orderdetails();
        $order_id = $main->post('order_id');
        $orders->set('id', $order_id);
        $orders->set('user_id', $_SESSION['user']['id']);
        $orders->set('status', 3);
        $result = $orders->updateStatus();
        if($result){
            $lOrder = $orders->getOrderByUserId();
            foreach ($lOrder as $key => $value) {
                $orderDetails->set('order_id', $value['id']);
                $orderdetail = $orderDetails->getOrderDetailByRootId();
                $lOrder[$key]['orderdetail'] = $orderdetail;
            }
            $orders->set('status', 0);
            // echo( $orderDetails->get('status'));
            $lOrderProcessing = $orders->getOrderByUserIdAndStatus();
            foreach ($lOrderProcessing as $key => $value) {
                $orderDetails->set('order_id', $value['id']);
                $orderdetail = $orderDetails->getOrderDetailByRootId();
                $lOrderProcessing[$key]['orderdetail'] = $orderdetail;
            }
            $orders->set('status', 1);
        
            $lOrderDelivering = $orders->getOrderByUserIdAndStatus();
            foreach ($lOrderDelivering as $key => $value) {
                $orderDetails->set('order_id', $value['id']);
                $orderdetail = $orderDetails->getOrderDetailByRootId();
                $lOrderDelivering[$key]['orderdetail'] = $orderdetail;
            }
            $orders->set('status', 2);
            $lOrderReceived = $orders->getOrderByUserIdAndStatus();
            foreach ($lOrderReceived as $key => $value) {
                $orders->set('order_id', $value['id']);
                $orderdetail = $orderDetails->getOrderDetailByRootId();
                $lOrderReceived[$key]['orderdetail'] = $orderdetail;
            }
            $orders->set('status', 3);
            $lOrderCancel = $orders->getOrderByUserIdAndStatus();
            foreach ($lOrderCancel as $key => $value) {
                $orderDetails->set('order_id', $value['id']);
                $orderdetail = $orderDetails->getOrderDetailByRootId();
                $lOrderCancel[$key]['orderdetail'] = $orderdetail;
            }
            echo 'done##', $main->toJsonData(200, 'success',array('all'=>$lOrder,'processing'=>$lOrderProcessing,'delivering'=>$lOrderDelivering,'received'=>$lOrderReceived,'cancel'=>$lOrderCancel,'domain'=>$domain));
        }
    }
}
