import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../constants/api";

const BlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getContent();
  }, []);

  const getContent = () => {
    api
      .post("/content/getManitha123")
      .then((res) => {
        setBlogPosts(res.data.data); // Set the entire array of blog posts
      })
      .catch((error) => {
        console.error("Error fetching content data:", error);
      });
  };

  const stripHTMLTags = (input) => {
    return input
      ? input
          .replace(/<[^>]*>/g, "") // Remove HTML tags
          .replace(/&nbsp;/g, " ") // Replace `&nbsp;` with a space
      : "";
  };

  return (
    <section className="space" style={{ padding: "40px 0" }}>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "20px", // Add consistent spacing
          }}
        >
          {blogPosts.map((post, index) => {
            const fullContent = stripHTMLTags(post.description);
            const shortContent =
              fullContent.length > 100
                ? fullContent.slice(0, 100) + "..."
                : fullContent;

            return (
              <div
                key={index}
                className="col-xl-3 col-lg-4 col-sm-6"
                style={{
                  flex: "1 1 calc(25% - 20px)", // Adjust width for responsiveness
                  maxWidth: "300px", // Set a consistent width
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="blog-style1"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "15px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "400px", // Uniform height
                    maxHeight: "400px",
                    overflow: "hidden", // Prevent content overflow
                  }}
                >
                 <div
  className="blog-img"
  style={{
    position: "relative",
    height: "200px", // Fixed height for all image containers
    width: "100%", // Ensure it scales with the card width
    overflow: "hidden", // Hide overflow for larger images
    marginBottom: "15px",
    borderRadius: "5px", // Optional: Rounded corners
  }}
>
  <img
    src={`https://emsmedia.net/storage/uploads/${post.file_name}`}
    alt="blog"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover", // Ensures the image scales and crops to fit
    }}
  />
</div>
                  <h3
                    className="box-title-20"
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                      textAlign: "center",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="sec-text"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#666",
                      textAlign: "justify",
                      marginBottom: "15px",
                    }}
                  >
                    {shortContent}
                  </p>
                  <Link
                    to={`/categoryDetails3/${post.content_id}`}
                    className="th-btn"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "10px 20px",
                      textDecoration: "none",
                      borderRadius: "5px",
                      textAlign: "center",
                      marginTop: "auto", // Push button to the bottom
                    }}
                  >
                    Read More
                  </Link>
                  <div
                    className="blog-meta"
                    style={{
                      marginTop: "10px",
                      fontSize: "12px",
                      textAlign: "center",
                      color: "#999",
                    }}
                  >
                    <a href="author.html" style={{ color: "#999", marginRight: "10px" }}>
                      <i className="far fa-user"></i> By - EMS
                    </a>
                    <a href="blog.html" style={{ color: "#999" }}>
                      <i className="fal fa-calendar-days"></i> 19 Mar, 2023
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
