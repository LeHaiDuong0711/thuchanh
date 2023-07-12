$(document).on("click",".js-show-cart", function () {
    console.log('a');
  _doAjaxNod("get", "", "cart_index", "cart", "index", true, (res) => {
    if(res.status ==200){
     lCart = res.data.lCart;
     html=[];
     lCart.forEach((value, index, array) => {
        console.log(value);
        html.push(
         ` <li class="header-cart-item flex-w flex-t m-b-12">
         <div class="header-cart-item-img">
             <img src="images/item-cart-03.jpg" alt="IMG">
         </div>

         <div class="header-cart-item-txt p-t-8">
             <a href="#" class="header-cart-item-name m-b-18 hov-cl1 trans-04">
                 `+value+`
             </a>

             <span class="header-cart-item-info">
                 {$item.quantity} x {$item.price}
             </span>
         </div>
     </li>`   
        )
     })  
    }
    
  });
});
