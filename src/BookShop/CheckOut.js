import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const Shop = () => {
  const [CartItem, setCartItems] = useState([]); // Assuming you have products data

  const fetchCartItems = () => {
    api
      .post("/contact/getCartProductsByContactId", { contact_id: 469 })
      .then((res) => {
        res.data.data.forEach((element) => {
          element.images = String(element.images).split(",");
        });
        setCartItems(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // useEffect(() => {
  //   api
  //     .get("/product/getProductBookCato")
  //     .then((res) => {
  //       setCategories(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const getTotalPrice = () => {
    return CartItem.reduce((total, item) => total + item.price * item.qty, 0);
  };

  const handleRemoveItem = (item) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (userConfirmed) {
      api
        .post("/contact/deleteCartItem", { basket_id: item.basket_id })
        .then(() => {
          window.confirm("Selected item is deleted");
          window.location.reload();
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  const handleQtyChange = (index, newQuantity) => {
    const newCart = [...CartItem];
    newCart[index].qty = newQuantity;
    setCartItems(newCart);
  };

  const decrementQuantity = (index) => {
    const newQuantity = Math.max(0, CartItem[index].qty - 1);
    handleQtyChange(index, newQuantity);
  };

  const incrementQuantity = (index) => {
    const newQuantity = CartItem[index].qty + 1;
    handleQtyChange(index, newQuantity);
  };

  return (
    <>
    <meta charSet="utf-8" />
    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
    <title>Tnews - News &amp; Magazine HTML Template - Checkout</title>
    <meta name="author" content="Tnews" />
    <meta name="description" content="Tnews - News & Magazine HTML Template" />
    <meta name="keywords" content="Tnews - News & Magazine HTML Template" />
    <meta name="robots" content="INDEX,FOLLOW" />
    {/* Mobile Specific Metas */}
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    {/* Favicons - Place favicon.ico in the root directory */}
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="assets/img/favicons/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="assets/img/favicons/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="assets/img/favicons/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="assets/img/favicons/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="assets/img/favicons/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="assets/img/favicons/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="assets/img/favicons/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="assets/img/favicons/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="assets/img/favicons/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="assets/img/favicons/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="assets/img/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="assets/img/favicons/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="assets/img/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="assets/img/favicons/manifest.json" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="assets/img/favicons/ms-icon-144x144.png"
    />
    <meta name="theme-color" content="#ffffff" />
    {/*==============================
      Google Fonts
    ============================== */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    {/*==============================
        All CSS File
    ============================== */}
    {/* Bootstrap */}
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    {/* Fontawesome Icon */}
    <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
    {/* Magnific Popup */}
    <link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
    {/* Slick Slider */}
    <link rel="stylesheet" href="assets/css/slick.min.css" />
    {/* Theme Custom CSS */}
    <link rel="stylesheet" href="assets/css/style.css" />
    {/*[if lte IE 9]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
      <![endif]*/}
    {/*********************************
         Code Start From Here 
    ******************************** */}
    {/*==============================
       Preloader
    ==============================*/}
    <div className="preloader ">
      <button className="th-btn preloaderCls">Cancel Preloader </button>
      <div className="preloader-inner">
        <span className="loader" />
      </div>
    </div>
    <div className="popup-subscribe-area">
      <div className="container">
        <div className="popup-subscribe">
          <div className="box-img">
            <img src="assets/img/normal/popup_subscribe.jpg" alt="Image" />
          </div>
          <div className="box-content">
            <button className="simple-icon popupClose">
              <i className="fal fa-times" />
            </button>
            <div className="widget newsletter-widget footer-widget">
              <h3 className="widget_title">Subscribe</h3>
              <p className="footer-text">
                Sign up to get update about us. Don't be hasitate your email is
                safe.
              </p>
              <form className="newsletter-form">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Enter Email"
                  required=""
                />
                <button type="submit" className="icon-btn">
                  <i className="fa-solid fa-paper-plane" />
                </button>
              </form>
              <div className="mt-30">
                <input type="checkbox" id="destroyPopup" />
                <label htmlFor="destroyPopup">
                  I don't want to see this popup again.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*==============================
      Sidemenu
  ============================== */}
    <div className="sidemenu-wrapper cart-side-menu d-none d-lg-block ">
      <div className="sidemenu-content">
        <button className="closeButton sideMenuCls">
          <i className="far fa-times" />
        </button>
        <div className="widget woocommerce widget_shopping_cart">
          <h3 className="widget_title">Shopping cart</h3>
          <div className="widget_shopping_cart_content">
            <ul className="woocommerce-mini-cart cart_list product_list_widget ">
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  <i className="far fa-times" />
                </a>
                <a href="#">
                  <img
                    src="assets/img/product/product_thumb_1_1.png"
                    alt="Cart Image"
                  />
                  Car Safety Seat
                </a>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    940.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  <i className="far fa-times" />
                </a>
                <a href="#">
                  <img
                    src="assets/img/product/product_thumb_1_2.png"
                    alt="Cart Image"
                  />
                  Bus Safety Hammer
                </a>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    899.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  <i className="far fa-times" />
                </a>
                <a href="#">
                  <img
                    src="assets/img/product/product_thumb_1_3.png"
                    alt="Cart Image"
                  />
                  Car Steering Wheel
                </a>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    756.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  <i className="far fa-times" />
                </a>
                <a href="#">
                  <img
                    src="assets/img/product/product_thumb_1_4.png"
                    alt="Cart Image"
                  />
                  Transponder Car Key
                </a>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    723.00
                  </span>
                </span>
              </li>
              <li className="woocommerce-mini-cart-item mini_cart_item">
                <a href="#" className="remove remove_from_cart_button">
                  <i className="far fa-times" />
                </a>
                <a href="#">
                  <img
                    src="assets/img/product/product_thumb_1_5.png"
                    alt="Cart Image"
                  />
                  Safety Hand Glove
                </a>
                <span className="quantity">
                  1 ×
                  <span className="woocommerce-Price-amount amount">
                    <span className="woocommerce-Price-currencySymbol">$</span>
                    1080.00
                  </span>
                </span>
              </li>
            </ul>
            <p className="woocommerce-mini-cart__total total">
              <strong>Subtotal:</strong>
              <span className="woocommerce-Price-amount amount">
                <span className="woocommerce-Price-currencySymbol">$</span>4398.00
              </span>
            </p>
            <p className="woocommerce-mini-cart__buttons buttons">
              <a href="cart.html" className="th-btn wc-forward">
                View cart
              </a>
              <a href="checkout.html" className="th-btn checkout wc-forward">
                Checkout
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/*==============================
      Sidemenu
  ============================== */}
    <div className="sidemenu-wrapper sidemenu-1 d-none d-md-block ">
      <div className="sidemenu-content">
        <button className="closeButton sideMenuCls">
          <i className="far fa-times" />
        </button>
        <div className="widget  ">
          <div className="th-widget-about">
            <div className="about-logo">
              <a href="home-newspaper.html">
                <img
                  className="light-img"
                  src="assets/img/logo-footer-black.svg"
                  alt="Tnews"
                />
              </a>
              <a href="home-newspaper.html">
                <img
                  className="dark-img"
                  src="assets/img/logo-footer.svg"
                  alt="Tnews"
                />
              </a>
            </div>
            <p className="about-text">
              Magazines cover a wide subjects, including not limited to fashion,
              lifestyle, health, politics, business, Entertainment, sports,
              science,
            </p>
            <div className="th-social style-black">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://www.twitter.com/">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.linkedin.com/">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://www.whatsapp.com/">
                <i className="fab fa-whatsapp" />
              </a>
            </div>
          </div>
        </div>
        <div className="widget  ">
          <h3 className="widget_title">Recent Posts</h3>
          <div className="recent-post-wrap">
            <div className="recent-post">
              <div className="media-img">
                <a href="blog-details.html">
                  <img
                    src="assets/img/blog/recent-post-1-1.jpg"
                    alt="Blog Image"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="post-title">
                  <a className="hover-line" href="blog-details.html">
                    Fitness: Your journey to Better, stronger you.
                  </a>
                </h4>
                <div className="recent-post-meta">
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    21 June, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="recent-post">
              <div className="media-img">
                <a href="blog-details.html">
                  <img
                    src="assets/img/blog/recent-post-1-2.jpg"
                    alt="Blog Image"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="post-title">
                  <a className="hover-line" href="blog-details.html">
                    Embrace the game Ignite your sporting
                  </a>
                </h4>
                <div className="recent-post-meta">
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    22 June, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="recent-post">
              <div className="media-img">
                <a href="blog-details.html">
                  <img
                    src="assets/img/blog/recent-post-1-3.jpg"
                    alt="Blog Image"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="post-title">
                  <a className="hover-line" href="blog-details.html">
                    Revolutionizing lives Through technology
                  </a>
                </h4>
                <div className="recent-post-meta">
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    23 June, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="recent-post">
              <div className="media-img">
                <a href="blog-details.html">
                  <img
                    src="assets/img/blog/recent-post-1-4.jpg"
                    alt="Blog Image"
                  />
                </a>
              </div>
              <div className="media-body">
                <h4 className="post-title">
                  <a className="hover-line" href="blog-details.html">
                    Enjoy the Virtual Reality embrace the
                  </a>
                </h4>
                <div className="recent-post-meta">
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    25 June, 2023
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget newsletter-widget  ">
          <h3 className="widget_title">Subscribe</h3>
          <p className="footer-text">
            Sign up to get update about us. Don't be hasitate your email is safe.
          </p>
          <form className="newsletter-form">
            <input
              className="form-control"
              type="email"
              placeholder="Enter Email"
              required=""
            />
            <button type="submit" className="icon-btn">
              <i className="fa-solid fa-paper-plane" />
            </button>
          </form>
          <div className="mt-30">
            <input type="checkbox" id="Agree2" />
            <label htmlFor="Agree2">
              I have read and accept the{" "}
              <a href="about.html">Terms &amp; Policy</a>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div className="popup-search-box">
      <button className="searchClose">
        <i className="fal fa-times" />
      </button>
      <form action="#">
        <input type="text" placeholder="What are you looking for?" />
        <button type="submit">
          <i className="fal fa-search" />
        </button>
      </form>
    </div>
    {/*==============================
      Mobile Menu
    ============================== */}
    <div className="th-menu-wrapper">
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle">
          <i className="fal fa-times" />
        </button>
        <div className="mobile-logo">
          <a href="home-newspaper.html">
            <img src="assets/img/logo.svg" alt="Tnews" />
          </a>
        </div>
        <div className="th-mobile-menu">
          <ul>
            <li className="menu-item-has-children">
              <a href="home-newspaper.html">Home</a>
              <ul className="sub-menu">
                <li>
                  <a href="home-newspaper.html">Home Newspaper</a>
                </li>
                <li>
                  <a href="home-magazine.html">Home Magazine</a>
                </li>
                <li>
                  <a href="home-sports.html">Home Sports</a>
                </li>
                <li>
                  <a href="home-movie.html">Home Movie</a>
                </li>
                <li>
                  <a href="home-gadget.html">Home Gadget</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Category</a>
              <ul className="sub-menu">
                <li>
                  <a href="category.html">Category</a>
                </li>
                <li>
                  <a href="blog-three-column.html">Three Column</a>
                </li>
                <li>
                  <a href="blog-three-column-sidebar.html">
                    Three Column Sidebar
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li className="menu-item-has-children">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="shop-details.html">Shop Details</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart Page</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="team.html">Team</a>
                </li>
                <li>
                  <a href="author.html">Author</a>
                </li>
                <li>
                  <a href="error.html">Error Page</a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Blog</a>
              <ul className="sub-menu">
                <li>
                  <a href="blog.html">Blog Standard</a>
                </li>
                <li>
                  <a href="blog-masonary.html">Blog Masonary</a>
                </li>
                <li>
                  <a href="blog-list.html">Blog List</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
                <li>
                  <a href="blog-details-video.html">Blog Details Video</a>
                </li>
                <li>
                  <a href="blog-details-audio.html">Blog Details Audio</a>
                </li>
                <li>
                  <a href="blog-details-nosidebar.html">Blog Details Nosidebar</a>
                </li>
                <li>
                  <a href="blog-details-full-img.html">Blog Details Full Image</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/*==============================
    Header Area
  ==============================*/}
    <header className="th-header header-layout1">
      <div className="header-top">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
            <div className="col-auto d-none d-lg-block">
              <div className="header-links">
                <ul>
                  <li>
                    <i className="fal fa-calendar-days" />
                    <a href="blog.html">20 August, 2023</a>
                  </li>
                  <li>
                    <a href="about.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about.html">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="theme-toggler" href="#">
                      <span className="dark">
                        <i className="fas fa-moon" />
                        Dark Mode
                      </span>
                      <span className="light">
                        <i className="fas fa-sun-bright" />
                        Light Mode
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-links">
                <ul>
                  <li className="d-none d-sm-inline-block">
                    <i className="far fa-user" />
                    <a href="blog.html">Login / register</a>
                  </li>
                  <li>
                    <div className="social-links">
                      <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://www.youtube.com/">
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="row justify-content-center justify-content-lg-between align-items-center">
            <div className="col-auto d-none d-lg-block">
              <div className="col-auto">
                <div className="header-logo">
                  <a href="home-newspaper.html">
                    <img
                      className="light-img"
                      src="assets/img/logo.svg"
                      alt="Tnews"
                    />
                  </a>
                  <a href="home-newspaper.html">
                    <img
                      className="dark-img"
                      src="assets/img/logo-white.svg"
                      alt="Tnews"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 text-end">
              <div className="header-ads">
                <a href="https://themeforest.net/user/themeholy/portfolio">
                  <img
                    className="light-img"
                    src="assets/img/ads/ads_banner_1.jpg"
                    alt="ads"
                  />
                  <img
                    className="dark-img"
                    src="assets/img/ads/ads_banner_1_dark.jpg"
                    alt="ads"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky-wrapper">
        {/* Main Menu Area */}
        <div className="menu-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto d-lg-none d-block">
                <div className="header-logo">
                  <a href="home-newspaper.html">
                    <img src="assets/img/logo-white.svg" alt="Tnews" />
                  </a>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li className="menu-item-has-children">
                      <a href="home-newspaper.html">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="home-newspaper.html">Home Newspaper</a>
                        </li>
                        <li>
                          <a href="home-magazine.html">Home Magazine</a>
                        </li>
                        <li>
                          <a href="home-sports.html">Home Sports</a>
                        </li>
                        <li>
                          <a href="home-movie.html">Home Movie</a>
                        </li>
                        <li>
                          <a href="home-gadget.html">Home Gadget</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Category</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="category.html">Category</a>
                        </li>
                        <li>
                          <a href="blog-three-column.html">Three Column</a>
                        </li>
                        <li>
                          <a href="blog-three-column-sidebar.html">
                            Three Column Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li className="menu-item-has-children">
                          <a href="#">Shop</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                            <li>
                              <a href="cart.html">Cart Page</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="author.html">Author</a>
                        </li>
                        <li>
                          <a href="error.html">Error Page</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="blog-masonary.html">Blog Masonary</a>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                        <li>
                          <a href="blog-details-video.html">Blog Details Video</a>
                        </li>
                        <li>
                          <a href="blog-details-audio.html">Blog Details Audio</a>
                        </li>
                        <li>
                          <a href="blog-details-nosidebar.html">
                            Blog Details Nosidebar
                          </a>
                        </li>
                        <li>
                          <a href="blog-details-full-img.html">
                            Blog Details Full Image
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-auto">
                <div className="header-button">
                  <button type="button" className="simple-icon searchBoxToggler">
                    <i className="far fa-search" />
                  </button>
                  <button
                    type="button"
                    className="simple-icon d-none d-lg-block cartToggler"
                  >
                    <i className="far fa-cart-shopping" />
                    <span className="badge">5</span>
                  </button>
                  <a
                    href="#"
                    className="icon-btn sideMenuToggler d-none d-lg-block"
                  >
                    <i className="far fa-bars" />
                  </a>
                  <button
                    type="button"
                    className="th-menu-toggle d-block d-lg-none"
                  >
                    <i className="far fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/*==============================
      Breadcumb
  ============================== */}
    <div className="breadcumb-wrapper">
      <div className="container">
        <ul className="breadcumb-menu">
          <li>
            <a href="home-newspaper.html">Home</a>
          </li>
          <li>Checkout</li>
        </ul>
      </div>
    </div>
    {/*==============================
  Checkout Arae
  ==============================*/}
    <div className="th-checkout-wrapper space-top space-extra-bottom">
      <div className="container">
        <div className="woocommerce-form-login-toggle">
          <div className="woocommerce-info">
            Returning customer?{" "}
            <a href="#" className="showlogin">
              Click here to login
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form action="#" className="woocommerce-form-login">
              <div className="form-group">
                <label>Username or email *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username or email"
                />
              </div>
              <div className="form-group">
                <label>Password *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <div className="custom-checkbox">
                  <input type="checkbox" id="remembermylogin" />
                  <label htmlFor="remembermylogin">Remember Me</label>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="th-btn">
                  Login
                </button>
                <p className="mt-3 mb-0">
                  <a className="text-reset" href="#">
                    Lost your password?
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="woocommerce-form-coupon-toggle">
          <div className="woocommerce-info">
            Have a coupon?{" "}
            <a href="#" className="showcoupon">
              Click here to enter your code
            </a>{" "}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form action="#" className="woocommerce-form-coupon">
              <div className="form-group">
                <label>Coupon code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write your coupon code"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="th-btn">
                  Apply coupon
                </button>
              </div>
            </form>
          </div>
        </div>
        <form action="#" className="woocommerce-checkout mt-40">
          <div className="row ">
            <div className="col-lg-6">
              <h2 className="h4">Billing Details</h2>
              <div className="row">
                <div className="col-12 form-group">
                  <select className="form-select">
                    <option>United Kingdom (UK)</option>
                    <option>United State (US)</option>
                    <option>Equatorial Guinea (GQ)</option>
                    <option>Australia (AU)</option>
                    <option>Germany (DE)</option>
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Company Name"
                  />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Street Address"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Town / City"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postcode / Zip"
                  />
                </div>
                <div className="col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                  />
                </div>
                <div className="col-12 form-group">
                  <input type="checkbox" id="accountNewCreate" />
                  <label htmlFor="accountNewCreate">Create An Account?</label>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p id="ship-to-different-address">
                <input
                  id="ship-to-different-address-checkbox"
                  type="checkbox"
                  name="ship_to_different_address"
                  defaultValue={1}
                  defaultChecked=""
                />
                <label htmlFor="ship-to-different-address-checkbox">
                  Ship to a different address?
                  <span className="checkmark" />
                </label>
              </p>
              <div className="shipping_address">
                <div className="row">
                  <div className="col-12 form-group">
                    <select className="form-select">
                      <option>United Kingdom (UK)</option>
                      <option>United State (US)</option>
                      <option>Equatorial Guinea (GQ)</option>
                      <option>Australia (AU)</option>
                      <option>Germany (DE)</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Company Name"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street Address"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, suite, unit etc. (optional)"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Town / City"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Postcode / Zip"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 form-group">
                <textarea
                  cols={20}
                  rows={5}
                  className="form-control"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </form>
        <h4 className="mt-4 pt-lg-2">Your Order</h4>
        <form action="#" className="woocommerce-cart-form">
          <table className="cart_table mb-20">
            <thead>
              <tr>
                <th className="cart-col-image">Image</th>
                <th className="cart-col-productname">Product Name</th>
                <th className="cart-col-price">Price</th>
                <th className="cart-col-quantity">Quantity</th>
                <th className="cart-col-total">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cart_item">
                <td data-title="Product">
                  <a className="cart-productimage" href="shop-details.html">
                    <img
                      width={91}
                      height={91}
                      src="assets/img/product/product_thumb_1_1.png"
                      alt="Image"
                    />
                  </a>
                </td>
                <td data-title="Name">
                  <a className="cart-productname" href="shop-details.html">
                    Car Safety Seat
                  </a>
                </td>
                <td data-title="Price">
                  <span className="amount">
                    <bdi>
                      <span>$</span>18
                    </bdi>
                  </span>
                </td>
                <td data-title="Quantity">
                  <strong className="product-quantity">01</strong>
                </td>
                <td data-title="Total">
                  <span className="amount">
                    <bdi>
                      <span>$</span>18
                    </bdi>
                  </span>
                </td>
              </tr>
            </tbody>
            <tfoot className="checkout-ordertable">
              <tr className="cart-subtotal">
                <th>Subtotal</th>
                <td data-title="Subtotal" colSpan={4}>
                  <span className="woocommerce-Price-amount amount">
                    <bdi>
                      <span className="woocommerce-Price-currencySymbol">$</span>
                      281.05
                    </bdi>
                  </span>
                </td>
              </tr>
              <tr className="woocommerce-shipping-totals shipping">
                <th>Shipping</th>
                <td data-title="Shipping" colSpan={4}>
                  {" "}
                  Enter your address to view shipping options.
                </td>
              </tr>
              <tr className="order-total">
                <th>Total</th>
                <td data-title="Total" colSpan={4}>
                  <strong>
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        281.05
                      </bdi>
                    </span>
                  </strong>
                </td>
              </tr>
            </tfoot>
          </table>
        </form>
        <div className="mt-lg-3 mb-30">
          <div className="woocommerce-checkout-payment">
            <ul className="wc_payment_methods payment_methods methods">
              <li className="wc_payment_method payment_method_bacs">
                <input
                  id="payment_method_bacs"
                  type="radio"
                  className="input-radio"
                  name="payment_method"
                  defaultValue="bacs"
                  defaultChecked="checked"
                />
                <label htmlFor="payment_method_bacs">Direct bank transfer</label>
                <div className="payment_box payment_method_bacs">
                  <p>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not be
                    shipped until the funds have cleared in our account.
                  </p>
                </div>
              </li>
              <li className="wc_payment_method payment_method_cheque">
                <input
                  id="payment_method_cheque"
                  type="radio"
                  className="input-radio"
                  name="payment_method"
                  defaultValue="cheque"
                />
                <label htmlFor="payment_method_cheque">Cheque Payment</label>
                <div className="payment_box payment_method_cheque">
                  <p>
                    Please send a check to Store Name, Store Street, Store Town,
                    Store State / County, Store Postcode.
                  </p>
                </div>
              </li>
              <li className="wc_payment_method payment_method_cod">
                <input
                  id="payment_method_cod"
                  type="radio"
                  className="input-radio"
                  name="payment_method"
                />
                <label htmlFor="payment_method_cod">Credit Cart</label>
                <div className="payment_box payment_method_cod">
                  <p>Pay with cash upon delivery.</p>
                </div>
              </li>
              <li className="wc_payment_method payment_method_paypal">
                <input
                  id="payment_method_paypal"
                  type="radio"
                  className="input-radio"
                  name="payment_method"
                  defaultValue="paypal"
                />
                <label htmlFor="payment_method_paypal">Paypal</label>
                <div className="payment_box payment_method_paypal">
                  <p>
                    Pay via PayPal; you can pay with your credit card if you don’t
                    have a PayPal account.
                  </p>
                </div>
              </li>
            </ul>
            <div className="form-row place-order">
              <button type="submit" className="th-btn">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*==============================
    Footer Area
  ==============================*/}
    <footer
      className="footer-wrapper footer-layout1"
      data-bg-src="assets/img/bg/footer_bg_1.png"
    >
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="home-newspaper.html">
                      <img src="assets/img/logo-footer.svg" alt="Tnews" />
                    </a>
                  </div>
                  <p className="about-text">
                    Magazines cover a wide subjects, including not limited to
                    fashion, lifestyle, health, politics, business, Entertainment,
                    sports, science,
                  </p>
                  <div className="th-social style-black">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Categories</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="blog.html">Political</a>
                    </li>
                    <li>
                      <a href="blog.html">Business</a>
                    </li>
                    <li>
                      <a href="blog.html">Health</a>
                    </li>
                    <li>
                      <a href="blog.html">Technology</a>
                    </li>
                    <li>
                      <a href="blog.html">Sports</a>
                    </li>
                    <li>
                      <a href="blog.html">Entertainment</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Recent Posts</h3>
                <div className="recent-post-wrap">
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/recent-post-2-1.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="hover-line" href="blog-details.html">
                          Equality and justice for Every citizen
                        </a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          21 June, 2023
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="media-img">
                      <a href="blog-details.html">
                        <img
                          src="assets/img/blog/recent-post-2-2.jpg"
                          alt="Blog Image"
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="post-title">
                        <a className="hover-line" href="blog-details.html">
                          Key eyes on the latest update of technology
                        </a>
                      </h4>
                      <div className="recent-post-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          22 June, 2023
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget widget_tag_cloud footer-widget">
                <h3 className="widget_title">Popular Tags</h3>
                <div className="tagcloud">
                  <a href="blog.html">Sports</a>
                  <a href="blog.html">Politics</a>
                  <a href="blog.html">Business</a>
                  <a href="blog.html">Music</a>
                  <a href="blog.html">Food</a>
                  <a href="blog.html">Technology</a>
                  <a href="blog.html">Travels</a>
                  <a href="blog.html">Health</a>
                  <a href="blog.html">Fashions</a>
                  <a href="blog.html">Animal</a>
                  <a href="blog.html">Weather</a>
                  <a href="blog.html">Movies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row jusity-content-between align-items-center">
            <div className="col-lg-5">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright" /> 2023{" "}
                <a href="home-newspaper.html">Tnews</a>. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-auto ms-auto d-none d-lg-block">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="home-newspaper.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="about.html">Faq</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/*********************************
        Code End  Here 
    ******************************** */}
    {/* Scroll To Top */}
    <div className="scroll-top">
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "stroke-dashoffset 10ms linear 0s",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: "307.919"
          }}
        />
      </svg>
    </div>
    {/*==============================
      All Js File
  ============================== */}
    {/* Jquery */}
    {/* Slick Slider */}
    {/* Bootstrap */}
    {/* Magnific Popup */}
    {/* Counter Up */}
    {/* Range Slider */}
    {/* Isotope Filter */}
    {/* Vimeo Player */}
    {/* Main Js File */}
  </>
  
  );
};

export default Shop;
