import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; // For navigation
import api from "../constants/api";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);  

  const { id } = useParams();

  console.log("sdew",id)
    useEffect(() => {
      const getSubContent = async () => {
        try {
          const res = await api.post("/content/getByVappa11", {
            category_id: id,
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
                      <Link to={`/details4/${post.content_id}`}
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
