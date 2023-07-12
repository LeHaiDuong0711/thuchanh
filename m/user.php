<?php

global $main;

if ($act == 'profile') {

    $st->assign('user', $_SESSION['user']);
} else if ($act == 'paymentcard') {
    if (isset($_SESSION['user'])) {
        $st->assign('user', $_SESSION['user']);
    }
} else if ($act == 'orders') {
    $orders = new orders();
    $orderDetails = new orderdetails();
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
    $st->assign('lOrder', $lOrder);
    $st->assign('lOrderProcessing', $lOrderProcessing);
    $st->assign('lOrderDelivering', $lOrderDelivering);
    $st->assign('lOrderReceived', $lOrderReceived);
    $st->assign('lOrderCancel', $lOrderCancel);
}
