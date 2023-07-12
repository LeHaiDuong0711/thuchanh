<?php class payments extends model
{
    protected $class_name = 'payments';
    protected $id;
    protected $name;
    protected $value;
    protected $deleted;    //đường dẫn

    public function getPaymentById($id)
    {
        global $db;
        $sql = "SELECT * FROM $db->tbl_fix$this->class_name tb WHERE `id` = $id ";
        $r = $db->executeQuery($sql,1);
        return $r;
    }
}
