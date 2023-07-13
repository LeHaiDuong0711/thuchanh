<!-- Product -->

<div class="bg0 m-t-23 p-b-140">
    <div class="container">
        <div class="flex-w flex-sb-m p-b-52">


            <div class="flex-w flex-c-m m-tb-10">
                <div class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                    <i class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                    <i class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                    Lọc
                </div>

                <div class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                    <i class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
                    <i class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                    Tìm kiếm
                </div>
            </div>

            <!-- Search product -->
            <div class="dis-none panel-search w-full p-t-10 p-b-15">
                <div class="bor8 dis-flex p-l-15">
                    {* <button class="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                        <i class="zmdi zmdi-search"></i>
                    </button> *}

                    <input class="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product"
                        placeholder="Tìm kiếm">
                </div>
            </div>

            <!-- Filter -->
            <div class="dis-none panel-filter w-full p-t-10">
                <div class="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                    <div class="filter-col1 p-r-15 p-b-27">
                        <div class="mtext-102 cl2 p-b-15">
                            Nhóm sản phẩm
                        </div>

                        <ul>
                            <li class="p-b-6">
                                <a href="" class="filter-link stext-106 trans-04 group-product filter-link-active">
                                    Tất cả
                                </a>
                            </li>
                            <li class="p-b-6">
                                <a href="" class="filter-link stext-106 trans-04 group-product">
                                    Nam
                                </a>
                            </li>

                            <li class="p-b-6">
                                <a href="" class="filter-link stext-106 trans-04 group-product">
                                    Nữ
                                </a>
                            </li>

                            <li class="p-b-6">
                                <a href="#" class="filter-link stext-106 trans-04 group-product">
                                    Cả nam và nữ
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div class="filter-col2 p-r-15 p-b-27">
                        <div class="mtext-102 cl2 p-b-15">
                            Giá
                        </div>

                        <ul>
                            <li class="p-b-6">
                                <a href="" class="filter-link stext-106 trans-04 filter-link-active">
                                    Tất cả
                                </a>
                            </li>

                            <li class="p-b-6">
                                <a href="" class="filter-link stext-106 trans-04">
                                    0 - 10.000₫
                                </a>
                            </li>

                            <li class="p-b-6">
                                <a href="" class="filter-link stext-106 trans-04">
                                    10.000₫ - 100.000₫
                                </a>
                            </li>

                            <li class="p-b-6">
                                <a href="" class="filter-link stext-106 trans-04">
                                    100.000₫ - 500.000₫
                                </a>
                            </li>

                            <li class="p-b-6">
                                <a href="" class="filter-link stext-106 trans-04">
                                    500.000₫ - 1.000.000₫
                                </a>
                            </li>

                            <li class="p-b-6">
                                <a href="" class="filter-link stext-106 trans-04">
                                    trên 1.000.000₫
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="filter-col3 p-r-15 p-b-27">
                        <div class="mtext-102 cl2 p-b-15">
                            Màu
                        </div>

                        <ul>
                            <li class="p-b-6">
                                <span class="fs-15 lh-12 m-r-6" style="color: #222;">
                                    <i class="zmdi zmdi-circle"></i>
                                </span>

                                <a href="" class="filter-link stext-106 trans-04 color">
                                    Tất cả
                                </a>
                            </li>

                            <li class="p-b-6">
                                <span class="fs-15 lh-12 m-r-6" style="color: #4272d7;">
                                    <i class="zmdi zmdi-circle"></i>
                                </span>

                                <a href="" class="filter-link stext-106 trans-04 filter-link-active">
                                    Blue
                                </a>
                            </li>

                            
                        </ul>
                    </div>

                  
                </div>
            </div>
        </div>

        <div class="row products" style="height: 100%;">

            {foreach from=$lProducts item=item key=key name=name}
                <div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                    <!-- Block2 -->
                    <div class="block2">
                        <div class="block2-pic hov-img0">
                            <img src="{$domain}/{$item.images[0]}" alt="IMG-PRODUCT">

                            <a href=""
                                class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                                data-id={$item.id}>
                                Xem nhanh
                            </a>
                        </div>

                        <div class="block2-txt flex-w flex-t p-t-14">
                            <div class="block2-txt-child1 flex-col-l ">
                                <a href="{$domain}/san-pham/{$item.link}-p{$item.id}"
                                    class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6 name">
                                    {$item.name} - {$item.SKU}
                                </a>

                                <span class="stext-105 cl3">
                                    {number_format($item.price, 0, '', '.')}₫
                                </span>
                            </div>

                            <div class="block2-txt-child2 flex-r p-t-3">
                                <a href="" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2 add-wishlist"
                                    data-sku="{$item.SKU}">
                                    <img class="icon-heart1 dis-block trans-04"
                                        src="{$domain}/public/images/icons/icon-heart-01.png" alt="ICON">
                                    <img class="icon-heart2 dis-block trans-04 ab-t-l"
                                        src="{$domain}/public/images/icons/icon-heart-02.png" alt="ICON">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            {/foreach}




        </div>
        <div class="containerPagination mt-5">

            {$pagination}
        </div>


    </div>

</div>


{include "`$tpldirect`product/modal.tpl"}