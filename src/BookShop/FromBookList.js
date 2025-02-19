import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/event.css"
import bookBanner from "../assets/img/bookBanner2.jpg"

const FromBookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await api.post("/content/getBooks", { category_id: 71 });
        setBooks(response.data.data || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  return (
    <>
      {/* Breadcrumb Section */}
      <div className="breadcumb-wrapper bg-light py-3">
        <div className="container">
          <ul className="breadcumb-menu d-flex align-items-center gap-2">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
            </li>
            <li>நூல்களிலிருந்து</li>
          </ul>
        </div>
      </div>

      {/* Main Section */}
      <section className="th-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : books.length > 0 ? (
            <div className="row">
              {books.map((book) => (
                <div className="col-md-12 col-lg-12 mb-4" key={book.id}>
                  <div className="card shadow-sm">
                    <img
                      src={bookBanner}
                      className="card-img-top"
                      alt={book.title}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-primary">{book.title}</h5>
                      <div
                        className="card-text text-muted"
                        dangerouslySetInnerHTML={{ __html: book.description }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <p className="text-muted">No books found.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FromBookList;
