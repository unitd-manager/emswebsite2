import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../constants/api";

const BlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappa11", {
          routes: `கல்வி/${id}`,
        });
        setBlogPosts(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [id]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
      <div className="container">

        {/* Tab Buttons */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            {blogPosts.map((post, index) => (
              <button
                key={index}
                className={`btn mx-2 ${index === activeTab ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => handleTabClick(index)}
              >
                {post.title.length > 20 ? post.title.substring(0, 20) + "..." : post.title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {blogPosts[activeTab] && (
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2 className="blog-title">{blogPosts[activeTab].title}</h2>
              <div className="blog-meta mb-3">
                <a className="author" href="/"><i className="far fa-user"></i> By - Ems Media</a>
                <a href="#"><i className="fal fa-calendar-days"></i> {blogPosts[activeTab].content_date}</a>
                <span><i className="far fa-book-open"></i> 5 Mins Read</span>
              </div>
              {/* <div className="blog-img mb-40">
                <img
                  src={`https://emsmedia.net/storage/uploads/${blogPosts[activeTab]?.file_name}`}
                  alt={blogPosts[activeTab].title}
                  style={{ width: "100%", height: "auto" }}
                />
              </div> */}
            </div>

            <div className="col-xxl-9 col-lg-10">
              <div className="th-blog blog-single">
                <div className="blog-content-wrap">
                  <div className="share-links-wrap">
                    <div className="share-links">
                      <span className="share-links-title">PDF:</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="content">
                      {/* Render description */}
                      <div
                        // dangerouslySetInnerHTML={{ __html: blogPosts[activeTab].description }}
                        
                      >______________________கல்விக்கு உதவிடுவோம் PDF______________________</div>

                      {/* If PDF link is present, embed it */}
                      {blogPosts[activeTab].description.match(/(https?:\/\/[^\s"]+\.pdf)/gi)?.map((pdfUrl, idx) => (
                        <div key={idx} className="mt-4">
                          <iframe
                            src={pdfUrl}
                            width="100%"
                            height="600px"
                            title={`pdf-${idx}`}
                            style={{ border: "1px solid #ccc" }}
                          ></iframe>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCard;
