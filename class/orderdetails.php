<?php class orderdetails extends model
{
    protected $class_name = 'orderdetails';
    protected $id;
    protected $order_id;
    protected $pro_SKU;
    protected $pro_name;    //đường dẫn
    protected $pro_image; //mô tả
    protected $price;    //vị trí hiển thị trong trang
    protected $quantity;    //trang hiển thị
    protected $size;    //ảnh là silde, banner,...
    protected $color;
    protected $total;

    public function insertOrderDetail($order_id, $pro_SKU, $pro_name, $pro_image, $price, $quantity, $size, $color, $total)
    {
        global $db;
        $data = array('id' => null, 'order_id' => $order_id, 'pro_SKU' => $pro_SKU, 'pro_name' => $pro_name, 'pro_image' => $pro_image, 'price' => $price, 'quantity' => $quantity, 'size' => $size, 'color' => $color, 'total' => $total);
        $result =  $db->record_insert($db->tbl_fix . '`' . $this->class_name . '`', $data);
        return $result;
    }
    public function getOrderDetailByRootId()
    {
        global $db;
        $id = $this->get('order_id');
        $sql = "SELECT * FROM $db->tbl_fix$this->class_name tb WHERE `order_id`=$id";
        $result = $db->executeQuery_list($sql);
        return $result;
    }
   
}
