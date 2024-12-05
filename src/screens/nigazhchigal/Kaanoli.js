import React, { useState, useEffect } from "react";
import api from "../../constants/api";
import { Link } from "react-router-dom";
import "../../assets/css/event.css";

// Function to extract YouTube video ID
const extractYouTubeId = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

function Pugaipadangal() {
  const [gallery, setGallery] = useState([]);
  const [modalVideo, setModalVideo] = useState(null); // State to hold the video for the modal
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const getGallery = () => {
      api
        .get("/content/getVideoForweb")
        .then((res) => {
          setGallery(res.data.data);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    };
    getGallery();
  }, []);

  const totalPages = Math.ceil(gallery.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleGallery = gallery.slice(startIndex, endIndex);

  return (
    <>
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>Video Gallery</li>
          </ul>
        </div>
      </div>

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row gy-30 mb-30">
            {visibleGallery.map((item, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="blog-style1">
                  <div className="blog-img">
                    <img
                      src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                      alt="Video thumbnail"
                    />
                    <a data-theme-color="#868101" href="#" className="category">
                      Category
                    </a>
                    <button
                      className="play-btn popup-video"
                      onClick={() => setModalVideo(item)} // Open modal with the selected video
                    >
                      <i className="fas fa-play" />
                    </button>
                  </div>
                  <h3 className="box-title-20">
                    <a href="#">{item.title}</a>
                  </h3>
                  <div className="blog-meta">
                    <a href="#">
                      <i className="far fa-user" />
                      By - EMS Media
                    </a>
                    <a href="#">
                      <i className="fal fa-calendar-days" />
                      {item.content_date ? new Date(item.content_date).toLocaleDateString('en-GB') : "Unknown Date"}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Modal for YouTube Video */}
            {modalVideo && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <button
                    className="modal-close"
                    onClick={() => setModalVideo(null)} // Close the modal
                  >
                    ×
                  </button>
                  <h3>{modalVideo.title || "Untitled Video"}</h3>
                  <div className="video-container">
                    {modalVideo.description &&
                    extractYouTubeId(modalVideo.description) ? (
                      <iframe
                        width="100%"
                        height="400"
                        src={`https://www.youtube.com/embed/${extractYouTubeId(
                          modalVideo.description
                        )}`}
                        title={modalVideo.title || "YouTube Video"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <p>Invalid YouTube URL</p>
                    )}
                  </div>
                </div>
              </div>
            )}
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
      </section>
    </>
  );
}

export default Pugaipadangal;
