$(document).on("click", ".btn-num-product-up,.btn-num-product-down", function () {
  data = new FormData();
  data.append('key',$(this).data('id'));
  data.append('quantity',$(this).siblings('.quantity').val());
  _doAjaxNod("post", data, "cart_detail", "cart", "update", true, (res) => {
    if(res.status ==200){
        cart = res.data.cart;
        $('#'+cart.id+' .column-5').html(formatCurrency(cart.total));
    }
  });
});
