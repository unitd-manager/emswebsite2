import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../constants/api";

const BlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const { gyanagamiyangal } = useParams();

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappasection12", {
          routes: `gyanagamiyangal/${gyanagamiyangal}`,
        });
        setBlogPosts(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [gyanagamiyangal]);

  const stripHTMLTags = (input) => {
    return input
      ? input.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ")
      : "";
  };

  return (
    <section className="space" style={{ padding: "40px 0" }}>
      <div className="container">
        <div className="row gy-30">
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
          ஞான அகமியங்கள்
        </h2>
       </div>
          {blogPosts.map((post, index) => {
            const fullContent = stripHTMLTags(post.description);
            const shortContent =
              fullContent.length > 100
                ? fullContent.slice(0, 100) + "..."
                : fullContent;

            return (
              <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                <div
                  className="blog-style1"
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div
                    className="blog-img"
                    style={{
                      position: "relative",
                      height: "200px",
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
                      }}
                    />
                  </div>
                  <div style={{ padding: "15px" }}>
                    <h3
                      className="box-title-20"
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#333",
                        marginBottom: "10px",
                      }}
                    >
                      {post.category_title}
                    </h3>
                    <p
                      className="sec-text"
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        lineHeight: "1.5",
                        marginBottom: "15px",
                      }}
                    >
                      {shortContent}
                    </p>
                    <Link
                      to={`/ஞான அகமியங்கள்/${post.category_id}`}
                      className="th-btn"
                      style={{
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        padding: "10px 20px",
                        display: "inline-block",
                        textDecoration: "none",
                        borderRadius: "5px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      Read More
                    </Link>
                    <div
                      className="blog-meta"
                      style={{
                        marginTop: "10px",
                        fontSize: "12px",
                        color: "#999",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        <i className="far fa-user"></i> By - Ems Media
                      </span>
                      <span>
                        <i className="fal fa-calendar-days"></i> 19 Mar, 2023
                      </span>
                    </div>
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
