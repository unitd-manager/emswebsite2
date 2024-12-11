import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../constants/api";

const Engalai = () => {
  const [religion, setReligion] = useState([]);

  const { id } = useParams();

  console.log("sdew", id);

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappa11", {
          category_id: id,
        });
        setReligion(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [id]); 

  // Helper function to remove HTML tags
  const stripHTMLTags = (input) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = input;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  // Helper function to truncate text to 20 words
  const truncateToWords = (text, wordLimit) => {
    const words = text.split(/\s+/); 
    if (words.length <= wordLimit) return text; 
    return words.slice(0, wordLimit).join(" ") + "..."; 
  };

  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-lg-11">
            <div className="row gy-30">
              {Array.isArray(religion) &&
                religion.map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="blog-style7">
                      <div className="blog-img">
                        {item.category_title !== "AAN-FNM" ? (
                          <img
                            src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                            style={{ width: '500px', height: '500px', objectFit: 'cover' }}
                            alt={item.title}
                          />
                        ) : (
                          <audio controls style={{ width: '100%' }}>
                            <source 
                              src={`https://emsmedia.net/storage/uploads/${item.file_name}`} 
                              type="audio/mpeg" 
                            />
                            Your browser does not support the audio element.
                          </audio>
                        )}
                      
                      </div>
                      <div className="blog-meta">
                        <a href="author.html"><i className="far fa-user"></i>By - Ems Media</a>
                        <a href="blog.html"><i className="fal fa-calendar-days"></i>26 Mar, 2023</a>
                      </div>
                      <h3 className="box-title-24">
                        <a className="hover-line" href="blog-details.html">
                          {item.title}
                        </a>
                      </h3>
                      <a 
                        href={`/#/details/${item.content_id}`} 
                        className="th-btn style2"
                      >
                        Read More <i className="fas fa-arrow-up-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engalai;
