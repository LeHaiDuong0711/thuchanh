<!-- Cart -->




<div class="wrap-header-cart js-panel-cart">
    <div class="s-full js-hide-cart"></div>

    <div class="header-cart flex-col-l p-l-65 p-r-25">
        <div class="header-cart-title flex-w flex-sb-m p-b-8">
            <span class="mtext-103 cl2">
                Giỏ hàng
            </span>

            <div class="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                <i class="zmdi zmdi-close"></i>
            </div>
        </div>


        <div class="header-cart-content flex-w js-pscroll">
    
    
            {if $lCart} <ul class="header-cart-wrapitem w-full">



                    {foreach from=$lCart item=item key=key name=name}
                        <li class="header-cart-item flex-w flex-t m-b-12">
                            <div class="header-cart-item-img remove-cart" data-key="{$key}" >
                                <img src="{$domain}/{$item.img}" alt="IMG">
                            </div>

                            <div class="header-cart-item-txt p-t-8">
                                <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                    {$item.name} ({$item.version})
                                </a>

                                <span class="header-cart-item-info">
                                    {$item.quantity} x {number_format($item.price, 0, '', '.')}₫
                                </span>
                            </div>
                        </li>
                    {/foreach}

                </ul>

            {else}
                <ul class="header-cart-wrapitem w-full">
                </ul>

            {/if}

            <div class="w-full">
                <div class="header-cart-total w-full p-tb-40">
                    Tổng tiền: {number_format($totalCart, 0, '', '.')}₫
                </div>

                <div class="header-cart-buttons flex-w w-full">
                    <a href="{$domain}/gio-hang/chi-tiet"
                        class="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                        Xem chi tiết giỏ hàng
                    </a>

                </div>
            </div>
        </div>
    </div>
</div>