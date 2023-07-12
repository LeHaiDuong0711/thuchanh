	<!-- Shoping Cart -->

	<div class="container">

	    <div class=" m-lr-auto m-b-50">

	        <div class="wrap-table-shopping-cart">
	            <table class="table table-hover">
	                <thead>
	                    <tr>
	                        <th>Sản phẩm</th>
	                        <th></th>
	                        <th>Giá</th>
	                        <th></th>
	                    </tr>
	                </thead>
	                <tbody id="wishlist">
	                
	                    {foreach from=$wishlist item=item key=key name=name}
    	                    <tr class="table_row" id="{$item.SKU}">
    	                        <td class="column-1">
    	                            <div class="how-itemcart1 remove-wishlist" data-sku="{$item.SKU}">
    	                                <img src="{$domain}/{$item.images[0]}" alt="IMG">
    	                            </div>
    	                        </td>
    	                        <td class="column-2 name">{$item.name}</td>

    	                        <td class="column-3">{number_format($item.price, 0, '', '.')}₫</td>



    	                        <td class="column-4"> <a href="{$domain}/san-pham/{$item.link}-p{$item.id}"
    	                                class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
    	                                Mua hàng
    	                            </a></td>
    	                    </tr>
	                    {/foreach}
	                </tbody>
	            </table>




	        </div>
	    </div>



</div>