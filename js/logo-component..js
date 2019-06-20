Vue.component('logo', {
    template: `<header class="header">
        <div class="container header__container">
            <div class="header__left">
                <a href="index.html" class="logo"><img class="logo__img" src="img/logo.png" alt="logo">BRAN<span class="logo__d">D</span></a>
                <form class="header__form" action="#">
                    <div class="browse">
                       <p>Browse</p>
                        <div class="drop-down">
                            <h3>Women</h3>
                            <li><a href="single-page1.html">Dresses</a></li>
                            <li><a href="single-page1.html">Tops</a></li>
                            <li><a href="single-page1.html">Sweaters/Knits</a></li>
                            <li><a href="single-page1.html">Jackets/Coats</a></li>
                            <li><a href="single-page1.html">Blazers</a></li>
                            <li><a href="single-page1.html">Denim</a></li>
                            <li><a href="single-page1.html">Leggings/Pants</a></li>
                            <li><a href="single-page1.html">Skirts/Shorts</a></li>
                            <li><a href="single-page1.html">Accessories </a></li>
                            <h3>Men</h3>
                            <li><a href="single-page1.html">Tees/Tank tops</a></li>
                            <li><a href="single-page1.html">Shirts/Polos</a></li>
                            <li><a href="single-page1.html">Sweaters</a></li>
                            <li><a href="single-page1.html">Sweatshirts/Hoodies</a></li>
                            <li><a href="single-page1.html">Blazers</a></li>
                            <li><a href="single-page1.html">Jackets/vests</a></li>
                        </div>
                    </div>
                    <input type="text" placeholder="Search for Item">
                    <input type="submit" value="">
                </form>
            </div>
            <div class="header__right">
                <div class="header__right_img">
                   <a href="shopping-cart.html">
                    <img class="cart" src="img/Forma_1.svg" alt="cart">
                    </a>
                <div class="shopping-cart__flex">
                    <div class="shopping-cart__flex__inside1">
                        <a href="single-page1.html"><div class="shopping-cart__flex__inside1-1">
                            <img src="img/Layer_43.png" alt="">
                        </div></a>
                        <div class="shopping-cart__flex__inside1-2">
                           <a href="single-page1.html"> <h5>Rebox Zane</h5></a>
                            <img src="img/stars.png" alt="">
                            <p>1  <span>x</span>   $250</p>
                        </div>
                        <div class="shopping-cart__flex__inside1-3">
                            <a href="#"><img src="img/cart-delete.png" alt=""></a>
                        </div>
                    </div>
                    <div class="shopping-cart__flex__inside1">
                        <a href="single-page1.html"><div class="shopping-cart__flex__inside1-1">
                            <img src="img/Layer_44.png" alt="">
                        </div></a>
                        <div class="shopping-cart__flex__inside1-2">
                            <a href="single-page1.html"><h5>Rebox Zane</h5></a>
                            <img src="img/stars.png" alt="">
                            <p>1  <span>x</span>   $250</p>
                        </div>
                        <div class="shopping-cart__flex__inside1-3">
                            <a href="#"><img src="img/cart-delete.png" alt=""></a>
                        </div>
                    </div>
                    <div class="shopping-cart__total">
                        <p>TOTAL</p>
                        <p>$500.00</p>
                    </div>
                    <a href="checkout.html"><div class="shopping-cart__checkout">
                        <p>checkout</p>
                    </div></a>
                    <a href="shopping-cart.html"><div class="shopping-cart__gotocart">
                        <p>Go to cart</p>
                    </div></a>
                </div>
                </div>
                <div>
                <a class="button" href="#">My Account</a> </div>
        </div>
        </div>
    </header>`
});