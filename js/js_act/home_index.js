/*==================================================================
    [ Show modal1 ]*/
// $(".js-show-modal1").on("click", function (e) {
//   e.preventDefault();
//   data = new FormData();
//   data.append("idProd", $(this).data("id"));
//   _doAjaxNod("post", data, "home_index", "product", "detail", true, (res) => {
//     if (res.status == 200) {
//       console.log(res.data.product);
//       product = res.data.product;
//       images = res.data.images;
//       domain = res.data.domain;
//       colors = res.data.colors;
//       sizes = res.data.sizes;

//       let h = "";
//       for (let i = 0; i < images.length - 1; i++) {
//         h +=
//           ` <div class="item-slick3" data-thumb="` +
//           domain +
//           `/` +
//           images[i] +
//           `">
//            <div class="wrap-pic-w pos-relative">
//                 <img src="` +
//           domain +
//           `/` +
//           images[i] +
//           `" alt="IMG-PRODUCT">

//                <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
//                href="` +
//           domain +
//           `/` +
//           images[i] +
//           `">
//                   <i class="fa fa-expand"></i>
//               </a>
//           </div>
//        </div>`;
//       }
//       $(".wrap-slick3").html(
//         `
//         <div class="wrap-slick3-dots"></div>
//         <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

//         <div class="slick3 gallery-lb">

//         </div>
//         `
//       );

//       $(".slick3.gallery-lb").html(h);
//       init_slick();

//       $(".js-name-detail").html(product.name);
//       $(".price").html(formatCurrency(product.price));
//       html = "<option value=0>Chọn kích thước</option>";
//       sizes.forEach((value, index, array) => {
//         html += `<option value=` + value.id + `>` + value.name + `</option>`;
//       });
//       $('.js-select2[name="size"]').html(html);
//       html = "";
//       colors.forEach((value, index, array) => {
//         html += ` <label class="icon">`;
//         if (value.image_icon != "") {
//           html +=
//             `<input type="hidden" name="color" value="0">
//         <button type="button" class="mx-2 color" data-color="` +
//             value.id +
//             `"
//             data-name="` +
//             value.name +
//             `">
//             <img src="` +
//             domain +
//             `/` +
//             value.image_icon +
//             `" class="w-100">
//         </button>`;
//         } else {
//           html +=
//             `<input type="radio" name="color" value="` +
//             value.id +
//             `">
//         <span class="radio-custom" style="background-color:` +
//             value.value +
//             `"></span>`;
//         }

//         html += `</label>`;
//       });
//       $(".radio-group").html(html);
//     }
//     $(".add-cart").attr("data-id", product.id);
//   });

//   $(".js-modal1").addClass("show-modal1");
// });

// $(".js-hide-modal1").on("click", function () {
//   $(".js-modal1").removeClass("show-modal1");
// });
