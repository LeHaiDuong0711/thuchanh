$("#formPayment").on("submit", function (e) {
  e.preventDefault();
  isCheck = true;
  console.log($('input[name="address"').val() == "");
  if ($('input[name="fullName"').val() == "") {
    isCheck = false;
    $errFullName = "Vui lòng nhập họ và tên";
  } else {

    errFullName = "";
  }
  if ($('input[name="address"').val() == "") {
    isCheck = false;
    errAddress = "Vui lòng nhập địa chỉ";
  } else {

    errAddress = "";
  }
  if ($('input[name="phone"').val() == "") {
    isCheck = false;
    errPhone = "Vui lòng nhập số điện thoại";
  } else {
  
    errPhone = "";
  }
  console.log(errAddress);

  
  if (isCheck == true) {
    data = new FormData(this);
   
    
    _doAjaxNod("post", data, "user_order", "order", "order", true, (res) => {
        if(res.status ==200){
          swal('', "Cảm ơn bạn đã mua hàng", "success");
          setTimeout(() => {
           window.location.href = "/san-pham/"; 
          }, 1000);
          
        }
    });
  } else{
    $(".errFullName").html(errFullName);
  $(".errAddress").html(errAddress);
  $(".errPhone").html(errPhone);
  }
});
