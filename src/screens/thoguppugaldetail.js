import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'; // Import animation library
import api from "../constants/api";
import styles from "./DetailPage.module.css"; // Import CSS module

const DetailPage = () => {
  const { contentId } = useParams();
  const [content, setContent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); // State to control animation
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  
  useEffect(() => {
    const fetchContentDetails = async () => {
      try {
        const res = await api.post('/content/getContentById', { content_id: contentId });
        setContent(res.data.data);
        setIsLoaded(true); // Trigger animation after content is loaded
      } catch (err) {
        console.error("Error fetching content details", err);
      }
    };

    fetchContentDetails();
  }, [contentId]);

  useEffect(() => {
    api
      .post("/blog/getBlogsCategoryId", { content_id: contentId })
      .then((res) => {
        setBlogs(res.data.data || []);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, [contentId]);
  
  // Function to handle blog title click
  const handleBlogClick = (blog_id) => {
    navigate(`/DetailBlog/${blog_id}`); // Navigate to the blogDetail page with the blog_id
  };

  if (!content) {
    return <div className={styles.loading}>Loading...</div>;
  }

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

          {/* Show description only if no blogs are present */}
          {!blogs.length && (
            <div className={styles.content}>
              <div dangerouslySetInnerHTML={{ __html: content.description }} />
            </div>
          )}

          <div className={styles.blogList}>
           
            {blogs.map((blog) => (
              <div 
                key={blog.blog_id} 
                onClick={() => handleBlogClick(blog.blog_id)} 
                style={{ cursor: "pointer", color: "red", padding: 10 }}
              >
                {blog.title}
              </div>
            ))}
          </div>
        </div>
      </section>
    </CSSTransition>
  );
};

export default DetailPage;
