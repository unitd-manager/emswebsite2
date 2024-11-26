import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../constants/api";

const BlogPost = () => {
  const [categoryDetails, setCategoryDetails] = useState([]); // Initialize with null
  const { id } = useParams(); // Get the `id` from the URL

  // Fetch Category By ID
  const fetchCategoryById = () => {
    api
      .post('/content/getReligionService2', { content_id: id }) // Pass content_id to API
      .then((res) => {
      
          setCategoryDetails(res.data.data[0]);
      
      })
      .catch((error) => {
        console.error("Error fetching content data:", error);
      });
  };

  const stripHtmlTags = (input) => {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = input;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  useEffect(() => {
    fetchCategoryById();
  }, [id]); // Fetch data when `id` changes

  

  return (
    <div className="content">
      <div className="my-4 py-lg-2">
          <img
            
            src={`https://emsmedia.net/storage/uploads/${categoryDetails.file_name}`} // Dynamically render image
            alt={categoryDetails.title || "Blog Image"}
            style={{width:"600px",height:"500px"}}
          />
      </div>
      <h3 className="h4">{categoryDetails.title}</h3>
      <p className="about-text">
      {categoryDetails.description ? stripHtmlTags(categoryDetails.description) : ''}
      </p>
    </div>
  );
};

export default BlogPost;
