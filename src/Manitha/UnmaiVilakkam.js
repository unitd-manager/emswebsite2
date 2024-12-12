import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import api from "../constants/api";
import { Link } from "react-router-dom";

const DetailPage = () => {

  const [categoryDetails, setCategoryDetails] = useState([]);
  const { UnmaiVilakkam } = useParams();

console.log("sdew",UnmaiVilakkam)
console.log("categoryDetails",categoryDetails)
  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappa11", {
          routes:`UnmaiVilakkam/${UnmaiVilakkam}`,
        });
        setCategoryDetails(res.data.data[0]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [UnmaiVilakkam]); // Dependency array is empty because `id` is a constant.

  return (
    <div
      className="detail-page-container"
      style={{
        maxWidth: "1200px", // Wider width for a more spacious layout
        margin: "40px auto",
        padding: "50px",
        backgroundColor: "#f8f8f8", // Light gray background for soft look
        borderRadius: "20px",
        border: "1px solid #ddd", // Subtle light border
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Lato', sans-serif", // Sleek, modern font
        overflow: "hidden",
      }}
    >
      {/* Header Section */}
      <header style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "40px",
            fontWeight: "700",
            color: "#2C3E50", // Darker title for contrast
            marginBottom: "15px",
            textTransform: "uppercase",
          }}
        >
          {categoryDetails.title || "Content Title"}
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "400",
            color: "#7F8C8D", // Muted gray for subtitle
            marginBottom: "25px",
            fontStyle: "italic", // Adding some style to the subtitle
          }}
        >
          {categoryDetails.subtitle || "Subtitle or additional details"}
        </p>
        <div
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: "#2980B9", // Accent color for the line
            margin: "0 auto",
            borderRadius: "2px",
          }}
        />
      </header>

      {/* Image Section */}
      {categoryDetails.image && (
        <div
          style={{
            textAlign: "center",
            marginBottom: "50px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={`https://emsmedia.net/storage/uploads/${categoryDetails.image}`}
            alt="Content"
            style={{
              width: "100%",
              height: "500px", // Larger height for more impact
              objectFit: "cover",
              borderRadius: "15px",
              border: "5px solid #fff", // White border around the image
            }}
          />
        </div>
      )}

      {/* Content Section */}
      <section
        style={{
          lineHeight: "1.8",
          fontSize: "20px",
          color: "#2C3E50",
          textAlign: "justify",
          marginBottom: "50px",
          padding: "30px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {categoryDetails.description
          ? ReactHtmlParser(categoryDetails.description)
          : "No description available."}
      </section>

      {/* Footer Section */}
      <footer
        style={{
          backgroundColor: "#2980B9", // Cool blue footer
          color: "#fff", // White text for good contrast
          padding: "50px 0",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#fff",
          }}
        >
          Explore More Content
        </h2>
        <p
          style={{
            fontSize: "18px",
            marginBottom: "30px",
            fontWeight: "400",
            color: "#ecf0f1", // Slightly lighter white
          }}
        >
          Stay updated with our latest content and exciting news. Click below to explore more.
        </p>
        <Link
          to="/"
          style={{
            backgroundColor: "#fff", // White button for a clean look
            color: "#2980B9", // Matching text color with the footer
            padding: "18px 40px",
            fontWeight: "600",
            fontSize: "18px",
            textDecoration: "none",
            borderRadius: "30px",
            border: "2px solid #2980B9",
            transition: "all 0.3s ease",
            display: "inline-block",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#2980B9";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#fff";
            e.target.style.color = "#2980B9";
          }}
        >
          Back to Home
        </Link>
      </footer>
    </div>
  );
};

export default DetailPage;
