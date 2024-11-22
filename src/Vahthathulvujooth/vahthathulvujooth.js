import React, { useEffect, useState } from "react";
import api from "../constants/api";

const AboutSection = () => {
  const [data, setData] = useState([]); // To store the fetched data
  const [isExpanded, setIsExpanded] = useState(false);


 
  useEffect(() => {
    getContent();
  }, []);

  const getContent = () => {
    api
      .get("/content/getAnupaptta")
      .then((res) => {
        setData(res.data.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching content data:", error);
      });
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to strip HTML tags and remove &nbsp; from a string
  const stripHTMLTags = (input) => {
    return input
      ? input
          .replace(/<[^>]*>/g, "") // Remove HTML tags
          .replace(/&nbsp;/g, " ") // Replace &nbsp; with a space
      : ""; 
  };

  // Check if content is defined before accessing its properties
  const fullContent = data ? stripHTMLTags(data.description) : ""; // Strip HTML tags
  const shortContent = fullContent.length > 500 ? fullContent.slice(0, 500) + '...' : fullContent; // Handle short content correctly


  return (
    <div className="space2" id="about-sec">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-xl-7 mb-30 mb-xl-0">
            <div className="img-box1">
              <div className="img1">
                <img
                  src={`https://emsmedia.net/storage/uploads/${data.file_name}`}
                  alt={data.title}
                  style={{width:"800px",height:"700px"}}
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-xl-5">
            <div className="title-area mb-32">
              <h2 className="sec-title2">{data.title}</h2>
              <p className="sec-text">{isExpanded ? fullContent : shortContent}</p>
              <button className="th-btn" onClick={toggleReadMore}>
                {isExpanded ? 'Show Less' : 'Read More'}<i className="fas fa-arrow-up-right ms-2"></i>
              </button>
               {/* <a href="about.html" className="th-btn">
              About More<i className="fas fa-arrow-up-right ms-2"></i>
            </a> */}
            </div>
            {/* <div className="checklist mt-n2 mb-35">
              <ul>
                <li>
                  <i className="far fa-check-circle"></i> User experience
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Strategy and Art
                  Direction
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Unique layouts Blocks
                </li>
              </ul>
            </div>
            <a href="about.html" className="th-btn">
              About More<i className="fas fa-arrow-up-right ms-2"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
