import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../constants/api";
import styles from "./DetailPage.module.css"; // Import CSS module
import { CSSTransition } from 'react-transition-group'; // Import animation library


const Engalai = () => {
  const [content, setReligion] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // State to control animation

  const { id } = useParams();

  console.log("sdew", id);

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappa11", {
          routes:`poem/${id}` ,
        });
        setReligion(res.data.data[0]);
        setIsLoaded(true); // Trigger animation after content is loaded

      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [id]); 

  // Helper function to remove HTML tags
  const stripHTMLTags = (input) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = input;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  // Helper function to truncate text to 20 words
  const truncateToWords = (text, wordLimit) => {
    const words = text.split(/\s+/); 
    if (words.length <= wordLimit) return text; 
    return words.slice(0, wordLimit).join(" ") + "..."; 
  };

  return (
    <CSSTransition in={isLoaded} timeout={500} classNames={styles.fade} unmountOnExit>
      <section className={styles.detailPageWrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>{content.title}</h1>
            <p className={styles.meta}>
              <span>By Ems Media</span> | <span>{content.content_date}</span>
            </p>
          </div>

          <div className={styles.imageContainer}>
            <CSSTransition in={isLoaded} timeout={500} classNames={styles.slideIn} unmountOnExit>
              <img
                src={`https://emsmedia.net/storage/uploads/${content.file_name}`}
                alt={content.title}
                className={styles.image}
              />
            </CSSTransition>
          </div>

          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{ __html: content.description }} />
          </div>
        </div>
      </section>
    </CSSTransition>
  );
};

export default Engalai;
