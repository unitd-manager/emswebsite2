import React, { useEffect, useState } from 'react';
import api from "../constants/api";
import bg1 from "../assets/img/blog/mosque5.jpg";

const BlogCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getContent();
    }, []);

    const getContent = () => {
        api
            .post("/media/getVideoUrls2")
            .then((res) => {
                setData(res.data.data); // Ensure this is an array of blog posts
            })
            .catch((error) => {
                console.error("Error fetching content data:", error);
            });
    };

    return (
        <section className="space-top space-extra-bottom" style={{ padding: "40px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-lg-12">
              <div
                className="row gy-30 filter-active"
                // style={{
                //   display: "flex",
                //   flexWrap: "wrap",
                //   gap: "20px",
                //   justifyContent: "space-between",
                // }}
              >
                {data.length > 0 ? (
                  data.map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-3 col-md-4 col-sm-6"
                      style={{
                        flex: "1 1 calc(25% - 20px)", // 4 items per row
                        maxWidth: "calc(25% - 20px)",
                        boxSizing: "border-box",
                      }}
                    >
                      <div
                        className="blog-style1"
                        style={{
                          backgroundColor: "#f8f9fa",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: "100%",
                          padding: "15px",
                          textAlign: "center",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <div className="blog-img">
                          <img
                            src={item.image_url || bg1} // Dynamic image fallback
                            alt={item.sub_category_title || "Blog"}
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                              marginBottom: "15px",
                            }}
                          />
                        </div>
                        <h3 style={{ fontSize: "1.2rem", marginBottom: "15px" }}>
                          <a
                            className="hover-line"
                            href={item.external_link || "#"} // Fallback for missing links
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: "red",
                              textDecoration: "none",
                              fontWeight: "bold",
                            }}
                          >
                            {item.sub_category_title || "Default Title"}
                          </a>
                        </h3>
                        <a
                          href={item.external_link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="th-btn"
                          // style={{
                          //   display: "inline-block",
                          //   backgroundColor: "#007bff",
                          //   color: "#fff",
                          //   padding: "10px 15px",
                          //   borderRadius: "5px",
                          //   textDecoration: "none",
                          //   fontSize: "0.9rem",
                          //   fontWeight: "bold",
                          //   marginTop: "10px",
                          // }}
                        >
                          VIEW FOR MORE <i className="fas fa-arrow-up-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "1.2rem",
                      color: "#555",
                      marginTop: "20px",
                    }}
                  >
                    No blogs available at the moment.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BlogCard;
