$(".cancel-order").on("click", function () {
  data = new FormData();
  data.append("order_id", $(this).data("id"));
  _doAjaxNod("post", data, "user_order", "order", "cancel", true, (res) => {
    if(res.status ==200){
      all = res.data.all;
      processing = res.data.processing;
      delivering = res.data.delivering;
      received = res.data.received;
      cancel = res.data.cancel;
      domain = res.data.domain
      swal('Đơn hàng '+$(this).data("id"),'Đã bị hủy','success');
       renderListOrder(all, processing, delivering, received, cancel, domain);
    }
   
  });
});

function renderListOrder(
  all,
  processing,
  delivering,
  received,
  cancel,
  domain
) {
  html = "";
  all.forEach((value, index) => {
    html +=
      `<div class="card">
    <div class="card-header">
        <h5>Đơn hàng #` +
      value.id +
      `</h5>`;
    if (value.status == 0) {
      html +=
        ` <div class="t">Đang xử lý</div>
            <button class="btn btn-cancel cancel-order" title="Hủy đơn hàng" data-id="` +
        value.id +
        `"><i class="fa fa-times" aria-hidden="true"></i></button>`;
    } else if (value.status == 1) {
      html +=
        `  <div class="">Đang giao hàng</div>
            <button class="btn btn-cancel cancel-order" title="Hủy đơn hàng" data-id="` +
        value.id +
        `"><i class="fa fa-times" aria-hidden="true"></i></button>
`;
    } else if (value.status == 2) {
      html += `<div class="">Hoàn thành</div>`;
    } else if (value.status == 3) {
      html += `<div class="">Đã hủy</div>`;
    }
    html += `</div>`;

    value.orderdetail.forEach((value1, index1) => {
      html +=
        ` <div class="card-body">
      <div class="product-info">
          <img src="` +
        domain +
        `/` +
        value1.pro_image +
        `" alt="Product image">
          <div>
              <h6>` +
        value1.pro_name +
        `</h6>
              <p>` +
        value1.pro_SKU +
        `</p>
          </div>
      </div>
      <div class="product-quantity">` +
        value1.quantity +
        `</div>
      <div class="product-price">` +
        formatCurrency(value1.price) +
        `</div>


  </div>`;
    });

    html +=
      `<div class="card-footer">
    <div class="product-price float-right">Tổng tiền:  ` +
      formatCurrency(value.total) +
      `</div> 
    
</div>
</div>`;
  });
  if (all.length==0) {
    html += ` <div class="card-header">Chưa có đơn hàng nào</div>`;
  }
  $("#nav-all-order").html(html);

  html = "";
  processing.forEach((value, index) => {
    html +=
      `<div class="card">
    <div class="card-header">
        <h5>Đơn hàng #` +
      value.id +
      `</h5> <div class="t">Đang xử lý</div>
            <button class="btn btn-cancel cancel-order" title="Hủy đơn hàng" data-id="` +
      value.id +
      `"><i class="fa fa-times" aria-hidden="true"></i></button></div>`;

    value.orderdetail.forEach((value1, index1) => {
      html +=
        ` <div class="card-body">
      <div class="product-info">
          <img src="` +
        domain +
        `/` +
        value1.pro_image +
        `" alt="Product image">
          <div>
              <h6>` +
        value1.pro_name +
        `</h6>
              <p>` +
        value1.pro_SKU +
        `</p>
          </div>
      </div>
      <div class="product-quantity">` +
        value1.quantity +
        `</div>
      <div class="product-price">` +
        formatCurrency(value1.price) +
        `</div>


  </div>`;
    });

    html +=
      `<div class="card-footer">
    <div class="product-price float-right">Tổng tiền:  ` +
      formatCurrency(value.total) +
      `</div>
    
</div>
</div>`;
  });
  if (processing.length==0) {
    html += ` <div class="card-header">Chưa có đơn hàng nào</div>`;
  }

  $("#nav-processing").html(html);

  html = "";
  delivering.forEach((value, index) => {
    html +=
      `<div class="card">
    <div class="card-header">
        <h5>Đơn hàng #` +
      value.id +
      `</h5> <div class="t">Đang vận chuyển</div>
            <button class="btn btn-cancel cancel-order" title="Hủy đơn hàng" data-id="` +
      value.id +
      `"><i class="fa fa-times" aria-hidden="true"></i></button></div>`;

    value.orderdetail.forEach((value1, index1) => {
      html +=
        ` <div class="card-body">
      <div class="product-info">
          <img src="` +
        domain +
        `/` +
        value1.pro_image +
        `" alt="Product image">
          <div>
              <h6>` +
        value1.pro_name +
        `</h6>
              <p>` +
        value1.pro_SKU +
        `</p>
          </div>
      </div>
      <div class="product-quantity">` +
        value1.quantity +
        `</div>
      <div class="product-price">` +
        formatCurrency(value1.price) +
        `</div>


  </div>`;
    });

    html +=
      `<div class="card-footer">
    <div class="product-price float-right">Tổng tiền:  ` +
      formatCurrency(value.total) +
      `</div>
    
</div>
</div>`;
  });
  if (delivering.length==0) {
    html += ` <div class="card-header">Chưa có đơn hàng nào</div>`;
  }

  $("#nav-delivering").html(html);

  html = "";
  received.forEach((value, index) => {
    html +=
      `<div class="card">
    <div class="card-header">
        <h5>Đơn hàng #` +
      value.id +
      `</h5> <div class="t">Hoàn thành</div>
           </div>`;

    value.orderdetail.forEach((value1, index1) => {
      html +=
        ` <div class="card-body">
      <div class="product-info">
          <img src="` +
        domain +
        `/` +
        value1.pro_image +
        `" alt="Product image">
          <div>
              <h6>` +
        value1.pro_name +
        `</h6>
              <p>` +
        value1.pro_SKU +
        `</p>
          </div>
      </div>
      <div class="product-quantity">` +
        value1.quantity +
        `</div>
      <div class="product-price">` +
        formatCurrency(value1.price) +
        `</div>


  </div>`;
    });

    html +=
      `<div class="card-footer">
    <div class="product-price float-right">Tổng tiền:  ` +
      formatCurrency(value.total) +
      `</div>
    
</div>
</div>`;
  });
  if (received.length==0) {
    html += ` <div class="card-header">Chưa có đơn hàng nào</div>`;
  }

  $("#nav-received").html(html);

  html = "";
  cancel.forEach((value, index) => {
    html +=
      `<div class="card">
    <div class="card-header">
        <h5>Đơn hàng #` +
      value.id +
      `</h5> <div class="t">Đã hủy</div>
          </div>`;

    value.orderdetail.forEach((value1, index1) => {
      html +=
        ` <div class="card-body">
      <div class="product-info">
          <img src="` +
        domain +
        `/` +
        value1.pro_image +
        `" alt="Product image">
          <div>
              <h6>` +
        value1.pro_name +
        `</h6>
              <p>` +
        value1.pro_SKU +
        `</p>
          </div>
      </div>
      <div class="product-quantity">` +
        value1.quantity +
        `</div>
      <div class="product-price">` +
        formatCurrency(value1.price) +
        `</div>


  </div>`;
    });

    html +=
      `<div class="card-footer">
    <div class="product-price float-right">Tổng tiền:  ` +
      formatCurrency(value.total) +
      `</div>
    
</div>
</div>`;
  });
  if (cancel.length==0) {
    html += ` <div class="card-header">Chưa có đơn hàng nào</div>`;
  }

  $("#nav-cancel-order").html(html);
}
