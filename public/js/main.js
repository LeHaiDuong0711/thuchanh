(function ($) {
  /*[ Load page ]
    ===========================================================*/
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    loading: true,
    loadingParentElement: "html",
    loadingClass: "animsition-loading-1",
    loadingInner: '<div class="loader05"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "html",
    transition: function (url) {
      window.location.href = url;
    },
  });

  /*[ Back to top ]
    ===========================================================*/
  var windowH = $(window).height() / 2;

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > windowH) {
      $("#myBtn").css("display", "flex");
    } else {
      $("#myBtn").css("display", "none");
    }
  });

  $("#myBtn").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  /*==================================================================
    [ Fixed Header ]*/
  var headerDesktop = $(".container-menu-desktop");
  var wrapMenu = $(".wrap-menu-desktop");

  if ($(".top-bar").length > 0) {
    var posWrapHeader = $(".top-bar").height();
  } else {
    var posWrapHeader = 0;
  }

  if ($(window).scrollTop() > posWrapHeader) {
    $(headerDesktop).addClass("fix-menu-desktop");
    $(wrapMenu).css("top", 0);
  } else {
    $(headerDesktop).removeClass("fix-menu-desktop");
    $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
  }

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > posWrapHeader) {
      $(headerDesktop).addClass("fix-menu-desktop");
      $(wrapMenu).css("top", 0);
    } else {
      $(headerDesktop).removeClass("fix-menu-desktop");
      $(wrapMenu).css("top", posWrapHeader - $(this).scrollTop());
    }
  });

  /*==================================================================
    [ Menu mobile ]*/
  $(".btn-show-menu-mobile").on("click", function () {
    $(this).toggleClass("is-active");
    $(".menu-mobile").slideToggle();
  });

  var arrowMainMenu = $(".arrow-main-menu-m");

  for (var i = 0; i < arrowMainMenu.length; i++) {
    $(arrowMainMenu[i]).on("click", function () {
      $(this).parent().find(".sub-menu-m").slideToggle();
      $(this).toggleClass("turn-arrow-main-menu-m");
    });
  }

  $(window).resize(function () {
    if ($(window).width() >= 992) {
      if ($(".menu-mobile").css("display") == "block") {
        $(".menu-mobile").css("display", "none");
        $(".btn-show-menu-mobile").toggleClass("is-active");
      }

      $(".sub-menu-m").each(function () {
        if ($(this).css("display") == "block") {
          console.log("hello");
          $(this).css("display", "none");
          $(arrowMainMenu).removeClass("turn-arrow-main-menu-m");
        }
      });
    }
  });

  /*==================================================================
    [ Show / hide modal search ]*/
  $(".js-show-modal-search").on("click", function () {
    $(".modal-search-header").addClass("show-modal-search");
    $(this).css("opacity", "0");
  });

  $(".js-hide-modal-search").on("click", function () {
    $(".modal-search-header").removeClass("show-modal-search");
    $(".js-show-modal-search").css("opacity", "1");
  });

  $(".container-search-header").on("click", function (e) {
    e.stopPropagation();
  });

  /*==================================================================
    [ Isotope ]*/
  var $topeContainer = $(".isotope-grid");
  var $filter = $(".filter-tope-group");

  // filter items on button click
  $filter.each(function () {
    $filter.on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $topeContainer.isotope({ filter: filterValue });
    });
  });

  // init Isotope
  $(window).on("load", function () {
    var $grid = $topeContainer.each(function () {
      $(this).isotope({
        itemSelector: ".isotope-item",
        layoutMode: "fitRows",
        percentPosition: true,
        animationEngine: "best-available",
        masonry: {
          columnWidth: ".isotope-item",
        },
      });
    });
  });

  var isotopeButton = $(".filter-tope-group button");

  $(isotopeButton).each(function () {
    $(this).on("click", function () {
      for (var i = 0; i < isotopeButton.length; i++) {
        $(isotopeButton[i]).removeClass("how-active1");
      }

      $(this).addClass("how-active1");
    });
  });

  /*==================================================================
    [ Filter / Search product ]*/
  $(".js-show-filter").on("click", function () {
    $(this).toggleClass("show-filter");
    $(".panel-filter").slideToggle(400);

    if ($(".js-show-search").hasClass("show-search")) {
      $(".js-show-search").removeClass("show-search");
      $(".panel-search").slideUp(400);
    }
  });

  $(".js-show-search").on("click", function () {
    $(this).toggleClass("show-search");
    $(".panel-search").slideToggle(400);

    if ($(".js-show-filter").hasClass("show-filter")) {
      $(".js-show-filter").removeClass("show-filter");
      $(".panel-filter").slideUp(400);
    }
  });

  /*==================================================================
    [ Cart ]*/
  $(".js-show-cart").on("click", function () {
    $(".js-panel-cart").addClass("show-header-cart");
  });

  $(".js-hide-cart").on("click", function () {
    $(".js-panel-cart").removeClass("show-header-cart");
  });

  /*==================================================================
    [ Cart ]*/
  $(".js-show-sidebar").on("click", function () {
    $(".js-sidebar").addClass("show-sidebar");
  });

  $(".js-hide-sidebar").on("click", function () {
    $(".js-sidebar").removeClass("show-sidebar");
  });

  /*==================================================================
    [ +/- num product ]*/
  $(".btn-num-product-down").on("click", function () {
    var numProduct = Number($(this).next().val());
    if (numProduct > 0)
      $(this)
        .next()
        .val(numProduct - 1);
  });

  $(".btn-num-product-up").on("click", function () {
    var numProduct = Number($(this).prev().val());
    $(this)
      .prev()
      .val(numProduct + 1);
  });

  /*==================================================================
    [ Rating ]*/
  $(".wrap-rating").each(function () {
    var item = $(this).find(".item-rating");
    var rated = -1;
    var input = $(this).find("input");
    $(input).val(0);

    $(item).on("mouseenter", function () {
      var index = item.index(this);
      var i = 0;
      for (i = 0; i <= index; i++) {
        $(item[i]).removeClass("zmdi-star-outline");
        $(item[i]).addClass("zmdi-star");
      }

      for (var j = i; j < item.length; j++) {
        $(item[j]).addClass("zmdi-star-outline");
        $(item[j]).removeClass("zmdi-star");
      }
    });

    $(item).on("click", function () {
      var index = item.index(this);
      rated = index;
      $(input).val(index + 1);
    });

    $(this).on("mouseleave", function () {
      var i = 0;
      for (i = 0; i <= rated; i++) {
        $(item[i]).removeClass("zmdi-star-outline");
        $(item[i]).addClass("zmdi-star");
      }

      for (var j = i; j < item.length; j++) {
        $(item[j]).addClass("zmdi-star-outline");
        $(item[j]).removeClass("zmdi-star");
      }
    });
  });

  /*==================================================================
    [ Show modal1 ]*/
  $(".js-show-modal1").on("click", function (e) {
    e.preventDefault();

    $(".js-modal1").addClass("show-modal1");
  });

  $(".js-hide-modal1").on("click", function () {
    $(".js-modal1").removeClass("show-modal1");
  });

  /* */
  $(".js-select2").each(function () {
    $(this).select2({
      minimumResultsForSearch: 20,
      dropdownParent: $(this).next(".dropDownSelect2"),
    });
  });
  $(".parallax100").parallax100();
  $(".gallery-lb").each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: "a", // the selector for gallery item
      type: "image",
      gallery: {
        enabled: true,
      },
      mainClass: "mfp-fade",
    });
  });
  // $(".js-addwish-b2").on("click", function (e) {
  //   e.preventDefault();
  // });

  // $(".js-addwish-b2").each(function () {
  //   var nameProduct = $(this).parent().parent().find(".js-name-b2").html();
  //   $(this).on("click", function () {
  //     swal(nameProduct, "is added to wishlist !", "success");

  //     $(this).addClass("js-addedwish-b2");
  //     $(this).off("click");
  //   });
  // });

  // $(".js-addwish-detail").each(function () {
  //   var nameProduct = $(this)
  //     .parent()
  //     .parent()
  //     .parent()
  //     .find(".js-name-detail")
  //     .html();

  //   $(this).on("click", function () {
  //     swal(nameProduct, "is added to wishlist !", "success");

  //     $(this).addClass("js-addedwish-detail");
  //     $(this).off("click");
  //   });
  // });

  /*---------------------------------------------*/

  // $(".js-addcart-detail").each(function () {
  //   var nameProduct = $(this)
  //     .parent()
  //     .parent()
  //     .parent()
  //     .parent()
  //     .find(".js-name-detail")
  //     .html();
  //   $(this).on("click", function () {
  //     swal(nameProduct, "is added to cart !", "success");
  //   });
  // });

  $(".js-pscroll").each(function () {
    $(this).css("position", "relative");
    $(this).css("overflow", "hidden");
    var ps = new PerfectScrollbar(this, {
      wheelSpeed: 1,
      scrollingThreshold: 1000,
      wheelPropagation: false,
    });

    $(window).on("resize", function () {
      ps.update();
    });
  });

  $(".logout").on("click", function (e) {
    e.preventDefault();
    _doAjaxNod("get", "", "user_login", "login", "logout", true, (res) => {
      if (res.status == 200) {
        window.location.href = "/dang-nhap";
      }
    });
  });

  $(document).on("click", ".js-show-modal1", function (e) {
    e.preventDefault();
    $(".sizeErr").html("");
    $(".colorErr").html("");
    let data = new FormData();
    data.append("idProd", $(this).data("id"));
    _doAjaxNod("post", data, "home_index", "product", "detail", true, (res) => {
      if (res.status == 200) {
        var product = res.data.product;
        let images = res.data.images;
        let domain = res.data.domain;
        let colors = res.data.colors;
        let sizes = res.data.sizes;

        let h = "";
        for (let i = 0; i < images.length - 1; i++) {
          h +=
            ` <div class="item-slick3" data-thumb="` +
            domain +
            `/` +
            images[i] +
            `">
             <div class="wrap-pic-w pos-relative">
                  <img src="` +
            domain +
            `/` +
            images[i] +
            `" alt="IMG-PRODUCT">
  
                 <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                 href="` +
            domain +
            `/` +
            images[i] +
            `">
                    <i class="fa fa-expand"></i>
                </a>
            </div>
         </div>`;
        }
        $(".wrap-slick3").html(
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
        $(".price").html(formatCurrency(product.price));
        let html = "<option value=0>Chọn kích thước</option>";
        sizes.forEach((value, index, array) => {
          html += `<option value=` + value.id + `>` + value.name + `</option>`;
        });
        $('.js-select2[name="size"]').html(html);
        html = "";
        colors.forEach((value, index, array) => {
          html += ` <label class="icon">`;
          if (value.image_icon != "") {
            html +=
              `<input type="hidden" name="color" value="0">
          <button type="button" class="mx-2 color" data-color="` +
              value.id +
              `"
              data-name="` +
              value.name +
              `">
              <img src="` +
              domain +
              `/` +
              value.image_icon +
              `" class="w-100">
          </button>`;
          } else {
            html +=
              `<input type="radio" name="color" value="` +
              value.id +
              `">
          <span class="radio-custom" style="background-color:` +
              value.value +
              `"></span>`;
          }

          html += `</label>`;
        });
        $(".radio-group").html(html);
      }
      $(".add-cart").attr("data-id", product.id);
    });

    $(".js-modal1").addClass("show-modal1");
  });

  $(document).on("click", ".js-hide-modal1", function () {
    $(".js-modal1").removeClass("show-modal1");
  });

  $(document).on("click", ".color", function () {
    let data = $(this).data("color");
    $(this).siblings('input[name="color"]').val(data);
    $(".name-color").html("Màu: <strong>" + $(this).data("name") + "</strong>");
    $(".color").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on("click", ".icon", function () {
    let data = new FormData();
    data.append("idColor", $(this).children(".color").data("color"));
    data.append("idProduct", $(".add-cart").data("id"));
    data.append("idSize", $(this).val());

    _doAjaxNod(
      "post",
      data,
      "product_detail",
      "product",
      "property",
      true,
      (res) => {
        let prod_ops = res.data.product_ops;
        let domain = res.data.domain;

        if (res.status == 200) {
          let html = "";
          prod_ops[0]["images"].forEach((value, index, array) => {
            html +=
              `<div class="item-slick3 slick-slide" data-thumb="` +
              domain +
              `/` +
              value +
              `">
              <div class="wrap-pic-w pos-relative">
                  <img src="` +
              domain +
              `/` +
              value +
              `" alt="IMG-PRODUCT">
  
                  <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04"
                      href="` +
              domain +
              `/` +
              value +
              `">
                      <i class="fa fa-expand"></i>
                  </a>
              </div>
          </div>`;
          });
          $(".wrap-slick3").html(
            `
          <div class="wrap-slick3-dots"></div>
          <div class="wrap-slick3-arrows flex-sb-m flex-w"></div>
  
          <div class="slick3 gallery-lb">
  
          </div>
          `
          );

          $(".gallery-lb").html(html);
          init_slick();
        }
      }
    );
  });

  $(document).on("change", 'select[name="size"]', function () {
    let data = new FormData();
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
          let html = [];

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

  $(document).on("click", ".add-cart", function (e) {
    e.preventDefault();
    let isValid = true;
    $(".sizeErr").html("");
    $(".colorErr").html("");
    if ($('select[name="size"] option:selected').val() == 0) {
      $(".sizeErr").html("Vui lòng chọn kích thước");
      isValid = false;
    }

    if (
      !$('input[name="color"]:checked').val() &&
      $(".color.active").length == 0
    ) {
      isValid = false;

      $(".colorErr").html("Vui lòng chọn màu sắc");
    }

    if (isValid) {
      let color = $('input[name="color"]:checked').val();
      if (!$('input[name="color"]:checked').val()) {
        color = $(".color.active")
          .siblings('input[type="hidden"][name="color"]')
          .val();
      }

      let data = new FormData();
      data.append("id", $(this).data("id"));
      data.append("quantity", $('input[name="quantity"]').val());
      data.append("idSize", $('select[name="size"] option:selected').val());
      data.append("idColor", color);

      _doAjaxNod("post", data, "cart", "index", "add", true, (res) => {
        if (res.status == 200) {
          let cart = res.data.cart;
          let subTotal = res.data.subTotal;
          let countCart = cart.length;
          let domain = res.data.domain;
          renderCart(countCart, cart, subTotal, domain);

          swal($(".js-name-detail").text(), "Đã thêm vào giỏ hàng", "success");
        }
      });
    }
  });

  $(document).on("click", ".remove-cart", function () {
    let data = new FormData();
    data.append("key", $(this).data("key"));
    _doAjaxNod("post", data, "cart", "index", "remove", true, (res) => {
      let cart = res.data.cart;
      let countCart = cart.length;
      let subTotal = res.data.subTotal;
      let domain = res.data.domain;
      renderCart(countCart, cart, subTotal, domain);
    });
  });

  $(document).ready(function () {
    _doAjaxNod("get", "", "wishlist", "wishlist", "get", true, (res) => {
      let wishlist = res.data.wishlist;
      wishlist.forEach((value, index, array) => {
      

        $('.add-wishlist[data-sku="' + value.pro_SKU + '"]').addClass(
          "remove-wishlist"
        );
        $('.add-wishlist[data-sku="' + value.pro_SKU + '"]').removeClass(
          "add-wishlist"
        );
        $(".wishlist").attr("data-notify", wishlist.length);
      });
    });
  });

  $(document).on("click", ".add-wishlist", function (e) {
    e.preventDefault();
    let data = new FormData();
    data.append("sku", $(this).data("sku"));
    _doAjaxNod("post", data, "wishlist", "wishlist", "add", true, (res) => {
      let name = $(this).parent().parent().find(".name").html().trim();
      let wishlist = res.data.wishlist;
      if (res.status == 403) {
        if (res.message == "user does not exist") {
          swal("", "Bạn cần phải đăng nhập", "error");
          setTimeout(() => {
            window.location.href = "/dang-nhap";
          }, 1000);
        }
      } else if (res.status == 200) {
        swal(name, "đã được yêu thích", "success");
        $(this).removeClass("add-wishlist");
        $(this).addClass("remove-wishlist");
        $(".wishlist").attr("data-notify", wishlist.length);
      }
    });
  });
  $(document).on("click", ".remove-wishlist", function (e) {
    e.preventDefault();
    let data = new FormData();
    data.append("sku", $(this).data("sku"));
    _doAjaxNod("post", data, "wishlist", "wishlist", "remove", true, (res) => {
      
      let name = $(this).parent().parent().find(".name").html().trim();
      if(name =="" || name == null){
        name = $(this).parent().find(".name").html().trim();
      }
      let wishlist = res.data.wishlist;
     if (res.status == 200) {
        swal(name, "đã bỏ yêu thích", "success");
        $(this).removeClass("remove-wishlist");
        $(this).addClass("add-wishlist");
        $(".wishlist").attr("data-notify", wishlist.length);
       $('#wishlist').find('#'+$(this).data("sku")).remove();
      }
    });
  });
})(jQuery);
function formatCurrency(price) {
  price = parseFloat(price);
  price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);

  return price;
}

function init_slick() {
  $(".wrap-slick3").each(function () {
    $(this)
      .find(".slick3")
      .slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 6000,

        arrows: true,
        appendArrows: $(this).find(".wrap-slick3-arrows"),

        prevArrow:
          '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow:
          '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

        dots: true,
        appendDots: $(this).find(".wrap-slick3-dots"),
        dotsClass: "slick3-dots",
        customPaging: function (slick, index) {
          var portrait = $(slick.$slides[index]).data("thumb");

          return (
            '<img src=" ' +
            portrait +
            ' "/><div class="slick3-dot-overlay"></div>'
          );
        },
      });
  });
}

function reset_slick() {
  $(".wrap-slick3-arrows").html("");
  $(".wrap-slick3-dots").html("");
}

function renderCart(countCart, cart, subTotal, domain) {
  $(".js-show-cart").attr("data-notify", countCart);
  let html = [];
  let html1 = [];
  cart.forEach((value, index, array) => {
    html.push(
      `    <li class="header-cart-item flex-w flex-t m-b-12">
          <div class="header-cart-item-img remove-cart" data-key="` +
        index +
        `">
              <img src="` +
        domain +
        `/` +
        value.img +
        `" alt="IMG">
          </div>

          <div class="header-cart-item-txt p-t-8">
              <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                  ` +
        value.name +
        ` (` +
        value.version +
        `)
              </a>

              <span class="header-cart-item-info">
              ` +
        value.quantity +
        ` x ` +
        formatCurrency(value.price) +
        `
              </span>
          </div>
      </li>`
    );
    html1.push(
      `<tr class="table_row" id="` +
        value.id +
        `">
      <td class="column-1">
        <div class="how-itemcart1 remove-cart" data-key="` +
        index +
        `">
          <img src="` +
        domain +
        `/` +
        value.img +
        `" alt="IMG">
        </div>
      </td>
      <td class="column-2">` +
        value.name +
        ` - ` +
        value.version +
        `</td>

      <td class="column-3">` +
        formatCurrency(value.price) +
        `</td>


      <td class="column-4">
        <div class="wrap-num-product flex-w m-l-auto m-r-0">
          <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
            data-id=` +
        index +
        `>
            <i class="fs-16 zmdi zmdi-minus"></i>
          </div>

          <input class="mtext-104 cl3 txt-center num-product quantity" type="number"
            name="num-product1" value="` +
        value.quantity +
        `">

          <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m "
            data-id=` +
        index +
        `>
            <i class="fs-16 zmdi zmdi-plus"></i>
          </div>
        </div>
      </td>
      <td class="column-5">` +
        formatCurrency(value.total) +
        `</td>
    </tr>`
    );
  });

  $(".header-cart-wrapitem").html(html);
  $("#listCart").html(html1);
  $(".header-cart-total").html("Tổng tiền: " + formatCurrency(subTotal));
  $(".subTotal").html(formatCurrency(subTotal));

  if (countCart <= 0) {
    $(".pointer").addClass("btn-disabled");
  }
}
