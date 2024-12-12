import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../constants/api";

const BlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  const { id } = useParams();

console.log("sdew",id)
  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappa11", {
          routes:`கல்வி/${id}` ,

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
    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
      <div className="container">
        <div className="row justify-content-center">
          {blogPosts.map((post, index) => {
            return (
              <>
                <div className="col-12 text-center">
                  <h2 className="blog-title">{post.title}</h2>
                  <div className="blog-meta">
                    <a className="author" href="/"><i className="far fa-user"></i>By - Ems Media</a>
                    <a href="blog.html"><i className="fal fa-calendar-days"></i>{post.content_date}</a>
                    <span><i className="far fa-book-open"></i>5 Mins Read</span>
                  </div>
                  <div className="blog-img mb-40">
                    <img
                      src={`https://emsmedia.net/storage/uploads/${post.file_name}`}
                      alt={post.title}           
                    />
                  </div>
                </div>
                <div className="col-xxl-9 col-lg-10">
                  <div className="th-blog blog-single">
                    <div className="blog-content-wrap">
                      <div className="share-links-wrap">
                        <div className="share-links">
                          <span className="share-links-title">Share Post:</span>
                          <div className="multi-social">
                            <a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="https://linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://pinterest.com/" target="_blank"><i className="fab fa-pinterest-p"></i></a>
                            <a href="https://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                          </div>
                        </div>
                      </div>
                      <div className="blog-content">                          
                        <div className="content" dangerouslySetInnerHTML={{__html: post.description}}>
                        </div>          
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
    </div>
</section>
);
};

export default BlogCard;
