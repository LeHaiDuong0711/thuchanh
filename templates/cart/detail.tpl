	<!-- Shoping Cart -->
	<form class="bg0 p-t-75 p-b-85">
		<div class="container">
			<div class="row">
				<div class="col-lg-10 col-xl-7 m-lr-auto m-b-50">
					<div class="m-l-25 m-r--38 m-lr-0-xl">
						<div class="wrap-table-shopping-cart">
							<table class="table-shopping-cart">
								<thead>
									<tr class="table_head">
										<th class="column-1">Sản phẩm</th>
										<th class="column-2"></th>
										<th class="column-3">Giá</th>
										<th class="column-4">Số lượng</th>
										<th class="column-5">Tổng tiền</th>
									</tr>
								</thead>
								<tbody id="listCart">
									{foreach from=$lCart item=item key=key name=name}
										<tr class="table_row" id="{$item.id}">
											<td class="column-1">
												<div class="how-itemcart1 remove-cart" data-key="{$key}">
													<img src="{$domain}/{$item.img}" alt="IMG">
												</div>
											</td>
											<td class="column-2">{$item.name} - {$item.version}</td>

											<td class="column-3">{number_format($item.price, 0, '', '.')}₫</td>


											<td class="column-4">
												<div class="wrap-num-product flex-w m-l-auto m-r-0">
													<div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
														data-id='{$key}'>
														<i class="fs-16 zmdi zmdi-minus"></i>
													</div>

													<input class="mtext-104 cl3 txt-center num-product quantity" type="number"
														name="num-product1" value="{$item.quantity}">

													<div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m "
														data-id='{$key}'>
														<i class="fs-16 zmdi zmdi-plus"></i>
													</div>
												</div>
											</td>
											<td class="column-5"> {number_format($item.total, 0, '', '.')}₫</td>
										</tr>
									{/foreach}



								</tbody>
							</table>
						</div>


					</div>
				</div>

				<div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
					<div class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
						<h4 class="mtext-109 cl2 p-b-30">
							TỔNG GIỎ HÀNG
						</h4>

						<div class="flex-w flex-t bor12 p-b-13">
							<div class="size-208">
								<span class="stext-110 cl2">
									Tạm tính:
								</span>
							</div>

							<div class="size-209">
								<span class="mtext-110 cl2 subTotal">
									{number_format($totalCart, 0, '', '.')}₫
								</span>
							</div>
						</div>




						{if count($lCart)<=0}
							<button type="button"
								class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer btn-disabled">
								Tiến hành kiểm tra
							</button>
						{else}
							<a href="{$domain}/thong-tin-thanh-toan"
								class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
								Tiến hành kiểm tra
							</a>
						{/if}

					</div>
				</div>
			</div>
		</div>
</form>