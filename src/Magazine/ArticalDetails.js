import React, { useState, useEffect } from "react";
import api from "../constants/api";
import Slider from "react-slick";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const Magazine = () => {
  const { id } = useParams();
  const [Artical, setArtical] = useState([]);
  const [Magazine, setMagazine] = useState([]);

  const defaultImage = "https://via.placeholder.com/680x200?text=No+Image+Available";

  useEffect(() => {
    const getArticalById = async () => {
      try {
        const res = await api.post("/content/getArticleByArticeId", {
          article_id: id,
        });
        setArtical(res.data.data);

        // Use res.data.data.magazine_id for the second API call
        const res1 = await api.post("/content/getArticleByMagazineId", {
          magazine_id: res.data.data.magazine_id,
        });
        setMagazine(res1.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    getArticalById();
  }, [id]);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <a href="home-newspaper.html">Home</a>
            </li>
            <li>Artical</li>
          </ul>
        </div>
      </div>
      {/*==============================
      Blog Area
  ==============================*/}
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <a
                data-theme-color="#6234AC"
                className="category"
              >
                {Artical.category}
              </a>
              <h2 className="blog-title">{Artical.title}</h2>
              <div className="blog-meta">
                <a className="author">
                  <i className="far fa-user" />
                  By -EMS Media
                </a>
                <a>
                  <i className="fal fa-calendar-days" />
                  {Artical.author}
                </a>
              </div>
              <div className="blog-img mb-40">
                <img
                  src={`https://emsmedia.net/storage/uploads/${Artical.file_name}`}
                  alt="Blog Image"
                />
              </div>
            </div>
            <div className="col-xxl-9 col-lg-10">
              <div className="th-blog blog-single">
                <div className="blog-content-wrap">
                  <div className="share-links-wrap">
                  </div>
                  <div className="blog-content">
                    <div className="content">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: Artical.description,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="blog-author">
              <div className="auhtor-img">
                <img
                  src={`https://emsmedia.net/storage/uploads/${Artical.file_name}`}
                  alt="Artical Image"
                />
              </div>
              <div className="media-body">
                <div className="author-top">
                  <div>
                    <h3 className="author-name">
                      <a className="text-inherit" href="team-details.html">
                        Ronald Richards
                      </a>
                    </h3>
                    <span className="author-desig">Founder &amp; CEO</span>
                  </div>
                  <div className="social-links">
                    <a href="https://facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://instagram.com/" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <p className="author-text">
                  Adventurer and passionate travel blogger. With a backpack full
                  of stories and a camera in hand, she takes her readers on
                  exhilarating journeys around the world.
                </p>
              </div>
            </div> */}

              <div className="row slider-shadow th-carousel">
                <div className="row align-items-center">
                  <div className="col">
                    <h2 className="sec-title has-line">Related Artical</h2>
                  </div>
                  <div className="col-auto">
                    <Slider {...settings}>
                      {Magazine.map((product) => (
                        <div
                          className="th-product product-grid"
                          key={product.magazine_id}
                        >
                          <div className="product-img">
                            <img
                              src={
                                product.file_name
                                  ? `https://emsmedia.net/storage/uploads/${product.file_name}`
                                  : defaultImage
                              }
                              alt={product.title}
                              style={{
                                height: "200px",
                                width: "680px",
                                objectFit: "fill",
                              }}
                            />
                          </div>
                          <div className="product-content">
                            <p>
                              <Link
                                to={`/ArticalDetails/${product.article_id}`}
                              >
                                {product.title}
                              </Link>
                            </p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Magazine;
