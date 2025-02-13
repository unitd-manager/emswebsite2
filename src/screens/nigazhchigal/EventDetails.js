import React, { useState, useEffect } from "react";
import api from "../../constants/api";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../../assets/css/event.css";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [articlesList, setArticlesList] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await api.get("/content/getEventPhotoGallery");
        setArticlesList(res.data.data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (articlesList.length > 0) {
      const selectedArticle = articlesList.find(
        (item) => item.content_id === Number(id)
      );
      setCurrentArticle(selectedArticle);
    }
  }, [id, articlesList]);

  const currentIndex = articlesList.findIndex(
    (article) => article.content_id === Number(id)
  );

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const prevArticle = articlesList[currentIndex - 1];
      navigate(`/EventDetails/${prevArticle.content_id}`);
    }
  };

  const goToNext = () => {
    if (currentIndex < articlesList.length - 1) {
      const nextArticle = articlesList[currentIndex + 1];
      navigate(`/EventDetails/${nextArticle.content_id}`);
    }
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
              <Link to="/நிகழ்ச்சிகள்/நிகழ்வுகள்">Event</Link>
            </li>
            <li>Event Details</li>
          </ul>
        </div>
      </div>

      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="container position-relative">
              <div className="d-flex justify-content-between w-100">
                <button
                  onClick={goToPrevious}
                  style={navButtonStyles}
                  className="nav-buttonpre"
                >
                  &lt; Prev
                </button>

                <button
                  onClick={goToNext}
                  style={navButtonStylesRight}
                  className="nav-buttonnext"
                >
                  Next &gt;
                </button>
              </div>
            </div>

            <div className="col-12 text-center">
              <a data-theme-color="#6234AC" className="category">
                {currentArticle?.category_title || "No Category"}
              </a>
              <h2 className="blog-title">
                {currentArticle?.title || "No Title"}
              </h2>
              <div className="blog-meta">
                <a className="author">
                  <i className="far fa-user" /> By - EMS Media
                </a>
                <a>
                  <i className="fal fa-calendar-days" />{" "}
                  {currentArticle?.content_date || "No Date"}
                </a>
              </div>
            </div>
            <div className="col-xxl-9 col-lg-10">
              <div className="th-blog blog-single">
                <div className="blog-content-wrap">
                  <div className="share-links-wrap"></div>
                  <div className="blog-content">
                    <div className="content">
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            currentArticle?.description || "<p>No Content</p>",
                        }}
                      ></p>
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

const navButtonStyles = {
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0, 0, 0, 0.6)",
  color: "white",
  border: "none",
  fontSize: "16px",
  cursor: "pointer",
  padding: "10px 15px",
  borderRadius: "5px",
  zIndex: 1000,
  transition: "all 0.3s ease-in-out",
};

const navButtonStylesRight = {
  ...navButtonStyles,
  left: "auto",
  right: "10px",
};

export default EventDetails;
