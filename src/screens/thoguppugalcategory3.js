import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import api from "../constants/api";
import styles from "./DetailPage.module.css"; // Import CSS module
import { CSSTransition } from 'react-transition-group'; // Import animation library


const Engalai = () => {
  const [content, setReligion] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // State to control animation
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const { id } = useParams();
 
  console.log("sdew", id);

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappa11", {
          routes:`poem/${id}` ,
        });
        setReligion(res.data.data[0]);
        setIsLoaded(true); // Trigger animation after content is loaded

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
 // Fetch blog data when the id changes
 useEffect(() => {
  api
    .post("/blog/getBlogsByCategoryId", {
      routes:`poem/${id}` ,
    })
    .then((res) => {
      setBlogs(res.data.data || []);
    })
    .catch((error) => {
      console.error("Error fetching blog data:", error);
    });
}, [id]);

// Function to handle blog title click
const handleBlogClick = (blog_id) => {
  navigate(`/DetailBlog/${blog_id}`); // Navigate to the blogDetail page with the blog_id
};
  // Helper function to truncate text to 20 words
  const truncateToWords = (text, wordLimit) => {
    const words = text.split(/\s+/); 
    if (words.length <= wordLimit) return text; 
    return words.slice(0, wordLimit).join(" ") + "..."; 
  };

  return (
    <CSSTransition in={isLoaded} timeout={500} classNames={styles.fade} unmountOnExit>
      <section className={styles.detailPageWrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.meta}>
              <span>By Ems Media</span> | <span>{content.content_date}</span>
            </p>
          </div>

          <div className={styles.imageContainer}>
            <CSSTransition in={isLoaded} timeout={500} classNames={styles.slideIn} unmountOnExit>
              <img
                src={`https://emsmedia.net/storage/uploads/${content.file_name}`}
                alt={content.title}
                className={styles.image}
              />
            </CSSTransition>
          </div>

          <div className={styles.content}>
          {blogs.map((blog, index) => (

            <div  key={index}
              onClick={() => handleBlogClick(blog.blog_id)} // Handle click to navigate to blogDetail page
              style={{ cursor: "pointer", color: "red" ,padding:10}} >  {blog.title}
            </div>
          ))}
          </div>
        </div>
         
      </section>
    </CSSTransition>
    
  );
};

export default Engalai;
