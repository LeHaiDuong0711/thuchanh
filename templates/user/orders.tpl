






<div class="container">
    <h1 class="">Danh sách đơn hàng đã mua</h1>
    <div class="container mt-5 mb-5">
    <nav>
        <div class="nav nav-tabs" id="nav-tab-order" role="tablist">
            <button class="nav-link active" id="nav-all-order-tab" data-toggle="tab" data-target="#nav-all-order" type="button" role="tab" aria-controls="nav-all-order" aria-selected="true">Tất cả</button>
            <button class="nav-link" id="nav-processing-tab" data-toggle="tab" data-target="#nav-processing" type="button" role="tab" aria-controls="nav-processing" aria-selected="false">Đang xử lý</button>
            <button class="nav-link" id="nav-delivering-tab" data-toggle="tab" data-target="#nav-delivering" type="button" role="tab" aria-controls="nav-delivering" aria-selected="false">Đang giao</button>
            <button class="nav-link" id="nav-received-tab" data-toggle="tab" data-target="#nav-received" type="button" role="tab" aria-controls="nav-received" aria-selected="false">Đã nhận</button>
            <button class="nav-link" id="nav-cancel-order-tab" data-toggle="tab" data-target="#nav-cancel-order" type="button" role="tab" aria-controls="nav-cancel-order" aria-selected="false">Đã Hủy</button>

        </div>
    </nav>
    <div class="tab-content" id="nav-tab-content-orders">
        <div class="tab-pane fade show active" id="nav-all-order" role="tabpanel" aria-labelledby="nav-all-order-tab">
        {foreach from=$lOrder item=item key=key name=name}
            <div class="card">
                <div class="card-header">
                    <h5>Đơn hàng #{$item.id}</h5>
                    {if $item.status ==0}
                        <div class="t">Đang xử lý</div>
                        <button class="btn btn-cancel cancel-order" title="Hủy đơn hàng" data-id="{$item.id}"><i class="fa fa-times" aria-hidden="true"></i></button>

                    {elseif  $item.status ==1}
                        <div class="">Đang giao hàng</div>
                        <button class="btn btn-cancel cancel-order" title="Hủy đơn hàng" data-id="{$item.id}"><i class="fa fa-times" aria-hidden="true"></i></button>

                    {elseif  $item.status ==2}
                        <div class="">Hoàn thành</div>
                    {elseif $item.status ==3}
                        <div class="">Đã hủy</div>
    
    
                    {/if}
    
                </div>
    
                {foreach from=$item.orderdetail item=itemm key=keyy name=namee}
                     <div class="card-body">
                    <div class="product-info">
                        <img src="{$domain}/{$itemm.pro_image}" alt="Product image">
                        <div>
                            <h6>{$itemm.pro_name}</h6>
                            <p>{$itemm.pro_SKU}</p>
                        </div>
                    </div>
                    <div class="product-quantity">{$itemm.quantity}</div>
                    <div class="product-price">  {number_format($itemm.price, 0, '', '.')}₫</div>
    
    
                </div>
                {/foreach}
                <div class="card-footer">
                <div class="product-price float-right">Tổng tiền:  {number_format($item.total, 0, '', '.')}₫</div>
            </div>
            </div>
        {/foreach}
        {if !$lOrder}
           
              <div class="card-header">Chưa có đơn hàng nào</div>
        {/if}
        </div>
        <div class="tab-pane fade" id="nav-processing" role="tabpanel" aria-labelledby="nav-processing-tab">
        {foreach from=$lOrderProcessing item=item key=key name=name}
            <div class="card">
                <div class="card-header">
                    <h5>Đơn hàng #{$item.id}</h5>
                  
                        <div class="t">Đang xử lý</div>
                        <button class="btn btn-cancel cancel-order" title="Hủy đơn hàng" data-id="{$item.id}"><i class="fa fa-times" aria-hidden="true"></i></button>

                </div>
    
                {foreach from=$item.orderdetail item=itemm key=keyy name=namee}
                     <div class="card-body">
                    <div class="product-info">
                        <img src="{$domain}/{$itemm.pro_image}" alt="Product image">
                        <div>
                            <h6>{$itemm.pro_name}</h6>
                            <p>{$itemm.pro_SKU}</p>
                        </div>
                    </div>
                    <div class="product-quantity">{$itemm.quantity}</div>
                    <div class="product-price">  {number_format($itemm.price, 0, '', '.')}₫</div>
    
    
                </div>
                {/foreach}
                <div class="card-footer">
                <div class="product-price float-right">Tổng tiền:  {number_format($item.total, 0, '', '.')}₫</div>
            </div>
               
            </div>
        {/foreach}
        {if !$lOrderProcessing}
           
              <div class="card-header">Chưa có đơn hàng nào</div>
        {/if}
        </div>
        <div class="tab-pane fade" id="nav-delivering" role="tabpanel" aria-labelledby="nav-delivering-tab">
         {foreach from=$lOrderDelivering item=item key=key name=name}
            <div class="card">
                <div class="card-header">
                    <h5>Đơn hàng #{$item.id}</h5>
                  
                        <div class="t">Đang vận chuyển</div>
                        <button class="btn btn-cancel cancel-order" title="Hủy đơn hàng" data-id="{$item.id}"><i class="fa fa-times" aria-hidden="true"></i></button>

                  

                </div>
    
                {foreach from=$item.orderdetail item=itemm key=keyy name=namee}
                     <div class="card-body">
                    <div class="product-info">
                        <img src="{$domain}/{$itemm.pro_image}" alt="Product image">
                        <div>
                            <h6>{$itemm.pro_name}</h6>
                            <p>{$itemm.pro_SKU}</p>
                        </div>
                    </div>
                    <div class="product-quantity">{$itemm.quantity}</div>
                    <div class="product-price">  {number_format($itemm.price, 0, '', '.')}₫</div>
    
    
                </div>
                {/foreach}
                <div class="card-footer">
                <div class="product-price float-right">Tổng tiền:  {number_format($item.total, 0, '', '.')}₫</div>
            </div>
               
            </div>
        {/foreach} 
        {if !$lOrderDelivering}
           
              <div class="card-header">Chưa có đơn hàng nào</div>
        {/if}
        </div>
        <div class="tab-pane fade" id="nav-received" role="tabpanel" aria-labelledby="nav-received-tab">
        {foreach from=$lOrderReceived item=item key=key name=name}
            <div class="card">
                <div class="card-header">
                    <h5>Đơn hàng #{$item.id}</h5>
                  
                        <div class="t">Hoàn thành</div>

                </div>
    
                {foreach from=$item.orderdetail item=itemm key=keyy name=namee}
                     <div class="card-body">
                    <div class="product-info">
                        <img src="{$domain}/{$itemm.pro_image}" alt="Product image">
                        <div>
                            <h6>{$itemm.pro_name}</h6>
                            <p>{$itemm.pro_SKU}</p>
                        </div>
                    </div>
                    <div class="product-quantity">{$itemm.quantity}</div>
                    <div class="product-price">  {number_format($itemm.price, 0, '', '.')}₫</div>
    
    
                </div>
                {/foreach}
                <div class="card-footer">
                <div class="product-price float-right">Tổng tiền:  {number_format($item.total, 0, '', '.')}₫</div>
            </div>
               
            </div>
        {/foreach}
        {if !$lOrderReceived}
           
              <div class="card-header">Chưa có đơn hàng nào</div>
        {/if}
        </div>
        <div class="tab-pane fade" id="nav-cancel-order" role="tabpanel" aria-labelledby="nav-cancel-order-tab">
        {foreach from=$lOrderCancel item=item key=key name=name}
            <div class="card">
                <div class="card-header">
                    <h5>Đơn hàng #{$item.id}</h5>
                  
                        <div class="t">Đã hủy</div>
                   
    
    

    
                </div>
    
                {foreach from=$item.orderdetail item=itemm key=keyy name=namee}
                     <div class="card-body">
                    <div class="product-info">
                        <img src="{$domain}/{$itemm.pro_image}" alt="Product image">
                        <div>
                            <h6>{$itemm.pro_name}</h6>
                            <p>{$itemm.pro_SKU}</p>
                        </div>
                    </div>
                    <div class="product-quantity">{$itemm.quantity}</div>
                    <div class="product-price">  {number_format($itemm.price, 0, '', '.')}₫</div>
    
    
                </div>
                {/foreach}
                <div class="card-footer">
                <div class="product-price float-right">Tổng tiền:  {number_format($item.total, 0, '', '.')}₫</div>
            </div>
               
            </div>
        {/foreach}
        {if !$lOrderCancel}
           
              <div class="card-header">Chưa có đơn hàng nào</div>
        {/if}</div>
    </div>
</div>
</div>

    
   


</div>