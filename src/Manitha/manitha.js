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
    <section
      style={{
        padding: "60px 0",
        backgroundColor: "#f3f4f6",
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          மனிதா
        </h2>
        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="blog-card"
              style={{
                width: "350px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
            >
              <div
                className="blog-img"
                style={{
                  position: "relative",
                  height: "250px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={`https://emsmedia.net/storage/uploads/${post.file_name}`}
                  alt="blog"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                    color: "#222",
                    textAlign: "center",
                  }}
                >
                  {post.category_title}
                </h3>
                <Link
  to={`/மனிதா/${post.category_id}`}
  className="read-more-btn"
  style={{
    display: "block",
    background: "linear-gradient(90deg, #ff7e5f, #feb47b)", // Gradient color
    color: "#fff",
    padding: "12px 20px",
    textDecoration: "none",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "all 0.3s ease",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  }}
  onMouseOver={(e) => {
    e.target.style.background = "linear-gradient(90deg, #feb47b, #ff7e5f)"; // Reversed gradient on hover
    e.target.style.transform = "scale(1.05)";
    e.target.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
  }}
  onMouseOut={(e) => {
    e.target.style.background = "linear-gradient(90deg, #ff7e5f, #feb47b)"; // Original gradient
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  }}
>
  Read More
</Link>
              </div>
              <div
                className="blog-meta"
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#555",
                  padding: "10px",
                  borderTop: "1px solid #eee",
                }}
              >
                <span>
                  <i className="far fa-user" style={{ marginRight: "5px" }}></i>
                  By - EMS
                </span>
                <span style={{ marginLeft: "10px" }}>
                  <i className="fal fa-calendar-days" style={{ marginRight: "5px" }}></i>
                  19 Mar, 2023
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
