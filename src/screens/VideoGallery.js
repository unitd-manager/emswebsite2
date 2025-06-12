import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import api from "../constants/api";

// Function to extract YouTube video ID
const extractYouTubeId = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

const VideoPlaylist = () => {
  const [videoData, setVideoData] = useState([]); // Store video data for tabs
  const [activeIndex, setActiveIndex] = useState(0); // Track the active tab index
  const [loading, setLoading] = useState(true); // Track loading state
  const [videos, setVideos] = useState([]); // Videos for the Swiper
  const [modalVideo, setModalVideo] = useState(null); // Track video for the modal

  useEffect(() => {
    setLoading(true);
    api
      .get("/content/getVideoForweb", { limit: 10 }) // limit parameter add பண்ணுறது
      .then((res) => {
        const fetchedVideos = res.data.data?.slice(0, 10) || []; // Safety check, 10 items மட்டும் எடுக்குறது
        setVideoData(fetchedVideos);
        setVideos(fetchedVideos);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
      })
      .finally(() => setLoading(false));
  }, []);
  

  // Show loading spinner
  if (loading) {
    return <div className="spinner">Loading...</div>;
  }

  // Show error message if no videos are available
  if (!loading && videoData.length === 0) {
    return <div className="error-message">No videos available at the moment.</div>;
  }

  return (
    <div className="space dark-theme bg-title-dark" style={{marginTop:100}}>
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
                    setVideos([video]); // Optionally set the active video
                  }}
                />
              ))}
            </div>
          </div>

          {/* Slider on the Right */}
          <div className="col-xl-8 col-lg-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{ delay: 7000 }}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              initialSlide={activeIndex}
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <VideoCard video={video} onPlay={() => setModalVideo(video)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Modal for YouTube Video */}
      {modalVideo && (
        <div className="modal-overlay">
        <button className="modal-close" onClick={() => setModalVideo(null)}>
  ×
</button>
  
          <div className="modal-content">
            <button className="modal-close" onClick={() => setModalVideo(null)}>
              ×
            </button>
            <h3>{modalVideo.title || "Untitled Video"}</h3>
            <div className="video-container">
              {modalVideo.description && extractYouTubeId(modalVideo.description) ? (
                <iframe
                  width="100%"
                  height="400"
                  src={`https://www.youtube.com/embed/${extractYouTubeId(modalVideo.description)}`}
                  title={modalVideo.title || "YouTube Video"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <p>Invalid YouTube URL</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Tab Button Component
const TabButton = React.memo(({ video, isActive, onClick }) => (
  <div
    className={`tab-btn ${isActive ? "active" : ""}`}
    onClick={onClick}
    role="tab"
    aria-selected={isActive}
 
  >
    <div className="blog-style2">
      <div className="blog-img img-200">
        <img
          src={`https://ems.unitdtechnologies.com/storage/${video.file_name}`}
          alt={video.title || "Video Thumbnail"}
        />
        <div className="icon">
          <i className="fal fa-waveform-lines" />
        </div>
      </div>
      <div className="blog-content videoPanel">
        {/* <a
          data-theme-color={video.categoryColor || "#000"}
          href="/"
          className="category"
        >
          {video.category || "Unknown Category"}
        </a> */}
        <h3 className="box-title-20 videoPanelFont">
          <a className="hover-line">
            {video.title || "Untitled"}
          </a>
        </h3>
        <div className="blog-meta">
         <a>
        <i className="fal fa-calendar-days" />
        {video.content_date ? new Date(video.content_date).toLocaleDateString('en-GB') : "Unknown Date"}
      </a>
</div>

      </div>
    </div>
  </div>
));

// Video Card Component
const VideoCard = React.memo(({ video, onPlay }) => (
  <div className="blog-style8" >
    <div className="blog-img">
      <img
        src={`https://ems.unitdtechnologies.com/storage/${video.file_name}`}
        alt={video.title || "Video Thumbnail"}
        style={{ 
          width: '100%', /* Column width-க்கு fit ஆகும் */
          height: '500px', /* Set a fixed height */
          objectFit: 'cover', /* Crop and fit the image */
          borderRadius: '10px' /* Optional: Rounded corners */
        }}
      />
      <button className="play-btn" onClick={onPlay}>
        <i className="fas fa-play" />
      </button>
    </div>
    <h3 className="box-title-30">
      <a className="hover-line">
        {video.title || "Untitled"}
      </a>
    </h3>
    <div className="blog-meta">
      {/* <a
        data-theme-color={video.categoryColor || "#000"}
       
        className="category"
      >
        {video.category || "Unknown Category"}
      </a> */}
      <a>
        <i className="far fa-user" /> By - EMS Media
      </a>
      <a href="/">
    <i className="fal fa-calendar-days" />
    {video.content_date ? new Date(video.content_date).toLocaleDateString('en-GB') : "Unknown Date"}
  </a>
    </div>
  </div>
));

export default VideoPlaylist;
