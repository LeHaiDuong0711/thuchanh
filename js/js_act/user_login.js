$("#formLogin").on("submit", function (e) {
  e.preventDefault();
  data = new FormData(this);
  _doAjaxNod("post", data, "user_login", "login", "login", true, (res) => {
    if(res.status == 200){
        window.location.href = '/trang-chu/'
    }
    if(res.status == 403){
        swal('','Tài khoản hoặc mật khẩu không chính xác','error')
    }
  });
});
