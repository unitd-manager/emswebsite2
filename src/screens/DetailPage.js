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
    <section className="space-top space-extra-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-8">
            <div className="content-detail">
              <img
                src={`https://emsmedia.net/storage/uploads/${content.file_name}`}
                alt={content.title}
                className="img-fluid"
              />
              <h1>{content.title}</h1>
              <div
                    className="part-txt"
                    dangerouslySetInnerHTML={{
                      __html: content.description,
                    }}
                  />
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
