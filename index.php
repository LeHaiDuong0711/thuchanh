<?php
error_reporting(E_ALL);
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
date_default_timezone_set( 'Asia/Ho_Chi_minh' );

// echo date('d/m/Y H:i', 1651187600);
// exit();

include 'define.php';

$title 	= '';
$m 		= $main->get('m');
$act 	= $main->get('act');

if($m=='')
	$m = 'home';
if($act=='')
	$act = 'index';
	
if (isset($setup['lang']) && in_array($setup['lang'], array('vi', 'en'))) {
	include 'lang/' . $setup['lang'] . '/home.php'; //load ngôn ngữ lên
	$_SESSION['lang'] = $setup['lang'];
} else {
	$_SESSION['lang'] = 'vi';
	include 'lang/vi/home.php'; //load ngôn ngữ lên
}

if ($m == 'panel') {
	if (!isset($_SESSION['username']) || !isset($_SESSION['pass'])) {
		if (isset($_COOKIE['username']) && isset($_COOKIE['pass'])) {
			$duser = $user->get_detail($_COOKIE['username']);
			if ($duser['status'] == 'Active' && $duser['password'] == $_COOKIE['pass']) {
				$_SESSION['username'] 	= $duser['username'];
				$_SESSION['fullname'] 	= $duser['fullname'];
				$_SESSION['pass'] 		= $duser['password'];
				$_SESSION['shop_id'] 	= $duser['shop_id'];
				$_SESSION['gid'] 		= $duser['gid'];
				setcookie('username', $_SESSION['username'], time() + 640000);
				setcookie('pass', $_SESSION['pass'], time() + 640000);
				// setcookie('temp_area', @$_SESSION['temp_area'], time() + 640000);
				setcookie($_SESSION['username'] . '_security', $duser['security'], time() + 6400000);
			}
		}
	}
} elseif ($m == 'client') {
	$members = new members();
	if (!isset($_SESSION['usernameclient']) || !isset($_SESSION['passwordClient'])) {
		if (isset($_COOKIE['usernameclient']) && isset($_COOKIE['passwordClient'])) {
			$duser = $members->get_detail($_COOKIE['usernameclient']);
			if ($duser['status'] == 'Active' && $duser['password'] == $_COOKIE['passwordClient']) {
				$_SESSION['usernameclient'] 	= $duser['user_id'];
				$_SESSION['fullnameClient'] 	= $duser['fullname'];
				$_SESSION['mobileClient'] 		= $duser['mobile'];
				$_SESSION['emailClient'] 		= $duser['email'];
				$_SESSION['passwordClient'] 	= $duser['password'];
				$_SESSION['shopIdClient'] 		= $duser['shop_id'];
				setcookie('usernameclient', $_SESSION['usernameclient'], time() + 640000);
				setcookie('passwordClient', $_SESSION['passwordClient'], time() + 640000);
				// setcookie('temp_area', @$_SESSION['temp_area'], time() + 640000);
				setcookie($_SESSION['usernameclient'] . '_security', $duser['security'], time() + 6400000);
			}
		}
	}
}

/**
 * BEGIN check đang là loại user nào
 */

$stemp = 'm/' . $m . '.php';
$temp = $m . '/' . $act . '.tpl';

if($m=='chart') $temp='home/'.$m . '/' . $act . '.tpl';

include $stemp;

$st->assign('temp', $temp);
$st->assign('m', $m);
$st->assign('act', $act);
$st->assign('session', $_SESSION);
$st->assign('title', $title);
$st->assign('version', 'v=' . $setup['version'] . time());
$st->assign('logo_url', $setup['logo_url']);

$st->assign('tpldirect', $tpldirect);
$st->assign('domain', $domain);
$st->assign('link', $domain);
$st->assign('lang', $lang);

// BEGIN get url set meta_url
$uri 		= $_SERVER['REQUEST_URI'];
$query 		= $_SERVER['QUERY_STRING'];
$domain 	= $_SERVER['HTTP_HOST'];
$protocol 	= ((!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off') || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
$meta_url 	= $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];

$st->assign('meta_url', $meta_url);
$st->assign('meta_title', $setup['meta_title']);
$st->assign('meta_description', $setup['meta_description']);
$st->assign('meta_image', $setup['meta_image']);
$st->assign('decimal', 0 + $setup['decimal']);

$news_category 	= new news_category();
$menu 			= new menu();
$total=0;
$countCart = 0;
if(isset($_SESSION['cart'])){
	$countCart=count($_SESSION['cart']);
	foreach ($_SESSION['cart'] as $key => $value) {
		$total+=$value['total'];
	}

	$st->assign('lCart', $_SESSION['cart']);
} else{
	$st->assign('lCart', []);
}

$st->assign('lMenuHome', $menu->list_menu_header_home());

$st->assign('totalCart', $total);
$st->assign('countCart', $countCart);
if(isset($_SESSION['user'])){
	$st->assign('user',$_SESSION['user']);
}





// $st->assign('lMenuByRoot',$menu->list_menu_by_id_root());

// $test =  $menu->list_menu_header_home();
// print_r($test);


unset($setup);
unset($lang);

$st->display($tpldirect . 'index.tpl');
$db->close();
