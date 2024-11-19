import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import api from "../constants/api";

const stripHtmlTags = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
};

const VideoPlaylist = () => {
  const [videoData, setVideoUrls] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active tab index
  const [videos, setVideos] = useState([]); // Ensure the variable is plural for clarity

  console.log('videos', videos);

  useEffect(() => {
    const getVideoUrls = () => {
      api
        .post("/content/getVideoUrls")
        .then((res) => {
          const fetchedVideos = res.data.data || [];
          setVideoUrls(fetchedVideos); // Set videoData
          setVideos(fetchedVideos); // Set videos for slider
          console.log("Fetched Videos:", fetchedVideos);
        })
        .catch((err) => {
          console.error("Error fetching videos:", err);
        });
    };

    getVideoUrls();
  }, []);

  return (
    <div className="space dark-theme bg-title-dark">
      <div className="container">
        <h2 className="sec-title has-line">Latest Video Playlist</h2>
        <div className="row">
          {/* Tabs on the Left */}
          <div className="col-xl-4 col-lg-2">
            <div className="blog-tab">
              {videoData.map((video, index) => (
                <TabButton
                  key={index}
                  video={video}
                  isActive={index === activeIndex}
                  onClick={() => {
                    setActiveIndex(index);
                    setVideos([video]); // Optionally set the active video if needed
                  }}
                />
              ))}
            </div>
          </div>

          {/* Slider on the Right */}
          <div className="col-xl-8 col-lg-10">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Sync tab when slide changes
              initialSlide={activeIndex}
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <VideoCard video={video} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};


const TabButton = React.memo(({ video, isActive, onClick }) => (
  <div
    className={`tab-btn ${isActive ? "active" : ""}`}
    onClick={onClick} // Trigger tab change on click
  >
    <div className="blog-style2">
      <div className="blog-img img-100">
        <img
          src={`https://emsmedia.net/storage/uploads/${video.file_name}`}
          alt="blog image"
        />
        <div className="icon">
          <i className="fal fa-waveform-lines" />
        </div>
        <a
          href={stripHtmlTags(video.description)}
          className="play-btn popup-video"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-play" />
        </a>
      </div>
      <div className="blog-content">
        <a
          data-theme-color={video.categoryColor || "#000"}
          href="blog.html"
          className="category"
        >
          {video.category || "Unknown Category"}
        </a>
        <h3 className="box-title-20">
          <a className="hover-line" href="blog-details.html">
            {video.title || "Untitled"}
          </a>
        </h3>
        <div className="blog-meta">
          <a href="blog.html">
            <i className="fal fa-calendar-days" />
            {video.date || "Unknown Date"}
          </a>
        </div>
      </div>
    </div>
  </div>
));

const VideoCard = React.memo(({ video }) => (
  <div className="blog-style8">
    <div className="blog-img">
      <img
        src={`https://emsmedia.net/storage/uploads/${video.file_name}`}
        alt="blog image"
      />
      <a
        href={stripHtmlTags(video.description)}
        className="play-btn popup-video"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-play" />
      </a>
    </div>
    <h3 className="box-title-30">
      <a className="hover-line" href="blog-details.html">
        {video.title || "Untitled"}
      </a>
    </h3>
    <div className="blog-meta">
      <a
        data-theme-color={video.categoryColor || "#000"}
        href="blog.html"
        className="category"
      >
        {video.category || "Unknown Category"}
      </a>
      <a href="author.html">
        <i className="far fa-user" /> By - Tnews
      </a>
      <a href="blog.html">
        <i className="fal fa-calendar-days" />
        {video.date || "Unknown Date"}
      </a>
    </div>
  </div>
));

export default VideoPlaylist;
