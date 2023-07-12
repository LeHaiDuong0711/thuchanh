<?php class product_options extends model
{
  protected $class_name = 'product_options';
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



  function getId()
  {
    return $this->id;
  }
  function setId($id)
  {

    $this->id = $id;
  }
  function getSKU()
  {
    return $this->id;
  }
  function setSKU($SKU)
  {

    $this->SKU = $SKU;
  }
  function getName()
  {
    return $this->id;
  }
  function setName($name)
  {

    $this->name = $name;
  }
  function getLink()
  {
    return $this->id;
  }
  function setLink($link)
  {
    $this->link = $link;
  }
  function getDescription()
  {
    return $this->id;
  }
  function setDescription($description)
  {

    $this->description = $description;
  }


  //lấy size sản phẩm đang có
  function get_size($id)
  {
    global $db;

    $sql = "SELECT size_id 
    FROM $db->tbl_fix$this->class_name tb
    WHERE `deleted` = 0 AND `root_id`=$id";

    // exit();
    $r = $db->executeQuery($sql);
    $kq = array();
    while ($row = mysqli_fetch_assoc($r)) {
      if (in_array($row['size_id'], $kq) == false) {
        array_push($kq, $row['size_id']);
      }
    }

    usort($kq, function ($a, $b) {
      $size_order = array('S', 'M', 'L', 'XL', 'XXL', 'XXXL');
      $a_index = array_search($a, $size_order);
      $b_index = array_search($b, $size_order);
      return $a_index - $b_index;
    });

    return $kq;
  } //lấy size sản phẩm đang có
  function get_color($id)
  {
    global $db;

    $sql = "SELECT color_id 
    FROM $db->tbl_fix$this->class_name tb
    WHERE `deleted` = 0 AND `root_id`=$id";

    // exit();
    $r = $db->executeQuery($sql);
    $kq = array();
    while ($row = mysqli_fetch_assoc($r)) {
      if (in_array($row['color_id'], $kq) == false) {
        array_push($kq, $row['color_id']);
      }
    }


    return $kq;
  }


  function getProduct($id, $size_id, $color_id)
  {
    global $db;
    $sql = "SELECT * 
    FROM $db->tbl_fix$this->class_name tb
    WHERE `deleted` = 0 AND `root_id`=$id AND `size_id`=$size_id AND `color_id`=$color_id";

    // exit();
    $r = $db->executeQuery($sql, 1);



    return $r;
  }
  function getProductBySKU($SKU)
  {
    global $db;
    $sql = "SELECT * 
    FROM $db->tbl_fix$this->class_name tb
    WHERE `deleted` = 0 AND `SKU`='$SKU'";

    // exit();
    $r = $db->executeQuery($sql, 1);



    return $r;
  }
  //lấy string hình ảnh convert thành mảng
  function getImages($id)
  {
    global $db;

    $sql = "SELECT images 
  FROM $db->tbl_fix$this->class_name tb
  WHERE `deleted` = 0 AND `id`=$id
  AND `is_hidden`=0";
    $r = $db->executeQuery($sql, 3);

    $images = explode(';', $r);

    return $images;
  }
  public function getColorBySize($idProduct, $idSize)
  {
    global $db;
    $sql = "SELECT color_id
      FROM $db->tbl_fix$this->class_name tb
      WHERE `root_id`=$idProduct AND `size_id`=$idSize AND  `deleted` = 0 ";
    $r = $db->executeQuery_list($sql);
    return $r;
  }
  public function getProductByColor($idProduct,$idColor)
  {
    global $db;
    $sql = "SELECT *
      FROM $db->tbl_fix$this->class_name tb
      WHERE `root_id`=$idProduct AND `color_id`=$idColor AND  `deleted` = 0 ";
    $r = $db->executeQuery($sql,2);
    $kq = array();
  
        $r['images'] = explode(';', $r['images']);
        $kq[] = $r;
    return $kq;
  }
}
