<main role="main">
{if !isset($user)}
   <h5 class="text-danger"> Vui lòng đăng nhập để dặt hàng !<a href="/dang-nhap">Đăng nhập</a></h5>
    
    {else}
     <!-- Block content - Đục lỗ trên giao diện bố cục chung, đặt tên là `content` -->
    <div class="container mt-4">
        <form id="formPayment">
            <div class="py-5 text-center">
                <i class="fa fa-credit-card fa-4x" aria-hidden="true"></i>
                <h2>Thanh toán</h2>
                <p class="lead">Vui lòng kiểm tra thông tin Khách hàng, thông tin Giỏ hàng trước khi Đặt hàng.</p>
            </div>

            <div class="row">
                <div class="col-md-4 order-md-2 mb-4">
                    <h4 class="d-flex justify-content-between align-items-center mb-3">
                        <span class="text-muted">Giỏ hàng</span>

                    </h4>
                    <ul class="list-group mb-3">
                        {foreach from=$lCart item=item key=key name=name}

                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">{$item.name}</h6>
                                    <small class="text-muted">{number_format($item.price, 0, '', '.')}₫ x {$item.quantity}</small>
                                </div>
                                <span class="text-muted">{number_format($item.total, 0, '', '.')}₫</span>
                            </li>
                        {/foreach}


                        <li class="list-group-item d-flex justify-content-between">
                            <span>Tổng thành tiền</span>
                            <strong>{number_format($totalCart, 0, '', '.')}₫</strong>
                        </li>
                    </ul>


                    {* <div class="input-group">
                        <input type="text" class="form-control" placeholder="Mã khuyến mãi">
                       
                            <button type="submit" class="btn btn-secondary mt-1">Xác nhận</button>
                    
                    </div> *}

                </div>
                <div class="col-md-8 order-md-1">
                    <h4 class="mb-3">Thông tin khách hàng</h4>

                    <div class="row">
                        <div class="col-md-12">
                            <label for="fullName">Họ và tên</label>
                            <input type="text" class="form-control" name="fullName" id="fullName"
                                value="{$user['fullName']}">
                                <span class="errFullName text-danger"></span>
                        </div>
                        <div class="col-md-12">
                            <label for="address">Địa chỉ</label>
                            <input type="text" class="form-control" name="address" id="address" value="">
                            <span class="errAddress text-danger"></span>
                        </div>
                        <div class="col-md-12">
                            <label for="phone">Điện thoại</label>
                            <input type="tel" class="form-control" name="phone" id="phone" value="{$user['phone']}">
                            <span class="errPhone text-danger"></span>
                        </div>
                        <div class="col-md-12">
                        <label for="phone">Ghi chú</label>
                        <textarea class="form-control" name="note" id="note"></textarea>
                        
                    </div>

                    </div>
                    <hr class="mb-4">
                    <h4 class="mb-3">Hình thức thanh toán</h4>

                    <div class="d-block my-3 d-flex">
                        {* <div class="custom-control custom-radio">
                            <input id="payment1" name="payments" type="radio"value="1" disabled>
                            <label class="custom-control-label" for="payment1">Tiền mặt</label>
                        </div>
                        <div class="custom-control custom-radio">
                            <input id="payment2" name="payments" type="radio"value="2" disabled>
                            <label class="custom-control-label" for="httt-2">Chuyển khoản</label>
                        </div> *}
                        <div class="custom-control custom-radio">
                            <input id="payment3" name="payment" type="radio" value="1" checked>
                            <label class="custom-control-label" for="httt-3">Ship COD</label>
                        </div>
                    </div>
                    <hr class="mb-4">

                    <div class="mb-5">
                  
                    {* <h5>Giảm giá: <strong>{number_format(0, 0, '', '.')}₫</strong></h5> *}
                    <h5>Phí vận chuyển: <strong>{number_format(30000, 0, '', '.')}₫</strong></h5>
                    <h5>Thành Tiền: <strong>{number_format({$totalCart}+30000, 0, '', '.')}₫</strong></h5>
                    </div>
                    <hr class="mb-4">
                    <button class="btn btn-primary btn-lg btn-block" type="submit" name="btn-payment">Đặt
                        hàng</button>
                </div>
            </div>
        </form>

    </div>
    <!-- End block content -->   
{/if}
    
    
</main>