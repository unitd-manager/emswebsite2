import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser"; // Import the library to render HTML
import api from "../constants/api";

const BlogPost = () => {
  const [categoryDetails, setCategoryDetails] = useState({}); // Initialize as an object
  const { id } = useParams(); // Get the `id` from the URL

  // Fetch Category By ID
  const fetchCategoryById = () => {
    api
      .post('/content/getReligionService3', { content_id: id }) // Pass content_id to API
      .then((res) => {
        if (res.data && res.data.data.length > 0) {
          setCategoryDetails(res.data.data[0]); // Safely set the first item from the response
        } else {
          console.warn("No data found for content_id:", id);
          setCategoryDetails({}); // Set to an empty object if no data is found
        }
      })
      .catch((error) => {
        console.error("Error fetching content data:", error);
      });
  };

  useEffect(() => {
    fetchCategoryById();
  }, [id]); // Fetch data when `id` changes

  return (
    <div className="content" style={{ textAlign: "center", padding: "20px" }}>
      {/* {categoryDetails.file_name && (
        <div className="my-4 py-lg-2" style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={`https://emsmedia.net/storage/uploads/${categoryDetails.file_name}`} // Dynamically render image
            alt={categoryDetails.title || "Blog Image"}
            style={{ width: "600px", height: "500px", objectFit: "cover" }}
          />
        </div>
      )}
      {categoryDetails.title && (
        <h3 className="h4" style={{ marginTop: "20px" }}>
          {categoryDetails.title}
        </h3>
      )} */}
      {categoryDetails.description && (
        <div className="about-text" style={{ textAlign: "justify", lineHeight: "1.6" }}>
          {/* Safely render the HTML content */}
          {ReactHtmlParser(categoryDetails.description)}
        </div>
      )}
    </div>
  );
};

export default BlogPost;
