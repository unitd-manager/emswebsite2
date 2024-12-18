import React, { useState, useEffect } from "react";
import api from "../../constants/api";
import { Link,useParams } from "react-router-dom";


const Magazine = () => {
  const { id } = useParams();
  const [Artical, setEvent] = useState([]);

  console.log('Artical',Artical)

  const defaultImage = "https://via.placeholder.com/680x200?text=No+Image+Available";

  useEffect(() => {
    const getArticalById = async () => {
      try {
        const res = await api .post('/section/getEventsById', { content_id: id })
        setEvent(res.data.data[0]);
      } catch (err) {
        console.error(err);
      }
    };

    getArticalById();
  }, [id]);

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
            <li>
              Event Details
            </li>
          </ul>
        </div>
      </div>
      {/*==============================
      Blog Area
  ==============================*/}
      <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <a
                data-theme-color="#6234AC"
                className="category"
              >
                {Artical.category_title}
              </a>
              <h2 className="blog-title">{Artical.title}</h2>
              <div className="blog-meta">
                <a className="author">
                  <i className="far fa-user" />
                  By -EMS Media
                </a>
                <a>
                  <i className="fal fa-calendar-days" />
                  {Artical.author}
                </a>
              </div>
              {/* <div className="blog-img mb-40">
                <img
                  src={
                    Artical.file_name
                      ? `https://emsmedia.net/storage/uploads/${Artical.file_name}`
                      : defaultImage
                  }
                  alt="Blog Image"
                />
              </div> */}
            </div>
            <div className="col-xxl-9 col-lg-10">
              <div className="th-blog blog-single">
                <div className="blog-content-wrap">
                  <div className="share-links-wrap">
                  </div>
                  <div className="blog-content">
                    <div className="content">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: Artical.description,
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

export default Magazine;
