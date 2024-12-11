import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import NavMenu from "../components/NavMenu";
import NavMenuCopy from "../components/NavMenucopy";
import { getCart } from "../common/headerCartApi";
import { getUser } from "../common/user";
import logoFooter from "../assets/img/logo-footer.svg";
import logoFooterBlack from "../assets/img/logo-footer-black.svg";
import logwhite from "../assets/img/logo Ems.png";
import logosvg from "../assets/img/logo.svg";

import api from "../constants/api";
import "../assets/css/event.css";



const Home = () => {

  const [CartItem, setCartItems] = useState([]);
  const navigate = useNavigate();

  const loadCart = async () => {
    const cart = await getCart(); // Wait for the cart data to load
    setCartItems(cart);
  };

  useEffect(()=>{
    loadCart()
  })

  
  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const navCart =()=>{
    navigate('/Cart')
  }

  const user=getUser();

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


  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuOpen(false);
  };

  // Prevent propagation when clicking inside the menu
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
   <div className={`sidemenu-wrapper sidemenu-1 ${isMenuOpen ? 'show' : 'd-none d-md-block'}`}>
        <div className="sidemenu-content" onClick={closeMenu}>
          <button className="closeButton sideMenuCls" onClick={closeMenu}>
            <i className="far fa-times" />
          </button>
       
            <NavMenuCopy />                    
       
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
                <a href="/" className="th-btn wc-forward">
                  View cart
                </a>
                <a href="/" className="th-btn checkout wc-forward">
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
            <a href="/">
              <img src={logosvg} alt="Ems Media" />
            </a>
          </div>
          <div className="th-mobile-menu">
            <ul>
              <li className="menu-item-has-children">
                <a href="/">Home</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/">Home Newspaper</a>
                  </li>
                  <li>
                    <a href="/">Home Magazine</a>
                  </li>
                  <li>
                    <a href="/">Home Sports</a>
                  </li>
                  <li>
                    <a href="/">Home Movie</a>
                  </li>
                  <li>
                    <a href="/">Home Gadget</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Category</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/">Category</a>
                  </li>
                  <li>
                    <a href="/">Three Column</a>
                  </li>
                  <li>
                    <a href="/">
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
                        <a href="/">Shop</a>
                      </li>
                      <li>
                        <a href="/">Shop Details</a>
                      </li>
                      <li>
                        <a href="/">Cart Page</a>
                      </li>
                      <li>
                        <a href="/">Checkout</a>
                      </li>
                      <li>
                        <a href="/">Wishlist</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">Team</a>
                  </li>
                  <li>
                    <a href="/">Author</a>
                  </li>
                  <li>
                    <a href="/">Error Page</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="/">Blog Standard</a>
                  </li>
                  <li>
                    <a href="/">Blog Masonary</a>
                  </li>
                  <li>
                    <a href="/">Blog List</a>
                  </li>
                  <li>
                    <a href="/">Blog Details</a>
                  </li>
                  <li>
                    <a href="/">Blog Details Video</a>
                  </li>
                  <li>
                    <a href="/">Blog Details Audio</a>
                  </li>
                  <li>
                    <a href="/">
                      Blog Details Nosidebar
                    </a>
                  </li>
                  <li>
                    <a href="/">
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
      {/* <div className="switcher-fixed">
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
      </div> */}
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
                                href="/"
                                className="breaking-news"
                              >
                                {marqueeValue}
                              </a>
                            </div>
                            <div className="col-auto">
                              <a
                                href="/"
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
                        <a href="#" className="simple-icon sideMenuToggler"   onClick={toggleMenu}>
                          <i className="far fa-bars" />
                        </a>
                      </div>
                    </div>
                    <div className="col-auto d-lg-none d-block">
                      <div className="header-logo">
                        <a href="/">
                          <img
                            className="light-img"
                            src={logosvg}
                            alt="Ems Media"
                          />
                        </a>
                        <a href="/">
                          <img
                            className="dark-img"
                            src={logwhite}
                            alt="Ems Media"
                          />
                        </a>
                      </div>
                    </div>
                 
                    <NavMenu />

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
                          onClick={navCart}
                        >
                          {/* <i className="far fa-cart-shopping" />
                          <span className="badge">{CartItem.length}</span> */}
                          <i className="far fa-cart-shopping" />
                          <span className="badge">{CartItem?.length}</span>
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
                  <a href="/">{currentDate}</a>
                </li>
              </ul>
            </div>
          </div>
         
          <div className="col-auto">
  <div className="header-links">
    <ul>
      {/* Show Login and Register links if the user is not logged in */}
      {!user && (
        <>
          <li className="d-none d-sm-inline-block">
            <i className="far fa-user" />
            <Link to="/Login">Login</Link>
          </li>
          <li className="d-none d-sm-inline-block">
            <i className="far fa-user" />
            <Link to="/Register">Register</Link>
          </li>
        </>
      )}

      {/* Show Logout link if the user is logged in */}
      {user && (
        <li className="d-none d-sm-inline-block">
          <i className="far fa-user" />
          <Link to="#" onClick={logout}>
            Logout
          </Link>
        </li>
      )}

      {/* Always show the email link */}
      <li>
        <i className="far fa-envelope" />
        <a href="mailto:info@emsmedia.net">info@emsmedia.net</a>
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
