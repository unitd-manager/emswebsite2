import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../common/user";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const FromBookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = () => {
      //var formated = title.split("-").join(" ");

      api
        .post("/content/getBooks", { category_id: 79 })
        .then((res) => {
          setBooks(res.data.data);
        })
        .catch(() => {});
    };

    getBooks();
  }, []);

  return (
    <>
  <div className="space-bottom">
    <div className="container-full-1">
      <div
        className="row th-carousel slider-shadow"
        data-slide-show={3}
        data-ml-slide-show={2}
        data-lg-slide-show={2}
        data-md-slide-show={1}
        data-sm-slide-show={1}
      >
        <div className="col-md-6 col-xxl-4">
          <div className="blog-style9">
            <div className="blog-img">
              <img src="assets/img/blog/blog_10_1.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Boxing
              </a>
              <h3 className="box-title-24">
                <a className="hover-line" href="blog-details.html">
                  Boxing: Strength skill triumph Find your greatness.
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  15 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-4">
          <div className="blog-style9">
            <div className="blog-img">
              <img src="assets/img/blog/blog_10_2.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Paragliding
              </a>
              <h3 className="box-title-24">
                <a className="hover-line" href="blog-details.html">
                  Find your wings, chase the horizon, and heights with
                  paragliding.
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  11 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-4">
          <div className="blog-style9">
            <div className="blog-img">
              <img src="assets/img/blog/blog_10_3.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Sports
              </a>
              <h3 className="box-title-24">
                <a className="hover-line" href="blog-details.html">
                  Bound by the Love of the Game: Tales from the Sports Arena
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
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xxl-4">
          <div className="blog-style9">
            <div className="blog-img">
              <img src="assets/img/blog/blog_10_4.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Busketball
              </a>
              <h3 className="box-title-24">
                <a className="hover-line" href="blog-details.html">
                  Basketball Bliss Stories from the Hardwood Court Block Area
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  16 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Blog Area  
==============================*/}
  <section className="">
    <div className="container">
      <div className="row">
        <div className="col-xl-9">
          <h2 className="sec-title has-line">Today Post</h2>
          <div className="row gy-4">
            <div className="col-xl-8">
              <div className="">
                <div className="blog-style1 style-big">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_2_4.jpg" alt="blog image" />
                  </div>
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Mountain Sky
                  </a>
                  <h3 className="box-title-30">
                    <a className="hover-line" href="blog-details.html">
                      Mountain Majesty: Where Fashion Trends and Confidence
                      Soar!
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      25 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="row gy-4">
                <div className="col-xl-12 col-sm-6 border-blog">
                  <div className="blog-style1">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_21.jpg"
                        alt="blog image"
                      />
                      <a
                        data-theme-color="#4E4BD0"
                        href="blog.html"
                        className="category"
                      >
                        Tennis
                      </a>
                    </div>
                    <h3 className="box-title-22">
                      <a className="hover-line" href="blog-details.html">
                        Leadership for the people by the people
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="author.html">
                        <i className="far fa-user" />
                        By - Tnews
                      </a>
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        17 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-sm-6 border-blog">
                  <div className="blog-style1">
                    <div className="blog-img">
                      <img
                        src="assets/img/blog/blog_1_22.jpg"
                        alt="blog image"
                      />
                      <a
                        data-theme-color="#4E4BD0"
                        href="blog.html"
                        className="category"
                      >
                        Kayaking
                      </a>
                    </div>
                    <h3 className="box-title-22">
                      <a className="hover-line" href="blog-details.html">
                        Find serenity, glide with grace kayak your way.
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="author.html">
                        <i className="far fa-user" />
                        By - Tnews
                      </a>
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        15 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <a href="https://themeforest.net/user/themeholy/portfolio">
              <img src="assets/img/ads/ads_2.jpg" alt="ads" className="w-100" />
            </a>
          </div>
        </div>
        <div className="col-xl-3 mt-35 mt-xl-0">
          <h2 className="sec-title has-line">Popular</h2>
          <div className="dark-theme img-overlay2">
            <div className="blog-style3">
              <div className="blog-img">
                <img src="assets/img/blog/blog_5_2_7.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <a
                  data-theme-color="#4E4BD0"
                  href="blog.html"
                  className="category"
                >
                  Skating
                </a>
                <h3 className="box-title-18">
                  <a className="hover-line" href="blog-details.html">
                    Glide in where skating and fashion converge!
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    10 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-overflow">
            <div className="row gy-4">
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Push boundaries, rewrite the rules of sports
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      15 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Boxing: Test your mettle, triumph with courage.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      14 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Feel the rush, embrace The intensity of hockey.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      30 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Feel the exhilaration, Make memories on skis
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      19 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Push boundaries, rewrite the rules of sports
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      18 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Boxing: Test your mettle, triumph with courage.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      23 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Feel the rush, embrace The intensity of hockey.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      23 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-sm-6 border-blog">
                <div className="blog-style5">
                  <h3 className="box-title-18">
                    <a className="hover-line" href="blog-details.html">
                      Feel the exhilaration, Make memories on skis
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      28 Aug, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="space">
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <h2 className="sec-title has-line">Trending news</h2>
        </div>
        <div className="col-auto">
          <div className="sec-btn">
            <div className="icon-box">
              <button
                data-slick-prev="#blog-slide5"
                className="slick-arrow default"
              >
                <i className="far fa-arrow-left" />
              </button>
              <button
                data-slick-next="#blog-slide5"
                className="slick-arrow default"
              >
                <i className="far fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row th-carousel"
        id="blog-slide5"
        data-slide-show={3}
        data-lg-slide-show={2}
        data-md-slide-show={2}
        data-sm-slide-show={1}
      >
        <div className="col-sm-6 col-xl-4">
          <div className="blog-style6">
            <div className="blog-img">
              <img src="assets/img/blog/blog_7_1.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Hocky
              </a>
              <h3 className="box-title-22">
                <a className="hover-line" href="blog-details.html">
                  Feel the rush, embrace the intensity of hockey.
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  25 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="blog-style6">
            <div className="blog-img">
              <img src="assets/img/blog/blog_7_2.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Bike Racing
              </a>
              <h3 className="box-title-22">
                <a className="hover-line" href="blog-details.html">
                  Bike Where speed, freedom, &amp; connection intertwine.
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
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="blog-style6">
            <div className="blog-img">
              <img src="assets/img/blog/blog_7_3.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Car Racing
              </a>
              <h3 className="box-title-22">
                <a className="hover-line" href="blog-details.html">
                  Relaxation redefined, your beach resort sanctuary
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  16 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-xl-4">
          <div className="blog-style6">
            <div className="blog-img">
              <img src="assets/img/blog/blog_7_4.jpg" alt="blog image" />
            </div>
            <div className="blog-content">
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Handball
              </a>
              <h3 className="box-title-22">
                <a className="hover-line" href="blog-details.html">
                  Handball uniting skill and passion in the game
                </a>
              </h3>
              <div className="blog-meta">
                <a href="author.html">
                  <i className="far fa-user" />
                  By - Tnews
                </a>
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  25 Mar, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Blog Area  
==============================*/}
  <section className="">
    <div className="container container-full">
      <div className="row gy-4">
        <div className="col-xxl-6">
          <div className="row gy-4">
            <div className="col-md-6 dark-theme img-overlay2">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_2_8.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Skating
                  </a>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Fashion-forward Where Trends &amp; confidence
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
            <div className="col-md-6 dark-theme img-overlay2">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_2_9.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Volleyball
                  </a>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Embrace the bump, spike victory volleyball style.
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
                </div>
              </div>
            </div>
            <div className="col-md-6 dark-theme img-overlay2">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_2_10.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Mountain Ski
                  </a>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Carve your path, conquer the snowy slopes.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      23 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 dark-theme img-overlay2">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_2_11.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Swimming
                  </a>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Tread water, aim high, play with water polo pride
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      15 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="dark-theme img-overlay2">
            <div className="blog-style3">
              <div className="blog-img">
                <img src="assets/img/blog/blog_5_9.jpg" alt="blog image" />
              </div>
              <div className="blog-content">
                <a
                  data-theme-color="#4E4BD0"
                  href="blog.html"
                  className="category"
                >
                  Handball
                </a>
                <h3 className="box-title-30">
                  <a className="hover-line" href="blog-details.html">
                    The art of teamwork, precision, and victory, where Champions
                    emerge.
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
Blog Area  
==============================*/}
  <section className="space">
    <div className="container">
      <div className="row">
        <div className="col-xl-9">
          <h2 className="sec-title has-line">Popular News</h2>
          <div className="row gy-4">
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_23.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Volleyball
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    From serve to block, embrace volleyballs energy.
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    17 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_24.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Hockey
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    Power your way to victory, dominate hockey game.
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    28 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_25.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Swimming
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    Make a splash, play with heart win water polo.
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
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_26.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Boxing
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    Boxing Strength skill triumph find your greatness.
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    22 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_27.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Football
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    Where dreams take flight goals rewrite history
                  </a>
                </h3>
                <div className="blog-meta">
                  <a href="author.html">
                    <i className="far fa-user" />
                    By - Tnews
                  </a>
                  <a href="blog.html">
                    <i className="fal fa-calendar-days" />
                    28 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 border-blog three-column">
              <div className="blog-style1">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_1_28.jpg" alt="blog image" />
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Basketball
                  </a>
                </div>
                <h3 className="box-title-22">
                  <a className="hover-line" href="blog-details.html">
                    Basketball is the canvas for your journey.
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
          <div className="space-top">
            <div className="dark-theme img-overlay2">
              <div className="blog-style3">
                <div className="blog-img">
                  <img src="assets/img/blog/blog_5_10.jpg" alt="blog image" />
                </div>
                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    href="blog.html"
                    className="category"
                  >
                    Hockey
                  </a>
                  <h3 className="box-title-30">
                    <a className="hover-line" href="blog-details.html">
                      In the pool or open sea, swim your way to victory, and
                      Conquer the waves.
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
                </div>
              </div>
            </div>
          </div>
          <div className="space-top">
            <h2 className="sec-title has-line">Featured News</h2>
            <div className="row gy-4">
              <div className="col-sm-6 border-blog two-column">
                <div className="blog-style1">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_4_15.jpg" alt="blog image" />
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Swimming
                    </a>
                  </div>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Where boundaries dissolve, and Dreams dive into reality.
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      29 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 border-blog two-column">
                <div className="blog-style1">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_4_16.jpg" alt="blog image" />
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Paragliding
                    </a>
                  </div>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Leadership for the people by the adventure people
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      29 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 border-blog two-column">
                <div className="blog-style1">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_4_17.jpg" alt="blog image" />
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Mountain Sky
                    </a>
                  </div>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Mountain skating conquer the peaks, carve your path,
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      16 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 border-blog two-column">
                <div className="blog-style1">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_4_18.jpg" alt="blog image" />
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Handball
                    </a>
                  </div>
                  <h3 className="box-title-24">
                    <a className="hover-line" href="blog-details.html">
                      Handball uniting skill and passion in the game
                    </a>
                  </h3>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user" />
                      By - Tnews
                    </a>
                    <a href="blog.html">
                      <i className="fal fa-calendar-days" />
                      17 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 mt-35 mt-xl-0 sidebar-wrap mb-10">
          <div className="sidebar-area">
            <div className="widget">
              <div className="widget-ads">
                <a href="https://themeforest.net/user/themeholy/portfolio">
                  <img
                    className="w-100"
                    src="assets/img/ads/siderbar_ads_2.jpg"
                    alt="ads"
                  />
                </a>
              </div>
            </div>
            <h2 className="sec-title fs-20 has-line">Popular Category</h2>
            <div className="widget">
              <div className="row g-10">
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_1.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_1.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Football</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_2.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_2.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Cricket</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_3.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_3.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Boxing</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_4.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_4.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Handball</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_5.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_5.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Swimming</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_6.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_6.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Volleyball</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_7.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_7.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Tennis</a>
                    </h3>
                  </div>
                </div>
                <div className="col-xl-6 col-md-3 col-6">
                  <div
                    className="category-card"
                    data-bg-src="assets/img/bg/category_bg_2_8.jpg"
                  >
                    <div className="box-icon">
                      <img src="assets/img/icon/category_1_8.svg" alt="Icon" />
                    </div>
                    <h3 className="box-title">
                      <a href="blog.html">Running</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="sec-title fs-20 has-line">Most Read</h2>
            <div className="row gy-4">
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_3_1.jpg" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a
                      data-theme-color="#FF9500"
                      href="blog.html"
                      className="category"
                    >
                      Politics
                    </a>
                    <h3 className="box-title-18">
                      <a className="hover-line" href="blog-details.html">
                        Stay informed, Navigate the world
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        30 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_3_2.jpg" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a
                      data-theme-color="#007BFF"
                      href="blog.html"
                      className="category"
                    >
                      Travel
                    </a>
                    <h3 className="box-title-18">
                      <a className="hover-line" href="blog-details.html">
                        Your beach resort Sanctuary.
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        28 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_3_3.jpg" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a
                      data-theme-color="#00D084"
                      href="blog.html"
                      className="category"
                    >
                      Life Style
                    </a>
                    <h3 className="box-title-18">
                      <a className="hover-line" href="blog-details.html">
                        Style your life news For modern living
                      </a>
                    </h3>
                    <div className="blog-meta">
                      <a href="blog.html">
                        <i className="fal fa-calendar-days" />
                        17 Mar, 2023
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-md-6 border-blog">
                <div className="blog-style2">
                  <div className="blog-img">
                    <img src="assets/img/blog/blog_3_4.jpg" alt="blog image" />
                  </div>
                  <div className="blog-content">
                    <a
                      data-theme-color="#4E4BD0"
                      href="blog.html"
                      className="category"
                    >
                      Sports
                    </a>
                    <h3 className="box-title-18">
                      <a className="hover-line" href="blog-details.html">
                        Score big with the Latest sports news.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</>

  );
};

export default FromBookList;
