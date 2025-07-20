import React, { useState, useEffect,useRef } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import api from "../constants/api";

const MarqueeContent = () => {
  const [religion, setReligion] = useState([]);

  const { contentId } = useParams();

  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);
  const [banners, setBanner] = useState([]);
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

  const [imageHeight, setImageHeight] = useState("300px");

useEffect(() => {
  const updateHeight = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setImageHeight("200px"); // mobile
    } else if (width <= 1024) {
      setImageHeight("250px"); // tablet
    } else {
      setImageHeight("300px"); // desktop
    }
  };

  updateHeight();
  window.addEventListener("resize", updateHeight);

  return () => window.removeEventListener("resize", updateHeight);
}, []);

  const bannersettings = {
    // dots: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: null, // Placeholder for main slider
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getContentById", {
          content_id: contentId,
        });
        setReligion(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [contentId]); // Dependency array is empty because `id` is a constant.

  const getBanners = () => {
    // First API call to get banners
    api.post("/content/getMarqueeContent", {
      content_id: contentId,
    })
      .then((res) => {
        setBanner(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching banners:", error);
      });
  };
  useEffect(() => {
    getBanners();
}, [contentId]);


  return (
    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <a data-theme-color="#6234AC" className="category">
              {religion.title}
            </a>
            <h2 className="blog-title">{religion.contentId}</h2>
            <div className="blog-meta">
              <a className="author">
                <i className="far fa-user"></i>By - Ems Media
              </a>
              <a style={{ color: "black" }}>
                <i className="fal fa-calendar-days"></i>{" "}
                {religion.content_date
                  ? new Date(religion.content_date).toLocaleDateString("en-GB")
                  : ""}
              </a>
            </div>
          </div>
          <div className="bannerImageMarquee">
      {/* Main Banner Slider */}
      <Slider
  {...bannersettings}
  asNavFor={thumbSlider.current}
  ref={mainSlider}
>
  {Array.isArray(banners) &&
    banners.map((item) => (
      <div key={item.content_id} className="single-blog">
        <div className="part-img">
          <img
            src={`https://ems.unitdtechnologies.com/storage/${item.file_name}`}
            alt={`News ${item.content_id}`}
            style={{
              width: "100%",
              height: imageHeight,
              // objectFit: "cover",
              borderRadius: "8px",
              display: "block",
            }}
          />
        </div>
      </div>
    ))}
</Slider>

    </div>
          <div className="col-xxl-9 col-lg-10">
            <div className="th-blog blog-single">
              <div className="blog-content-wrap">
                <div className="share-links-wrap">
                  <div className="share-links">
                    <span></span>
                  </div>
                </div>
                <div className="blog-content">
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: religion.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeContent;
