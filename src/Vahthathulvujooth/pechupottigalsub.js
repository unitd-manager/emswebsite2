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
        <div className="row gy-30">
            {data.map((item, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="blog-style1">
                        <div className="blog-img">
                            <img
                                src={bg1}
                                alt="blog"
                                style={{
                                    width: "300PX",
                                    height: "200px",
                                    objectFit: "cover",
                                    border: "2px solid #59C2D6", // Border style
                                    borderRadius: "10px", // Optional: Rounded corners
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow effect
                                }}
                            />
                            <a
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
                            </a>
                        </div>
                        <h3 className="box-title-20">
                            <a
                                className="hover-line"
                                href={item.external_link} // Pass the external link dynamically
                                target="_blank" // Open in a new tab
                                rel="noopener noreferrer" // Security best practice for external links
                                style={{ textDecoration: "none", color: "#000" }}
                            >
                                {item.sub_category_title}
                            </a>
                        </h3>
                        <div className="blog-meta">
                            <a href="author.html">
                                <i className="far fa-user"></i> By - Tnews
                            </a>
                            <a href="blog.html">
                                <i className="fal fa-calendar-days"></i> 19 Mar, 2023
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BlogCard;
