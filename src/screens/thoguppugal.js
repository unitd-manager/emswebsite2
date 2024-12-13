import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../constants/api";

const Engalai = () => {
  const [religion, setReligion] = useState([]);

  const { Collections } = useParams();

  console.log("sdwwwwwwew", Collections);
  
  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappasection11", {
          routes: `Collections/${Collections}`,
        });
        setReligion(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [Collections]); // Dependency array is empty because `id` is a constant.

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
          <div className="col-xxl-12 col-lg-11">
            <div className="row gy-30">

              {Array.isArray(religion) &&
                religion
                  .filter((item) => item.category_title !== "AAN-FNM") // Filter out items where category_title is "aanfnm"
                  .map((item, index) => (
                    <div className="col-sm-6" key={index}>
                      <div className="blog-style7">
                        <div className="blog-img">
                          <img
                            src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                            style={{ width: '500px', height: '500px', objectFit: 'cover' }}
                            alt="Blog"
                          />
                        </div>

                        <div className="blog-meta">
                          <a href="/"><i className="far fa-user"></i>By - Ems Media</a>
                          <a href="/"><i className="fal fa-calendar-days"></i>26 Mar, 2023</a>
                        </div>
                        <h3 className="box-title-24">
                          <a className="hover-line" href="blog-details.html">{item.category_title}</a>
                        </h3>

                        <a
                          href={item.sub_category_id 
                            ? `/#/தொகுப்புகள்/${item.category_id}` 
                            : `/#/thoguppugaldetails/${item.content_id}`}
                          className="th-btn style2"
                        >
                          Read More<i className="fas fa-arrow-up-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  ))
              }

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engalai;
