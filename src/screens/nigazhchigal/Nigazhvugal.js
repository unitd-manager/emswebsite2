import React, { useState, useEffect } from 'react';
import api from '../../constants/api';
import { Link } from 'react-router-dom';

function Pugaipadangal() {
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    const getGallery = () => {
      api.get('/content/getEventPhotoGallery')
        .then((res) => {
          setGallery(res.data.data);
        })
        .catch((error) => {
          console.log('Error fetching data:', error);
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
            <li>Event</li>
          </ul>
        </div>
      </div>

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row gy-30 mb-30">
            {visibleGallery.map((item, index) => (
              <div className="col-xl-4 col-sm-6" key={index}>
                <div className="blog-style1">
                  <div className="blog-img">
                    <img
                      src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                      alt={item.title}
                    />
                    <Link
                      data-theme-color="#4E4BD0"
                      to="/PugaipadangalDetails"
                      className="category"
                    >
                     {item.category_title}
                    </Link>
                  </div>
                  <h3 className="box-title-18">
                    <Link className="hover-line" to="/">
                      {item.title}
                    </Link>
                  </h3>
                  <div className="blog-meta">
                    <a href="">
                      <i className="far fa-user" />
                      By - EMS Media
                    </a>
                    <a href="">
                      <i className="fal fa-calendar-days" />
                      {new Date(item.content_date).toLocaleDateString("en-GB", {
                   day: "2-digit",
                    month: "2-digit",
                  year: "numeric",
                     })}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
