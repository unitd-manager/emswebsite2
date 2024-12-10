import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../constants/api";
import collegeMain1 from "../assets/img/collegemain1.png"
import collegeMain2 from "../assets/img/collegemain2.png"
import collegeMain from "../assets/img/collegemain.jpeg"
import college1 from "../assets/img/college1.jpeg"
import college2 from "../assets/img/college2.jpeg"
import college3 from "../assets/img/college3.jpeg"
import college4 from "../assets/img/college4.jpeg"

const Engalai = () => {
  const [religion, setReligion] = useState([]);

  const { engalaipatri } = useParams();

console.log("sdew",engalaipatri)
  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getManitha123", {
          routes: engalaipatri,
        });
        setReligion(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [engalaipatri]); // Dependency array is empty because `id` is a constant.

  // Helper function to remove HTML tags
  const stripHTMLTags = (input) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = input;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  // Helper function to truncate text to 20 words
  const truncateToWords = (text, wordLimit) => {
    const words = text.split(/\s+/); // Split text by whitespace
    if (words.length <= wordLimit) return text; // If text has fewer words, return as is
    return words.slice(0, wordLimit).join(" ") + "..."; // Join first 'wordLimit' words and append ellipsis
  };

  return (
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 col-lg-11">
            <div className="mb-30">
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
                                href="/"
                                className="category"
                                style={{backgroundColor:"#007BFF"}}
                              >
                              About Us
                              </a>
                              <h3 className="box-title-24">
                                <a className="hover-line" href="/">
                                This Institution founded by His Holiness Jamaliya Syed Khaleel Awn Mowlana
                                Al Hassani wal Hussaini Ai Hashimi from the Progeny of Prophet Muhammad(PBUH)
                                </a>
                              </h3>
                              {/* <p className="blog-text">
                              This Institution founded by His Holiness Jamaliya Syed Khaleel Awn Mowlana
                                Al Hassani wal Hussaini Ai Hashimi from the Progeny of Prophet Muhammad(PBUH)
                              </p> */}
                              <div className="blog-meta">
                                <a href="/">
                                  <i className="far fa-user" />
                                  By - EMS Media
                                </a>
                              </div>
                              <a href="#" className="th-btn style2">
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
                                href="/"
                                className="category"
                                style={{backgroundColor:"#59C2D6"}}
                              >
                                Vision
                              </a>
                              <h3 className="box-title-24">
                                <a className="hover-line" href="/">
                                To develop into a full fledged University
                                </a>
                              </h3>
                              {/* <p className="blog-text">
                                Quisque eget ex rutrum, consequat odio in, tempor purus.
                                Mauris neque quam, Tellentesque sit amet rutrum ut, gravida
                                sit amet felis.
                              </p> */}
                              <div className="blog-meta">
                                <a href="/">
                                  <i className="far fa-user" />
                                  By - EMS Media
                                </a>
                              </div>
                              <a href="#" className="th-btn style2">
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
                                href="/"
                                className="category"
                                style={{backgroundColor:"#FF9500"}}
                              >
                              Objectives
                              </a>
                              <h3 className="box-title-24">
                                <a className="hover-line" href="/">
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
                                <a href="/">
                                  <i className="far fa-user" />
                                  By - EMS Media
                                </a>
                              </div>
                              <a href="#" className="th-btn style2">
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
                                href="/"
                                className="category"
                                style={{backgroundColor:"#007BFF"}}
                              >
                                  Courses Offered
                              </a>
                              <h3 className="box-title-24">
                                <a className="hover-line" href="/">
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
                                <a href="/">
                                  <i className="far fa-user" />
                                  By - EMS Media
                                </a>
                              </div>
                              <a href="#" className="th-btn style2">
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

export default Engalai;
