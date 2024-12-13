import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser"; // Import the library to render HTML
import api from "../constants/api";

const BlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);  

  const { id } = useParams();

  console.log("sd11ew",id)
    useEffect(() => {
      const getSubContent = async () => {
        try {
          const res = await api.post("/content/getByVappa11", {
            routes:`Vidayum/${id}` ,
          });
          setBlogPosts(res.data.data[0]);
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
    <div
    className="detail-page-container"
    style={{
      maxWidth: "1000px", // Making the width a bit wider
      margin: "50px auto",
      padding: "40px",
      backgroundColor: "#fff", // White background for clarity
      borderRadius: "15px",
      border: "2px solid #ddd", // Light border around the page
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Roboto', sans-serif",
      overflow: "hidden",
    }}
  >
    {/* Header Section */}
    <header style={{ textAlign: "center", marginBottom: "40px" }}>
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#333", // Dark color for the main title
          marginBottom: "10px",
        }}
      >
        {blogPosts.title || "Content Title"}
      </h1>
      <p
        style={{
          fontSize: "18px",
          fontWeight: "400",
          color: "#777", // Light gray for subtitle
          marginBottom: "20px",
        }}
      >
        {blogPosts.subtitle || "Subtitle or additional details"}
      </p>
      <div
        style={{
          width: "80px",
          height: "3px",
          backgroundColor: "#FF6F61", // Accent color line
          margin: "0 auto",
          borderRadius: "2px",
        }}
      />
    </header>

    {/* Image Section */}
    {blogPosts.image && (
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={`https://emsmedia.net/storage/uploads/${blogPosts.image}`}
          alt="Content"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
    )}

    {/* Content Section */}
    <section
      style={{
        lineHeight: "1.8",
        fontSize: "18px",
        color: "#333",
        textAlign: "justify",
        marginBottom: "40px",
      }}
    >
      {blogPosts.description
        ? ReactHtmlParser(blogPosts.description)
        : "No description available."}
    </section>

    {/* Footer Section */}
    <footer
      style={{
        backgroundColor: "#FF6F61", // Accent color for footer
        color: "#fff", // White text for contrast
        padding: "40px 0",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "600",
          marginBottom: "15px",
          color: "#fff",
        }}
      >
        Discover More Content
      </h2>
      <p
        style={{
          fontSize: "18px",
          marginBottom: "30px",
          fontWeight: "400",
          color: "#ffffffb3", // Slightly faded white
        }}
      >
        Stay tuned for more information and exciting updates. Click the button below to return to the homepage.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "#fff", // White button
          color: "#FF6F61", // Accent color text
          padding: "15px 30px",
          fontWeight: "600",
          fontSize: "16px",
          textDecoration: "none",
          borderRadius: "30px",
          border: "2px solid #FF6F61", // Border to match button background
          transition: "all 0.3s ease",
          display: "inline-block",
          textTransform: "uppercase", // Uppercase text
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#FF6F61";
          e.target.style.color = "#fff";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#fff";
          e.target.style.color = "#FF6F61";
        }}
      >
        Return to Home
      </Link>
    </footer>
  </div>
);
};

export default BlogCard;
