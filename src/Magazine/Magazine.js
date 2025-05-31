import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { getUser } from "../common/user";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";
import about from "../assets/img/magazine.jpg";
import emsbanner from "../assets/img/EmsBanner.jpg";
import Login from "../auth/Login"
import Popup from "./PopUp";

const Magazine = () => {
  const navigate = useNavigate();
  const user = getUser();
  const [magazine, setMagazine] = useState([]);
  const [year, setYear] = useState([]);
  const [month, setMonth] = useState([]);
  const [magazineRead, setMagazineRead] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const defaultImage = "https://via.placeholder.com/680x200?text=No+Image+Available";
  const [subs, setSubs] = useState("");
  
  console.log('subs',subs)

  useEffect(() => {
    getMagazine();
    getMagazineMostRead();
    getYear();
    getmonth();
  }, []);
  
  const contactId = user?.contact_id
  
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

  const clearFilters = () => {
    setSelectedYear("");
    setSelectedMonth("");
  };

  const getMagazine = () => {
    api
      .get("/content/getMagazine")
      .then((res) => {
        setMagazine(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
  };
  const getYear = () => {
    api
      .get("/content/getMagazineYear")
      .then((res) => {
        setYear(res.data.data.map((item) => item.year)); // Extract 'year' property
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
  };

  const getmonth = () => {
    api
      .get("/content/getMagazineMonth")
      .then((res) => {
        setMonth(res.data.data.map((item) => item.month)); // Extract 'month' property
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
  };

  const getMagazineMostRead = () => {
    api
      .get("/content/getMagazine")
      .then((res) => {
        const firstFiveRecords = res.data.data.slice(0, 5);
        setMagazineRead(firstFiveRecords);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
  };

  // if (!user || !user.contact_id) {
  //   const userConfirmed = window.confirm(
  //     "Please Login. Click 'OK' to go to the Login page or 'Cancel' to stay."
  //   );
  //   if (userConfirmed) {
  //     navigate("/Login");
  //   }
  // }

  const applyFilters = () => {
    let filteredData = [...magazine];

    // Apply search query
    if (searchQuery !== "") {
      filteredData = filteredData.filter(
        (item) =>
          (item.search_keyword &&
            item.search_keyword
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) ||
          (item.title &&
            item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply year filter
    if (selectedYear !== "") {
      filteredData = filteredData.filter((item) => item.year === selectedYear);
    }

    // Apply month filter
    if (selectedMonth !== "") {
      filteredData = filteredData.filter((item) => item.month === selectedMonth);
    }

    return filteredData;
  };

  const filteredGallery = applyFilters();
  

  // Pagination logic
  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = filteredGallery.slice(
    firstArticleIndex,
    lastArticleIndex
  );
  const totalPages = Math.ceil(filteredGallery.length / articlesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    {contactId ? (
    <>
     {subs ==='subscribe' ? (

      <section className="space-bottom" style={{ marginTop: 52 }}>
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-xl-9">
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
                            <i className="far fa-user" /> By - EMS Media
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mbn-24">
                {currentArticles.map((featuredBlog, index) => (
                  <div className="mb-4" key={index}>
                    <div className="blog-style7">
                      <div className="blog-img w-270">
                        <img
                          src={
                            featuredBlog.file_name
                              ? `https://ems.unitdtechnologies.com/storage/${featuredBlog.file_name}`
                              : defaultImage
                          }
                          alt="blog"
                        />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#6234AC"
                          // href={featuredBlog.categoryLink}
                          className="category"
                        >
                          {featuredBlog.category}
                        </a>
                        <h3 className="box-title-22">
                          <Link to={`/ArticalList/${featuredBlog.magazine_id}`} className="hover-line" >
                            {featuredBlog.title}
                          </Link>
                        </h3>
                        <div className="blog-meta">
                          <a >
                            <i className="far fa-user" /> By - EMS Media{" "}
                            {featuredBlog.author}
                          </a>
                          <a >
                            <i className="fal fa-calendar-days" />{" "}
                            {featuredBlog.date}
                          </a>
                        </div>
                        <Link
                          to={`/ArticalList/${featuredBlog.magazine_id}`}
                          className="th-btn style2"
                        >
                          Read More <i className="fas fa-arrow-up-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="th-pagination mt-40">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`pagination-btn ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xxl-3 col-lg-4 sidebar-wrap" style={{marginTop:50}}>
              <aside className="sidebar-area">
                {/* Search Form */}
                <div className="widget widget_search">
                  <form className="search-form">
                    <input
                      type="text"
                      placeholder="Enter Keyword"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>

                {/* Category Filter */}
                {/* <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="form-select"
                  >
                    <option value="">All Categories</option>
                    {["Sports", "Business", "Politics", "Health", "Technology", "Entertainment"].map(
                      (category, index) => (
                        <option value={category} key={index}>
                          {category}
                        </option>
                      )
                    )}
                  </select>
                </div> */}

                {/* Year Filter */}

                <div className="widget">
                  <h3 className="widget_title">Filter by Year</h3>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select Year</option>
                    {year.map((year, index) => (
                      <option value={year} key={index}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Month Filter */}
                <div className="widget">
                  <h3 className="widget_title">Filter by Month</h3>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="form-select"
                  >
                    <option value="">Select Month</option>
                    {month.map((month, index) => (
                      <option value={month} key={index}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedYear !== "" || selectedMonth !== "" ? (
                  <Link onClick={() => clearFilters()}>Clear</Link>
                ) : null}

                {/* Advertisement */}
                {/* <div className="widget">
                  <div className="widget-ads">
                    <a>
                      <img className="w-100" src={about} alt="ads" />
                    </a>
                  </div>
                </div> */}
              </aside>
            </div>
          </div>
        </div>
      </section>
     ):(
     
       <Popup></Popup>
     )}
    </>
    ):(

      <Login ></Login>

    )}
    </>
  );
};

export default Magazine;
