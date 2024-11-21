import '../assets/css/style.css'
import '../assets/css/fontawesome.min.css'
import '../assets/css/slick.min.css'
import '../assets/css/magnific-popup.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css.map'

import contact1svg from "../assets/img/icon/contact_1_1.svg"
import contact2svg from "../assets/img/icon/contact_1_2.svg"
import contact3svg from "../assets/img/icon/contact_1_3.svg"
import logoFooter  from "../assets/img/logo-footer.svg"
import logoFooterBlack from "../assets/img/logo-footer-black.svg"
import logwhite from "../assets/img/logo-white.svg"
import logosvg from "../assets/img/logo.svg"


const Contact = () => {
    return (
<>

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
                src={logoFooterBlack}
                alt="Ems Media"
              />
            </a>
            <a href="home-newspaper.html">
              <img
                className="dark-img"
                src={logoFooter}
                alt="Ems Media"
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
                  <img src={logwhite} alt="Ems Media" />
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
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
  {/*==============================
Contact Info Area  
==============================*/}
  <div className="space2">
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="pe-xxl-4 me-xl-3 text-center text-xl-start mb-40 mb-lg-0">
            <div className="title-area mb-32">
              <h2 className="sec-title2">Get in Touch</h2>
              <p className="sec-text">
                Aliquam erat volutpat. Morbi sed lectus volutpat nulla laoreet
                maximus vel ac nulla. Maecenas ullamcorper felis
              </p>
            </div>
            <div className="contact-feature-wrap">
              <div className="contact-feature">
                <div className="box-icon">
                  <img src={contact1svg} alt="icon" />
                </div>
                <div className="box-content">
                  <h3 className="box-title-22">Our Address</h3>
                  <p className="box-text">
                    Street Parker Rd. Allentown, New Mexico 31134{" "}
                  </p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="box-icon">
                  <img src={contact2svg} alt="icon" />
                </div>
                <div className="box-content">
                  <h3 className="box-title-22">Email Address</h3>
                  <p className="box-text">
                    <a href="mailto:needhelp@gmail.com">needhelp@gmail.com</a>
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="contact-feature">
                <div className="box-icon">
                  <img src={contact3svg} alt="icon" />
                </div>
                <div className="box-content">
                  <h3 className="box-title-22">Phone Number</h3>
                  <p className="box-text">
                    <a href="tel:+1234055550128">+123 (405) 555-0128</a>
                    <a href="tel:+7025550122">(702) 555-0122</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="quote-form-box">
            <h4 className="form-title">Send Message</h4>
            <form
              action="mail.php"
              method="POST"
              className="contact-form ajax-contact"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    name="number"
                    id="number"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group col-md-6">
                  <select name="subject" id="subject" className="form-select">
                    <option value="" disabled="" selected="" hidden="">
                      Select Subject
                    </option>
                    <option value="Writing Article">Writing Article</option>
                    <option value="Become Author">Become Author</option>
                    <option value="Gest Posting">Gest Posting</option>
                    <option value="Personal Question">Personal Question</option>
                  </select>
                </div>
                <div className="form-group col-12">
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={3}
                    className="form-control"
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <div className="form-btn col-12">
                  <button className="th-btn">
                    Submit Now
                    <i className="fas fa-arrow-up-right ms-2" />
                  </button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/*==============================
Contact Area  
==============================*/}
  <div className="contact-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792000835!2d144.9623021!3d-37.805673299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1691473044289!5m2!1sbn!2sbd"
      allowFullScreen=""
      loading="lazy"
    />
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
                    <img src={logoFooter} alt="Ems Media" />
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
              <a href="home-newspaper.html">Ems Media</a>. All Rights Reserved.
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

export default Contact;