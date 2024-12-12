import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../common/user";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const FromBookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = () => {
      //var formated = title.split("-").join(" ");

      api
        .post("/content/getBooks", { category_id: 79 })
        .then((res) => {
          setBooks(res.data.data);
        })
        .catch(() => {});
    };

    getBooks();
  }, []);

  return (
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Tnews - News &amp; Magazine HTML Template - Home Sports</title>
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
  <header className="th-header header-layout3">
    <div className="header-top dark-theme">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-9">
            <div className="news-area">
              <div className="title">Breaking News :</div>
              <div className="news-wrap">
                <div className="row slick-marquee">
                  <div className="col-auto">
                    <a href="blog-details.html" className="breaking-news">
                      Relaxation redefined, your beach resort sanctuary.
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="blog-details.html" className="breaking-news">
                      From health to fashion, lifestyle news curated.
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="blog-details.html" className="breaking-news">
                      Sun, sand, and luxury at our resort
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="blog-details.html" className="breaking-news">
                      Relaxation redefined, your beach resort sanctuary.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 text-end d-none d-xl-block">
            <div className="header-links">
              <ul>
                <li className="d-none d-sm-inline-block">
                  <i className="far fa-user" />
                  <a href="blog.html">Login</a>
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
        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
          <div className="col-auto d-none d-lg-inline-block">
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
          <div className="col text-end d-none d-md-block">
            <div className="header-ads">
              <a href="https://themeforest.net/user/themeholy/portfolio">
                <img src="assets/img/ads/ads_banner_2.jpg" alt="ads" />
              </a>
            </div>
          </div>
          <div className="col-auto text-center text-md-end ms-xl-3">
            <div className="header-icon">
              <div className="theme-switcher">
                <button>
                  <span className="dark">
                    <i className="fas fa-moon" />
                  </span>
                  <span className="light">
                    <i className="fas fa-sun-bright" />
                  </span>
                </button>
              </div>
            </div>
            <div className="header-links">
              <ul>
                <li>
                  <i className="fal fa-calendar-days" />
                  <a href="blog.html">Monday 20 August, 2023</a>
                </li>
              </ul>
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
  <div className="space-bottom">
    <div className="container-full-1">
      <div
        className="row th-carousel slider-shadow"
        data-slide-show={3}
        data-ml-slide-show={2}
        data-lg-slide-show={2}
        data-md-slide-show={1}
        data-sm-slide-show={1}
      >
        <div className="col-md-6 col-xxl-4">
          <div className="blog-style9">
            <div className="blog-img">
              <img src="assets/img/blog/blog_10_1.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Boxing
              </a>
              <h3 className="box-title-24">
                <a className="hover-line" href="blog-details.html">
                  Boxing: Strength skill triumph Find your greatness.
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  15 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-4">
          <div className="blog-style9">
            <div className="blog-img">
              <img src="assets/img/blog/blog_10_2.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Paragliding
              </a>
              <h3 className="box-title-24">
                <a className="hover-line" href="blog-details.html">
                  Find your wings, chase the horizon, and heights with
                  paragliding.
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  11 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-4">
          <div className="blog-style9">
            <div className="blog-img">
              <img src="assets/img/blog/blog_10_3.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Sports
              </a>
              <h3 className="box-title-24">
                <a className="hover-line" href="blog-details.html">
                  Bound by the Love of the Game: Tales from the Sports Arena
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  21 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-4">
          <div className="blog-style9">
            <div className="blog-img">
              <img src="assets/img/blog/blog_10_4.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Busketball
              </a>
              <h3 className="box-title-24">
                <a className="hover-line" href="blog-details.html">
                  Basketball Bliss Stories from the Hardwood Court Block Area
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  16 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Blog Area  
==============================*/}
  <section className="">
    <div className="container">
      <div className="row">
        <div className="col-xl-9">
          <h2 className="sec-title has-line">Today Post</h2>
          <div className="row gy-4">
            <div className="col-xl-8">
              <div className="">
                <div className="blog-style1 style-big">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_2_4.jpg" alt="blog image" />
                  </div>
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Mountain Sky
                  </a>
                  <h3 className="box-title-30">
                    <a className="hover-line" href="blog-details.html">
                      Mountain Majesty: Where Fashion Trends and Confidence
                      Soar!
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      25 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row gy-4">
                <div className="col-xl-12 col-sm-6 border-blog">
                  <div className="blog-style1">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_21.jpg"
                        alt="blog image"
                      />
                      <a
                        data-theme-color="#4E4BD0"
                        href="blog.html"
                        className="category"
                      >
                        Tennis
                      </a>
                    </div>
                    <h3 className="box-title-22">
                      <a className="hover-line" href="blog-details.html">
                        Leadership for the people by the people
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="author.html">
                        <i className="far fa-user" />
                        By - Tnews
                      </a>
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        17 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-sm-6 border-blog">
                  <div className="blog-style1">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_22.jpg"
                        alt="blog image"
                      />
                      <a
                        data-theme-color="#4E4BD0"
                        href="blog.html"
                        className="category"
                      >
                        Kayaking
                      </a>
                    </div>
                    <h3 className="box-title-22">
                      <a className="hover-line" href="blog-details.html">
                        Find serenity, glide with grace kayak your way.
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="author.html">
                        <i className="far fa-user" />
                        By - Tnews
                      </a>
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        15 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <a href="https://themeforest.net/user/themeholy/portfolio">
              <img src="assets/img/ads/ads_2.jpg" alt="ads" className="w-100" />
            </a>
          </div>
        </div>
        <div className="col-xl-3 mt-35 mt-xl-0">
          <h2 className="sec-title has-line">Popular</h2>
          <div className="dark-theme img-overlay2">
            <div className="blog-style3">
              <div className="blog-img">
                <img src="assets/img/blog/blog_5_2_7.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <a
                  data-theme-color="#4E4BD0"
                  href="blog.html"
                  className="category"
                >
                  Skating
                </a>
                <h3 className="box-title-18">
                  <a className="hover-line" href="blog-details.html">
                    Glide in where skating and fashion converge!
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    10 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-overflow">
            <div className="row gy-4">
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Push boundaries, rewrite the rules of sports
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      15 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Boxing: Test your mettle, triumph with courage.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      14 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Feel the rush, embrace The intensity of hockey.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      30 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Feel the exhilaration, Make memories on skis
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      19 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Push boundaries, rewrite the rules of sports
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      18 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Boxing: Test your mettle, triumph with courage.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      23 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Feel the rush, embrace The intensity of hockey.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      23 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Feel the exhilaration, Make memories on skis
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      28 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="space">
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <h2 className="sec-title has-line">Trending news</h2>
        </div>
        <div className="col-auto">
          <div className="sec-btn">
            <div className="icon-box">
              <button
                data-slick-prev="#blog-slide5"
                className="slick-arrow default"
              >
                <i className="far fa-arrow-left" />
              </button>
              <button
                data-slick-next="#blog-slide5"
                className="slick-arrow default"
              >
                <i className="far fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row th-carousel"
        id="blog-slide5"
        data-slide-show={3}
        data-lg-slide-show={2}
        data-md-slide-show={2}
        data-sm-slide-show={1}
      >
        <div className="col-sm-6 col-xl-4">
          <div className="blog-style6">
            <div className="blog-img">
              <img src="assets/img/blog/blog_7_1.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Hocky
              </a>
              <h3 className="box-title-22">
                <a className="hover-line" href="blog-details.html">
                  Feel the rush, embrace the intensity of hockey.
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  25 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="blog-style6">
            <div className="blog-img">
              <img src="assets/img/blog/blog_7_2.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Bike Racing
              </a>
              <h3 className="box-title-22">
                <a className="hover-line" href="blog-details.html">
                  Bike Where speed, freedom, &amp; connection intertwine.
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  20 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="blog-style6">
            <div className="blog-img">
              <img src="assets/img/blog/blog_7_3.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Car Racing
              </a>
              <h3 className="box-title-22">
                <a className="hover-line" href="blog-details.html">
                  Relaxation redefined, your beach resort sanctuary
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  16 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="blog-style6">
            <div className="blog-img">
              <img src="assets/img/blog/blog_7_4.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Handball
              </a>
              <h3 className="box-title-22">
                <a className="hover-line" href="blog-details.html">
                  Handball uniting skill and passion in the game
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  25 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Blog Area  
==============================*/}
  <section className="">
    <div className="container container-full">
      <div className="row gy-4">
        <div className="col-xxl-6">
          <div className="row gy-4">
            <div className="col-md-6 dark-theme img-overlay2">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_2_8.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Skating
                  </a>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Fashion-forward Where Trends &amp; confidence
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      26 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 dark-theme img-overlay2">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_2_9.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Volleyball
                  </a>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Embrace the bump, spike victory volleyball style.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      27 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 dark-theme img-overlay2">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_2_10.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Mountain Ski
                  </a>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Carve your path, conquer the snowy slopes.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      23 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 dark-theme img-overlay2">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_2_11.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Swimming
                  </a>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Tread water, aim high, play with water polo pride
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      15 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="dark-theme img-overlay2">
            <div className="blog-style3">
              <div className="blog-img">
                <img src="assets/img/blog/blog_5_9.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <a
                  data-theme-color="#4E4BD0"
                  href="blog.html"
                  className="category"
                >
                  Handball
                </a>
                <h3 className="box-title-30">
                  <a className="hover-line" href="blog-details.html">
                    The art of teamwork, precision, and victory, where Champions
                    emerge.
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    21 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
Blog Area  
==============================*/}
  <section className="space">
    <div className="container">
      <div className="row">
        <div className="col-xl-9">
          <h2 className="sec-title has-line">Popular News</h2>
          <div className="row gy-4">
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_23.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Volleyball
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    From serve to block, embrace volleyballs energy.
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    17 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_24.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Hockey
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    Power your way to victory, dominate hockey game.
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    28 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_25.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Swimming
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    Make a splash, play with heart win water polo.
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    21 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_26.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Boxing
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    Boxing Strength skill triumph find your greatness.
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    22 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_27.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Football
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    Where dreams take flight goals rewrite history
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    28 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_28.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Basketball
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    Basketball is the canvas for your journey.
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    26 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-top">
            <div className="dark-theme img-overlay2">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_10.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Hockey
                  </a>
                  <h3 className="box-title-30">
                    <a className="hover-line" href="blog-details.html">
                      In the pool or open sea, swim your way to victory, and
                      Conquer the waves.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      30 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-top">
            <h2 className="sec-title has-line">Featured News</h2>
            <div className="row gy-4">
              <div className="col-sm-6 border-blog two-column">
                <div className="blog-style1">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_4_15.jpg" alt="blog image" />
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Swimming
                    </a>
                  </div>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Where boundaries dissolve, and Dreams dive into reality.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      29 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 border-blog two-column">
                <div className="blog-style1">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_4_16.jpg" alt="blog image" />
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Paragliding
                    </a>
                  </div>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Leadership for the people by the adventure people
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      29 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 border-blog two-column">
                <div className="blog-style1">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_4_17.jpg" alt="blog image" />
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Mountain Sky
                    </a>
                  </div>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Mountain skating conquer the peaks, carve your path,
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      16 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 border-blog two-column">
                <div className="blog-style1">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_4_18.jpg" alt="blog image" />
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Handball
                    </a>
                  </div>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Handball uniting skill and passion in the game
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      17 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 mt-35 mt-xl-0 sidebar-wrap mb-10">
          <div className="sidebar-area">
            <div className="widget">
              <div className="widget-ads">
                <a href="https://themeforest.net/user/themeholy/portfolio">
                  <img
                    className="w-100"
                    src="assets/img/ads/siderbar_ads_2.jpg"
                    alt="ads"
                  />
                </a>
              </div>
            </div>
            <h2 className="sec-title fs-20 has-line">Popular Category</h2>
            <div className="widget">
              <div className="row g-10">
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_1.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_1.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Football</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_2.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_2.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Cricket</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_3.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_3.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Boxing</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_4.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_4.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Handball</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_5.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_5.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Swimming</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_6.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_6.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Volleyball</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_7.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_7.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Tennis</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_8.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_8.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Running</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="sec-title fs-20 has-line">Most Read</h2>
            <div className="row gy-4">
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_3_1.jpg" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a
                      data-theme-color="#FF9500"
                      href="blog.html"
                      className="category"
                    >
                      Politics
                    </a>
                    <h3 className="box-title-18">
                      <a className="hover-line" href="blog-details.html">
                        Stay informed, Navigate the world
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        30 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_3_2.jpg" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a
                      data-theme-color="#007BFF"
                      href="blog.html"
                      className="category"
                    >
                      Travel
                    </a>
                    <h3 className="box-title-18">
                      <a className="hover-line" href="blog-details.html">
                        Your beach resort Sanctuary.
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        28 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_3_3.jpg" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a
                      data-theme-color="#00D084"
                      href="blog.html"
                      className="category"
                    >
                      Life Style
                    </a>
                    <h3 className="box-title-18">
                      <a className="hover-line" href="blog-details.html">
                        Style your life news For modern living
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        17 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_3_4.jpg" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Sports
                    </a>
                    <h3 className="box-title-18">
                      <a className="hover-line" href="blog-details.html">
                        Score big with the Latest sports news.
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        10 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
	Footer Area
==============================*/}
  <footer
    className="footer-wrapper footer-layout3"
    data-bg-src="assets/img/bg/footer_bg_2.png"
  >
    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-xl-3">
            <div className="widget footer-widget">
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
                <input type="checkbox" id="Agree" />
                <label htmlFor="Agree">
                  I have read and accept the{" "}
                  <a href="about.html">Terms &amp; Policy</a>
                </label>
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
          <div className="col-lg-auto ms-auto d-none d-lg-block"></div>
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

export default FromBookList;
