<!-- Slider -->
<section class="section-slide">
	<div class="wrap-slick1">
		<div class="slick1">
			{foreach from=$lSlide item=item key=key name=name}
				<div class="item-slick1" style="background-image: url({$domain}/{$item.image});">
					<div class="container h-full">
						<div class="flex-col-l-m h-full p-t-100 p-b-30 respon5">
							<div class="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">
								<span class="ltext-101 cl2 respon2">
									{$item.name}
								</span>
							</div>

							<div class="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">
								<h2 class="ltext-201 cl2 p-t-19 p-b-43 respon1">
									{$item.description}
								</h2>
							</div>

							<div class="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">
								<a href="{$domain}/{$item.link}/"
									class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
									Mua ngay
								</a>
							</div>
						</div>
					</div>
				</div>
			{/foreach}

		</div>
	</div>
</section>

<!-- Banner -->

<div class="sec-banner bg0 p-t-80 p-b-50">
	<div class="container">
		<div class="row">

			{foreach from=$lBanner item=item key=key name=name}
				<div class="col-md-6 col-xl-4 p-b-30 m-lr-auto">
					<!-- Block1 -->
					<div class="block1 wrap-pic-w">
						<img src="{$domain}/{$item.image}" alt="{$item.name}">

						<a href="{$domain}/{$item.link}"
							class="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
							<div class="block1-txt-child1 flex-col-l">
								<span class="block1-name ltext-102 trans-04 p-b-8">
									{$item.name}
								</span>

								<span class="block1-info stext-102 trans-04">
									{$item.description}
								</span>
							</div>

							<div class="block1-txt-child2 p-b-4 trans-05">
								<div class="block1-link stext-101 cl0 trans-09">
									Mua ngay
								</div>
							</div>
						</a>
					</div>
				</div>
			{/foreach}





		</div>
	</div>
</div>

<!-- Product -->
<section class="bg0 p-t-23 p-b-140">
	<div class="container">
		<div class="p-b-10">
			<h3 class="ltext-103 cl5">
				Sản phẩm mới
			</h3>
		</div>

		<div class="flex-w flex-sb-m p-b-52">
			<div class="flex-w flex-l-m filter-tope-group m-tb-10">
				<button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
					Tất cả
				</button>

				{foreach from=$lCategory item=item key=key name=name}
					<button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".S{$item.id}">
						{$item.name}
					</button>
				{/foreach}



			</div>
			
		</div>

		<div class="row isotope-grid">
			{foreach from=$lProducts item=item key=key name=name}
				<div class="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item S{$item.sex_id}">
					<!-- Block2 -->
					<div class="block2">
						<div class="block2-pic hov-img0">
							<img src="{$domain}/{$item.images[0]}" alt="IMG-PRODUCT">

							<a href=""
								class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
								data-id="{$item.id}">
								Xem nhanh
							</a>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="{$domain}/san-pham/{$item.link}-p{$item.id}"
									class="stext-104 cl4 hov-cl1 trans-04 p-b-6 name">
									{$item.name} - {$item.SKU}
								</a>

								<span class="stext-105 cl3">
									{number_format($item.price, 0, '', '.')}₫
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2 add-wishlist" data-sku="{$item.SKU}">
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

		<!-- Load more -->
		<div class="flex-c-m flex-w w-full p-t-45">
			<a href="/san-pham/" class="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
				Xem thêm
			</a>
		</div>
	</div>
</section>

{include "`$tpldirect`product/modal.tpl"}