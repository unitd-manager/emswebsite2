import React, { useState, useEffect } from 'react';
import {Link, useParams, useNavigate } from "react-router-dom";
import api from '../../constants/api';


function Pugaipadangal() {
  
  const { id } = useParams();

  const [gallery, setGalleryId] = useState([]);

    console.log('picture',id)

  useEffect(() => {
    const getGallery = () => {
      api.post('/content/getPhotoGallery')
        .then((res) => {
          setGalleryId(res.data.data);
        })
        .catch((error) => {
          console.log('Error fetching data:', error);
        });
    };
    getGallery();
  }, []);

  return (
    <>
    <div className="breadcumb-wrapper">
      <div className="container">
        <ul className="breadcumb-menu">
          <li>
            <a href="home-newspaper.html">Home</a>
          </li>
          <li>Photo Details Full Image</li>
        </ul>
      </div>
    </div>
    {/*==============================
      Blog Area
  ==============================*/}
    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a data-theme-color="#019D9E" href="blog.html" className="category">
              Travels
            </a>
            <h2 className="blog-title">
              From mountains to seas, cultures unite - travel, the bridge that
              Connects hearts worldwide.
            </h2>
            <div className="blog-meta">
              <a className="author" href="author.html">
                <i className="far fa-user" />
                By - Tnews
              </a>
              <a href="blog.html">
                <i className="fal fa-calendar-days" />
                21 June, 2023
              </a>
              <a href="blog-details.html">
                <i className="far fa-comments" />
                Comments (3)
              </a>
              <span>
                <i className="far fa-book-open" />5 Mins Read
              </span>
            </div>
            <div className="blog-img mb-40">
              <img src="assets/img/blog/blog_details_1.jpg" alt="Blog Image" />
            </div>
          </div>
        
        </div>
      </div>
    </section>
  </>
  
  );
}

export default Pugaipadangal;
