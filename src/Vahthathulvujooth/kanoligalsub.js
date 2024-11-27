import React, { useEffect, useState } from "react";
import blogImage from "../assets/img/blog/mosque5.jpg"; // Replace with the correct path to your image
import api from "../constants/api";

const BlogCardDetailed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getContent();
  }, []);

  const getContent = () => {
    api
      .post("/media/getVideoUrls3")
      .then((res) => {
        setData(res.data.data); // Ensure this is an array of blog posts
      })
      .catch((error) => {
        console.error("Error fetching content data:", error);
      });
  };

  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-8">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div className="mb-30" key={index}>
                  <div className="border-blog2">
                    <div className="blog-style4">
                      <div className="blog-img w-386">
                        <img
                          src={blogImage} // Replace with dynamic image if available in the API response
                          alt="blog"
                          style={{
                            width: "300px",
                            height: "200px", // Optional rounded corners
                          }}
                        />
                      </div>
                      <div className="blog-content">
                        {/* <a
                          href={item.external_link} // Dynamically set the YouTube link
                          target="_blank" // Open in a new tab
                          rel="noopener noreferrer" // Security best practice for external links
                          className="category"
                          style={{
                            backgroundColor: "#59C2D6",
                            borderRadius: "5px", // Optional: Rounded corners for the button
                            padding: "5px 10px",
                          }}
                        >
                          VISIT HERE
                        </a> */}
                        <h2 className="box-title-20">
                          <a
                            className="hover-line"
                            href={item.external_link} // Pass the external link dynamically
                            target="_blank" // Open in a new tab
                            rel="noopener noreferrer" // Security best practice for external links
                            style={{ textDecoration: "none", color: "#000" }}
                          >
                            {item.sub_category_title || "Default Title"}
                          </a>
                        </h2>

                        <div className="blog-meta">
                          <a
                            href="author.html"
                            style={{
                              textDecoration: "none",
                              color: "#555",
                              marginRight: "15px",
                            }}
                          >
                            <i className="far fa-user"></i> By - EMS
                          </a>
                         
                        </div>
                        <a
                          href={item.external_link} // Dynamically set the YouTube link
                          target="_blank" // Open in a new tab
                          rel="noopener noreferrer" // Security best practice for external links
                          className="category"
                          style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#FF9500",
                            color: "#fff",
                            borderRadius: "5px",
                            marginTop: "15px",
                            textDecoration: "none",
                          }}
                        >
                          VIEW FOR MORE <i className="fas fa-arrow-up-right ms-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCardDetailed;
