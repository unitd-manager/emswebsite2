import React, { useState, useEffect } from "react";
import api from "../../constants/api";
import { Link } from "react-router-dom";
import Select from "react-select";

function Pugaipadangal() {
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [valuelistCountry, setValuelistCountry] = useState([]);
  const [valuelistCity, setValuelistCity] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState({
    value: "All",
    label: "All",
  });
  const [areaFilter, setAreaFilter] = useState({
    value: "All",
    label: "All",
  });

  console.log('categoryFilter',categoryFilter)
  console.log('areaFilter',areaFilter)
  const [searchQuery, setSearchQuery] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // const openPopup = (imageData) => {
  //   setSelectedImage(imageData);
  //   setPopupVisible(true);
  // };

  // const closePopup = () => {
  //   setSelectedImage(null);
  //   setPopupVisible(false);
  // };

  const getValuelistCountry = () => {
    api
      .get("/valuelist/getValueListCountry")
      .then((res) => {
        const options = res.data.data.map((item) => ({
          value: item.valuelist_id,
          label: item.value,
        }));
        setValuelistCountry([
          { value: "All", label: "All" },
          ...options,
        ]);
      })
      .catch((error) => {
        console.log("valuelist not found:", error);
      });
  };

  useEffect(() => {
    const countryValue = categoryFilter.label;

    api
      .post("/valuelist/getValueListCity", { value: countryValue })
      .then((res1) => {
        const options = res1.data.data.map((item) => ({
          value: item.valuelist_id,
          label: item.citi_value,
        }));
        setValuelistCity([{ value: "All", label: "All" }, ...options]);
      });
  }, [categoryFilter]);

  const handleCategoryChange = (selectedOption) => {
    setCategoryFilter(selectedOption || { value: "All", label: "All" });
  };
  const handleCategoryChanges = (selectedOption) => {
    console.log("Selected City:", selectedOption);
    setAreaFilter(selectedOption || { value: "All", label: "All" });
  };
  
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    if (name === "fromDate") {
      setFromDate(value ? new Date(value) : null);
    } else if (name === "toDate") {
      setToDate(value ? new Date(value) : null);
    }
  };
  const handleClearCategory = () => {
    setCategoryFilter({ value: 'All', label: 'All' });
    setAreaFilter({ value: 'All', label: 'All' });
    setFromDate(null)
    setToDate(null)
    // getSortParams('category', 'default');
  };

  useEffect(() => {
    api.get("/content/getPhotoGallerys")
      .then((res) => {
        console.log("Gallery Data:", res.data.data); // Check the structure
        setGallery(res.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  
  

  const applyFilters = () => {
    let filteredData = [...gallery];

    if (categoryFilter.value !== "All") {
      filteredData = filteredData.filter(
        (item) => item.upload_country === categoryFilter.label
      );
    }

    if (areaFilter.value !== "All") {
      filteredData = filteredData.filter((item) => {
        console.log("Checking item city:", item.upload_city, "against", areaFilter.label);
        return (
          item.upload_city &&
          item.upload_city.trim().toLowerCase() === areaFilter.label.trim().toLowerCase()
        );
      });
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
  

 

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const visibleGallery = filteredGallery.slice(startIndex, endIndex);

  useEffect(() => {
    getValuelistCountry();
  }, []);
  const customStyles = {
    control: (base) => ({
      ...base,
      height: "60px", // Corrected height value
      border: "1px solid var(--border-color)", // Added quotes for the border property
      backgroundColor: "var(--body-bg)", // Corrected key name
      width: "fit-content", // Added quotes
      minWidth: "250px", // Added quotes
      fontSize: "16px", // Added quotes
      margin: "0", // Added quotes
      color: "var(--body-color)", // Added quotes
    }),
    menu: (base) => ({
      ...base,
      minWidth: "100px", // Retained as is
    }),
  };

 
  const totalPages = Math.ceil(filteredGallery.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleGallery = filteredGallery.slice(startIndex, endIndex);

  const openPopup = (index) => {
    setSelectedImageIndex(index);
  };

  const closePopup = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : gallery.length - 1));
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex < gallery.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <>
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>Photo Gallery</li>
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
                  <div className="col-md-auto">
                  <label htmlFor="fromDate" className="filter-label">Country</label>
                    <Select
                      styles={customStyles}
                      value={categoryFilter}
                      onChange={handleCategoryChange}
                      options={valuelistCountry}
                      placeholder="Filter by All"
                    />
                  </div>
                  <div className="col-md-auto">
                  <label htmlFor="fromDate" className="filter-label">City</label>
                    <Select
                      styles={customStyles}
                      value={areaFilter}
                      onChange={handleCategoryChanges}
                      options={valuelistCity}
                      placeholder="Filter by All"
                    />
                  </div>
                 
                  <div className="col-md-auto">
                    {/* <h6>From Date</h6> */}
                    <label htmlFor="fromDate" className="filter-label">From</label>
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
                
                  <div className="col-md-auto">
                    {/* <h6>To Date</h6> */}
                    <label htmlFor="fromDate" className="filter-label">To</label>
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
            { toDate !== null &&(
            <button onClick={handleClearCategory} style={{ marginTop: '10px', cursor: 'pointer', color: 'blue', textDecoration: 'underline', background: 'none', border: 'none', padding: 0 }}>
              Clear
            </button>
          )}
          </div>
          <div className="row gy-30 mb-30">
            {visibleGallery.map((item, index) => (
              <div className="col-xl-4 col-sm-6" key={index}>
                <div className="blog-style1">
                  <div className="blog-img">
                    <img
                      src={`https://ems.unitdtechnologies.com/storage/${item.file_name}`}
                      alt={item.title}
                      onClick={() => openPopup(startIndex + index)}
                    />
                    <Link
                      data-theme-color="#4E4BD0"
                      onClick={() => openPopup(startIndex + index)}
                      className="category"
                    >
                      {item.category_title}
                    </Link>
                  </div>
                  <h3 className="box-title-18">
                    <Link className="hover-line" onClick={() => openPopup(startIndex + index)}>
                      {item.title}
                    </Link>
                  </h3>
                  <div className="blog-meta">
                    <a href="">
                      <i className="far fa-user" />
                      By - EMS Media
                    </a>
                    <a href="">
                      <i className="fal fa-calendar-days" />
                      {new Date(item.content_date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
      {/* {popupVisible && selectedImage && (
        <div className="popup" style={popupStyles}>
          <div className="popup-content" style={popupContentStyles}>
            <button
              onClick={closePopup}
              style={closeButtonStyles}
            >
              X
            </button>
            <img
              src={`https://ems.unitdtechnologies.com/storage/${selectedImage.file_name}`}
              alt={selectedImage.title}
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            />
            <h5>{selectedImage.title}</h5>
          </div>
        </div>
      )} */}
       {selectedImageIndex !== null && (
        <div className="popup" style={popupStyles}>
          <div className="popup-content" style={popupContentStyles}>
            <button onClick={closePopup} style={closeButtonStyles}>X</button>
            <button onClick={goToPrevious} style={navButtonStyles}>&lt;</button>
            <img
              src={`https://ems.unitdtechnologies.com/storage/${gallery[selectedImageIndex].file_name}`}
              alt={gallery[selectedImageIndex].title}
              style={{ maxWidth: "100%", maxHeight: "80vh" }}
            />
            <button onClick={goToNext} style={navButtonStylesRight}>&gt;</button>
          </div>
        </div>
      )}
    </>
  );
}

// const popupStyles = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.5)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 1000,
// };

// const popupContentStyles = {
//   backgroundColor: "#fff",
//   padding: "20px",
//   borderRadius: "8px",
//   textAlign: "center",
// };

// const closeButtonStyles = {
//   position: "absolute",
//   top: "10px",
//   right: "10px",
//   background: "none",
//   border: "none",
//   fontSize: "20px",
//   cursor: "pointer",
// };

const popupStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const popupContentStyles = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  position: "relative",
};

const closeButtonStyles = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
};

const navButtonStyles = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(0, 0, 0, 0.5)",
  color: "white",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  padding: "10px",
};
const navButtonStylesRight = {
  position: "absolute",
  top: "50%",
  right: '20px',
  transform: "translateY(-50%)",
  background: "rgba(0, 0, 0, 0.5)",
  color: "white",
  border: "none",
  fontSize: "24px",
  cursor: "pointer",
  padding: "10px",
};

export default Pugaipadangal;
