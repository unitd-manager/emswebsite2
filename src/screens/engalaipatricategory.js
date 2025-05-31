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
          routes:`*/${niruv}` ,
        });
        setReligion(res.data.data);
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
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-lg-12">
            <div className="mb-30">
              {Array.isArray(religion) &&
                religion.map((item, index) => (
                  <div className="border-blog2" key={index}>
                    <div className="blog-style4">
                      <div className="blog-img w-386">
                      <img
                src={`https://ems.unitdtechnologies.com/storage/${item.file_name}`}
              />
                      </div>
                      <div className="blog-content">
                        <a
                          data-theme-color="#FF9500"
                          href={item.category_link || "#"}
                          className="category"
                        >
                          {item.category_title}
                        </a>
                        <h3 className="box-title-30">
                          <a
                            className="hover-line"
                            href={item.details_link || "#"}
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="blog-text">
                          {truncateToWords(stripHTMLTags(item.description), 20)}
                        </p>
                        <div className="blog-meta">
                          <a href={item.author_link || "#"}>
                            <i className="far fa-user"></i>By - Ems Media
                          </a>
                          <a href={item.date_link || "#"}>
                            <i className="fal fa-calendar-days"></i>15 Mar, 2023
                          </a>
                        </div>
                        <a
                          href={`/#/details/${item.content_id}`}
                          className="th-btn style2"
                        >
                          Read More
                          <i className="fas fa-arrow-up-right ms-2"></i>
                        </a>
                      </div>
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
