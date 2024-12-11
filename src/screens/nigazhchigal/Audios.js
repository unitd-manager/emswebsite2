import React, { useState, useEffect } from 'react';
import api from '../../constants/api';
import { Link } from 'react-router-dom';

function Pugaipadangal() {
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const getGallery = () => {
      api.get('/content/getAudioGallery')
        .then((res) => {
          setGallery(res.data.data);
        })
        .catch((error) => {
          console.log('Error fetching data:', error);
        });
    };
    getGallery();
  }, []);
console.log('galllery',gallery)
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
            <li>Audio Gallery</li>
          </ul>
        </div>
      </div>

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row gy-30 mb-30">
            {visibleGallery.map((item, index) => (
              <div className="col-lg-6" key={index}>
                <div className="th-blog blog-single">
                  <a
                    data-theme-color="#4E4BD0"
                    href="#"
                    className="category"
                  >
                    {item.category_title}
                  </a>
                  <h2 className="blog-title">{item.title}</h2>
                  <div className="blog-meta">
                    <a className="author" href="#">
                      <i className="far fa-user" />
                      By - EMS Media
                    </a>
                    <a href="#">
                      <i className="fal fa-calendar-days" />
                      {new Date(item.content_date).toLocaleDateString('en-GB')} {/* Format: DD/MM/YYYY */}
                    </a>
                  </div>
                  <div className="blog-audio">
                    <audio controls>
                      <source
                        src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>
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
                    className={currentPage === index + 1 ? 'active' : ''}
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