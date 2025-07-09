import React from "react";
import { Link } from "react-router-dom";


import EmsLogo from "../assets/img/logo Ems.png"
import about from "../assets/img/Vappa nayagam.png"
import about1 from "../assets/img/thanthai.png"

// import api from "../constants/api";
import "../assets/css/event.css";

const Home = () => {
  return (
    <>
      <footer
        className="footer-wrapper footer-layout1"
        data-bg-src="../assets/img/logo Ems.png"
      >
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 col-xl-3">
                <div className="widget footer-widget">
                  <div className="th-widget-about">
                    <div className="about-logo" >
                      <Link to="/">
                        <img src={EmsLogo} alt="Ems Media" />
                      </Link>
                      <p className="about-text"style={{marginLeft:20}}>
                    ஏகத்துவ மெய்ஞ்ஞான சபை
                    </p>
                    </div>
                   
                  
                    <div className="th-social style-black" style={{marginLeft:50}}>
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
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Our Wesite Link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                      <Link to="/Magazine">EMS Magazine</Link>
                      </li>
                      <li>
                      <Link to="https://www.awniyyabookstore.com/"  target="_blank"
                        rel="noopener noreferrer">Awniyya Books Store</Link>
                      </li>
                      <li>
                      <Link to="https://www.yaseenrali.com/"  target="_blank"
                        rel="noopener noreferrer">Yaseenrali</Link>
                      </li>
                      <li>
                      <Link to="https://www.youtube.com/@EMSMEDIA">EMS Web TV channel</Link>
                      </li>
                      <li>
                      <Link to="https://emsmedia.net/#/">EMS Media</Link>
                      </li>
                      {/* <li>
                      <Link to="/">Entertainment</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                      <Link to="/ShopList/ShopList">நூற்கள்</Link>
                      </li>
                      <li>
                      <Link to="நிகழ்ச்சிகள்/புகைப்படங்கள்">புகைப்படங்கள்</Link>
                      </li>
                      <li>
                      <Link to="நிகழ்ச்சிகள்/காணொளிகள்">காணொளி</Link>
                      </li>
                      <li>
                      <Link to="நிகழ்ச்சிகள்/ஆடியோ">ஆடியோ</Link>
                      </li>
                      <li>
                      <Link to="நிகழ்ச்சிகள்/நிகழ்வுகள்">நிகழ்வுகள்</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">About</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to={`/va/:${'வாப்பாநாயகம்'}`}>
                          <img
                            src={about}
                            alt="Blog Image"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="hover-line" to={`/va/:${'வாப்பாநாயகம்'}`}>
                          அஸ்ஸெய்யித் கலீல் அவ்ன் மௌலானா
                          </Link>
                        </h4>
                        {/* <div className="recent-post-meta">
                          <Link to="/">
                            <i className="fal fa-calendar-days" />
                            21 June, 2023
                          </Link>
                        </div> */}
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link  to={`/tha/:${'தந்தைநாயகம்'}`}>
                          <img
                            src={about1}
                            alt="Blog Image"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="hover-line" to={`/tha/:${'தந்தைநாயகம்'}`}>
                          ஜமாலிய்யா அஸ்ஸெய்யித் யாஸீன் மௌலானா
                          </Link>
                        </h4>
                        {/* <div className="recent-post-meta">
                          <Link to="/">
                            <i className="fal fa-calendar-days" />
                            22 June, 2023
                          </Link>
                        </div> */}
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
                  Copyright <i className="fal fa-copyright" /> 2020{" "}
                  <Link to="/">EMS Media</Link>. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-auto ms-auto d-none d-lg-block">
                <div className="footer-links">
                  <ul>
                    <li>
                    <Link to="/">Privacy Policy</Link>
                    </li>
                    <li>
                    <Link to="/">Terms &amp; Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
