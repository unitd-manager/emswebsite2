import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../constants/api";

const BlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.get("/content/getKarbala");
        setBlogPosts(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [id]);

  const post = blogPosts[0];
  const match = post?.description?.match(/(https?:\/\/[^\s"]+\.pdf)/i);

  return (
    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
      <div className="container">
        {post && (
          <div className="row justify-content-center mb-5">
            <div className="col-12 text-center">
              <h2 className="blog-title">{post.title}</h2>
              <div className="blog-meta mb-3">
                <a className="author" href="/"><i className="far fa-user"></i> By - Ems Media</a>
                <a href="#">
                  <i className="fal fa-calendar-days"></i>{" "}
                  {new Date(post.content_date).toLocaleDateString('en-GB')}
                </a>
                <span><i className="far fa-book-open"></i> 5 Mins Read</span>
              </div>
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
                      {match ? (
                        <div className="mt-4">
                          <div>__________________________கர்பலா வீர வரலாறு __________________________</div>
                          <iframe
                            src={match[0]}
                            width="100%"
                            height="600px"
                            title="pdf-viewer"
                            style={{ border: "1px solid #ccc" }}
                          ></iframe>
                        </div>
                      ) : (
                        <p>PDF link not available.</p>
                      )}
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
