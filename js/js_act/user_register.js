$("#formRegister").on("submit", function (e) {
    e.preventDefault();
    
  data = new FormData(this);
  _doAjaxNod(
    "post",
    data,
    "user_register",
    "register",
    "insert",
    true,
    (res) => {
        if(res.status==200){
            swal('', "Đăng ký thành công", "success");
            setTimeout(() => {
            window.location.href = '/dang-nhap';    
            }, 2000);
            
        }
  
        if(res.status==403){
        
            if(res.message=='email exited'){
              swal('', "Email đã tồn tại", "error");  
            } else if(res.message=='phone exited') {
                 swal('', "Số điện  đã tồn tại", "error");  
            } else{
                 swal('', "Đăng ký thất bại", "error");  
            }
          
            
        }
    }
  );
});
