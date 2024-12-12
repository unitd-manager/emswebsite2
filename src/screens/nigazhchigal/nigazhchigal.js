// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../constants/api";

// const Nigazhchigal = () => {
//   const [religion, setReligion] = useState([]);

//   const { nigazhchigal } = useParams();

//   useEffect(() => {
//     const getSubContent = async () => {
//       try {
//         const res = await api.post("/content/getByVappasection11", {
//             routes:`nigazhchigal/${nigazhchigal}` ,
//         });
//         setReligion(res.data.data);
//       } catch (error) {
//         console.error("Failed to fetch data:", error);
//       }
//     };

//     getSubContent();
//   }, [nigazhchigal]); // Dependency array is empty because `id` is a constant.

//   // Helper function to remove HTML tags
//   const stripHTMLTags = (input) => {
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = input;
//     return tempDiv.textContent || tempDiv.innerText || "";
//   };

//   // Helper function to truncate text to 20 words
//   const truncateToWords = (text, wordLimit) => {
//     const words = text.split(/\s+/); // Split text by whitespace
//     if (words.length <= wordLimit) return text; // If text has fewer words, return as is
//     return words.slice(0, wordLimit).join(" ") + "..."; // Join first 'wordLimit' words and append ellipsis
//   };
//   return (
//     <section className="space-top space-extra-bottom">
//       <div className="container">
//         <div className="row">
//           <div className="col-xxl-12 col-lg-11">
//             <div className="mb-30">
//               {Array.isArray(religion) &&
//                 religion.map((item, index) => (
//                   <div className="border-blog2" key={index}>
//                     <div className="blog-style4">
//                       <div className="blog-img w-386">
//                       <img
//                 src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
//                 style={{ width: '500px', objectFit: 'cover' }}

//               />
//                       </div>
//                       <div className="blog-content">
//                         <a
//                           data-theme-color="#FF9500"
//                           href={item.category_link || "#"}
//                           className="category"
//                         >
//                           {item.category_title}
//                         </a>
//                         <h3 className="box-title-30">
//                           <a
//                             className="hover-line"
//                             href={item.details_link || `/#/நிகழ்ச்சிகள்/${item.category_id}/${item.category_id}`}
//                           >
//                             {item.category_title}
//                           </a>
//                         </h3>
//                         <p className="blog-text">
//                           {truncateToWords(stripHTMLTags(item.chi_description), 20)}
//                         </p>
//                         <div className="blog-meta">
//                           <a href={item.author_link || "#"}>
//                             <i className="far fa-user"></i>By - Ems Media
//                           </a>
//                           <a href={item.date_link || "#"}>
//                             <i className="fal fa-calendar-days"></i>15 Mar, 2023
//                           </a>
//                         </div>
                        
//                         <a
//                           href={item.sub_category_id 
//                             ? `/#/நிகழ்ச்சிகள்/${item.category_id}/${item.sub_category_id}`
//                             : `/#/நிகழ்ச்சிகள்/${item.category_title}/${item.category_id}`}
//                           className="th-btn style2"
                          
//                         >
                          
//                           Read More
//                           <i className="fas fa-arrow-up-right ms-2"></i>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Nigazhchigal;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../constants/api";


const Nigalchigal = () => {

  const [religion, setReligion] = useState([]);

  const { nigazhchigal } = useParams();

  useEffect(() => {
    const getSubContent = async () => {
      try {
        const res = await api.post("/content/getByVappasection11", {
            routes:`nigazhchigal/${nigazhchigal}` ,
        });
        setReligion(res.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    getSubContent();
  }, [nigazhchigal]); // Dependency array is empty because `id` is a constant.

  // Helper function to remove HTML tags
  const stripHTMLTags = (input) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = input;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  // Helper function to truncate text to 20 words
  const truncateToWords = (text, wordLimit) => {
    const words = text.split(/\s+/); // Split text by whitespace
    if (words.length <= wordLimit) return text; // If text has fewer words, return as is
    return words.slice(0, wordLimit).join(" ") + "..."; // Join first 'wordLimit' words and append ellipsis
  };
    return (
        <div className="space2">
            <div className="container">
                <div className="title-area text-center">
                    <span className="sub-title">நிகழ்ச்சிகள்</span>
                    <h2 className="sec-title2">நிகழ்ச்சிகள்</h2>
                </div>
                <div className="story-box-area" data-bg-src="assets/img/normal/story_bg_1.svg">
                    {religion?.map((item, index) => (
                        <div className="story-box-wrap" key={index}>
                            <div className="story-box">
                                <div className="box-img">
                                    <img src={`https://emsmedia.net/storage/uploads/${item.file_name}`} alt="Image" />
                                </div>
                                <a
                            className="hover-line"
                            href={item.details_link || `/#/நிகழ்ச்சிகள்/${item.category_title}/${item.category_id}`}
                          >
                                <div className="box-content">

                                    <h3 className="box-title">{item.category_title}</h3>
                                    <p className="box-text">{item.text}</p>
                                </div>
                                </a>
                            </div>
                            <div className="story-year">{item.year}</div>
                        </div>
                    ))}
                    {/* <div className="story-box-wrap">
                        <div className="story-year"></div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Nigalchigal;