<?php class products extends model
{
    protected $class_name = 'products';
    protected $id;
    protected $SKU;
    protected $name;
    protected $link;    //đường dẫn
    protected $description; //mô tả
    protected $position;    //vị trí hiển thị trong trang
    protected $page;    //trang hiển thị
    protected $type;    //ảnh là silde, banner,...
    protected $image;
    protected $is_hidden;
    protected $priority;

    //lấy danh sách sản phẩm theo giới hạn, 
    public function list_product($offset = '', $limit = '')
    {
        global $db, $main;
        $hidden         = $this->get('is_hidden');


        if ($hidden !== '') {
            $hidden = "AND `is_hidden` = '$hidden' ";
        }

        if ($limit !== '') $limit = "LIMIT $offset, $limit ";

        $sql = "SELECT * 
            FROM $db->tbl_fix$this->class_name tb
            WHERE `deleted` = 0 
            $hidden
            ORDER BY `id` ASC
            $limit";

        // exit();
        $r = $db->executeQuery($sql);
        $kq = array();
        while ($row = mysqli_fetch_assoc($r)) {
            $row['images'] = explode(';', $row['images']);
            $row['link'] = $main->convert_link_url($row['name']);
            $kq[] = $row;
        }

        return $kq;
    }

    public function getProductById($id)
    {
        global $db;
        $sql = "SELECT * 
        FROM $db->tbl_fix$this->class_name tb
        WHERE `id`=$id";
        $r = $db->executeQuery($sql, 1);
        return $r;
    }

    public function getProductBySKU($SKU)
    {
        global $db;
        $sql = "SELECT * 
        FROM $db->tbl_fix$this->class_name tb
        WHERE `SKU`='$SKU'";
        $r = $db->executeQuery($sql, 1);
        $images = $this->getImages($SKU);
        $r['images']=$images;
        return $r;
    }


    //lấy string hình ảnh convert thành mảng
    function getImages($id)
    {
        global $db;

        $sql = "SELECT images 
    FROM $db->tbl_fix$this->class_name tb
    WHERE `deleted` = 0 AND (`id`='$id' or `SKU`='$id')
    AND `is_hidden`=0";
        $r = $db->executeQuery($sql, 3);

        $images = explode(';', $r);

        return $images;
    }
 
}
