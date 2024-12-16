import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link, useNavigate,useParams } from "react-router-dom";
import Slider from "react-slick";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";
import about from "../assets/img/Vappa nayagam.png"
import no2Banner from "../assets/img/115497_2.png"
import emsbanner from "../assets/img/EmsBanner.jpg"


const Artical = () => {
  
  const defaultImage = "https://via.placeholder.com/680x200?text=No+Image+Available";
  const { id } = useParams();
  const [Artical, setArtical] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setSelectedCategory] = useState("All");


  console.log('categories',categories)

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  const handleClearCategory = () => {
    setSelectedCategory("All");
  };

  useEffect(() => {
    const getArticalById = () => {
      api
        .post("/content/getArticleByMagazineId", { magazine_id: id })
        .then((res) => {
          setArtical(res.data.data);
        })
        .catch(() => {});
    };

    getArticalById();
  }, [id]);

 
    // Group articles by category
    const groupedArticles = Artical.reduce((acc, article) => {
      const category = article.category || "Uncategorized"; // Handle missing categories
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(article);
      return acc;
    }, {});

  const applyFilters = () => {
    let filteredData = [...Artical];

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

    if (categories !== "All") {
      filteredData = filteredData.filter(
        (item) => item.category && item.category === categories
      );
    }

    return filteredData;
  };

  const filteredGallery = applyFilters();
  

  const totalPages = Math.ceil(filteredGallery.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleGallery = filteredGallery.slice(startIndex, endIndex);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
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
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Magazine">Magazine</Link>
            </li>
            <li>Artical List</li>
          </ul>
        </div>
      </div>
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-9 col-lg-8">
              <div className="mb-30">
                {visibleGallery.map((featuredBlog, index) => (
                  <div className="border-blog2">
                    <div className="blog-style7">
                    <div className="blog-content">
                      </div>
                      <div className="blog-img w-386">
                        <img
                           src={
                            featuredBlog.file_name
                              ? `https://emsmedia.net/storage/uploads/${featuredBlog.file_name}`
                              : defaultImage
                          }
                          alt="artical image"
                        />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#FF9500"
                          className="category"
                          style={{marginBottom:15}}
                        >
                         {featuredBlog.category}
                        </a>
                        <h3 className="box-title-30">
                          <Link to={`/ArticalDetails/${featuredBlog.article_id}`} className="hover-line">
                           {featuredBlog.title}
                          </Link>
                        </h3>
                        {/* <p className="blog-text">
                          Encapsulates the belief that embracing diversity and
                          engaging in Constructive dialogue are fundamental to
                          the growth
                        </p> */}
                        <div className="blog-meta">
                          <a >
                            <i className="far fa-user" />
                            By - EMS Media
                          </a>
                          <a>
                            <i className="fal fa-calendar-days" />
                            {featuredBlog.author}
                          </a>
                        </div>
                        <Link to={`/ArticalDetails/${featuredBlog.article_id}`} className="th-btn style2">
                          Read More
                          <i className="fas fa-arrow-up-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="th-pagination mt-40">
            <ul>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(index + 1);
                    }}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              {currentPage < totalPages && (
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage + 1);
                    }}
                  >
                    <i className="fas fa-arrow-right" />
                  </a>
                </li>
              )}
            </ul>
          </div>
            </div>
            <div className="col-xxl-3 col-lg-4 sidebar-wrap">
              <aside className="sidebar-area">
              {/* <div className="widget  ">
                  <div className="widget-ads">
                    <a>
                      <img
                        className="w-100"
                        src={about}
                        alt="ads"
                      />
                    </a>
                  </div>
                </div> */}
                <div className="widget widget_search  ">
                  <form className="search-form">
                    <input type="text" onChange={handleSearchChange} placeholder="Enter Keyword" />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories  ">
                  <h3 className="widget_title">Categories</h3>
                  {categories !== "All" && (
                    <button
                      onClick={handleClearCategory}
                      style={{
                        marginTop: "10px",
                        cursor: "pointer",
                        color: "blue",
                        textDecoration: "underline",
                        background: "none",
                        border: "none",
                        padding: 0,
                      }}
                    >
                      Clear
                    </button>
                  )}

                  <ul>
             {Object.entries(groupedArticles).map(([category, articles], index) => (
          <li key={index}>
            <Link
              data-bg-src="assets/img/bg/category_bg_1_1.jpg"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleCategoryChange(category);
                console.log(`Selected Category: ${category}`);
              }}
            >
              {category} ({articles.length})
            </Link>
          </li>
        ))}
      </ul>
                </div>
                {/* <div className="col-auto">
                    <Slider {...settings}>
                      {visibleGallery.map((product) => (
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
                                height: "180px",
                                width: "480px",
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
                  </div> */}
               
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Artical;
