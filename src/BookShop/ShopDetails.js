import React, { useState, useEffect } from "react";
import api from "../constants/api";
import {Link, useParams, useNavigate } from "react-router-dom";
import { getUser } from "../common/user";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const Shop = () => {
    const { id } = useParams();
    const user =getUser()
    const navigate = useNavigate();

    const stripHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, "text/html");
        return doc.body.textContent || "";
      };

const [quantity, setQuantity] = useState(1);
  const [categories, setCategories] = useState([]); 
  const [book, setBooks] = useState([]); 
  const addToCartMenu = ({product}) => {

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

  const addToCart=()=>{

    if (!user || !user.contact_id) {
      const userConfirmed = window.confirm(
        "Please Login. Click 'OK' to go to the Login page or 'Cancel' to stay."
      );
      if (userConfirmed) {
        navigate("/Login"); // Navigate to the login page
      }
      
    }else{
   
        book.contact_id=user.contact_id;
        book.qty = quantity
    api.post('/contact/addToCart',book)
    .then(() =>{ 
      console.log("Item Added to cart")
      navigate("/Cart"); 
    })
      
    .catch((error) =>console.log("Item error",error));
    
  }
  }


  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1 && value <= 100) {
      setQuantity(value); // Update quantity based on input
    }
  };

  const incrementQuantity = () => {
    if (quantity < 100) {
      setQuantity(quantity + 1); // Increment quantity
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrement quantity
    }
  };


  console.log('quantity',quantity)
  useEffect(() => {
    const getBooks = () => {
      api
        .post("/product/productDetail", { product_id:id })
        .then((res) => {
          res.data.data[0].images= String(res.data.data[0].images).split(',')
          setBooks(res.data.data[0]);

          api
          .post("/product/getProductbyCategoryId",{category_id:res.data.data[0].category_id})
          .then((res) => {
            setCategories(res.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
        })
        .catch(() => {});
    };

    getBooks();
  }, [id]);

  const settings = {
    dots: true,
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
          <Link to="/Home">Home</Link>
        </li>
        <li>Shop Details</li>
      </ul>
    </div>
  </div>
  {/*==============================
    Product Details
    ==============================*/}
  <section className="product-details space-top space-extra-bottom">
    <div className="container">
      <div className="row gx-60">
        <div className="col-lg-6">
          <div className="product-big-img">
            <div className="img">
              <img
                src={`https://emsmedia.net/storage/uploads/${book.images}`}
                alt="Product Image"
                style={{
                    height: "580px",
                    width: "580px",
                    objectFit: "fill",
                  }}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="product-about">
            <p className="price">
            Rs:{book.price}<del></del>
            </p>
            <h2 className="product-title">{book.title}</h2>
            {/* <div className="product-rating">
              <div
                className="star-rating"
                role="img"
                aria-label="Rated 5.00 out of 5"
              >
                <span style={{ width: "100%" }}>
                  Rated <strong className="rating">4.00</strong> out of 5 based
                  on <span className="rating">1</span> customer rating
                </span>
              </div>
              <a href="shop-details.html" className="woocommerce-review-link">
                (<span className="count">4</span> customer reviews)
              </a>
            </div> */}
            <p className="text">
             {stripHtmlTags(book.description_short)}
            </p>
            {/* <div className="checklist">
              <ul>
                <li>
                  <i className="far fa-badge-check" /> Lifetime structural, one
                  year finish warranty
                </li>
                <li>
                  <i className="far fa-badge-check" /> Mapped from “Center Caps”
                  under ” tment” tab
                </li>
                <li>
                  <i className="far fa-badge-check" /> Fully copatible with OEM
                  equimpent
                </li>
              </ul>
            </div> */}
             <div className="actions">
      <div className="quantity">
        <input
          type="number"
          className="qty-input"
          step={1}
          min={1}
          max={100}
          name="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          title="Qty"
        />
        <button
          className="quantity-plus qty-btn"
          onClick={incrementQuantity} // Call increment on click
        >
          <i className="far fa-chevron-up" />
        </button>
        <button
          className="quantity-minus qty-btn"
          onClick={decrementQuantity} // Call decrement on click
        >
          <i className="far fa-chevron-down" />
        </button>
      </div>
      <button className="th-btn" onClick={addToCart}>Add to Cart</button>
    </div>
            <div className="product_meta">
              <span className="sku_wrapper">
              Author: <span className="sku">{book.author_name}</span>
              </span>
              <span className="posted_in">
                Category:{" "}
                <a  rel="tag">
                  {book.category_title}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ul className="nav product-tab-style1" id="productTab" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link th-btn"
            id="description-tab"
            data-bs-toggle="tab"
            href="#description"
            role="tab"
            aria-controls="description"
            aria-selected="false"
          >
            Book Description
          </a>
        </li>
        {/* <li className="nav-item" role="presentation">
          <a
            className="nav-link th-btn active"
            id="reviews-tab"
            data-bs-toggle="tab"
            href="#reviews"
            role="tab"
            aria-controls="reviews"
            aria-selected="true"
          >
            Customer Reviews
          </a>
        </li> */}
      </ul>
      <div className="tab-content" id="productTabContent">
        <div
          className="tab-pane fade"
          id="description"
          role="tabpanel"
          aria-labelledby="description-tab"
        >
          <p>
          {stripHtmlTags(book.product_description)  }
          </p>
        </div>
        <div
          className="tab-pane fade show active"
          id="reviews"
          role="tabpanel"
          aria-labelledby="reviews-tab"
        >
          {/* <div className="woocommerce-Reviews">
            <div className="th-comments-wrap ">
              <ul className="comment-list">
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img
                        src="assets/img/blog/comment-author-1.jpg"
                        alt="Comment Author"
                      />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Adam Jhon</h4>
                      <span className="commented-on">
                        <i className="fal fa-calendar-alt" />
                        22 April, 2023
                      </span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                      <p className="text">
                        This product is very much qualityful and I love this
                        working system and speed.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img
                        src="assets/img/blog/comment-author-2.jpg"
                        alt="Comment Author"
                      />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Jusctin Dacon</h4>
                      <span className="commented-on">
                        <i className="fal fa-calendar-alt" />
                        26 April, 2023
                      </span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                      <p className="text">
                        They delivered the product in a few time. Product
                        quality is also very good.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img
                        src="assets/img/blog/comment-author-3.jpg"
                        alt="Comment Author"
                      />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Jacklin July</h4>
                      <span className="commented-on">
                        <i className="fal fa-calendar-alt" />
                        26 April, 2023
                      </span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                      <p className="text">
                        Their product and service is very satisfying. I highly
                        recommend their services.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="review th-comment-item">
                  <div className="th-post-comment">
                    <div className="comment-avater">
                      <img
                        src="assets/img/blog/comment-author-4.jpg"
                        alt="Comment Author"
                      />
                    </div>
                    <div className="comment-content">
                      <h4 className="name">Adison Smith</h4>
                      <span className="commented-on">
                        <i className="fal fa-calendar-alt" />
                        26 April, 2023
                      </span>
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 5.00 out of 5"
                      >
                        <span style={{ width: "100%" }}>
                          Rated <strong className="rating">5.00</strong> out of
                          5 based on <span className="rating">1</span> customer
                          rating
                        </span>
                      </div>
                      <p className="text">
                        I am just in love with this product. Their service is
                        also very good you can also try.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>{" "}
            {/* Comment Form */}
            {/* <div className="th-comment-form ">
              <div className="form-title">
                <h3 className="blog-inner-title ">Add a review</h3>
              </div>
              <div className="row">
                <div className="form-group rating-select d-flex align-items-center">
                  <label>Your Rating</label>
                  <p className="stars">
                    <span>
                      <a className="star-1" href="#">
                        1
                      </a>
                      <a className="star-2" href="#">
                        2
                      </a>
                      <a className="star-3" href="#">
                        3
                      </a>
                      <a className="star-4" href="#">
                        4
                      </a>
                      <a className="star-5" href="#">
                        5
                      </a>
                    </span>
                  </p>
                </div>
                <div className="col-12 form-group">
                  <textarea
                    placeholder="Write a Message"
                    className="form-control"
                    defaultValue={""}
                  />
                  <i className="text-title far fa-pencil-alt" />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-control"
                  />
                  <i className="text-title far fa-user" />
                </div>
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="form-control"
                  />
                  <i className="text-title far fa-envelope" />
                </div>
                <div className="col-12 form-group">
                  <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                  <label htmlFor="reviewcheck">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="col-12 form-group mb-0">
                  <button className="th-btn">Post Review</button>
                </div>
              </div>
            </div> */}
          {/* </div>  */}
        </div>
      </div>

      <div className="space-extra-top mb-30">
      <div className="row justify-content-between align-items-center">
        <div className="col-auto">
          <h2 className="sec-title">Related Products</h2>
        </div>
        <div className="col d-none d-sm-block">
          <hr className="title-line" />
        </div>
      </div>

      <Slider {...settings}>
        {categories.map((product) => (
          <div className="th-product product-grid" key={product.product_id}>
            <div className="product-img">
              <img src={`https://emsmedia.net/storage/uploads/${product.images}`} alt={product.title}style={{
                    height: "280px",
                    width: "580px",
                    objectFit: "fill",
                  }} />
              <div className="actions">
              <Link
              to={`/ShopDetails/${product.product_id}`}
              className="icon-btn popup-content"
            >
              <i className="far fa-eye" />
            </Link>
                <Link to="" onClick={() => {
                                addToCartMenu({ product });
                              }} className="icon-btn">
                  <i className="far fa-cart-plus" />
                </Link>
                {/* <a href="wishlist.html" className="icon-btn">
                  <i className="far fa-heart" />
                </a> */}
              </div>
            </div>
            <div className="product-content">
              <h3 className="product-title">
                <Link to={`/ShopDetails/${product.product_id}`}>{product.title}</Link>
              </h3>
              <span className="price">
                Rs:{product.price}
                {product.oldPrice && <del>{product.oldPrice}</del>}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  </section> 
</>

  );
};

export default Shop;
