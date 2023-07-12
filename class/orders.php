<?php class orders extends model
{
    protected $class_name = 'orders';
    protected $id;
    protected $user_id;
    protected $phone;
    protected $total;    //đường dẫn
    protected $intoMoney; //mô tả
    protected $note;    //vị trí hiển thị trong trang
    protected $address;    //trang hiển thị
    protected $book_date;    //ảnh là silde, banner,...
    protected $delivery_date;
    protected $cancellation_date;
    protected $reset_date;
    protected $received_date;
    protected $payment_id;
    protected $status;
    protected $is_hidden;
    protected $fullName;

    public function insertOrder($user_id, $fullName, $phone, $address, $note, $intoMoney, $total, $payment_id)
    {
        global $db;
        $date = new DateTime('now');
        $book_date = $date->format('Y/m/d H:i:s');
        $data = array('id' => null, 'user_id' => $user_id, 'fullName' => $fullName, 'phone' => $phone, 'address' => $address, 'note' => $note, 'intoMoney' => $intoMoney, 'total' => $total, 'payment_id' => $payment_id, 'book_date' => $book_date, 'delivery_date' => "", 'received_date' => "", 'cancellation_date' => "", 'reset_date' => "", 'is_hidden' => 0, 'status' => 0);
        $result =  $db->record_insert($db->tbl_fix . '`' . $this->class_name . '`', $data);
        return $result;
    }
    public function getIdOrder()
    {
        global $db;
        $sql = "SELECT * FROM $db->tbl_fix$this->class_name tb ORDER BY `id` DESC LIMIT 1 ";
        $r = $db->executeQuery($sql, 2);
        return $r;
    }
    public function getOrderByUserId()
    {
        global $db;
        $user_id = $_SESSION['user']['id'];
        $sql = "SELECT * FROM $db->tbl_fix$this->class_name tb where `user_id`=$user_id";
        $r = $db->executeQuery_list($sql);
        return $r;
    }
    public function getOrderByUserIdAndStatus()
    {
        global $db;
        $status = $this->get('status');
        $user_id = $_SESSION['user']['id'];
        $sql = "SELECT * FROM $db->tbl_fix$this->class_name tb where `user_id`=$user_id AND `status`=$status";
        $r = $db->executeQuery_list($sql);
        return $r;
    }
    public function updateStatus()
    {
        global $db;
        $date = new DateTime('now');
        $cancel_date = $date->format('Y/m/d H:i:s');
        $id =  $this->get('id');
        echo($this->get('id')); 
        $status = $this->get('status');
        $user_id =$this->get('user_id');
        $data = array('status'=>$status,'cancellation_date'=>$cancel_date);
        $where ="`user_id`=$user_id AND `id`=$id";
        $r = $db->record_update($db->tbl_fix.$this->class_name, $data, $where);
        return $r;
    }
}
