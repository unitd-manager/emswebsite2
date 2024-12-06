import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactHtmlParser from "react-html-parser";
import api from '../constants/api';

const ThoguppugalSubCategory = () => {   
    const { subCategoryId } = useParams([]);
    const [subContent, setSubContent] = useState([]);
    const [selectedAudioUrl, setSelectedAudioUrl] = useState(null);

    useEffect(() => {
        const getSubContent = () => {
            api
                .post("/content/getThoguppugalSubContent",{sub_category_id: subCategoryId})
                .then((res) => {
                    setSubContent(res.data.data);
                    AOS.init();
                })
                .catch(() => { });
        };

        getSubContent();   
    }, [subCategoryId]);

    const playAudio = (audioUrl) => {
        setSelectedAudioUrl(audioUrl);
    };

    const closeAudioPopup = () => {
        setSelectedAudioUrl(null);
    };

    return (
        <section class="space-top space-extra-bottom">
        <div class="container">
            <div class="row">
                <div class="col-xxl-12 col-lg-11">
                    <div class="row gy-30">
                    {selectedAudioUrl && (
            <div className="audio-popup">
                <div className="popup-content">
                    <button className="close-btn" onClick={closeAudioPopup}>
                        Close
                    </button>
                    <audio src={selectedAudioUrl} controls />
                </div>
            </div>
        )}
                        {subContent.map((data, index) => (
    
                        <div class="col-sm-6">
                            <div class="blog-style7">
                                <div class="blog-img">
                                    <h5 onClick={() => playAudio(`https://emsmedia.net/storage/uploads/${data.file_name}`)}>{data.title}</h5>
    
                                </div>
                               
                                {ReactHtmlParser(data.description)}
                            </div>
                        </div>
                       
                     
                        ))}
                        
                       
                    </div>
                  
                </div>
               
            </div>
        </div>
    
    </section>

    );
}

export default ThoguppugalSubCategory;