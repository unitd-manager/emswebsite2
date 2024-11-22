import React, { useEffect, useState } from "react";
import api from "../constants/api";


const OreyUllamai = () => {
    const [data, setData] = useState([]); // To store the fetched data

    useEffect(() => {
        getContent();
      }, []);
    
      const getContent = () => {
        api
          .get("/content/getOreyUllamai")
          .then((res) => {
            setData(res.data.data[0]);
          })
          .catch((error) => {
            console.error("Error fetching content data:", error);
          });
      };

      const stripHTMLTags = (input) => {
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = input;
        return tempDiv.textContent || tempDiv.innerText || "";
      };
    
  return (
    <div className="col-xl-4 sidebar-wrap">
      <div className="sidebar-area mb-0">
        <div className="widget">
          <div className="author-details">
            {/* Author Image */}
            <div className="img1">
              <img
                src={`https://emsmedia.net/storage/uploads/${data.file_name}`}
                alt={data.title}
              />
            </div>

            {/* Author Content */}
            <div className="author-content">
              <h3 className="box-title-24">{data.title}</h3>
              {/* <div className="info-wrap">
                <span className="info">Senior. Writer</span>
                <span className="info">
                  <strong>Post: </strong>38
                </span>
              </div> */}

              <p className="author-bio">
             { data ? stripHTMLTags(data.description) : ""}
              </p>

              {/* <div className="info-wrap top-border">
                <span className="info">
                  <strong>Email: </strong>
                </span>
                <span className="info">
                  <a href="mailto:joshua.@gmail.com">joshua.@gmail.com</a>
                </span>
              </div> */}

              {/* <div className="info-wrap">
                <span className="info">
                  <strong>Phone: </strong>
                </span>
                <span className="info">
                  <a href="tel:+1233025550107">+123 (302) 555-0107</a>
                </span>
              </div> */}

              {/* Social Media Links */}
              {/* <h4 className="box-title-18">Social Media</h4>
              <div className="th-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OreyUllamai;
