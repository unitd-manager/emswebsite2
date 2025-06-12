import React, { useState, useEffect } from "react";
import api from "../constants/api";



const BlogCard = ({ magazine }) => (
  <div className="col-md-6">
    <div className="blog-style2">
      <div className="blog-img img-big">
        {/* <img src={`https://ems.unitdtechnologies.com/storage/${magazine.file_name}`} alt={magazine.title} /> */}
      </div>
      <div className="blog-content">
        <a data-theme-color="#6234AC" href="/" className="category">
          {/* {magazine.title} */}
        </a>
        <h3 className="box-title-20">
          <a className="hover-line" href={magazine}>
            {/* {magazine.title} */}
          </a>
        </h3>
        <div className="blog-meta">
          {/* <a href="/">
            <i className="fal fa-calendar-days" /> {magazine.date}
          </a> */}
        </div>
      </div>
    </div>
  </div>
);

const SidebarCard = ({ item }) => (
  <div className="col-xl-12 col-md-6">
    <div className="blog-style2">
      <div className="blog-img img-big">
        {/* <img src={`https://ems.unitdtechnologies.com/storage/${item.file_name}`} alt={item.title} /> */}
      </div>
      <div className="blog-content">
        <a data-theme-color="#6234AC" href="/" className="category">
          {/* {item.category_title} */}
        </a>
        <h3 className="box-title-20">
          <a className="hover-line" href="/">
            {/* {item.title} */}
          </a>
        </h3>
        <div className="blog-meta">
          <a href="/">
            {/* <i className="fal fa-calendar-days" /> {item.date} */}
          </a>
        </div>
      </div>
    </div>
  </div>
);

const PopularNews = ({magazine}) => (
  <div className="col-xl-8">
    <h2 className="sec-title has-line">Popular News</h2>
    <div className="mb-4">
      <div className="dark-theme img-overlay2 space-40">
        <div className="blog-style3">
          <div className="blog-img">
            <img src="assets/img/blog/blog_5_15.jpg" alt="Popular Blog" />
          </div>
          <div className="blog-content">
            <a data-theme-color="#6234AC" href="/" className="category">
              Technology
            </a>
            <h3 className="box-title-40">
              <a className="hover-line" href="/">
                Tech Unleash possibilities, shape a brighter future.
              </a>
            </h3>
            <div className="blog-meta">
              <a href="/">
                <i className="far fa-user" /> By - Ems Media
              </a>
              <a href="/">
                <i className="fal fa-calendar-days" /> 26 Mar, 2023
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row gy-4">
      {[
       magazine
      ].map((item, index) => (
        <BlogCard key={index} {...item} />
      ))}
    </div>
  </div>
);

const Sidebar = ({magazine}) => (
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
          {[
           magazine
          ].map((item, index) => (
            <SidebarCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const VideoPlaylist = () => {

  const [Magazine, setMagazine] = useState([]);
  useEffect(() => {
    getMagazine();
  }, []);

  const getMagazine = () => {
    api
      .get("/content/getMagazine")
      .then((res) => {
        setMagazine(res.data.data);
      })
      .catch(() => {});
  };
  return(
  <section className="space-bottom">
    <div className="container">
      <div className="row">
        <PopularNews  magazine={Magazine}/>
        <Sidebar  magazine={Magazine}/>
      </div>
    </div>
  </section>
  )
};

export default VideoPlaylist;
