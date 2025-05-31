import React, { useEffect, useState,useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import VideoPlaylist from "./VideoGallery";
import { getUser } from "../common/user";

import logoFooter  from "../assets/img/logo-footer.svg"
import logoFooterBlack from "../assets/img/logo-footer-black.svg"
import logwhite from "../assets/img/logo Ems.png"
import logosvg from "../assets/img/logo.svg"
import emsbanner from "../assets/img/EmsBanner.jpg"
import quran3 from "../assets/img/quran3.jpg"
import magazine from "../assets/img/magazine.jpg"
import about from "../assets/img/Vappa nayagam.png"
import about1 from "../assets/img/thanthai.png"
import about2 from "../assets/img/Appa.jpg"
import about3 from "../assets/img/EmsIcon1.png"
import about4 from "../assets/img/EmsIcon2.png"
import bannerImage from "../assets/img/banner image.png"
import no2Banner from "../assets/img/115497_2.png"
import collegeMain1 from "../assets/img/collegemain1.png"
import collegeMain2 from "../assets/img/collegemain2.png"
import collegeMain from "../assets/img/collegemain.jpeg"
import college1 from "../assets/img/college1.jpeg"
import college2 from "../assets/img/college2.jpeg"
import college3 from "../assets/img/college3.jpeg"
import college4 from "../assets/img/college4.jpeg"

import api from "../constants/api";
import '../assets/css/event.css'
import '../assets/css/event1.css'


const Home = () => {

  const navigate = useNavigate();
  const user =getUser()

  const [magazine, setMagazine] = useState([]);
  const [magazineRead, setMagazineRead] = useState([]);
  const [subs, setSubs] = useState("");

  console.log('subs',subs)

  useEffect(() => {
    const getContactById = () => {
      api
        .post('/contact/getContactsById', { contact_id: user?.contact_id })
        .then((res) => {
          setSubs(res.data.data[0].subs_payment_status);
        })
        .catch(() => {
        });
    };
  
    getContactById();
  }, []);

 

  useEffect(() => {
    getMagazine();
    getMagazineMostRead();
  }, []);

  const getMagazine = () => {
    api
      .get("/content/getMagazine")
      .then((res) => {
        const firstTenRecords = res.data.data.slice(0, 9); // Extract the first 10 records
        setMagazine(firstTenRecords);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
  };

  const getMagazineMostRead = () => {
    api
      .get("/content/getMagazine")
      .then((res) => {
        const firstTenRecords = res.data.data.slice(0, 5); // Extract the first 10 records
        setMagazineRead(firstTenRecords);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
  };
  
  function extractYouTubeId(url) {
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|\S*?[?&]v=|v%3D|.+?\/)\/?(\S+)|youtu\.be\/(\S+))/;
    const match = url.match(regex);
    return match ? match[1] || match[2] : null;
  }
  
  

  const [modalVideo, setModalVideo] = useState(null);
 

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
            .then(() => {
              // Handle image response
              // console.log(`Images for content_id ${contentId}:`, imageRes.data);
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

  const allowedCategories = ["ஞான விளக்க நூற்கள்", "மௌலித் நூற்கள்", "கவிதை நூற்கள்", "அகராதி"];

const getHomeProducts = () => {
  api
    .get("/product/getProductBookList")
    .then((res) => {
     
      const filteredProducts = [];
      
      // Loop through allowedCategories and collect matching products
      allowedCategories.forEach((category) => {
        const matchingProducts = res.data.data.filter(
          (item) => item.category_title?.trim() === category.trim()
        );
        filteredProducts.push(...matchingProducts);
      });

      setHomeProducts(filteredProducts);
      // console.log("Filtered Products", filteredProducts);
    })
    .catch((error) => {
      console.error("Error fetching products", error);
    });
};


  useEffect(() => {
    getBanners();
    getEvent ();
    getHomeProducts();
  }, []);

  const [activeTab, setActiveTab] = useState('*');

  const categories = [...new Set(homeProducts.map((item) => item.category_title))];

  // Filter items based on the active tab
  const filteredItems =
    activeTab === "*"
      ? homeProducts
      : homeProducts.filter((item) => item.category_title === activeTab);

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
            <a href="/">
              <img
                className="light-img"
                src={logoFooterBlack}
                alt="Ems Media"
              />
            </a>
            <a href="/">
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
      <div className="widget">
        <h3 className="widget_title">Recent Posts</h3>
        <div className="recent-post-wrap">
          <div className="recent-post">
            <div className="media-img">
              <a href="/">
                <img
                  src={emsbanner}
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="hover-line" href="/">
                  Fitness: Your journey to Better, stronger you.
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="/">
                  <i className="fal fa-calendar-days" />
                  21 June, 2023
                </a>
              </div>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="/">
                <img
                  src="assets/img/blog/recent-post-1-2.jpg"
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="hover-line" href="/">
                  Embrace the game Ignite your sporting
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="/">
                  <i className="fal fa-calendar-days" />
                  22 June, 2023
                </a>
              </div>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="/">
                <img
                  src="assets/img/blog/recent-post-1-3.jpg"
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="hover-line" href="/">
                  Revolutionizing lives Through technology
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="/">
                  <i className="fal fa-calendar-days" />
                  23 June, 2023
                </a>
              </div>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="/">
                <img
                  src="assets/img/blog/recent-post-1-4.jpg"
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="hover-line" href="/">
                  Enjoy the Virtual Reality embrace the
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="/">
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
            <a href="/">Terms &amp; Policy</a>
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
                <a href="#">Home Magazine</a>
              </li>
              <li>
                <a href="#">Home Sports</a>
              </li>
              <li>
                <a href="#">Home Movie</a>
              </li>
              <li>
                <a href="#">Home Gadget</a>
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
                <a href="#">Category</a>
              </li>
              <li>
                <a href="#">Three Column</a>
              </li>
              <li>
                <a href="#">
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
                <a href="/">Blog Details Nosidebar</a>
              </li>
              <li>
                <a href="/">Blog Details Full Image</a>
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
                  src={`https://ems.unitdtechnologies.com/storage/${item.file_name}`}
                  alt={`News ${item.content_id}`}
                
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
                src={`https://ems.unitdtechnologies.com/storage/${item.file_name}`}
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
  
    {/* <div className="container space-top">
    <a href="/">
      <img className="light-img" src={no1Banner} alt="ads" />
      <img className="dark-img" src="../assets/img/logo-footer.svg" alt="ads" />
    </a>
  </div> */}

<section
  className="bg-fixed dark-theme"
  data-bg-src="../assets/img/logo-footer-black.svg"
  data-overlay="black"
  data-opacity={7}
  style={{ marginTop: 100 }}
>
  <div className="container">
    <div className="blog-bg-style1 row">
      <div className="col-md-9 col-sm">
     
        <img
          src={bannerImage}
          alt="Blog Title Image"
          style={{ width: "25%", maxHeight: "250px", objectFit: "cover", marginBottom: "20px" }}
        />
         <Link data-theme-color="#6234AC" to={`/va/:${'வாப்பாநாயகம்'}`} className="category"  style={{ marginLeft: "20px" }}>
        வாப்பா நாயகம்</Link>
         <h3 className="box-title-20">
          <Link className="hover-line" to={`/va/:${'வாப்பாநாயகம்'}`}>
          என்று அனைவராலும் அன்போடு அழைக்கப்படும் அஸ்ஸெய்யித் கலீல் அவ்ன் மௌலானா 
          அவர்கள் அத்தரிகத்துல் ஹக்கிகத்துல் காதிரியா தரிக்காவின் ஆன்மீக தலைவராவார்கள்.
          </Link>
        </h3>
       
        <div className="blog-meta">
          <Link to={`/va/:${'வாப்பாநாயகம்'}`}>
          குதுபுல் அக்தாப், சாஹிபுல் வக்த், ஷ‌ம்ஸுல் வுஜூத், அஷ்ஷெய்கு ஜமாலிய்யா 
          அஸ்ஸய்யித் கலீல் அவ்ன் மௌலானா அல்ஹஸனிய்யுல் ஹுஸைனிய்யுல் ஹாஷிமிய் நாயகம்
          </Link>
          {/* <a href="/">
            <i className="fal fa-calendar-days" />
            20 Mar, 2023
          </a> */}
        </div>
      </div>
      <div className="col-sm-auto mt-5 mt-sm-0">
        <a
          onClick={(e) => {
            e.preventDefault(); // Prevent the default link behavior
            setModalVideo({
              title: "Sample Video Title",
              description: "https://www.youtube.com/watch?v=lDxhMaNF7Qk", // The URL or any other description
            });
          }}
          className="play-btn style2 popup-video"
        >
          <i className="fas fa-play" />
          
        </a>
        
      </div>
      
    </div>
    
      {/* Modal for YouTube Video */}
      {modalVideo && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setModalVideo(null)}>
              ×
            </button>
            <h3>{modalVideo.title || "Untitled Video"}</h3>
            <div className="video-container">
              {/* Checking if YouTube ID can be extracted and rendered */}
              {modalVideo.description && extractYouTubeId(modalVideo.description) ? (
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${extractYouTubeId(modalVideo.description)}`}
                  title={modalVideo.title || "YouTube Video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <p>Invalid YouTube URL</p>
              )}
            </div>
          </div>
        </div>
      )}
  </div>
  
</section>


<section class="space">
        <div class="container">
        <h2 className="sec-title has-line">எங்களைப் பற்றி</h2>
            <div class="row">
                <div class="col-xl-3">
                    <div class="row gy-4">
                        <div class="col-xl-12 col-sm-6 border-blog dark-theme img-overlay2">
                            <div class="blog-style3">
                                <div class="blog-img blog5">
                                    <img src={about2} alt="blog image"/>
                                </div>
                                <div class="blog-content">
                                    <Link data-theme-color="#00D084" style={{backgroundColor:'#00D084'}} to={`/an/:${'அப்பாநாயகம்'}`} class="category">அப்பா நாயகம்</Link>
                                    <h3 class="box-title-20"><Link class="hover-line" to={`/an/:${'அப்பாநாயகம்'}`}>யாஸீன் மௌலானா நாயகம் அவர்களின் தவமிகு தந்தையார்</Link></h3>
                                    <div class="blog-meta">
                                        <a ><i class="far fa-user"></i>By - EMS Media</a>
                                        {/* <a href="/"><i class="fal fa-calendar-days"></i>13 Mar, 2023</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12 col-sm-6 border-blog dark-theme img-overlay2">
                            <div class="blog-style3">
                                <div class="blog-img blog5">
                                    <img src={about1} alt="blog image"/>
                                </div>
                                <div class="blog-content">
                                    <Link data-theme-color="#4E4BD0" style={{backgroundColor:'#4E4BD0'}}  to={`/tha/:${'தந்தைநாயகம்'}`} class="category">தந்தை நாயகம்</Link>
                                    <h3 class="box-title-20"><Link class="hover-line" to={`/tha/:${'தந்தைநாயகம்'}`}>ஜமாலிய்யா அஸ்ஸெய்யித் யாஸீன் மௌலானா </Link></h3>
                                    <div class="blog-meta">
                                        <a ><i class="far fa-user"></i>By - EMS Media</a>
                                        {/* <a href="/"><i class="fal fa-calendar-days"></i>10 Mar, 2023</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 mt-4 mt-xl-0">
                    <div class="dark-theme img-overlay2">
                        <div class="blog-style3">
                            <div class="blog-img blog6">
                                <img src={about} alt="blog image"/>
                            </div>
                            <div class="blog-content">
                                <Link data-theme-color="#FF9500" style={{backgroundColor:'#FF9500'}} to={`/va/:${'வாப்பாநாயகம்'}`} class="category">வாப்பா நாயகம்</Link>
                                <h3 class="box-title-30"><Link class="hover-line" to={`/va/:${'வாப்பாநாயகம்'}`}>அஸ்ஸெய்யித் கலீல் அவ்ன் மௌலானா</Link></h3>
                                <div class="blog-meta">
                                    <a ><i class="far fa-user"></i>By - EMS Media</a>
                                    {/* <a href="/"><i class="fal fa-calendar-days"></i>10 Mar, 2023</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 mt-35 mt-xl-0">
                    <div class="nav tab-menu indicator-active" role="tablist">
                        <button class="tab-btn" type="button" style={{backgroundColor:'#00D084',fontSize:'25px'}}>கொள்கைகள்</button>
                        {/* <button class="tab-btn" type="button" style={{color:'red'}} >Read More</button> */}
                    </div>
                    
                    <div class="tab-content">
                      
                        <div class="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab">
                            <div class="row gy-4">
                                <div class="col-xl-12 col-md-6 border-blog">
                                    <div class="blog-style2">
                                        <div class="blog-img">
                                            <img src={about3} alt="blog image"/>
                                        </div>
                                        <div class="blog-content">
                                            <a data-theme-color="#FF9500"  class="category">1</a>
                                            {/* <h3 class="box-title-18"><a class="hover-line" href="/">பொது நல சேவைப் புரிதல்.</a></h3> */}
                                            <div class="blog-meta">
                                                <a style={{color:'black'}}>பொது நல சேவைப் புரிதல்.</a>
                                                
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-xl-12 col-md-6 border-blog">
                                    <div class="blog-style2">
                                        <div class="blog-img">
                                            <img src={bannerImage}  alt="blog image"/>
                                        </div>
                                        <div class="blog-content">
                                            <a data-theme-color="#007BFF"  class="category">2</a>
                                            {/* <h3 class="box-title-18"><a class="hover-line" href="/">மெய்ஞ்ஞான விளக்கம் நல்கி இறைவனை அறிய வழிக் காட்டுதல்.</a></h3> */}
                                            <div class="blog-meta">
                                                <a  style={{color:'black'}}>மெய்ஞ்ஞான விளக்கம் நல்கி இறைவனை அறிய வழிக் காட்டுதல்.</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-xl-12 col-md-6 border-blog">
                                    <div class="blog-style2">
                                        <div class="blog-img">
                                            <img src={about4}  alt="blog image"/>
                                        </div>
                                        <div class="blog-content">
                                            <a data-theme-color="#00D084" class="category">3</a>
                                            {/* <h3 class="box-title-18"><a class="hover-line" href="/">மெய்ஞ்ஞான நூல்கள் வெளியிடல்.</a></h3> */}
                                            <div class="blog-meta">
                                                <a style={{color:'black'}}>மெய்ஞ்ஞான நூல்கள் வெளியிடல்.</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-xl-12 col-md-6 border-blog">
                                    <div class="blog-style2">
                                        <div class="blog-img">
                                            <img src={bannerImage}  alt="blog image"/>
                                        </div>
                                        <div class="blog-content">
                                            <a data-theme-color="#4E4BD0"  class="category">4</a>
                                            {/* <h3 class="box-title-18"><a class="hover-line" href="/">Score big with the Latest sports news.</a></h3> */}
                                            <div class="blog-meta">
                                                <a style={{color:'black'}}>நாட்டுப் பற்றுடன் வாழ உதவுதல்.</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <Link to={`/+/:${'கொள்கைகள்'}`} className="th-btn style3">
                                 Read More <i className="fas fa-arrow-up-right ms-2" />
                                   </Link>
                                  </div>
                                  </div>
                      
                    </div>
                </div>
                
            </div>
        </div>
    </section>

 

<section className="space">
  <div className="container">
    <div className="row">
      <div className="col-xl-9">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="sec-title has-line">கல்வி</h2>
          </div>
          
        </div>
        <div className="filter-active">
          <div className="border-blog2 filter-item cat1">
            <div className="blog-style4">
              <div className="blog-img">
                <img src={collegeMain1} alt="blog image" />
              </div>
              <div className="blog-content">
                <Link
                  data-theme-color="#007BFF"
                  to={`/&/:${'ஜாமீஆ'}`}
                  className="category"
                  style={{backgroundColor:"#007BFF"}}
                >
                About Us
                </Link>
                <h3 className="box-title-24">
                  <Link className="hover-line" to={`/&/:${'ஜாமீஆ'}`}>
                  This Institution founded by His Holiness Jamaliya Syed Khaleel Awn Mowlana
                  Al Hassani wal Hussaini Ai Hashimi from the Progeny of Prophet Muhammad(PBUH)
                  </Link>
                </h3>
                {/* <p className="blog-text">
                This Institution founded by His Holiness Jamaliya Syed Khaleel Awn Mowlana
                  Al Hassani wal Hussaini Ai Hashimi from the Progeny of Prophet Muhammad(PBUH)
                </p> */}
                <div className="blog-meta">
                  <Link >
                    <i className="far fa-user" />
                    By - EMS Media
                  </Link>
                </div>
                <Link to={`/&/:${'ஜாமீஆ'}`} className="th-btn style2">
                    Read More
                 </Link>
              </div>
            </div>
          </div>
          <div className="border-blog2 filter-item cat4">
            <div className="blog-style4">
              <div className="blog-img">
                <img src={college1} alt="blog image" />
              </div>
              <div className="blog-content">
                <Link
                  data-theme-color="#59C2D6"
                  to={`/&/:${'ஜாமீஆ'}`}
                  className="category"
                  style={{backgroundColor:"#59C2D6"}}
                >
                  Vision
                </Link>
                <h3 className="box-title-24">
                  <Link className="hover-line" to={`/&/:${'ஜாமீஆ'}`}>
                  To develop into a full fledged University
                  </Link>
                </h3>
                {/* <p className="blog-text">
                  Quisque eget ex rutrum, consequat odio in, tempor purus.
                  Mauris neque quam, Tellentesque sit amet rutrum ut, gravida
                  sit amet felis.
                </p> */}
                <div className="blog-meta">
                  <a >
                    <i className="far fa-user" />
                    By - EMS Media
                  </a>
                </div>
                <Link to={`/&/:${'ஜாமீஆ'}`} className="th-btn style2">
                    Read More
                 </Link>
              </div>
            </div>
          </div>
          <div className="border-blog2 filter-item cat2">
            <div className="blog-style4">
              <div className="blog-img">
                <img src={collegeMain2} alt="blog image" />
              </div>
              <div className="blog-content">
                <Link
                  data-theme-color="#FF9500"
                  to={`/&/:${'ஜாமீஆ'}`}
                  className="category"
                  style={{backgroundColor:"#FF9500"}}
                >
                Objectives
                </Link>
                <h3 className="box-title-24">
                  <Link className="hover-line" to={`/&/:${'ஜாமீஆ'}`}>
                  Our Founder wished to form a younger generation who can be self dependant
                 and can serve their community / fellow human beings.
                  </Link>
                </h3>
                {/* <p className="blog-text">
                  Quisque eget ex rutrum, consequat odio in, tempor purus.
                  Mauris neque quam, Tellentesque sit amet rutrum ut, gravida
                  sit amet felis.
                </p> */}
                <div className="blog-meta">
                  <a >
                    <i className="far fa-user" />
                    By - EMS Media
                  </a>
                </div>
                <Link to={`/&/:${'ஜாமீஆ'}`} className="th-btn style2">
                    Read More
                 </Link>
              </div>
            </div>
          </div>
          <div className="border-blog2 filter-item cat1">
            <div className="blog-style4">
              <div className="blog-img">
                <img src={college4} alt="blog image" />
              </div>
              <div className="blog-content">
                <Link
                  data-theme-color="#007BFF"
                  to={`/&/:${'ஜாமீஆ'}`}
                  className="category"
                  style={{backgroundColor:"#007BFF"}}
                >
                    Courses Offered
                </Link>
                <h3 className="box-title-24">
                  <Link className="hover-line" to={`/&/:${'ஜாமீஆ'}`}>
                  To Provide Islamic and formal general eduaction
                  with strong focus on technical trainings
                  </Link>
                </h3>
                {/* <p className="blog-text">
                  Quisque eget ex rutrum, consequat odio in, tempor purus.
                  Mauris neque quam, Tellentesque sit amet rutrum ut, gravida
                  sit amet felis.
                </p> */}
                <div className="blog-meta">
                  <a >
                    <i className="far fa-user" />
                    By - EMS Media
                  </a>
                </div>
                <Link to={`/&/:${'ஜாமீஆ'}`} className="th-btn style2">
                    Read More
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 mt-35 mt-xl-0 mb-10 sidebar-wrap">
        <div className="sidebar-area">
          <div className="widget mb-30">
            <div className="widget-ads">
              <a>
                <img
                  className="w-100"
                  src={college2}
                  alt="ads"
                />
              </a>
            </div>
          </div>
          <div className="widget mb-30">
            <div className="widget-ads">
              <a>
                <img
                  className="w-100"
                  src={collegeMain}
                  alt="ads"
                />
              </a>
            </div>
          </div>
          <div className="widget mb-30">
            <div className="widget-ads">
              <a>
                <img
                  className="w-100"
                  src={college3}
                  alt="ads"
                />
              </a>
            </div>
          </div>
          <div
            className="widget newsletter-widget2 mb-30"
            data-bg-src="assets/img/bg/particle_bg_1.png"
          >
            <h3 className="box-title-24">Contact Us</h3>
            <form className="newsletter-form">
              <input
                className="form-control"
                type="email"
                placeholder="Enter Email"
                required=""
              />
              <button type="submit" className="th-btn btn-fw">
                Send Mail
              </button>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</section>

<VideoPlaylist></VideoPlaylist>
  

<section className="space" style={{marginTop:100}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h2 className="sec-title has-line">Books Shop</h2>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <div className="filter-menu filter-menu-active">
                {/* Render ALL Tab */}
                <button
                  onClick={() => setActiveTab('*')}
                  className={`tab-btn ${activeTab === '*' ? 'active' : ''}`}
                  type="button"
                >
                  ALL
                </button>

                {/* Render category tabs dynamically */}
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                    type="button"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="row gy-24 filter-active mbn-24">
  {/* Render filtered items */}
  {filteredItems.map((item) => {
    const imageUrl = item.images
      ? `https://ems.unitdtechnologies.com/storage/${item.images}`
      : "https://via.placeholder.com/300"; // Fallback placeholder image
    

    return (
      <div
        key={item.product_id}
        className={`col-xl-4 col-md-6 filter-item ${item.category}`}
      >
        <div className="blog-style2">
          <div className="blog-img img-big">
            <img src={imageUrl} alt={item.title || "blog image"} />
          </div>
          <div className="blog-content">
            <a
              
              className="category"
              data-theme-color="#6234AC"
            >
              {item.category_title}
            </a>
            <h3 className="box-title-20">
              <Link className="hover-line" to ={`/ShopDetails/${item.product_id}`}>
                {item.title}
              </Link>
            </h3>
            <div > 
              <a >
               
                     <span style={{color:'green',marginLeft:5,}}>Rs:{item.price}</span>
              </a>
              </div>
            <div className="blog-meta">
              <a >
                <i className="fal fa-calendar-days" />
                {item.year}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </section>
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
                  src={`https://ems.unitdtechnologies.com/storage/${item.file_name}`}
                  alt="Event"
                  className="event-img"
                />
              </div>
              <div className="event-content">
                <a href="/" className="event-category">
                  Event
                </a>
                <h3 className="box-title-20">
               <Link className="hover-line" to={`/EventDetails/${item.content_id}`}>{item.title}</Link>
             </h3>
                <div className="event-meta">
                  <span className="event-meta-item">
                  <Link className="hover-line" to={`/EventDetails/${item.content_id}`}> <i className="far fa-eye"></i> Read More</Link>
                  </span>
                  <span className="event-meta-item">
                    <i className="fal fa-calendar-alt"></i> {item.content_date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className=" col-lg-19 dark-theme">
     
     </div>
    </div>
    </div>
    </div>
    </div>
    </div>

  {/*==============================
Blog Area  
==============================*/}
   <section className="space-bottom" style={{marginTop:101}}>
      <div className="container">
        <div className="row">
          {/* Main Content */}
          <div className="col-xl-8">
            {/* Popular News */}
            <h2 className="sec-title has-line">Magazine</h2>
            <div className="mb-4">
              {magazine.length > 0 && (
                <div className="dark-theme img-overlay2 space-40">
                  <div className="blog-style3">
                    <div className="blog-img">
                      <img src={emsbanner} alt="blog" />
                    </div>
                    <div className="blog-content">
                      <a
                        data-theme-color="#6234AC"
                        href={magazine[0].categoryLink}
                        className="category"
                      >
                        {magazine[0].category}
                      </a>
                      <h3 className="box-title-40">
                        <a className="hover-line" href={magazine[0].link}>
                        மறைஞானப் பேழை
                        </a>
                      </h3>
                      <div className="blog-meta">
                        <a href={magazine[0].authorLink}>
                          <i className="far fa-user" /> By -EMS Media
                        </a>
                        <a href={magazine[0].dateLink}>
                         
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="row gy-4">
              {magazine.slice(1).map((blog, index) => (
                <div className="col-md-6" key={index}>
                  <div className="blog-style2">
                    <div className="blog-img img-big">
                      <img src={`https://ems.unitdtechnologies.com/storage/${blog.file_name}`} alt="blog" />
                    </div>
                    <div className="blog-content">
                      <a
                        data-theme-color="#6234AC"
                       
                        className="category"
                      >
                        {blog.category}
                      </a>
                      <h3 className="box-title-20">
                      <a
  className="hover-line"
                    onClick={() => {
                     if (!user || !user.contact_id) {
                    const userConfirmed = window.confirm(
                  "Please Login. Click 'OK' to go to the Login page or 'Cancel' to stay."
                   );
                     if (userConfirmed) {
                  navigate("/Login"); // Navigate to the login page
                        }
                } else if (subs !=="subscribe") {
                window.alert("You do not have an active subscription. Please subscribe to access this article.");
               } else {
                navigate(`/ArticalList/${blog.magazine_id}`);
                }
                    }}
                >
             {blog.title}
                    </a>

                      </h3>
                      <div className="blog-meta">
                        <a >
                          <i className="fal fa-calendar-days" /> {blog.date}
                        </a>
                      </div>
                      <div className="blog-meta" style={{marginTop:10}}>
                      <a   onClick={() => {
                     if (!user || !user.contact_id) {
                    const userConfirmed = window.confirm(
                  "Please Login. Click 'OK' to go to the Login page or 'Cancel' to stay."
                   );
                     if (userConfirmed) {
                  navigate("/Login"); // Navigate to the login page
                        }
                } else if (subs !=="subscribe") {
                window.alert("You do not have an active subscription. Please subscribe to access this article.");
               } else {
                navigate(`/ArticalList/${blog.magazine_id}`);
                }
                    }} className="th-btn style2">
                        Read More <i className="fas fa-arrow-up-right ms-2" />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space">
              <a>
                <img
                  className="w-100 light-img"
                  src={no2Banner}
                  alt="ads"
                />
                <img
                  className="w-100 dark-img"
                  src={no2Banner}
                  alt="ads"
                />
              </a>
            </div>

            {/* Featured News */}
            {/* <h2 className="sec-title has-line">Popular Magazines</h2>
            <div className="mbn-24">
              {magazine.map((featuredBlog, index) => (
                <div className="mb-4" key={index}>
                  <div className="blog-style4">
                    <div className="blog-img w-270">
                      <img src={`https://ems.unitdtechnologies.com/storage/${featuredBlog.file_name}`} alt="blog" />
                    </div>
                    <div className="blog-content">
                      <a
                        data-theme-color="#6234AC"
                        href={featuredBlog.categoryLink}
                        className="category"
                      >
                        {featuredBlog.category}
                      </a>
                      <h3 className="box-title-22">
                        <a className="hover-line" href={featuredBlog.link}>
                          {featuredBlog.title}
                        </a>
                      </h3>
                      <div className="blog-meta">
                        <a href={featuredBlog.authorLink}>
                          <i className="far fa-user" /> By - {featuredBlog.author}
                        </a>
                        <a href={featuredBlog.dateLink}>
                          <i className="fal fa-calendar-days" /> {featuredBlog.date}
                        </a>
                      </div>
                      <a href={featuredBlog.link} className="th-btn style2">
                        Read More <i className="fas fa-arrow-up-right ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Sidebar */}
          <div className="col-xl-4 mt-35 mt-xl-0 sidebar-wrap mb-10">
            <div className="sidebar-area">
              {/* Sidebar Ads */}
              <div className="widget">
                <div className="widget-ads">
                  <a >
                    <img
                      className="w-100 light-img"
                      src={about}
                      alt="ads"
                    />
                    <img
                      className="w-100 dark-img"
                      src={about}
                      alt="ads"
                    />
                  </a>
                </div>
              </div>

              {/* Most Read */}
              <div className="widget">
                <h2 className="sec-title fs-20 has-line">Most Read</h2>
                <div className="row gy-4">
                  {magazineRead.map((blog, index) => (
                    <div className="col-xl-12 col-md-6" key={index}>
                      <div className="blog-style2">
                        <div className="blog-img img-big">
                          <img src={`https://ems.unitdtechnologies.com/storage/${blog.file_name}`} alt="blog" />
                        </div>
                        <div className="blog-content">
                          <a
                            data-theme-color="#6234AC"
                            
                            className="category"
                          >
                            {blog.category}
                          </a>
                          <h3 className="box-title-20">
                            <a className="hover-line"   onClick={() => {
                     if (!user || !user.contact_id) {
                    const userConfirmed = window.confirm(
                  "Please Login. Click 'OK' to go to the Login page or 'Cancel' to stay."
                   );
                     if (userConfirmed) {
                  navigate("/Login"); // Navigate to the login page
                        }
                } else if (subs !=="subscribe") {
                window.alert("You do not have an active subscription. Please subscribe to access this article.");
               } else {
                navigate(`/ArticalList/${blog.magazine_id}`);
                }
                    }}>
                              {blog.title}
                            </a>
                          </h3>
                          <div className="blog-meta">
                            <a >
                              <i className="fal fa-calendar-days" /> {blog.date}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              {/* <div
                className="widget newsletter-widget3"
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
                    required
                  />
                  <button type="submit" className="icon-btn">
                    <i className="fa-solid fa-paper-plane" />
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
 
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