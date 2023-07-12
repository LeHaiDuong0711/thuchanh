<?php class property extends model
{
    protected $class_name = 'property';
    protected $id;
    protected $name;
    protected $value;
    protected $type;    //

    //lấy màu sắc theo id, 
    public function get_color($id)
    {
        global $db, $main;
  


        
        $sql = "SELECT * 
            FROM $db->tbl_fix$this->class_name tb where `id`=$id and `type` = 'color'
          ";

        // exit();
        $r = $db->executeQuery($sql,1);

        return $r;
    }

    //lấy kích thước theo id, 
    public function get_size($id)
    {
        global $db, $main;
  


        
        $sql = "SELECT * 
            FROM $db->tbl_fix$this->class_name tb where `id`=$id and `type` = 'size'
          ";

        // exit();
        $r = $db->executeQuery($sql,1);

        return $r;
    }

    function getPropertyById($id) {
      global $db;
  


        
      $sql = "SELECT * 
          FROM $db->tbl_fix$this->class_name tb where `id`=$id 
        ";

      // exit();
      $r = $db->executeQuery($sql,2);

      return $r;
        
    }



}
