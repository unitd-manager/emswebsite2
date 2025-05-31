import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser"; // Import the library to render HTML
import api from "../constants/api";

const BlogPost = () => {
  const [categoryDetails, setCategoryDetails] = useState([]); // Initialize with null
  const { subCategoryId } = useParams(); // Get the `content_id` from the URL

  useEffect(() => {
    const fetchContentDetails =  () => {
     
        api
          .post('/content/getEngalaiPatriSubContent',{sub_category_id: subCategoryId})
          .then((res) => {
            setCategoryDetails(res.data.data[0]);
            console.log('edit Line Item',res.data.data)
          })
          .catch(() => {
            // Handle error
          });
      };

    fetchContentDetails();
  }, [subCategoryId]);


  return (
    <div className="content">
      <div className="my-4 py-lg-2">
          <img
            
            src={`https://ems.unitdtechnologies.com/storage/${categoryDetails.file_name}`} // Dynamically render image
            alt={categoryDetails.title || "Blog Image"}
            style={{width:"600px",height:"500px"}}
          />
      </div>
      <h3 className="h4" style={{ marginTop: "20px" }}>
        {categoryDetails.title}
      </h3>
      <div className="about-text" style={{ textAlign: "justify", lineHeight: "1.6" }}>
        {/* Safely render the HTML content */}
        {categoryDetails.description ? ReactHtmlParser(categoryDetails.description) : ""}
      </div>
    </div>
  );
};

export default BlogPost;
