import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import NavMenu from "../components/NavMenu";
import NavMenuCopy from "../components/NavMenucopy";
import { getCart } from "../common/headerCartApi";
import { getUser } from "../common/user";
import logoFooter from "../assets/img/logo-footer.svg";
import logoFooterBlack from "../assets/img/logo-footer-black.svg";
import logwhite from "../assets/img/logo Emss.png";
import logosvg from "../assets/img/logo.svg";

import api from "../constants/api";
import "../assets/css/event.css";



const Home = () => {

  const [CartItem, setCartItems] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [firstName, setFirstName] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigate = useNavigate();

  const loadCart = async () => {
    const cart = await getCart(); // Wait for the cart data to load
    setCartItems(cart);
  };

  useEffect(()=>{
    loadCart()
  }, [CartItem]);

  
  const logout = () => {
    localStorage.clear();
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  
  const navCart =()=>{
    if (!user || !user.contact_id) {
      const userConfirmed = window.confirm(
        "Please Login. Click 'OK' to go to the Login page or 'Cancel' to stay."
      );
      if (userConfirmed) {
        navigate("/Login"); // Navigate to the login page
      }      
    }else{
    navigate('/Cart')
    }
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
      .get("/content/getMarquee")
      .then((res) => {
        setMarquee(res.data.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const marqueeValue = marquee && marquee?.title;

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
                  <Link to ='/'>
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
                        <Marquee speed={50} gradient={false} pauseOnHover className="slick-marquee">
              {marquee.map((item, index) => (
                <div className="col-auto" key={index}>
                  <a className="breaking-news">
                    {item.title}
                  </a>
                </div>
              ))}
            </Marquee>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 text-end d-none d-xl-block">
  <div className="social-links">
    <span className="social-title">Follow Us :</span>
    <a
      href="https://www.facebook.com/emsabaimedia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-facebook-f" />
    </a>
    <a
      href="https://x.com/media_ems"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-twitter" />
    </a>
    <a
      href="https://www.linkedin.com/in/ems-media-65725a368"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin-in" />
    </a>
    <a
      href="https://www.instagram.com/emsabaimedia"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-instagram" />
    </a>
    <a
      href="https://www.youtube.com/emsmedia"
      target="_blank"
      rel="noopener noreferrer"
    >
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
                      {/* {user ? (
              <div style={{ padding: "10px", textAlign: "left", fontWeight: "bold" ,color: "#ff6347"}}>
                Welcome, {user.first_name}!
              </div>
            ) : null} */}

                        {/* <button
                          type="button"
                          className="simple-icon searchBoxToggler"
                        >
                          <i className="far fa-search" />
                        </button> */}
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
                          className="th-menu-toggle d-block d-lg-none"  onClick={toggleMenu}
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
                {user ? (
              <div style={{ padding: "10px", textAlign: "left", fontWeight: "bold"}}>
                Welcome, {user.first_name}!
              </div>
            ) : null}
                </li>
                <li>
                  <i className="fal fa-calendar-days" />
                  <a>{currentDate}</a>
                </li>
              </ul>
            </div>
          </div>
         
          <div className="col-auto">
  <div className="header-links">
  <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
      {/* User Icon with Dropdown */}
     
     
      <li className="d-none d-sm-inline-block">
    <i className="fas fa-book-open" />
            <Link to="/Magazine">Magazine</Link>
          </li>
          
      <li>
        <i className="far fa-envelope" />
        <a href="mailto:info@emsmedia.net">info@emsmedia.net</a>
      </li>
      <li style={{ display: "inline-block", position: "relative" }}>
      <button
          onClick={toggleDropdown}
          style={{
            background: "none",
            border: "none",
            fontSize: "14px",
            cursor: "pointer",
             // Bright red color for the user icon
          }}
        >
            <i className="far fa-user" /> 
            {/* Font Awesome User Icon */}
        </button>

   
      {/* Show Login and Register links if the user is not logged in */}
      {/* {!user && (
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
      )} */}

        {isDropdownOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: "0",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              width: "150px"
            }}
          >
            {/* Display Welcome message if user is logged in
            {user ? (
              <div style={{ padding: "10px", textAlign: "left", fontWeight: "bold" }}>
                Welcome, {user.first_name}!
              </div>
            ) : null} */}

            {/* Links for Login, Register, Profile, Logout */}
            {!user ? (
              <>
                <li style={{ padding: "10px", textAlign: "left" }}>
                  <Link to="/Login" style={{ textDecoration: "none", color: "#333" }}>
                    Login
                  </Link>
                </li>
                <li style={{ padding: "10px", textAlign: "left" }}>
                  <Link to="/Register" style={{ textDecoration: "none", color: "#333" }}>
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li style={{ padding: "10px", textAlign: "left" }}>
                  <Link
                    to="#"
                    onClick={logout}
                    style={{ textDecoration: "none", color: "#333" }}
                  >
                    Logout
                  </Link>
                </li>
                <li style={{ padding: "10px", textAlign: "left" }}>
                  <Link to="/Profile" style={{ textDecoration: "none", color: "#333" }}>
                    Profile
                  </Link>
                </li>
                {/* <li style={{ padding: "10px", textAlign: "left" }}>
                  <Link to="/Orders" style={{ textDecoration: "none", color: "#333" }}>
                    My Orders
                  </Link>
                </li> */}
              </>
            )}
          </div>
        )}
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
