import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../constants/api";

const Engalai = () => {
  const [religion, setReligion] = useState([]);

  const { id } = useParams();

console.log("sdew",id)
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
  }, [id]); // Dependency array is empty because `id` is a constant.

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
    <section class="space-top space-extra-bottom">
    <div class="container">
        <div class="row">
            <div class="col-xxl-12 col-lg-11">
                <div class="row gy-30">

                    {Array.isArray(religion) &&
                        religion.map((item, index) => (
                    <div class="col-sm-6">
                        <div class="blog-style7">
                            <div class="blog-img">
                                <img
                                src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                              />
                                <a data-theme-color="#6234AC" href="blog.html" class="category">{item.category_title}</a>
                            </div>
                            <div class="blog-meta">
                                <a href="author.html"><i class="far fa-user"></i>By - Tnews</a>
                                <a href="blog.html"><i class="fal fa-calendar-days"></i>26 Mar, 2023</a>
                            </div>
                            <h3 class="box-title-24"><a class="hover-line" href="blog-details.html">{item.title}</a></h3>
                            <a href={`/#/details/${item.content_id}`} class="th-btn style2">Read More<i class="fas fa-arrow-up-right ms-2"></i></a>
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
