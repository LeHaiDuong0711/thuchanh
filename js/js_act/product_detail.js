init_slick();

// $(document).on("click",".color" ,function () {
//   data = $(this).data("color");
//   $(this).siblings('input[name="color"]').val(data);
//   $(".name-color").html("Màu: <strong>" + $(this).data("name") + "</strong>");
//   $(".color").removeClass('active');
//   $(this).addClass('active');
// });

// $(document).on("click", ".icon", function () {
 
 
//   data = new FormData();
//   data.append("idColor", $(this).children(".color").data("color"));
//   data.append("idProduct", $(".add-cart").data("id"));
//   data.append("idSize", $(this).val());

//   _doAjaxNod(
//     "post",
//     data,
//     "product_detail",
//     "product",
//     "property",
//     true,
//     (res) => {
//       prod_ops = res.data.product_ops;
// domain =res.data.domain;

//       if (res.status == 200) {
//         html = '';
//         prod_ops[0]['images'].forEach((value, index, array) => {
//           html+=
//             `<div class="item-slick3 slick-slide" data-thumb="`+domain+`/`+value+`">
//             <div class="wrap-pic-w pos-relative">
//                 <img src="`+domain+`/`+value+`" alt="IMG-PRODUCT">

//                 <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
//                     href="`+domain+`/`+value+`">
//                     <i class="fa fa-expand"></i>
//                 </a>
//             </div>
//         </div>`
          

//         });
//        $('.wrap-slick3').html(
//         `
//         <div class="wrap-slick3-dots"></div>
//         <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

//         <div class="slick3 gallery-lb">

//         </div>
//         `
//        );
       
//         $('.gallery-lb').html(html);
//         init_slick();
//       }
//     }
//   );
// });

$(document).on("change", 'select[name="size"]',function () {
  data = new FormData();
  data.append("idSize", $(this).val());
  data.append("idProduct", $(".add-cart").data("id"));
  _doAjaxNod(
    "post",
    data,
    "product_detail",
    "category",
    "getColorBySize",
    true,
    (res) => {
      if (res.status == 200) {
        html = [];

        res.data.colors.forEach((value, index, array) => {
          if (value.icon != "") {
            html.push(
              `<label class="icon">
                                         
          
                <input type="hidden" name="color" value="0">
                <button type="button" class="mx-2 color" data-color="` +
                value.id +
                `" data-name="` +
                value.name +
                `">
                <img src="` +
                domain +
                `/` +
                value.image_icon +
                `" class="w-100">
                </button>
          </label>`
            );
          } else {
            html.push(
              `<label class="icon">
                                         
          
                  <input type="radio" name="color" value="` +
                value.id +
                `">
                 <span class="radio-custom" style="background-color:` +
                value.value +
                `"></span>     
             
              
          </label>`
            );
          }
        });

        $(".radio-group").html(html);
      }
    }
  );
});

// $(document).on("click", ".add-cart", function (e) {
//   e.preventDefault();
//   isValid = true;
//   if ($('select[name="size"] option:selected').val() == "Chọn kích thước") {
//     $(".sizeErr").html("Vui lòng chọn kích thước");
//     isValid = false;
//   }else{
//      $(".sizeErr").html("");
//   }

//   if (
//     !$('input[name="color"]:checked').val() &&
//     $('.color.active').siblings('input[type="hidden"][name="color"]').val()==0
//   ) {
//     isValid = false;
//     $(".colorErr").html("Vui lòng chọn màu sắc");
//   }else{
//     $(".colorErr").html("");
//  }

//   if (isValid) {
//     color = $('input[name="color"]:checked').val();
//     if  (!$('input[name="color"]:checked').val()) {
//       color = $('.color.active').siblings('input[type="hidden"][name="color"]').val();
//     }

//     data = new FormData();
//     data.append("id", $(this).data("id"));
//     data.append("quantity", $('input[name="quantity"]').val());
//     data.append("idSize", $('select[name="size"] option:selected').val());
//     data.append("idColor", color);

//     _doAjaxNod(
//       "post",
//       data,
//       "product_detail",
//       "product",
//       "add_cart",
//       true,
//       (res) => {
//         if (res.status == 200) {
//           cart = res.data.cart;
//           subTotal=res.data.subTotal;
//           countCart = cart.length;

//           $(".js-show-cart").attr("data-notify", countCart);
//           html = [];
//           cart.forEach((value, index, array) => {
//             html.push(
//               `    <li class="header-cart-item flex-w flex-t m-b-12">
//                 <div class="header-cart-item-img">
//                     <img src="` +
//                domain+`/`+ value.img +
//                 `" alt="IMG">
//                 </div>

//                 <div class="header-cart-item-txt p-t-8">
//                     <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
//                         ` +
//                 value.name +
//                 ` (` +
//                 value.version +
//                 `)
//                     </a>

//                     <span class="header-cart-item-info">
//                     ` +
//                 value.quantity +
//                 ` x ` +
//               formatCurrency(value.price)   +
//                 `
//                     </span>
//                 </div>
//             </li>`
//             );
//           });

      
//           $(".header-cart-wrapitem").html(html);
//           $(".header-cart-total").html('Tổng tiền: '+formatCurrency(subTotal));
//           swal($(".js-name-detail").text(), "Đã thêm vào giỏ hàng", "success");
//         }
//       }
//     );
//   } else {
//   }
// });
