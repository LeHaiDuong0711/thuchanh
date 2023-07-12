<?php class category extends model {
    protected $class_name = 'category';
    protected $id;
    protected $identi;
    protected $name;
    protected $link;    //đường dẫn
    protected $type;    //ảnh là silde, banner,...
    protected $is_hidden;
    protected $priority;
    protected $deleted;

//lấy danh sách sản phẩm theo giới hạn, 
public function list_category($type=''){
    global $db;
    $hidden         = $this->get('is_hidden');
  

    if ($hidden !== '') {
        $hidden = "AND `is_hidden` = '$hidden' ";
    }

    if ($type !== '') $type = "AND `type`='$type'";

    $sql = "SELECT * 
            FROM $db->tbl_fix$this->class_name tb
            WHERE `deleted` = 0 
            $hidden
            $type
          
            ";
          
    
    // exit();
    $r = $db->executeQuery_list($sql);

    return $r;
}


    






}
