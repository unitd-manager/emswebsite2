import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link,useNavigate } from "react-router-dom";
import { getUser } from "../common/user";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const Shop = () => {
   
  const navigate = useNavigate();
  const user = getUser()

  const [categories, setCategories] = useState([]); // Categories fetched from API
  const [products, setProducts] = useState([]); // Assuming you have products data
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initial category
  const [searchQuery, setSearchQuery] = useState("");

  console.log("products", products);

  useEffect(() => {
    api
      .get("/product/getProductBookList")
      .then((res) => {
        res.data.data.forEach((element) => {
          element.tag = String(element.tag).split(",");
        });
        setProducts(res.data.data);
      })
      .catch(() => {
        console.log("error");
      });
    // }
  }, []);

  useEffect(() => {
    api
      .get("/product/getProductBookCato")
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const applyFilters = () => {
    let filteredData = [...products];

    // Apply category filter
    if (selectedCategory !== "All") {
      filteredData = filteredData.filter(
        (item) => item.category_title === selectedCategory
      );
    }

    // Apply search filter
    if (searchQuery !== "") {
      filteredData = filteredData.filter(
        (item) =>
          (item.title &&
            item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (item.author_name &&
            item.author_name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filteredData;
  };

  const filteredGallery = applyFilters();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };
  const handleClearCategory = () => {
    setSelectedCategory("All");
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(filteredGallery.length / itemsPerPage);

  // Get current page products
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredGallery.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const addToCart = ({product}) => {

    console.log('userData',user)

    const book = product
    if (!user || !user.contact_id) {
      const userConfirmed = window.confirm(
        "Please Login. Click 'OK' to go to the Login page or 'Cancel' to stay."
      );
      if (userConfirmed) {
        navigate("/Login"); // Navigate to the login page
      }
    } else {
      book.contact_id = user.contact_id;
      book.qty = 1;
      api
        .post("/contact/addToCart", book)
        .then(() => {
          alert("Item Added to cart");
          // navigate("/Cart");
        })

        .catch((error) => console.log("Item error", error));
    }
  };

  return (
    <>  
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

      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <a href="home-newspaper.html">Home</a>
            </li>
            <li> Book Shop</li>
          </ul>
        </div>
      </div>
      {/*==============================
Product Area
==============================*/}
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-xl-9 col-lg-8">
              <div className="th-sort-bar">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md">
                    <p className="woocommerce-result-count">
                      Showing 1–{currentProducts.length} of{products.length}
                    </p>
                  </div>
                  {/* <div className="col-md-auto">
                    <form className="woocommerce-ordering" method="get">
                      <select
                        name="orderby"
                        className="orderby"
                        aria-label="Shop order"
                      >
                        <option value="menu_order" selected="selected">
                          Default Sorting
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price-desc">
                          Sort by price: high to low
                        </option>
                      </select>
                    </form>
                  </div> */}
                </div>
              </div>
              <div>
                {/* Product Grid */}
                <div className="row gy-40">
                  {currentProducts.map((product) => (
                    <div className="col-xl-4 col-sm-6" key={product.product_id}>
                      <div className="th-product product-grid">
                        <div className="product-img">
                          <img
                            src={`https://emsmedia.net/storage/uploads/${product.images}`}
                            alt="Product Image"
                            style={{
                              height: "280px",
                              width: "580px",
                              objectFit: "fill",
                            }}
                          />
                          <div className="actions">
                            <Link
                              to={`/ShopDetails/${product.product_id}`}
                              className="icon-btn popup-content"
                            >
                              <i className="far fa-eye" />
                            </Link>
                            <Link
                              to=""
                              onClick={() => {
                                addToCart({ product });
                              }}
                              className="icon-btn"
                            >
                              <i className="far fa-cart-plus" />
                            </Link>
                            {/* <a href="wishlist.html" className="icon-btn">
                              <i className="far fa-heart" />
                            </a> */}
                          </div>
                        </div>
                        <div className="product-content">
                          {/* <div
                            className="star-rating"
                            role="img"
                            aria-label="Rated 5.00 out of 5"
                          > */}
                            {/* <span>
                              Rated <strong className="rating">5.00</strong> out
                              of 5 based on <span className="rating">1</span>{" "}
                              customer rating
                            </span> */}
                          {/* </div> */}
                          <h3 className="product-title">
                            <Link to ={`/ShopDetails/${product.product_id}`}>{product.title}</Link>
                          </h3>
                          <span className="price">Rs:{product.price}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="th-pagination text-center pt-50">
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
            </div>
            <div className="col-xl-3 col-lg-4 sidebar-wrap">
              <aside className="sidebar-area sidebar-shop">
                <div className="widget widget_search  ">
                  <form className="search-form">
                    <input
                      type="text"
                      onChange={handleSearchChange}
                      placeholder="Enter Keyword"
                    />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
                <div className="widget widget_categories">
                  <h3 className="widget_title">Categories</h3>
                  {selectedCategory !== "All" && (
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
                    {categories.map((product) => (
                      <li key={product.category_id}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent link navigation
                            handleCategoryChange(product.category_title);
                          }}
                        >
                          {product.category_title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
