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
                  <h3 className="widget_title">Our Wesite Link</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                      <Link to="/">EMS Magazine</Link>
                      </li>
                      <li>
                      <Link to="/">Awniyya Books Store</Link>
                      </li>
                      <li>
                      <Link to="/">Yaseenrali</Link>
                      </li>
                      <li>
                      <Link to="/">EMS Web TV channel</Link>
                      </li>
                      <li>
                      <Link to="/">EMS Media</Link>
                      </li>
                      <li>
                      <Link to="/">Entertainment</Link>
                      </li>
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
                      <Link to="/ShopList">நூற்கள்</Link>
                      </li>
                      <li>
                      <Link to="/pugaipadangal">புகைப்படங்கள்</Link>
                      </li>
                      <li>
                      <Link to="/kaanoli">காணொளி</Link>
                      </li>
                      <li>
                      <Link to="/Audios">ஆடியோ</Link>
                      </li>
                      <li>
                      <Link to="/nigazhvugal">நிகழ்வுகள்</Link>
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
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/">
                          <img
                            src={about}
                            alt="Blog Image"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="hover-line" to="/">
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
                        <Link to="/">
                          <img
                            src={about1}
                            alt="Blog Image"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link className="hover-line" to="/">
                          ஜமாலிய்யா அஸ்ஸெய்யித் யாஸீன் மௌலானா
                          </Link>
                        </h4>
                        {/* <div className="recent-post-meta">
                          <Link to="blog.html">
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
