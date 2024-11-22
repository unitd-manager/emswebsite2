import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import logoFooter from "../assets/img/logo-footer.svg";
import logoFooterBlack from "../assets/img/logo-footer-black.svg";
import logwhite from "../assets/img/logo Ems.png";
import logosvg from "../assets/img/logo.svg";
import emsbanner from "../assets/img/EmsBanner.jpg";

import api from "../constants/api";
import "../assets/css/event.css";



const Home = () => {


    const currentDate = new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    
  const [marquee, setMarquee] = useState([]);
  const getMarquee = () => {
    api
      .get("/setting/getSettingsForQuizInfoText")
      .then((res) => {
        setMarquee(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const marqueeValue = marquee && marquee[0]?.value;

  useEffect(() => {
    getMarquee();
  }, []);

  return (
    <>
      <div className="sidemenu-wrapper sidemenu-1 d-none d-md-block ">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times" />
          </button>
          <div className="widget">
            <div className="th-widget-about">
              <div className="about-logo">
                <a href="home-newspaper.html">
                  <img
                    className="light-img"
                    src={logoFooterBlack}
                    alt="Ems Media"
                  />
                </a>
                <a href="home-newspaper.html">
                  <img className="dark-img" src={logoFooter} alt="Ems Media" />
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
          <div className="widget">
            <h3 className="widget_title">Recent Posts</h3>
            <div className="recent-post-wrap">
              <div className="recent-post">
                <div className="media-img">
                  <a href="blog-details.html">
                    <img src={emsbanner} alt="Blog Image" />
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
          <div className="widget newsletter-widget">
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
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
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
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
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
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
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
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
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
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      1080.00
                    </span>
                  </span>
                </li>
              </ul>
              <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  4398.00
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
              <img src={logosvg} alt="Ems Media" />
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
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="switcher-fixed">
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
      {/*==============================
	Header Area
==============================*/}

      <header className="th-header header-layout5 dark-theme">
        <div className="sticky-wrapper">
          <div className="container">
            <div className="row gx-0">
              <div className="col-lg-2 d-none d-lg-inline-block">
                <div className="header-logo">
                  <Link to =''>
                    <img src={logwhite} alt="Ems Media" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="header-top">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="news-area">
                        <div className="title">Ems News :</div>
                        <div className="news-wrap">
                          <Marquee
                            speed={50}
                            gradient={false}
                            pauseOnHover
                            className="slick-marquee"
                          >
                            <div className="col-auto">
                              <a
                                href="blog-details.html"
                                className="breaking-news"
                              >
                                {marqueeValue}
                              </a>
                            </div>
                            <div className="col-auto">
                              <a
                                href="blog-details.html"
                                className="breaking-news"
                              >
                                {marqueeValue}
                              </a>
                            </div>
                          </Marquee>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 text-end d-none d-xl-block">
                      <div className="social-links">
                        <span className="social-title">Follow Us :</span>
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
                    </div>
                  </div>
                </div>
                {/* Main Menu Area */}
                <div className="menu-area m">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-auto d-none d-xl-block">
                      <div className="toggle-icon">
                        <a href="#" className="simple-icon sideMenuToggler">
                          <i className="far fa-bars" />
                        </a>
                      </div>
                    </div>
                    <div className="col-auto d-lg-none d-block">
                      <div className="header-logo">
                        <a href="home-newspaper.html">
                          <img
                            className="light-img"
                            src={logosvg}
                            alt="Ems Media"
                          />
                        </a>
                        <a href="home-newspaper.html">
                          <img
                            className="dark-img"
                            src={logwhite}
                            alt="Ems Media"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-auto">
                      <nav className="main-menu d-none d-lg-inline-block">
                        <ul>
                          <li>
                            <Link to="/">எங்களைப் பற்றி</Link>
                          </li>
                          
                          <li className="menu-item-has-children">
                            <a href="#">வஹ்தத்துல் வுஜூத்</a>
                            {/* <ul className="sub-menu">
                              <li>
                                <a href="category.html">Category</a>
                              </li>
                              <li>
                                <a href="blog-three-column.html">
                                  Three Column
                                </a>
                              </li>
                              <li>
                                <a href="blog-three-column-sidebar.html">
                                  Three Column Sidebar
                                </a>
                              </li>
                            </ul> */}
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">ஞான அகமியங்கள்</a>
                            {/* <ul className="sub-menu">
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
                            </ul> */}
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">நூற்கள்</a>
                            {/* <ul className="sub-menu">
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
                                <a href="blog-details-video.html">
                                  Blog Details Video
                                </a>
                              </li>
                              <li>
                                <a href="blog-details-audio.html">
                                  Blog Details Audio
                                </a>
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
                            </ul> */}
                          </li>
                          <li>
                            <Link to="/contact">கல்வி</Link>
                          </li>
                          <li>
                            <a href="about.html">மனிதா</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="col-auto">
                      <div className="header-button">
                        <button
                          type="button"
                          className="simple-icon searchBoxToggler"
                        >
                          <i className="far fa-search" />
                        </button>
                        <button
                          type="button"
                          className="simple-icon d-none d-lg-block cartToggler"
                        >
                          <i className="far fa-cart-shopping" />
                          <span className="badge">5</span>
                        </button>
                        {/* <a href="/contact" className="th-btn style3">
                      Contact Us
                    </a> */}
                        <Link to="/contact" className="th-btn style3">
                          Contact Us
                        </Link>
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
          </div>
        </div>
        <div className="container">
        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
          <div className="col-auto d-none d-lg-block">
            <div className="header-links">
              <ul>
                <li>
                  <i className="fal fa-calendar-days" />
                  <a href="blog.html">{currentDate}</a>
                </li>
              </ul>
            </div>
          </div>
         
          <div className="col-auto">
            <div className="header-links">
              <ul>
                <li className="d-none d-sm-inline-block">
                  <i className="far fa-user" />
                  <a href="/">Login / register</a>
                </li>
                <li>
                  <i className="far fa-envelope" />
                  <a href="/">info@emsmedia.net</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Home;
