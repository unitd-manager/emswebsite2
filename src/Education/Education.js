import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"; // For navigation
import api from "../constants/api";
import collegeMain1 from "../assets/img/collegemain1.png"
import collegeMain2 from "../assets/img/collegemain2.png"
import college1 from "../assets/img/college1.jpeg"
import college4 from "../assets/img/college4.jpeg"

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);  

  const { Education } = useParams();

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappasection11", {
          routes:`Education/${Education}` 
        });
        setBlogPosts(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [Education]); // Dependency array is empty because `id` is a constant.
  
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
              <section className="space">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="row align-items-center">
                        <div className="col">
                          <h2 className="sec-title has-line">கல்வி</h2>
                        </div>                        
                      </div>
                      <div className="filter-active">
                        <div className="border-blog2 filter-item cat1">
                          <div className="blog-style4">
                            <div className="blog-img">
                              <img src={collegeMain1} alt="blog image" />
                            </div>
                            <div className="blog-content">
                              <a
                                data-theme-color="#007BFF"
                                href="#/&/:ஜாமீஆ"
                                className="category"
                                style={{backgroundColor:"#007BFF"}}
                              >
                              About Us
                              </a>
                              <h3 className="box-title-24">
                                <a className="hover-line" href="#/&/:ஜாமீஆ">
                                This Institution founded by His Holiness Jamaliya Syed Khaleel Awn Mowlana
                                Al Hassani wal Hussaini Ai Hashimi from the Progeny of Prophet Muhammad(PBUH)
                                </a>
                              </h3>
                              {/* <p className="blog-text">
                              This Institution founded by His Holiness Jamaliya Syed Khaleel Awn Mowlana
                                Al Hassani wal Hussaini Ai Hashimi from the Progeny of Prophet Muhammad(PBUH)
                              </p> */}
                              <div className="blog-meta">
                                <a href="#/&/:ஜாமீஆ">
                                  <i className="far fa-user" />
                                  By - EMS Media
                                </a>
                              </div>
                              <a href="#/&/:ஜாமீஆ" className="th-btn style2">
                                  Read More
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="border-blog2 filter-item cat4">
                          <div className="blog-style4">
                            <div className="blog-img">
                              <img src={college1} alt="blog image" />
                            </div>
                            <div className="blog-content">
                              <a
                                data-theme-color="#59C2D6"
                                href="#/&/:ஜாமீஆ"
                                className="category"
                                style={{backgroundColor:"#59C2D6"}}
                              >
                                Vision
                              </a>
                              <h3 className="box-title-24">
                                <a className="hover-line" href="#/&/:ஜாமீஆ">
                                To develop into a full fledged University
                                </a>
                              </h3>
                              {/* <p className="blog-text">
                                Quisque eget ex rutrum, consequat odio in, tempor purus.
                                Mauris neque quam, Tellentesque sit amet rutrum ut, gravida
                                sit amet felis.
                              </p> */}
                              <div className="blog-meta">
                                <a href="#/&/:ஜாமீஆ">
                                  <i className="far fa-user" />
                                  By - EMS Media
                                </a>
                              </div>
                              <a href="#/&/:ஜாமீஆ" className="th-btn style2">
                                  Read More
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="border-blog2 filter-item cat2">
                          <div className="blog-style4">
                            <div className="blog-img">
                              <img src={collegeMain2} alt="blog image" />
                            </div>
                            <div className="blog-content">
                              <a
                                data-theme-color="#FF9500"
                                href="#/&/:ஜாமீஆ"
                                className="category"
                                style={{backgroundColor:"#FF9500"}}
                              >
                              Objectives
                              </a>
                              <h3 className="box-title-24">
                                <a className="hover-line" href="#/&/:ஜாமீஆ">
                                Our Founder wished to form a younger generation who can be self dependant
                              and can serve their community / fellow human beings.
                                </a>
                              </h3>
                              {/* <p className="blog-text">
                                Quisque eget ex rutrum, consequat odio in, tempor purus.
                                Mauris neque quam, Tellentesque sit amet rutrum ut, gravida
                                sit amet felis.
                              </p> */}
                              <div className="blog-meta">
                                <a href="#/&/:ஜாமீஆ">
                                  <i className="far fa-user" />
                                  By - EMS Media
                                </a>
                              </div>
                              <a href="#/&/:ஜாமீஆ" className="th-btn style2">
                                  Read More
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="border-blog2 filter-item cat1">
                          <div className="blog-style4">
                            <div className="blog-img">
                              <img src={college4} alt="blog image" />
                            </div>
                            <div className="blog-content">
                              <a
                                data-theme-color="#007BFF"
                                href="#/&/:ஜாமீஆ"
                                className="category"
                                style={{backgroundColor:"#007BFF"}}
                              >
                                  Courses Offered
                              </a>
                              <h3 className="box-title-24">
                                <a className="hover-line" href="#/&/:ஜாமீஆ">
                                To Provide Islamic and formal general eduaction
                                with strong focus on technical trainings
                                </a>
                              </h3>
                              {/* <p className="blog-text">
                                Quisque eget ex rutrum, consequat odio in, tempor purus.
                                Mauris neque quam, Tellentesque sit amet rutrum ut, gravida
                                sit amet felis.
                              </p> */}
                              <div className="blog-meta">
                                <a href="#/&/:ஜாமீஆ">
                                  <i className="far fa-user" />
                                  By - EMS Media
                                </a>
                              </div>
                              <a href="#/&/:ஜாமீஆ" className="th-btn style2">
                                  Read More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
