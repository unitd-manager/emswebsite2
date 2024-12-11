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
        .post("/content/getBooks", { category_id: 71 })
        .then((res) => {
          setBooks(res.data.data);
        })
        .catch(() => {});
    };

    getBooks();
  }, []);

  return (
    <>
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>நூல்களிலிருந்து</li>
          </ul>
        </div>
      </div>

      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-lg-8">
              {books.map((image) => (
                <div
                  className="th-blog blog-single has-post-thumbnail"
                  key={image.id}
                >
                  <div className="blog-content">
                    <h2 className="blog-title box-title-30">
                      <a href="blog-details.html">{image.title}</a>
                    </h2>
                    <div
                      className="blog-text"
                      dangerouslySetInnerHTML={{ __html: image.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FromBookList;
