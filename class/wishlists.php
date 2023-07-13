<?php class wishlists extends model
{
    protected $class_name = 'wishlists';


    function getWishlistByUser()
    {
        global $db;
       
        $user_id =isset($_SESSION['user'])? $_SESSION['user']['id']:0;
        $sql = "SELECT * 
            FROM $db->tbl_fix$this->class_name tb where `user_id`= $user_id;
          ";

        // exit();
        $r = $db->executeQuery_list($sql);

        return $r;
    }
    function insertWishlist($sku)
    {
        global $db;

        $date = new DateTime('now');
        $date_at = $date->format('Y/m/d H:i:s');
        $data = array('id' => null, 'user_id' => $_SESSION['user']['id'], 'pro_SKU' => $sku, 'date_at' => $date_at);
        $result =  $db->record_insert($db->tbl_fix . '`' . $this->class_name . '`', $data);
        return $result;
    }
    function removeWishlist($sku)
    {
        global $db;
        $user_id = $_SESSION['user']['id'];
        $where = "pro_SKU = '$sku' AND user_id = $user_id";
        $result =  $db->record_delete($db->tbl_fix . '`' . $this->class_name . '`', $where);
        return $result;
    }
}
