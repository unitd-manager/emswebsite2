import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link, useNavigate,useParams } from "react-router-dom";
import { getUser } from "../common/user";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";
import BookReview1 from "../assets/img/booknew.gif";
import BookReview2 from "../assets/img/lightbox-still-life.jpg";
import BookReview3 from "../assets/img/books-forming-star.jpg";

const BookMenu = () => {
  const [books, setBooks] = useState([]);

  const { noorkal } = useParams();

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappasection11", {
          routes: `noorkal/${noorkal}`,
        });
        setBooks(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [noorkal]);


  // useEffect(() => {
  //   const getBooks = () => {
  //     //var formated = title.split("-").join(" ");

  //     api
  //       .post("/content/getBooks", { category_id: 79 })
  //       .then((res) => {
  //         setBooks(res.data.data);
  //       })
  //       .catch(() => {});
  //   };

  //   getBooks();
  // }, []);

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
                  <img
                    src={BookReview1}
                    alt="blog image"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>

                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    // href="/"
                    className="category"
                  >
                    நூற்கள்
                  </a>
                  <h3 className="box-title-24">
                    <Link className="hover-line" to="/ShopList/ShopList">
                    &nbsp;&nbsp;நூற்களின் தொகுப்பு&nbsp;&nbsp;
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4">
              <div className="blog-style9">
                <div className="blog-img">
                  <img
                    src={BookReview2}
                    alt="blog image"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>

                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    // href="/"
                    className="category"
                  >
                    நூற்கள் 
                  </a>
                  &nbsp;&nbsp;
                  <h3 className="box-title-24">
                    <Link className="hover-line" to="/FromBookList/FromBookList">
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;நூல்களில் இருந்து&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xxl-4">
              <div className="blog-style9">
                <div className="blog-img">
                  <img
                    src={BookReview3}
                    alt="blog image"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>

                <div className="blog-content">
                  <a
                    data-theme-color="#4E4BD0"
                    // href="/"
                    className="category"
                  >
                    நூற்கள்
                  </a>
                  <h3 className="box-title-24">
                    <Link className="hover-line" to="/PublicationReview/PublicationReview">
                    பதிப்பாய்வு Book Reviews
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="space-bottom">
      <div className="container-full-1">
        <div
          className="row th-carousel slider-shadow"
          data-slide-show={3}
          data-ml-slide-show={2}
          data-lg-slide-show={2}
          data-md-slide-show={1}
          data-sm-slide-show={1}
        >
          {books.map((book, index) => (
            <div className="col-md-6 col-xxl-4" key={index}>
              <div className="blog-style9">
                <div className="blog-img">
                  <img
                    src={`https://ems.unitdtechnologies.com/storage/${book.file_name}`}
                    alt={book.title || "Book image"}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </div>
                <div className="blog-content">
                  <a data-theme-color="#4E4BD0" className="category">
                    {book.category || "நூற்கள்"}
                  </a>
                  <h3 className="box-title-24">
                    <Link className="hover-line" to={book.link || "#"}>
                   {book.category_title || "Untitled"}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div> */}
    </>
  );
};

export default BookMenu;
