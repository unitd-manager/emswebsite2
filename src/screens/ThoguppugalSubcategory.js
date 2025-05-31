import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import api from '../constants/api';
import { CSSTransition } from 'react-transition-group'; // Import animation library

import styles from "./DetailPage.module.css"; // Import CSS module


const ThoguppugalSubCategory = () => {   
    const { subCategoryId } = useParams([]);
    const [content, setSubContent] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false); // State to control animation

    useEffect(() => {
        const getSubContent = () => {
            api
                .post("/content/getThoguppugalSubContent",{routes:`tamil/${subCategoryId}` ,})
                .then((res) => {
                    setSubContent(res.data.data[0]);
                    setIsLoaded(true); // Trigger animation after content is loaded

                })
                .catch(() => { });
        };

        getSubContent();   
    }, [subCategoryId]);


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
                    src={`https://ems.unitdtechnologies.com/storage/${content.file_name}`}
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
}

export default ThoguppugalSubCategory;