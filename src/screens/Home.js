import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import VideoPlaylist from "./VideoGallery";


import logoFooter  from "../assets/img/logo-footer.svg"
import logoFooterBlack from "../assets/img/logo-footer-black.svg"
import logwhite from "../assets/img/logo Ems.png"
import logosvg from "../assets/img/logo.svg"
import emsbanner from "../assets/img/hero/hero_1_6.jpg"

import api from "../constants/api";
import '../assets/css/event.css'


const Home = () => {
   

  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);
  const [banners, setBanner] = useState([]);
  const [homeProducts, setHomeProducts] = useState([]);

  const getBanners = () => {
    // First API call to get banners
    api
      .get("/content/getBanners")
      .then((res) => {
        setBanner(res.data.data);

        // Extract content_id from the response
        const contentIds = res.data.data.map((item) => item.content_id);

        // Second API call to get images based on content_id
        contentIds.forEach((contentId) => {
          // Making a POST request with content_id in the request body
          api
            .post("/file/getListOfFiles", { record_id: contentId })
            .then((imageRes) => {
              // Handle image response
              console.log(`Images for content_id ${contentId}:`, imageRes.data);
            })
            .catch((imageError) => {
              console.error(
                `Error fetching images for content_id ${contentId}:`,
                imageError
              );
            });
        });
      })
      .catch((error) => {
        console.error("Error fetching banners:", error);
      });
  };

  const [marquee, setMarquee] = useState([]);
  const getMarquee = () => {
    api
      .get('/setting/getSettingsForQuizInfoText')
      .then(res => {
        setMarquee(res.data.data);
      })
      .catch(error => {
        console.log("error",error)
      });

  };
  const marqueeValue =marquee && marquee[0]?.value

  const [events, setEvents] = useState([]);

  const getEvent = () => {
    api
      .get('/content/getEvents')
      .then((res) => {
        setEvents(res.data.data);
      })
      .catch(() => {
        // Handle error
      });
  };

    const getHomeProducts = () => {
    api
      .get("/product/getProductBookList")
      .then((res) => {
        setHomeProducts(res.data.data);
        console.log("edit Line Item", res.data.data);
      })
      .catch(() => {
        // Handle error
      });
  };

  useEffect(() => {
    // getBannerImages();
    // getVideoUrls();
    getBanners();
    getMarquee();
    getEvent ();

    // getHomeLink();
    getHomeProducts();
  }, []);

  const [activeTab, setActiveTab] = useState('*');

  // List of blog items
  const blogItems = [
    { id: 1, category: 'cat1', title: 'Your life, upgraded - gadgets Make it extraordinary', image: '../assets/img/logo.svg', date: '23 Mar, 2023' },
    { id: 2, category: 'cat1', title: 'Gadgets Elevating lifes moments, effortlessly.', image: 'assets/img/blog/blog_3_3_1.jpg', date: '19 Mar, 2023' },
    { id: 3, category: 'cat2', title: 'Efficiency meets style - embrace gadgets charm', image: 'assets/img/blog/blog_3_3_2.jpg', date: '20 Mar, 2023' },
    { id: 4, category: 'cat2', title: 'Upgrade living, unleash gadget magic now.', image: 'assets/img/blog/blog_3_3_3.jpg', date: '29 Mar, 2023' },
    { id: 5, category: 'cat3', title: 'Smart tech, brighter future embrace gadgets.', image: 'assets/img/blog/blog_3_3_4.jpg', date: '10 Mar, 2023' },
    { id: 6, category: 'cat3', title: 'Tech wonders, where possibilities gadgets.', image: 'assets/img/blog/blog_3_3_5.jpg', date: '16 Mar, 2023' },
    { id: 7, category: 'cat1', title: 'Where innovation meets everyday brilliance.', image: 'assets/img/blog/blog_3_3_6.jpg', date: '17 Mar, 2023' }
  ];

  // Filter items based on activeTab
  const filteredItems = activeTab === '*' ? blogItems : blogItems.filter(item => item.category === activeTab);


  const newsData = [
    {
      id: 1,
      title: "Tech on the go, laptop Redefines mobility.",
      category: "Laptop",
      image: "assets/img/blog/blog_5_2_21.jpg",
      date: "27 Mar, 2023",
    },
    {
      id: 2,
      title: "Tech brilliance, where Possibilities unfold.",
      category: "Tech",
      image: "assets/img/blog/blog_5_2_22.jpg",
      date: "23 Mar, 2023",
    },
    {
      id: 3,
      title: "Elevate life, redefine Human potential.",
      category: "VR Glass",
      image: "assets/img/blog/blog_5_2_23.jpg",
      date: "11 Mar, 2023",
    },
    {
      id: 4,
      title: "Gadgets: Simplify life, elevate your experience.",
      category: "Camera",
      image: "assets/img/blog/blog_5_2_24.jpg",
      date: "19 Mar, 2023",
    },
    {
      id: 5,
      title: "New gadget can unblock some of your future.",
      category: "Gadget",
      image: "assets/img/blog/blog_5_2_25.jpg",
      date: "27 Mar, 2023",
    },
  ];

  const videoData = [
    {
      imgSrc: "assets/img/blog/blog_3_9.jpg",
      videoUrl: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
      category: "Animals",
      categoryColor: "#019D9E",
      title: "Cat-tastic updates, keeping you feline fine",
      date: "30 Mar, 2023",
    },
    {
      imgSrc: "assets/img/blog/blog_3_10.jpg",
      videoUrl: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
      category: "Health",
      categoryColor: "#00D084",
      title: "Holistic Living: Balancing Mind, Body, and Soul",
      date: "27 Mar, 2023",
    },
    {
      imgSrc: "assets/img/blog/blog_3_11.jpg",
      videoUrl: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
      category: "Fitness",
      categoryColor: "#FF1D50",
      title: "Sweat and Success: Tales of Dedication in Fitness",
      date: "24 Mar, 2023",
    },
    {
      imgSrc: "assets/img/blog/blog_3_12.jpg",
      videoUrl: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
      category: "Technology",
      categoryColor: "#007BFF",
      title: "Tech Horizons: Navigating the Digital Landscape",
      date: "18 Mar, 2023",
    },
  ];

  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    spacing: 10, // Adjust the spacing value as needed
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      
    ],
  };
  // const bannersettings = {
  //   dots: true,
  //   speed: 500,
  //   slidesToShow: 1, // Display three slides at a time
  //   slidesToScroll: 1, // Scroll one slide at a time
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 1140,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };


  const bannersettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: null, // Placeholder for main slider
  };
  
  const thumbnailSettings = {
    slidesToShow: 4,   // Number of thumbnails to show
    slidesToScroll: 1,
    asNavFor: null,    // Placeholder for thumbnail slider
    focusOnSelect: true, // Enables clicking on thumbnails
    centerMode: true,
    centerPadding: '10px',
  };

  const NextArrow = (settings) => {
    const { onClick } = settings;
    return (
      <button  className="slick-arrow default" onClick={onClick}>
        <FaArrowRight />
      </button>
    );
  };

  const PrevArrow = (settings) => {
    const { onClick } = settings;
    return (
      <button className="slick-arrow default" onClick={onClick}>
        <FaArrowLeft />
      </button>
    );
  };

  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };
  console.log('setting',settings.nextArrow)
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
                alt="Tnews"
              />
            </a>
            <a href="home-newspaper.html">
              <img
                className="dark-img"
                src={logoFooter}
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
      <div className="widget">
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
      <div className="widget newsletter-widget">
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
          <img src={logosvg} alt="Tnews" />
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
              <a href="home-newspaper.html">
                <img src={logwhite} alt="Tnews" />
              </a>
            </div>
          </div>
          <div className="col-lg-10">
            <div className="header-top">
              <div className="row align-items-center">
                <div className="col-xl-9">
                  <div className="news-area">
                    <div className="title">Ems News :</div>
                    <div className="news-wrap">
                <Marquee speed={50} gradient={false} pauseOnHover className="slick-marquee">
                  <div className="col-auto">
                    <a href="blog-details.html" className="breaking-news">
                    {marqueeValue}
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="blog-details.html" className="breaking-news">
                      From health to fashion, lifestyle news curated.
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="blog-details.html" className="breaking-news">
                      Sun, sand, and luxury at our resort.
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="blog-details.html" className="breaking-news">
                      Relaxation redefined, your beach resort sanctuary.
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
            <div className="menu-area">
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
                        alt="Tnews"
                      />
                    </a>
                    <a href="home-newspaper.html">
                      <img
                        className="dark-img"
                        src={logwhite}
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
                        </ul>
                      </li>
                      <li>
                      <Link to="/contact">Contact</Link>
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
                    <Link to="/contact" className="th-btn style3">Contact</Link>
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
  </header>
  {/*==============================
Hero Area
==============================*/}



        <div className="bannerImage">
      {/* Main Banner Slider */}
      <Slider
        {...bannersettings}
        asNavFor={thumbSlider.current}
        ref={mainSlider}
      >
        {Array.isArray(banners) &&
          banners.map((item, index) => (
            <div key={item.content_id} className="single-blog">
              <div className="part-img">
                <img
                  src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                  alt={`News ${item.content_id}`}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          ))}
      </Slider>

      {/* Thumbnail Slider for Navigation */}
      <Slider
        {...thumbnailSettings}
        asNavFor={mainSlider.current}
        ref={thumbSlider}
        className="thumbnail-slider"
      >
        {Array.isArray(banners) &&
          banners.map((item, index) => (
            <div key={`thumb_${item.content_id}`} className="thumbnail-img">
              <img
                src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                alt={`Thumbnail ${item.content_id}`}
                style={{
                  width: '100%',
                  height: '80px', // Thumbnail height
                  objectFit: 'cover',
                }}
              />
            </div>
          ))}
      </Slider>
    </div>
  
    <div className="container space-top">
    <a href="https://themeforest.net/user/themeholy/portfolio">
      <img className="light-img" src="../assets/img/logo-footer.svg" alt="ads" />
      <img className="dark-img" src="../assets/img/logo-footer.svg" alt="ads" />
    </a>
  </div>

  <section
    className="bg-fixed dark-theme"
    data-bg-src="assets/img/blog/blog_full_1.jpg"
    data-overlay="black"
    data-opacity={7}
  >
    <div className="container">
      <div className="blog-bg-style1 row">
        <div className="col-md-9 col-sm">
          <a data-theme-color="#6234AC" href="blog.html" className="category">
            Technology
          </a>
          <h3 className="box-title-50">
            <a className="hover-line" href="blog-details.html">
              From vision to reality, technology Pioneers progress
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
        <div className="col-sm-auto mt-5 mt-sm-0">
          <a
            href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
            className="play-btn style2 popup-video"
          >
            <i className="fas fa-play" />
          </a>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
Blog Area  
==============================*/}
<div className="space-top" >

    <div className="container">
      <div className="row align-items-center">
        <div className="col">
      <h2 className="sec-title has-line">Events</h2>
      <div className="col-auto">
          <div className="sec-btn">
            {/* <div className="icon-box">
           
              <PrevArrow ></PrevArrow>
              <NextArrow ></NextArrow>
             
            </div> */}
          </div>
        </div>
        <div className="event-slider-container col-lg-12 dark-theme">
      <Slider {...settings}>
        {events.map((item) => (
          <div key={item.content_id} className="event-slide">
            <div className="event-card">
              <div className="event-img-container">
                <img
                  src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                  alt="Event"
                  className="event-img"
                />
              </div>
              <div className="event-content">
                <a href="blog.html" className="event-category">
                  Event
                </a>
                <h3 className="box-title-20">
               <a className="hover-line" href="blog-details.html">{item.title}</a>
             </h3>
                <div className="event-meta">
                  <span className="event-meta-item">
                    <i className="far fa-eye"></i> Read More
                  </span>
                  <span className="event-meta-item">
                    <i className="fal fa-calendar-alt"></i> 11/12/2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className=" col-lg-19 dark-theme">
     
     {/* <Slider {...settings}>
       {events.map((item) => (
         <div key={item.content_id} className="blog-style3">
           <div className="blog-img">
                        <img
                           src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                           alt="Event"
                           width="100%"
                           height="270px"
                         />
           </div>
           <div className="blog-content">
             <a href="blog.html" className="category">
               {item.category}
             </a>
             <h3 className="box-title-20">
               <a className="hover-line" href="blog-details.html">{item.title}</a>
             </h3>
             <div className="blog-meta">
               <span>
                 <i className="far fa-user"></i>  Read more
               </span>
               <span>
                 <i className="fal fa-calendar-days"></i> {item.date}
               </span>
             </div>
           </div>
         </div>
       ))}
     </Slider> */}
     </div>
    </div>
    </div>
    </div>
    </div>
    </div>

<VideoPlaylist></VideoPlaylist>
  

<section className="space">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="sec-title has-line">Books Shop</h2>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <div className="filter-menu filter-menu-active">
                <button
                  onClick={() => setActiveTab('*')}
                  className={`tab-btn ${activeTab === '*' ? 'active' : ''}`}
                  type="button"
                >
                  ALL
                </button>
                <button
                  onClick={() => setActiveTab('cat1')}
                  className={`tab-btn ${activeTab === 'cat1' ? 'active' : ''}`}
                  type="button"
                >
                  Gadget
                </button>
                <button
                  onClick={() => setActiveTab('cat2')}
                  className={`tab-btn ${activeTab === 'cat2' ? 'active' : ''}`}
                  type="button"
                >
                  Phone
                </button>
                <button
                  onClick={() => setActiveTab('cat3')}
                  className={`tab-btn ${activeTab === 'cat3' ? 'active' : ''}`}
                  type="button"
                >
                  Electronic
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-24 filter-active mbn-24">
          {homeProducts.map((item) => (
            <div key={item.product_id} className={`col-xl-4 col-md-6 filter-item ${item.category}`}>
              <div className="blog-style2">
                <div className="blog-img img-big">
                  <img src={`https://emsmedia.net/storage/uploads/${item.file_name}`} alt="blog image" />
                </div>
                <div className="blog-content">
                  <a href="blog.html" className="category" data-theme-color="#6234AC">
                    {/* {item.category === 'cat1' ? 'Gadget' : item.category === 'cat2' ? 'Phone' : 'Electronic'} */}
                    {item.category_title}
                  </a>
                  <h3 className="box-title-20">
                    <a className="hover-line" href="blog-details.html">
                      {item.title}
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      {item.date}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  {/*==============================
Blog Area  
==============================*/}
  <section className="space-bottom">
    <div className="container">
      <div className="row">
        <div className="col-xl-8">
          <h2 className="sec-title has-line">Popular News</h2>
          <div className="mb-4">
            <div className="dark-theme img-overlay2 space-40 ">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_15.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#6234AC"
                    href="blog.html"
                    className="category"
                  >
                    Technology
                  </a>
                  <h3 className="box-title-40">
                    <a className="hover-line" href="blog-details.html">
                      Tech Unleash possibilities, shape a brighter future.
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
          </div>
          <div className="row gy-4">
            <div className="col-md-6 ">
              <div className="blog-style2">
                <div className="blog-img img-big">
                  <img src="assets/img/blog/blog_3_3_7.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#6234AC"
                    href="blog.html"
                    className="category"
                  >
                    Robotic
                  </a>
                  <h3 className="box-title-20">
                    <a className="hover-line" href="blog-details.html">
                      Smarter living, gadgets make your world.
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
            <div className="col-md-6 ">
              <div className="blog-style2">
                <div className="blog-img img-big">
                  <img src="assets/img/blog/blog_3_3_8.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#6234AC"
                    href="blog.html"
                    className="category"
                  >
                    Tech
                  </a>
                  <h3 className="box-title-20">
                    <a className="hover-line" href="blog-details.html">
                      From dreams to reality, tech pioneers
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      22 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="blog-style2">
                <div className="blog-img img-big">
                  <img src="assets/img/blog/blog_3_3_9.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#6234AC"
                    href="blog.html"
                    className="category"
                  >
                    Gadget
                  </a>
                  <h3 className="box-title-20">
                    <a className="hover-line" href="blog-details.html">
                      Technology drives the digital revolution
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      23 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="blog-style2">
                <div className="blog-img img-big">
                  <img src="assets/img/blog/blog_3_3_10.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#6234AC"
                    href="blog.html"
                    className="category"
                  >
                    VR Glass
                  </a>
                  <h3 className="box-title-20">
                    <a className="hover-line" href="blog-details.html">
                      Where possibility meet boundless feelings
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      13 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space">
            <a href="https://themeforest.net/user/themeholy/portfolio">
              <img
                className="w-100 light-img"
                src="assets/img/ads/ads_6.jpg"
                alt="ads"
              />
              <img
                className="w-100 dark-img"
                src="assets/img/ads/ads_6_dark.jpg"
                alt="ads"
              />
            </a>
          </div>
          <h2 className="sec-title has-line">Featured News</h2>
          <div className="mbn-24">
            <div className="mb-4 ">
              <div className="blog-style4">
                <div className="blog-img w-270">
                  <img src="assets/img/blog/blog_6_3_1.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#6234AC"
                    href="blog.html"
                    className="category"
                  >
                    Gadget
                  </a>
                  <h3 className="box-title-22">
                    <a className="hover-line" href="blog-details.html">
                      Tech brilliance, forging a path to a smarter connected
                      universe.
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
                  <a href="blog-details.html" className="th-btn style2">
                    Read More
                    <i className="fas fa-arrow-up-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 ">
              <div className="blog-style4">
                <div className="blog-img w-270">
                  <img src="assets/img/blog/blog_6_3_2.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#6234AC"
                    href="blog.html"
                    className="category"
                  >
                    Technology
                  </a>
                  <h3 className="box-title-22">
                    <a className="hover-line" href="blog-details.html">
                      where possibilities blossom, and lives thrive with
                      technology.
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
                  <a href="blog-details.html" className="th-btn style2">
                    Read More
                    <i className="fas fa-arrow-up-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 ">
              <div className="blog-style4">
                <div className="blog-img w-270">
                  <img src="assets/img/blog/blog_6_3_3.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#6234AC"
                    href="blog.html"
                    className="category"
                  >
                    Robotic
                  </a>
                  <h3 className="box-title-22">
                    <a className="hover-line" href="blog-details.html">
                      Robotics empowers progress, reshaping industries with
                      ingenuity.
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
                  <a href="blog-details.html" className="th-btn style2">
                    Read More
                    <i className="fas fa-arrow-up-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 ">
              <div className="blog-style4">
                <div className="blog-img w-270">
                  <img src="assets/img/blog/blog_6_3_4.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#6234AC"
                    href="blog.html"
                    className="category"
                  >
                    Desk
                  </a>
                  <h3 className="box-title-22">
                    <a className="hover-line" href="blog-details.html">
                      where gadgets enhance your life effortlessly and
                      beautifully.
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
                  <a href="blog-details.html" className="th-btn style2">
                    Read More
                    <i className="fas fa-arrow-up-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 ">
              <div className="blog-style4">
                <div className="blog-img w-270">
                  <img src="assets/img/blog/blog_6_3_5.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#6234AC"
                    href="blog.html"
                    className="category"
                  >
                    VR Glass
                  </a>
                  <h3 className="box-title-22">
                    <a className="hover-line" href="blog-details.html">
                      Elevate life, redefine human potential with virtual
                      reality.
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
                  <a href="blog-details.html" className="th-btn style2">
                    Read More
                    <i className="fas fa-arrow-up-right ms-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 mt-35 mt-xl-0 sidebar-wrap mb-10">
          <div className="sidebar-area">
            <div className="widget">
              <div className="widget-ads">
                <a href="https://themeforest.net/user/themeholy/portfolio">
                  <img
                    className="w-100 light-img"
                    src="assets/img/ads/siderbar_ads_3.jpg"
                    alt="ads"
                  />
                  <img
                    className="w-100 dark-img"
                    src="assets/img/ads/siderbar_ads_3_dark.jpg"
                    alt="ads"
                  />
                </a>
              </div>
            </div>
            <div className="widget">
              <h2 className="sec-title fs-20 has-line">Most Read</h2>
              <div className="row gy-4">
                <div className="col-xl-12 col-md-6 ">
                  <div className="blog-style2">
                    <div className="blog-img img-big">
                      <img
                        src="assets/img/blog/blog_3_3_11.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <a
                        data-theme-color="#6234AC"
                        href="blog.html"
                        className="category"
                      >
                        Gadget
                      </a>
                      <h3 className="box-title-20">
                        <a className="hover-line" href="blog-details.html">
                          Gadgets amaze, connect inspire you.
                        </a>
                      </h3>
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          15 Mar, 2023
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 ">
                  <div className="blog-style2">
                    <div className="blog-img img-big">
                      <img
                        src="assets/img/blog/blog_3_3_12.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <a
                        data-theme-color="#6234AC"
                        href="blog.html"
                        className="category"
                      >
                        Phone
                      </a>
                      <h3 className="box-title-20">
                        <a className="hover-line" href="blog-details.html">
                          Tech at your fingertips, phone redefines
                        </a>
                      </h3>
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          25 Mar, 2023
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 ">
                  <div className="blog-style2">
                    <div className="blog-img img-big">
                      <img
                        src="assets/img/blog/blog_3_3_13.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <a
                        data-theme-color="#6234AC"
                        href="blog.html"
                        className="category"
                      >
                        VR Glass
                      </a>
                      <h3 className="box-title-20">
                        <a className="hover-line" href="blog-details.html">
                          Elevate life, embrace modern technology.
                        </a>
                      </h3>
                      <div className="blog-meta">
                        <a href="blog.html">
                          <i className="fal fa-calendar-days" />
                          12 Mar, 2023
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6 ">
                  <div className="blog-style2">
                    <div className="blog-img img-big">
                      <img
                        src="assets/img/blog/blog_3_3_14.jpg"
                        alt="blog image"
                      />
                    </div>
                    <div className="blog-content">
                      <a
                        data-theme-color="#6234AC"
                        href="blog.html"
                        className="category"
                      >
                        Robotic
                      </a>
                      <h3 className="box-title-20">
                        <a className="hover-line" href="blog-details.html">
                          Robotic wonders redefine possibilities.
                        </a>
                      </h3>
                      <div className="blog-meta">
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
            <div
              className="widget newsletter-widget3  "
              data-bg-src="assets/img/bg/line_bg_1.png"
            >
              <div className="mb-4">
                <img src="assets/img/bg/newsletter_img_2.png" alt="Icon" />
              </div>
              <h3 className="box-title-24 mb-20">Subscribe Now</h3>
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
                    <img src={logoFooter} alt="Tnews" />
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
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Use links</h3>
              <div className="menu-all-pages-container">
                <ul className="menu">
                  <li>
                    <a href="home-newspaper.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="authors.html">Authors</a>
                  </li>
                  <li>
                    <a href="category.html">Category</a>
                  </li>
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                  <Link to="/contact">Contact</Link>
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
                  <a href="about.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="about.html">Terms &amp; Conditions</a>
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

export default Home;