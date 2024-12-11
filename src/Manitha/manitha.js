import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../constants/api";

const BlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const { manitha } = useParams();

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappasection12", {
          routes: `manitha/${manitha}`,
        });
        setBlogPosts(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [manitha]);

  return (
    <section className="space" style={{ padding: "40px 0" }}>
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-sm-6"
              style={{
                flex: "1 1 calc(25% - 20px)",
                maxWidth: "300px",
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
                  minHeight: "400px",
                }}
              >
                <div
                  className="blog-img"
                  style={{
                    position: "relative",
                    height: "200px",
                    width: "100%",
                    overflow: "hidden",
                    marginBottom: "15px",
                    borderRadius: "5px",
                  }}
                >
                  <img
  src={`https://emsmedia.net/storage/uploads/${post.file_name}`}
  alt="blog"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "contain", // Show the full image without trimming
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
                  {post.category_title}
                </h3>
                <Link
                  to={`/மனிதா/${post.category_id}`}
                  className="th-btn"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "10px 20px",
                    textDecoration: "none",
                    borderRadius: "5px",
                    textAlign: "center",
                    marginTop: "auto",
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
                  <a
                    href="author.html"
                    style={{ color: "#999", marginRight: "10px" }}
                  >
                    <i className="far fa-user"></i> By - EMS
                  </a>
                  <a href="blog.html" style={{ color: "#999" }}>
                    <i className="fal fa-calendar-days"></i> 19 Mar, 2023
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
