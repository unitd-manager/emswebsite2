import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
            routes:`Agamiyangal/${id}` ,
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
      className="content-container"
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        backgroundColor: "#fff",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#e63946", // Bold red for the title
            marginBottom: "10px",
          }}
        >
          {blogPosts.title || "Content Title"}
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#6c757d", // Subtle gray for the subtitle
          }}
        >
          {blogPosts.subtitle || "Subtitle or additional details here"}
        </p>
        <hr
          style={{
            border: "0",
            height: "3px",
            background: "#e63946",
            width: "80px",
            margin: "20px auto",
            borderRadius: "5px",
          }}
        />
      </header>

      {/* Image Section (optional) */}
      {blogPosts.image && (
        <div
          style={{
            marginBottom: "30px",
            textAlign: "center",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={`https://emsmedia.net/storage/uploads/${blogPosts.file_name}`}
            alt="Content"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              alignItems: "center"
            }}
          />
        </div>
      )}

      {/* Content Section */}
      <section
        style={{
          lineHeight: "1.8",
          fontSize: "18px",
          color: "#343a40", // Dark gray for better readability
          textAlign: "justify",
          padding: "0 20px",
        }}
      >
        {blogPosts.description
          ? ReactHtmlParser(blogPosts.description)
          : "No description available at the moment."}
      </section>

      {/* Footer Section */}
      <footer
        style={{
          marginTop: "40px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#f94144", // Bright red footer
          color: "#ffffff", // White text for contrast
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            fontSize: "22px",
            marginBottom: "10px",
            fontWeight: "bold",
            color: "#ffe8d6", // Soft beige to complement the red
          }}
        >
          Thank You for Visiting!
        </h2>
        <p style={{ fontSize: "16px", marginBottom: "10px" }}>
          Feel free to reach out if you have any questions or want to learn
          more.
        </p>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            backgroundColor: "#ffe8d6", // Soft beige button
            color: "#f94144", // Red text for the button
            padding: "10px 20px",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "5px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f28482")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ffe8d6")}
        >
          Contact Us
        </a>
      </footer>
    </div>
  );
};


export default BlogCard;
