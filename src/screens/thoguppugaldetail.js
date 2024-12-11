import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'; // Import animation library
import api from "../constants/api";
import styles from "./DetailPage.module.css"; // Import CSS module

const DetailPage = () => {
  const { contentId } = useParams();
  const [content, setContent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); // State to control animation

  useEffect(() => {
    const fetchContentDetails = async () => {
      try {
        const res = await api.post('/content/getContentById', { content_id: contentId });
        setContent(res.data.data);
        setIsLoaded(true); // Trigger animation after content is loaded
      } catch (err) {
        console.error("Error fetching content details", err);
      }
    };

    fetchContentDetails();
  }, [contentId]);

  if (!content) {
    return <div className={styles.loading}>Loading...</div>;
  }

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

export default DetailPage;
