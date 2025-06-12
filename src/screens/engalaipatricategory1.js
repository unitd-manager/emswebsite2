import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../constants/api";

const Engalai = () => {
  const [religion, setReligion] = useState([]);

  const { niruv } = useParams();

console.log("sd11ew",niruv)
  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappa11", {
          routes:`@/${niruv}` ,
        });
        setReligion(res.data.data[0]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [niruv]); // Dependency array is empty because `id` is a constant.

  // Helper function to remove HTML tags
  const stripHTMLTags = (input) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = input;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  // Helper function to truncate text to 20 words
  const truncateToWords = (text, wordLimit) => {
    const words = text.split(/\s+/); // Split text by whitespace
    if (words.length <= wordLimit) return text; // If text has fewer words, return as is
    return words.slice(0, wordLimit).join(" ") + "..."; // Join first 'wordLimit' words and append ellipsis
  };

  return (
    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <a data-theme-color="#6234AC" href="/" className="category">{religion.title}</a>
                    <h2 className="blog-title">{religion.title}</h2>
                    <div className="blog-meta">
                        <a className="author" href="/"><i className="far fa-user"></i>By - Ems Media</a>
                        <a href="/"><i className="fal fa-calendar-days"></i>{religion.content_date}</a>
                    </div>
                   
                </div>
                <div className="col-xxl-9 col-lg-10">
                    <div className="th-blog blog-single">
                        <div className="blog-content-wrap">
                            <div className="share-links-wrap">
                                <div className="share-links">
                                    <span className="share-links-title">Share Post:</span>
                                    <div className="multi-social">
                                        <a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                                        <a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="https://pinterest.com/" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-content">
                              
                                    <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: religion.description,
                    }}
                  />
                                  
                                  
                              
                            </div>
                        </div>
                    </div>
                  
                 
                 
                       
                </div>
            </div>
        </div>
    </section>
  );
};

export default Engalai;
