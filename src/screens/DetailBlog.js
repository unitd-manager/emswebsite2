import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import api from "../constants/api";
import bannerImage from "../../src/assets/img/quran3.jpg";
import styles from "./blog.module.css"; // Import CSS module

const Religious = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  
  useEffect(() => {
    const getSubContent = () => {
      api
        .post("/blog/getBlogsByblogId", { blog_id: id })
        .then((res) => {
          setBlogs(res.data.data);
          console.log('subcontent', res.data.data);
          AOS.init();
        })
        .catch(() => { });
    };

    getSubContent();
  }, [id]);

  return (
    <div>
      {/* Hero Banner Section */}
      <div 
        className={styles.service3} 
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      >
        <div className={styles.container}>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-6 text-center">
              <div className={styles.parttxt}>
                <h1 className={styles.herotitle}>Explore Our Blogs</h1>
                <p className={styles.herosubtitle}>Discover insightful content and spiritual guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog List Section */}
      <div className={styles.feature2}>
        <div className={styles.container}>
          <div className="row justify-content-center">
            {blogs.map((blog, index) => (
              <div 
                key={index} 
                className="col-xl-6 col-lg-6 col-md-12 mb-4" 
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className={styles.blogcard}>
                  <div className={styles.blogimage} style={{ backgroundImage: `url(${blog.image})` }}></div>
                  <div className={styles.blogcontent}>
                    <h3 className={styles.blogtitle}>{blog.title}</h3>
                    <div 
                      className={styles.blogdescription} 
                      dangerouslySetInnerHTML={{ __html: blog.description }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Religious;
