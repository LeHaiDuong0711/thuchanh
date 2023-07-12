$(document).on("click", ".page", function (e) {
  e.preventDefault();

  data = new FormData();
  page = $(this).data("page");
  data.append("page", page);
  

  _doAjaxNod("post", data, "product_index", "product", "index", true, (res) => {
    domain = res.data.domain;
    lProducts = res.data.lProducts;
    pagination= res.data.pagination
    var stateObj = { page: page };
    history.pushState(stateObj, "Page 2", "/san-pham/page="+page);
    renderLProducts(domain, lProducts, pagination);
  });
});
$(".js-show-modal1").on("click", function (e) {
  e.preventDefault();
  data = new FormData();
  data.append("idProd", $(this).data("id"));
  _doAjaxNod("post", data, "home_index", "product", "detail", true, (res) => {
    if (res.status == 200) {
      console.log(res.data.product);
      product = res.data.product;
      images = res.data.images;
      domain = res.data.domain;
      
      let h = "";
      for (let i = 0; i < images.length-1; i++) {
   
        h += ` <div class="item-slick3" data-thumb="`+domain+`/`+images[i]+`">
           <div class="wrap-pic-w pos-relative">
                <img src="`+domain+`/`+images[i]+`" alt="IMG-PRODUCT">

               <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
               href="`+domain+`/`+images[i]+`">
                  <i class="fa fa-expand"></i>
              </a>
          </div>
       </div>`;
      }
      $('.wrap-slick3').html(
        `
        <div class="wrap-slick3-dots"></div>
        <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>

        <div class="slick3 gallery-lb">

        </div>
        `
       );
   
      $(".slick3.gallery-lb").html(h);
      init_slick();

      $(".js-name-detail").html(product.name);
      $(".price").html(formatCurrency(product.price) );
    }
  });

  $(".js-modal1").addClass("show-modal1");
});

$(".js-hide-modal1").on("click", function () {

  $(".js-modal1").removeClass("show-modal1");
});
function renderLProducts(domain, lProducts,pagination) {
  html = "";
  lProducts.forEach((value, index, array) => {
    html+=
      `
            <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                    <!-- Block2 -->
                    <div class="block2">
                        <div class="block2-pic hov-img0">
                            <img src="` +
        domain +
        `/` +
        value.images[0] +
        `" alt="IMG-PRODUCT">

                            <a href="#"
                                class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                Xem nhanh
                            </a>
                        </div>

                        <div class="block2-txt flex-w flex-t p-t-14">
                            <div class="block2-txt-child1 flex-col-l ">
                                <a href="`+domain+`/san-pham/`+value.link+`-p`+value.id+`" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                    ` +
        value.name +
        ` - ` +
        value.SKU +
        `
                                </a>

                                <span class="stext-105 cl3">
                                    ` +
      formatCurrency(value.price)   +
        `
                                </span>
                            </div>

                            <div class="block2-txt-child2 flex-r p-t-3">
                                <a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                    <img class="icon-heart1 dis-block trans-04"
                                        src="` +
        domain +
        `/public/images/icons/icon-heart-01.png" alt="ICON">
                                    <img class="icon-heart2 dis-block trans-04 ab-t-l"
                                        src="` +
        domain +
        `/public/images/icons/icon-heart-02.png" alt="ICON">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `
    
  });

  $(".products").html(html);

  $('.containerPagination').html(
    pagination
  )   

}
