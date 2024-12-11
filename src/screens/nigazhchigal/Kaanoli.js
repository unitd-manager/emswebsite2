import React, { useState, useEffect } from "react";
import api from "../../constants/api";
import { Link } from "react-router-dom";
import "../../assets/css/event.css";
import Select from "react-select";

// Function to extract YouTube video ID
const extractYouTubeId = (url) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

function Pugaipadangal() {
  const [gallery, setGallery] = useState([]);
  const [modalVideo, setModalVideo] = useState(null); // State to hold the video for the modal
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [valuelistCountry, setValuelistCountry] = useState([]);
  const [valuelistCity, setValuelistCity] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState({
    value: "Country",
    label: "Country",
  });
  const [areaFilter, setAreaFilter] = useState({
    value: "City",
    label: "City",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const getValuelistCountry = () => {
    api
      .get("/valuelist/getValueListCountry")
      .then((res) => {
        const options = res.data.data.map((item) => ({
          value: item.valuelist_id,
          label: item.value,
        }));
        setValuelistCountry([
          { value: "Country", label: "Country" },
          ...options,
        ]);
      })
      .catch((error) => {
        console.log("valuelist not found:", error);
      });
  };

  useEffect(() => {
    getValuelistCountry();
  }, []);

  useEffect(() => {
    const countryValue = categoryFilter.label;

    api
      .post("/valuelist/getValueListCity", { value: countryValue })
      .then((res1) => {
        const options = res1.data.data.map((item) => ({
          value: item.valuelist_id,
          label: item.citi_value,
        }));
        setValuelistCity([{ value: "City", label: "City" }, ...options]);
      });
  }, [categoryFilter]);

  const handleCategoryChange = (selectedOption) => {
    setCategoryFilter(selectedOption || { value: "Country", label: "Country" });
  };
  const handleCategoryChanges = (selectedOption) => {
    setAreaFilter(selectedOption || { value: "City", label: "City" });
  };
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    if (name === "fromDate") {
      setFromDate(value ? new Date(value) : null);
    } else if (name === "toDate") {
      setToDate(value ? new Date(value) : null);
    }
  };

  useEffect(() => {
    const getGallery = () => {
      api
        .get("/content/getVideoForweb")
        .then((res) => {
          setGallery(res.data.data);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });
    };
    getGallery();
  }, []);

  const applyFilters = () => {
    let filteredData = [...gallery];

    console.log("categoryFilter", categoryFilter);
    console.log("areaFilter", areaFilter);
    if (categoryFilter.value !== "Country") {
      filteredData = filteredData.filter(
        (item) => item.upload_country === categoryFilter.label
      );
    }

    if (areaFilter.value !== "City") {
      filteredData = filteredData.filter(
        (item) => item.upload_city === areaFilter.label
      );
    }

    if (fromDate && toDate) {
      filteredData = filteredData.filter((item) => {
        const contentDate = new Date(item.content_date);
        return contentDate >= fromDate && contentDate <= toDate;
      });
    }

    if (searchQuery !== "") {
      filteredData = filteredData.filter(
        (item) =>
          (item.search_keyword &&
            item.search_keyword
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) ||
          (item.title &&
            item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filteredData;
  };

  const filteredGallery = applyFilters();
 

  const totalPages = Math.ceil(filteredGallery.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleGallery = filteredGallery.slice(startIndex, endIndex);
   
  const customStyles = {
    control: (base) => ({
      ...base,
      height: "60px", // Corrected height value
      border: "1px solid var(--border-color)", // Added quotes for the border property
      backgroundColor: "var(--body-bg)", // Corrected key name
      width: "fit-content", // Added quotes
      minWidth: "180px", // Added quotes
      fontSize: "16px", // Added quotes
      margin: "0", // Added quotes
      color: "var(--body-color)", // Added quotes
    }),
    menu: (base) => ({
      ...base,
      minWidth: "100px", // Retained as is
    }),
  };
  return (
    <>
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>Video Gallery</li>
          </ul>
        </div>
      </div>

      <section className="space-top space-extra-bottom">
        <div className="container">
        <div className="row">
            <div className="col-xl-3 col-lg-4 ">
              <div className="sidebar-area sidebar-shop">
                <div className="widget widget_search  ">
                  <form className="search-form">
                    <input
                      type="text"
                      onChange={handleSearchChange}
                      placeholder="Enter Keyword"
                    />
                    <button type="submit">
                      <i className="far fa-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="th-sort-bar">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md">
                    <p className="woocommerce-result-count"></p>
                  </div>
                  <div className="col-md-auto" style={{ marginLeft: -60 }}>
                    <Select
                      styles={customStyles}
                      value={categoryFilter}
                      onChange={handleCategoryChange}
                      options={valuelistCountry}
                      placeholder="Filter by Country"
                    />
                  </div>
                  <div className="col-md-auto">
                    <Select
                      styles={customStyles}
                      value={areaFilter}
                      onChange={handleCategoryChanges}
                      options={valuelistCity}
                      placeholder="Filter by City"
                    />
                  </div>
                  From
                  <div className="col-md-auto">
                    {/* <h6>From Date</h6> */}
                    <input
                      className="filter-input"
                      type="date"
                      onChange={handleDateChange}
                      value={
                        fromDate ? fromDate.toISOString().split("T")[0] : ""
                      }
                      name="fromDate"
                    />
                  </div>
                  To
                  <div className="col-md-auto">
                    {/* <h6>To Date</h6> */}
                    <input
                      className="filter-input"
                      type="date"
                      onChange={handleDateChange}
                      value={toDate ? toDate.toISOString().split("T")[0] : ""}
                      name="toDate"
                    />
                  </div>
                  {/* <div className="col-md-auto">
                    <form className="woocommerce-ordering" method="get">
                      <select
                        name="orderby"
                        className="orderby"
                        aria-label="Shop order"
                      >
                        <option value="menu_order" selected="selected">
                          Default Sorting
                        </option>
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date">Sort by latest</option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price-desc">
                          Sort by price: high to low
                        </option>
                      </select>
                    </form>
                  </div> */}
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="row gy-30 mb-30">
            {visibleGallery.map((item, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="blog-style1">
                  <div className="blog-img">
                    <img
                      src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                      alt="Video thumbnail"
                    />
                    <a data-theme-color="#868101" href="#" className="category">
                      Category
                    </a>
                    <button
                      className="play-btn popup-video"
                      onClick={() => setModalVideo(item)} // Open modal with the selected video
                    >
                      <i className="fas fa-play" />
                    </button>
                  </div>
                  <h3 className="box-title-20">
                    <a href="#">{item.title}</a>
                  </h3>
                  <div className="blog-meta">
                    <a href="#">
                      <i className="far fa-user" />
                      By - EMS Media
                    </a>
                    <a href="#">
                      <i className="fal fa-calendar-days" />
                      {item.content_date ? new Date(item.content_date).toLocaleDateString('en-GB') : "Unknown Date"}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Modal for YouTube Video */}
            {modalVideo && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <button
                    className="modal-close"
                    onClick={() => setModalVideo(null)} // Close the modal
                  >
                    ×
                  </button>
                  <h3>{modalVideo.title || "Untitled Video"}</h3>
                  <div className="video-container">
                    {modalVideo.description &&
                    extractYouTubeId(modalVideo.description) ? (
                      <iframe
                        width="100%"
                        height="400"
                        src={`https://www.youtube.com/embed/${extractYouTubeId(
                          modalVideo.description
                        )}`}
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

          {/* Pagination */}
          <div className="th-pagination text-center pt-50">
            <ul>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(index + 1);
                    }}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              {currentPage < totalPages && (
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(currentPage + 1);
                    }}
                  >
                    <i className="fas fa-arrow-right" />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pugaipadangal;
