<!DOCTYPE html>
<html lang="vi">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="canonical" href="#">
    <link rel="shortcut icon" href="{$domain}/public/images/icons/favicon.png?v=2" type="image/x-icon">
    <meta name="keywords" content="Thời trang">
    <meta name="description" content="Thời trang">
    <title>Thời trang</title>

    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/vendor/bootstrap/css/bootstrap.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/fonts/iconic/css/material-design-iconic-font.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/fonts/linearicons-v1.0.0/icon-font.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/vendor/animate/animate.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/vendor/css-hamburgers/hamburgers.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/vendor/animsition/css/animsition.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/vendor/select2/select2.min.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/vendor/daterangepicker/daterangepicker.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/vendor/slick/slick.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/vendor/MagnificPopup/magnific-popup.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/vendor/perfect-scrollbar/perfect-scrollbar.css">
    <!--===============================================================================================-->
    <link rel="stylesheet" type="text/css" href="{$domain}/public/css/util.css">
    <link rel="stylesheet" type="text/css" href="{$domain}/public/css/main.css">

    <script src="{$domain}/public/vendor/jquery/jquery-3.2.1.min.js"></script>

</head>

<body class="animistion">

    <!-- Header -->
    <header class="header-v4">
        <!-- Header desktop -->
        <div class="container-menu-desktop">
            <!-- Topbar -->
            <div class="top-bar">
                <div class="content-topbar flex-sb-m h-full container">
                    <div class="left-top-bar">
                        Miễn phí vận chuyển từ đơn hàng 500.000&#8363;
                    </div>

                    <div class="right-top-bar flex-w h-full">
                        <a href="#" class="flex-c-m trans-04 p-lr-25">
                            Trợ giúp & Chính sách
                        </a>
                        {if !isset($user)}
                            <a href="{$domain}/dang-nhap" class="flex-c-m trans-04 p-lr-25 login">
                                Đăng nhập
                            </a>
                        {else}



                            <nav class="navbar navbar-expand-lg ">
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown ">
                                            <a class="nav-link dropdown-toggle user" href="#" id="navbarDropdownMenuLink"
                                                role="button" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                {$user['fullName']}
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                <a href="{$domain}/thong-tin-tai-khoan" class="dropdown-item">
                                                    Thông tin tài khoản
                                                </a>
                                                <a href="{$domain}/don-hang" class="dropdown-item">
                                                    Đơn hàng
                                                </a>
                                                <a class="dropdown-item logout" href="">Đăng xuất</a>
                                                
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>







                        {/if}
                        {* <a href="#" class="flex-c-m trans-04 p-lr-25">
                    EN
                </a>

                <a href="#" class="flex-c-m trans-04 p-lr-25">
                    USD
                </a> *}
                    </div>
                </div>
            </div>

            <div class="wrap-menu-desktop">
                <nav class="limiter-menu-desktop container">

                    <!-- Logo desktop -->
                    <a href="{$domain}" class="logo">
                        <img src="{$domain}/public/images/icons/logo-01.png" alt="IMG-LOGO">
                    </a>

                    <!-- Menu desktop -->
                    <div class="menu-desktop">
                        <ul class="main-menu">
                            {foreach from=$lMenuHome item=item key=key}
                                <li>
                                    <a href="{$domain}/{$item.link}/">{$item.name}</a>
                                    {* <ul class="sub-menu">
                        <li><a href="index.html">Homepage 1</a></li>
                        <li><a href="home-02.html">Homepage 2</a></li>
                        <li><a href="home-03.html">Homepage 3</a></li>
                    </ul> *}
                                </li>
                            {/foreach}



                        </ul>
                    </div>

                    <!-- Icon header -->
                    <div class="wrap-icon-header flex-w flex-r-m">
                        <div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                            <i class="zmdi zmdi-search"></i>
                        </div>

                        <div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                            data-notify="{$countCart}">
                            <i class="zmdi zmdi-shopping-cart"></i>
                        </div>

                        <a href="{$domain}/danh-sach-yeu-thich"
                            class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti wishlist"
                            data-notify="0">
                            <i class="zmdi zmdi-favorite-outline"></i>
                        </a>
                    </div>
                </nav>
            </div>
        </div>

        <!-- Header Mobile -->
        <div class="wrap-header-mobile">
            <!-- Logo moblie -->
            <div class="logo-mobile">
                <a href="index.html"><img src="{$domain}/public/images/icons/logo-01.png" alt="IMG-LOGO"></a>
            </div>

            <!-- Icon header -->
            <div class="wrap-icon-header flex-w flex-r-m m-r-15">
                <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                    <i class="zmdi zmdi-search"></i>
                </div>

                <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
                    data-notify="{$countCart}">
                    <i class="zmdi zmdi-shopping-cart"></i>
                </div>

                <a href="#" class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
                    data-notify="0">
                    <i class="zmdi zmdi-favorite-outline"></i>
                </a>
            </div>

            <!-- Button show menu -->
            <div class="btn-show-menu-mobile hamburger hamburger--squeeze">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </div>
        </div>


        <!-- Menu Mobile -->
        <div class="menu-mobile">
            <ul class="topbar-mobile">
                <li>
                    <div class="left-top-bar">
                        Miễn phí vận chuyển từ đơn hàng 500.000&#8363;
                    </div>
                </li>

                <li>
                    <div class="right-top-bar flex-w h-full">
                        <a href="#" class="flex-c-m p-lr-10 trans-04">
                            Trợ giúp & Chính sách
                        </a>

                        <a href="{$domain}/dang-nhap" class="flex-c-m p-lr-10 trans-04 login">
                            Đăng nhập
                        </a>

                        {* <a href="#" class="flex-c-m p-lr-10 trans-04">
                    EN
                </a>

                <a href="#" class="flex-c-m p-lr-10 trans-04">
                    USD
                </a> *}
                    </div>
                </li>
            </ul>

            <ul class="main-menu-m">

                {foreach from=$lMenuHome item=item key=key}
                    <li>
                        <a href="{$domain}/{$item.link}">{$item.name}</a>
                        {* <ul class="sub-menu">
            <li><a href="index.html">Homepage 1</a></li>
            <li><a href="home-02.html">Homepage 2</a></li>
            <li><a href="home-03.html">Homepage 3</a></li>
        </ul> *}
                    </li>
                {/foreach}


            </ul>
        </div>

        <!-- Modal Search -->
        <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
            <div class="container-search-header">
                <button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                    <img src="{$domain}/public/images/icons/icon-close2.png" alt="CLOSE">
                </button>

                <form class="wrap-search-header flex-w p-l-15">
                    <button class="flex-c-m trans-04">
                        <i class="zmdi zmdi-search"></i>
                    </button>
                    <input class="plh3" type="text" name="search" placeholder="Search...">
                </form>
            </div>
        </div>
    </header>
{include "`$tpldirect`cart/index.tpl" lCart=$lCart totalCart=$totalCart}