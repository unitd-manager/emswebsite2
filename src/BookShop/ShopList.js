import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";


const Shop = () => {
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
  const currentProducts = filteredGallery.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div id="QuickView" className="quick-view mfp-hide">
        <div className="container">
          <div className="row gx-60">
            <div className="col-lg-6">
              <div className="product-big-img">
                <div className="img">
                  <img
                    src="assets/img/product/product_details_1_1.png"
                    alt="Product Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="product-about">
                <p className="price">
                  $532.85<del>$502.99</del>
                </p>
                <h2 className="product-title">Smartwatch Series 3</h2>
                <div className="product-rating">
                  <div
                    className="star-rating"
                    role="img"
                    aria-label="Rated 5.00 out of 5"
                  >
                    <span style={{ width: "100%" }}>
                      Rated <strong className="rating">5.00</strong> out of 5
                      based on <span className="rating">1</span> customer rating
                    </span>
                  </div>
                  <a
                    href="shop-details.html"
                    className="woocommerce-review-link"
                  >
                    (<span className="count">4</span> customer reviews)
                  </a>
                </div>
                <p className="text">
                  Embrace tech and style with the Smartwatch Series 3, your
                  daily companion. Stay connected, track fitness, and make a
                  statement effortlessly elevate your game today.Experience
                  convenience at your wrist and redefine.
                </p>
                <div className="checklist">
                  <ul>
                    <li>
                      <i className="far fa-badge-check" /> Lifetime structural,
                      one year finish warranty
                    </li>
                    <li>
                      <i className="far fa-badge-check" /> Mapped from “Center
                      Caps” under ” tment” tab
                    </li>
                    <li>
                      <i className="far fa-badge-check" /> Fully copatible with
                      OEM equimpent
                    </li>
                  </ul>
                </div>
                <div className="actions">
                  <div className="quantity">
                    <input
                      type="number"
                      className="qty-input"
                      step={1}
                      min={1}
                      max={100}
                      name="quantity"
                      defaultValue={1}
                      title="Qty"
                    />
                    <button className="quantity-plus qty-btn">
                      <i className="far fa-chevron-up" />
                    </button>
                    <button className="quantity-minus qty-btn">
                      <i className="far fa-chevron-down" />
                    </button>
                  </div>
                  <button className="th-btn">Add to Cart</button>
                </div>
                <div className="product_meta">
                  <span className="sku_wrapper">
                    SKU: <span className="sku">smartwatch-series-3</span>
                  </span>
                  <span className="posted_in">
                    Category:{" "}
                    <a href="shop.html" rel="tag">
                      Gadget
                    </a>
                  </span>
                  <span>
                    Tags: <a href="shop.html">Gadget</a>
                    <a href="shop.html">Smartwatch</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button title="Close (Esc)" type="button" className="mfp-close">
            ×
          </button>
        </div>
      </div>

      <div className="sidemenu-wrapper cart-side-menu d-none d-lg-block ">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls">
            <i className="far fa-times" />
          </button>
          <div className="widget woocommerce widget_shopping_cart">
            <h3 className="widget_title">Shopping cart</h3>
            <div className="widget_shopping_cart_content">
              <ul className="woocommerce-mini-cart cart_list product_list_widget ">
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/product/product_thumb_1_1.png"
                      alt="Cart Image"
                    />
                    Car Safety Seat
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      940.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/product/product_thumb_1_2.png"
                      alt="Cart Image"
                    />
                    Bus Safety Hammer
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      899.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/product/product_thumb_1_3.png"
                      alt="Cart Image"
                    />
                    Car Steering Wheel
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      756.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/product/product_thumb_1_4.png"
                      alt="Cart Image"
                    />
                    Transponder Car Key
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      723.00
                    </span>
                  </span>
                </li>
                <li className="woocommerce-mini-cart-item mini_cart_item">
                  <a href="#" className="remove remove_from_cart_button">
                    <i className="far fa-times" />
                  </a>
                  <a href="#">
                    <img
                      src="assets/img/product/product_thumb_1_5.png"
                      alt="Cart Image"
                    />
                    Safety Hand Glove
                  </a>
                  <span className="quantity">
                    1 ×
                    <span className="woocommerce-Price-amount amount">
                      <span className="woocommerce-Price-currencySymbol">
                        $
                      </span>
                      1080.00
                    </span>
                  </span>
                </li>
              </ul>
              <p className="woocommerce-mini-cart__total total">
                <strong>Subtotal:</strong>
                <span className="woocommerce-Price-amount amount">
                  <span className="woocommerce-Price-currencySymbol">$</span>
                  4398.00
                </span>
              </p>
              <p className="woocommerce-mini-cart__buttons buttons">
                <a href="cart.html" className="th-btn wc-forward">
                  View cart
                </a>
                <a href="checkout.html" className="th-btn checkout wc-forward">
                  Checkout
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

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
            <li>Shop</li>
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
                      Showing 1–9 of{products.length}
                    </p>
                  </div>
                  <div className="col-md-auto">
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
                  </div>
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
                  <a href="cart.html" className="icon-btn">
                    <i className="far fa-cart-plus" />
                  </a>
                  <a href="wishlist.html" className="icon-btn">
                    <i className="far fa-heart" />
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div
                  className="star-rating"
                  role="img"
                  aria-label="Rated 5.00 out of 5"
                >
                  <span>
                    Rated <strong className="rating">5.00</strong> out of 5 based on{" "}
                    <span className="rating">1</span> customer rating
                  </span>
                </div>
                <h3 className="product-title">
                  <a href="shop-details.html">{product.title}</a>
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
