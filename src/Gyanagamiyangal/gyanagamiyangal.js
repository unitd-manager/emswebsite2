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
      .post("/content/getGyanaAgamiyangal")
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
        <div className="row gy-30">
          {blogPosts.map((post, index) => {
            const fullContent = stripHTMLTags(post.description);
            const shortContent =
              fullContent.length > 100
                ? fullContent.slice(0, 100) + "..."
                : fullContent;

            return (
              <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                <div className="blog-style1">
                  <div
                    className="blog-img"
                    style={{
                      position: "relative",
                      height: "200px", // Set a fixed height for uniformity
                      overflow: "hidden", // Prevent overflow
                    }}
                  >
                    <img
                      src={`https://emsmedia.net/storage/uploads/${post.file_name}`}
                      alt="blog"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Ensures consistent scaling
                      }}
                    />
                  </div>
                  <h3 className="box-title-20">{post.title}</h3>
                  <p className="sec-text">{shortContent}</p>
                  <Link
                    to={`/categoryDetails2/${post.content_id}`}
                    className="th-btn"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      padding: "10px 20px",
                      display: "inline-block",
                      textDecoration: "none",
                      borderRadius: "5px",
                      textAlign: "center",
                    }}
                  >
                    Read More
                  </Link>
                  <div className="blog-meta">
                    <a href="author.html">
                      <i className="far fa-user"></i> By - EMS
                    </a>
                    <a href="blog.html">
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
