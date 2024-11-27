import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import api from "../constants/api";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getContent();
  }, []);

  const getContent = () => {
    api
      .post("/content/getReligionService1")
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
          .replace(/&nbsp;/g, " ") // Replace &nbsp; with a space
      : "";
  };

  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-lg-12">
            <div className="row gy-30 filter-active">
              {blogPosts.map((post, index) => {
                const fullContent = stripHTMLTags(post.description);
                const shortContent =
                  fullContent.length > 100
                    ? fullContent.slice(0, 100) + "..."
                    : fullContent;

                return (
                  <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                    <div className="blog-style1">
                      <div className="blog-img">
                        <img
                          src={`https://emsmedia.net/storage/uploads/${post.file_name}`}
                          alt={post.title}
                          style={{
                            width: "100%",
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <h3
                        className="box-title-20"
                        style={{ color: "red", fontSize: "1.2rem" }}
                      >
                        {post.title}
                      </h3>
                      <p className="sec-text">{shortContent}</p>
                      <Link to={`/categoryDetails/${post.content_id}`}// Dynamic route to the blog details page
                        className="th-btn"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
