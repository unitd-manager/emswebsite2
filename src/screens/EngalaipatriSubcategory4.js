import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // For getting route parameters
import api from "../constants/api";

const DetailPage = () => {
  const { subCategoryId } = useParams(); // Get the `content_id` from the URL
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContentDetails =  () => {
     
        api
          .post('/content/getEngalaiPatriSubContent',{
            routes:`ar/${subCategoryId}` ,
          })
          .then((res) => {
            setContent(res.data.data[0]);
          })
          .catch(() => {
            // Handle error
          });
      };

    fetchContentDetails();
  }, [subCategoryId]);

 

  if (!content) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <section className="th-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <h2 className="blog-title">{content.title}</h2>
                    <div className="blog-meta">
                        <a className="author" href="/"><i className="far fa-user"></i>By - Ems Media</a>
                        <a href="/"><i className="fal fa-calendar-days"></i>{content.content_date}</a>
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
