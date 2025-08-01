import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For getting route parameters
import api from "../constants/api";

const DetailPage = () => {
  const { contentId } = useParams(); // Get the `content_id` from the URL
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContentDetails =  () => {
     
        api
          .post('/content/getContentById',{content_id: contentId})
          .then((res) => {
            setContent(res.data.data);
            console.log('edit Line Item',res.data.data)
          })
          .catch(() => {
            // Handle error
          });
      };

    fetchContentDetails();
  }, [contentId]);

 

  if (!content) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <a data-theme-color="#6234AC" href="/" className="category">{content.title}</a>
                    <h2 className="blog-title">{content.title}</h2>
                    <div className="blog-meta">
                        <a className="author" href="/"><i className="far fa-user"></i>By - Ems Media</a>
                        <a href="/"><i className="fal fa-calendar-days"></i>{content.content_date}</a>
                    </div>
                    <div className="blog-img mb-40">
                        <img
                src={`https://ems.unitdtechnologies.com/storage/${content.file_name}`}
                alt={content.title}
               
              />
                    </div>
                </div>
                <div className="col-xxl-9 col-lg-10">
                    <div className="th-blog blog-single">
                        <div className="blog-content-wrap">
                            <div className="share-links-wrap">
                                <div className="share-links">
                                   <span></span>
                                </div>
                            </div>
                            <div className="blog-content">
                              
                                    <div
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: content.description,
                    }}
                  />
                                  
                                  
                              
                            </div>
                        </div>
                    </div>
                  
                 
                 
                       
                </div>
            </div>
        </div>
    </section>
  );
};

export default DetailPage;
