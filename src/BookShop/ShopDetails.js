import React, { useState, useEffect } from "react";
import api from "../constants/api";

import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const Shop = () => {
  const [categories, setCategories] = useState([]); // Categories fetched from API
  const [products, setProducts] = useState([]); // Assuming you have products data
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initial category
  const [searchQuery, setSearchQuery] = useState("");

  console.log("products", products);

  useEffect(() => {
    api
      .get("/product/getProductBookList")
      .then((res) => {
        res.data.data.forEach((element) => {
          element.tag = String(element.tag).split(",");
        });
        setProducts(res.data.data);
      })
      .catch(() => {
        console.log("error");
      });
    // }
  }, []);

  useEffect(() => {
    api
      .get("/product/getProductBookCato")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const applyFilters = () => {
    let filteredData = [...products];

    // Apply category filter
    if (selectedCategory !== "All") {
      filteredData = filteredData.filter(
        (item) => item.category_title === selectedCategory
      );
    }

    // Apply search filter
    if (searchQuery !== "") {
      filteredData = filteredData.filter(
        (item) =>
          (item.title &&
            item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.author_name &&
            item.author_name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filteredData;
  };

  const filteredGallery = applyFilters();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };
  const handleClearCategory = () => {
    setSelectedCategory("All");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(filteredGallery.length / itemsPerPage);

  // Get current page products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredGallery.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>

  <div id="QuickView" className="quick-view mfp-hide">
    <div className="container">
      <div className="row gx-60">
        <div className="col-lg-6">
          <div className="product-big-img">
            <div className="img">
              <img
                src="assets/img/product/product_details_1_1.png"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="product-about">
            <p className="price">
              $532.85<del>$502.99</del>
            </p>
            <h2 className="product-title">Smartwatch Series 3</h2>
            <div className="product-rating">
              <div
                className="star-rating"
                role="img"
                aria-label="Rated 5.00 out of 5"
              >
                <span style={{ width: "100%" }}>
                  Rated <strong className="rating">5.00</strong> out of 5 based
                  on <span className="rating">1</span> customer rating
                </span>
              </div>
              <a href="shop-details.html" className="woocommerce-review-link">
                (<span className="count">4</span> customer reviews)
              </a>
            </div>
            <p className="text">
              Embrace tech and style with the Smartwatch Series 3, your daily
              companion. Stay connected, track fitness, and make a statement
              effortlessly elevate your game today.Experience convenience at
              your wrist and redefine.
            </p>
            <div className="checklist">
              <ul>
                <li>
                  <i className="far fa-badge-check" /> Lifetime structural, one
                  year finish warranty
                </li>
                <li>
                  <i className="far fa-badge-check" /> Mapped from “Center Caps”
                  under ” tment” tab
                </li>
                <li>
                  <i className="far fa-badge-check" /> Fully copatible with OEM
                  equimpent
                </li>
              </ul>
            </div>
            <div className="actions">
              <div className="quantity">
                <input
                  type="number"
                  className="qty-input"
                  step={1}
                  min={1}
                  max={100}
                  name="quantity"
                  defaultValue={1}
                  title="Qty"
                />
                <button className="quantity-plus qty-btn">
                  <i className="far fa-chevron-up" />
                </button>
                <button className="quantity-minus qty-btn">
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="th-btn">Add to Cart</button>
            </div>
            <div className="product_meta">
              <span className="sku_wrapper">
                SKU: <span className="sku">smartwatch-series-3</span>
              </span>
              <span className="posted_in">
                Category:{" "}
                <a href="shop.html" rel="tag">
                  Gadget
                </a>
              </span>
              <span>
                Tags: <a href="shop.html">Gadget</a>
                <a href="shop.html">Smartwatch</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <button title="Close (Esc)" type="button" className="mfp-close">
        ×
      </button>
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
        <li>Shop Details</li>
      </ul>
    </div>
  </div>
  {/*==============================
    Product Details
    ==============================*/}
  <section className="product-details space-top space-extra-bottom">
    <div className="container">
      <div className="row gx-60">
        <div className="col-lg-6">
          <div className="product-big-img">
            <div className="img">
              <img
                src="assets/img/product/product_details_1_1.png"
                alt="Product Image"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="product-about">
            <p className="price">
              $532.85<del>$502.99</del>
            </p>
            <h2 className="product-title">Smartwatch Series 3</h2>
            <div className="product-rating">
              <div
                className="star-rating"
                role="img"
                aria-label="Rated 5.00 out of 5"
              >
                <span style={{ width: "100%" }}>
                  Rated <strong className="rating">5.00</strong> out of 5 based
                  on <span className="rating">1</span> customer rating
                </span>
              </div>
              <a href="shop-details.html" className="woocommerce-review-link">
                (<span className="count">4</span> customer reviews)
              </a>
            </div>
            <p className="text">
              Embrace tech and style with the Smartwatch Series 3, your daily
              companion. Stay connected, track fitness, and make a statement
              effortlessly elevate your game today.Experience convenience at
              your wrist and redefine.
            </p>
            <div className="checklist">
              <ul>
                <li>
                  <i className="far fa-badge-check" /> Lifetime structural, one
                  year finish warranty
                </li>
                <li>
                  <i className="far fa-badge-check" /> Mapped from “Center Caps”
                  under ” tment” tab
                </li>
                <li>
                  <i className="far fa-badge-check" /> Fully copatible with OEM
                  equimpent
                </li>
              </ul>
            </div>
            <div className="actions">
              <div className="quantity">
                <input
                  type="number"
                  className="qty-input"
                  step={1}
                  min={1}
                  max={100}
                  name="quantity"
                  defaultValue={1}
                  title="Qty"
                />
                <button className="quantity-plus qty-btn">
                  <i className="far fa-chevron-up" />
                </button>
                <button className="quantity-minus qty-btn">
                  <i className="far fa-chevron-down" />
                </button>
              </div>
              <button className="th-btn">Add to Cart</button>
            </div>
            <div className="product_meta">
              <span className="sku_wrapper">
                SKU: <span className="sku">smartwatch-series-3</span>
              </span>
              <span className="posted_in">
                Category:{" "}
                <a href="shop.html" rel="tag">
                  Gadget
                </a>
              </span>
              <span>
                Tags: <a href="shop.html">Gadget</a>
                <a href="shop.html">Smartwatch</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ul className="nav product-tab-style1" id="productTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link th-btn"
            id="description-tab"
            data-bs-toggle="tab"
            href="#description"
            role="tab"
            aria-controls="description"
            aria-selected="false"
          >
            Product Description
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link th-btn active"
            id="reviews-tab"
            data-bs-toggle="tab"
            href="#reviews"
            role="tab"
            aria-controls="reviews"
            aria-selected="true"
          >
            Customer Reviews
          </a>
        </li>
      </ul>
      <div className="tab-content" id="productTabContent">
        <div
          className="tab-pane fade"
          id="description"
          role="tabpanel"
          aria-labelledby="description-tab"
        >
          <p>
            The Smartwatch Series is a groundbreaking line of wearable
            technology that seamlessly integrates into modern lifestyles.
            Designed to merge fashion with functionality, each timepiece in the
            series embodies the epitome of smart sophistication. Whether you're
            a fitness enthusiast, a tech-savvy professional, or simply someone
            who values staying connected on the go, the Smartwatch Series offers
            a versatile range of features that elevate convenience and style.
          </p>
          <p>
            From monitoring your health and fitness metrics to receiving
            notifications from your smartphone, the Smartwatch Series keeps you
            effortlessly in the loop. Its sleek and innovative design ensures
            that you not only stay up-to-date with your digital world but also
            make a bold fashion statement. With an intuitive interface and
            user-friendly controls, navigating through your day becomes a
            seamless experience. Whether you're in a business meeting, hitting
            the gym, or enjoying a night out, the Smartwatch Series seamlessly
            adapts to your needs, enhancing your efficiency and allowing you to
            express your unique sense of style. Elevate your wristwear game and
            embrace the future of wearable technology with the Smartwatch
            Series.
          </p>
        </div>
        <div
          className="tab-pane fade show active"
          id="reviews"
          role="tabpanel"
          aria-labelledby="reviews-tab"
        >
          <div className="woocommerce-Reviews">
            <div className="th-comments-wrap ">
              <ul className="comment-list">
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img
                        src="assets/img/blog/comment-author-1.jpg"
                        alt="Comment Author"
                      />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Adam Jhon</h4>
                      <span className="commented-on">
                        <i className="fal fa-calendar-alt" />
                        22 April, 2023
                      </span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                      <p className="text">
                        This product is very much qualityful and I love this
                        working system and speed.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img
                        src="assets/img/blog/comment-author-2.jpg"
                        alt="Comment Author"
                      />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Jusctin Dacon</h4>
                      <span className="commented-on">
                        <i className="fal fa-calendar-alt" />
                        26 April, 2023
                      </span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                      <p className="text">
                        They delivered the product in a few time. Product
                        quality is also very good.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img
                        src="assets/img/blog/comment-author-3.jpg"
                        alt="Comment Author"
                      />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Jacklin July</h4>
                      <span className="commented-on">
                        <i className="fal fa-calendar-alt" />
                        26 April, 2023
                      </span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                      <p className="text">
                        Their product and service is very satisfying. I highly
                        recommend their services.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img
                        src="assets/img/blog/comment-author-4.jpg"
                        alt="Comment Author"
                      />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Adison Smith</h4>
                      <span className="commented-on">
                        <i className="fal fa-calendar-alt" />
                        26 April, 2023
                      </span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                      <p className="text">
                        I am just in love with this product. Their service is
                        also very good you can also try.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>{" "}
            {/* Comment Form */}
            <div className="th-comment-form ">
              <div className="form-title">
                <h3 className="blog-inner-title ">Add a review</h3>
              </div>
              <div className="row">
                <div className="form-group rating-select d-flex align-items-center">
                  <label>Your Rating</label>
                  <p className="stars">
                    <span>
                      <a className="star-1" href="#">
                        1
                      </a>
                      <a className="star-2" href="#">
                        2
                      </a>
                      <a className="star-3" href="#">
                        3
                      </a>
                      <a className="star-4" href="#">
                        4
                      </a>
                      <a className="star-5" href="#">
                        5
                      </a>
                    </span>
                  </p>
                </div>
                <div className="col-12 form-group">
                  <textarea
                    placeholder="Write a Message"
                    className="form-control"
                    defaultValue={""}
                  />
                  <i className="text-title far fa-pencil-alt" />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                  />
                  <i className="text-title far fa-user" />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="form-control"
                  />
                  <i className="text-title far fa-envelope" />
                </div>
                <div className="col-12 form-group">
                  <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                  <label htmlFor="reviewcheck">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="col-12 form-group mb-0">
                  <button className="th-btn">Post Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==============================
		Related Product  
		==============================*/}
      <div className="space-extra-top mb-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto">
            <h2 className="sec-title">Related Products</h2>
          </div>
          <div className="col d-none d-sm-block">
            <hr className="title-line" />
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <div className="icon-box">
                <button
                  data-slick-prev="#productCarousel"
                  className="slick-arrow default"
                >
                  <i className="far fa-arrow-left" />
                </button>
                <button
                  data-slick-next="#productCarousel"
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
          id="productCarousel"
          data-slide-show={4}
          data-lg-slide-show={3}
          data-md-slide-show={2}
          data-sm-slide-show={2}
          data-xs-slide-show={1}
        >
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="assets/img/product/product_1_1.png"
                  alt="Product Image"
                />
                <div className="actions">
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="far fa-eye" />
                  </a>
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>
                  <a href="wishlist.html" className="icon-btn">
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div
                  className="star-rating"
                  role="img"
                  aria-label="Rated 5.00 out of 5"
                >
                  <span>
                    Rated <strong className="rating">5.00</strong> out of 5
                    based on <span className="rating">1</span> customer rating
                  </span>
                </div>
                <h3 className="product-title">
                  <a href="shop-details.html">Wireless Speaker</a>
                </h3>
                <span className="price">$177.85</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="assets/img/product/product_1_2.png"
                  alt="Product Image"
                />
                <div className="actions">
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="far fa-eye" />
                  </a>
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>
                  <a href="wishlist.html" className="icon-btn">
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div
                  className="star-rating"
                  role="img"
                  aria-label="Rated 5.00 out of 5"
                >
                  <span>
                    Rated <strong className="rating">5.00</strong> out of 5
                    based on <span className="rating">1</span> customer rating
                  </span>
                </div>
                <h3 className="product-title">
                  <a href="shop-details.html">Elago Airpods Silicone</a>
                </h3>
                <span className="price">$39.85</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="assets/img/product/product_1_3.png"
                  alt="Product Image"
                />
                <div className="actions">
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="far fa-eye" />
                  </a>
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>
                  <a href="wishlist.html" className="icon-btn">
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div
                  className="star-rating"
                  role="img"
                  aria-label="Rated 5.00 out of 5"
                >
                  <span>
                    Rated <strong className="rating">5.00</strong> out of 5
                    based on <span className="rating">1</span> customer rating
                  </span>
                </div>
                <h3 className="product-title">
                  <a href="shop-details.html">Smartwatch Series 3</a>
                </h3>
                <span className="price">$96.85</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="assets/img/product/product_1_4.png"
                  alt="Product Image"
                />
                <div className="actions">
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="far fa-eye" />
                  </a>
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>
                  <a href="wishlist.html" className="icon-btn">
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div
                  className="star-rating"
                  role="img"
                  aria-label="Rated 5.00 out of 5"
                >
                  <span>
                    Rated <strong className="rating">5.00</strong> out of 5
                    based on <span className="rating">1</span> customer rating
                  </span>
                </div>
                <h3 className="product-title">
                  <a href="shop-details.html">Water Bottles</a>
                </h3>
                <span className="price">
                  $08.85<del>$06.99</del>
                </span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="th-product product-grid">
              <div className="product-img">
                <img
                  src="assets/img/product/product_1_5.png"
                  alt="Product Image"
                />
                <div className="actions">
                  <a href="#QuickView" className="icon-btn popup-content">
                    <i className="far fa-eye" />
                  </a>
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>
                  <a href="wishlist.html" className="icon-btn">
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div
                  className="star-rating"
                  role="img"
                  aria-label="Rated 5.00 out of 5"
                >
                  <span>
                    Rated <strong className="rating">5.00</strong> out of 5
                    based on <span className="rating">1</span> customer rating
                  </span>
                </div>
                <h3 className="product-title">
                  <a href="shop-details.html">Black Camera Stand</a>
                </h3>
                <span className="price">$32.85</span>
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
 
</>

  );
};

export default Shop;
