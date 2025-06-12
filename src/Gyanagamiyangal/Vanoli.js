import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../constants/api";

const BlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);  

  const { id } = useParams();

  console.log("sd11ew",id)
    useEffect(() => {
      const getSubContent = async () => {
        try {
          const res = await api.post("/content/getByVappa11", {
            routes:`PetiVanoli/${id}` ,
          });
          setBlogPosts(res.data.data);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        }
      };
  
      getSubContent();
    }, [id]); // Dependency array is empty because `id` is a constant.
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
                      src={`https://ems.unitdtechnologies.com/storage/${post.file_name}`}
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
                    to={`/details3/${post.content_id}`}
                    
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
                    <a href="/">
                      <i className="far fa-user"></i> By - Ems Media
                    </a>
                    <a href="/">
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
