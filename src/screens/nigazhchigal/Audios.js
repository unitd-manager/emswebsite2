import React, { useState, useEffect } from 'react';
import api from '../../constants/api';
import { Link } from 'react-router-dom';
import "../../assets/css/event.css";
import Select from "react-select";

function Pugaipadangal() {
  const [gallery, setGallery] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
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
          { value: "All", label: "All" },
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
        setValuelistCity([{ value: "All", label: "All" }, ...options]);
      });
  }, [categoryFilter]);

  const handleCategoryChange = (selectedOption) => {
    setCategoryFilter(selectedOption || { value: "All", label: "All" });
  };
  const handleCategoryChanges = (selectedOption) => {
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
    const getGallery = () => {
      api.get('/content/getAudioGallery')
        .then((res) => {
          setGallery(res.data.data);
        })
        .catch((error) => {
          console.log('Error fetching data:', error);
        });
    };
    getGallery();
  }, []);

  const applyFilters = () => {
    let filteredData = [...gallery];

    console.log("categoryFilter", categoryFilter);
    console.log("areaFilter", areaFilter);
    if (categoryFilter.value !== "All") {
      filteredData = filteredData.filter(
        (item) => item.upload_country === categoryFilter.label
      );
    }

    if (areaFilter.value !== "All") {
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

  return (
    <>
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>Audio Gallery</li>
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
              <div className="col-lg-6" key={index}>
                <div className="th-blog blog-single">
                  <a
                    data-theme-color="#4E4BD0"
                    href="#"
                    className="category"
                  >
                    {item.category_title}
                  </a>
                  <h2 className="blog-title">{item.title}</h2>
                  <div className="blog-meta">
                    <a className="author" href="#">
                      <i className="far fa-user" />
                      By - EMS Media
                    </a>
                    <a href="#">
                      <i className="fal fa-calendar-days" />
                      {new Date(item.content_date).toLocaleDateString('en-GB')} {/* Format: DD/MM/YYYY */}
                    </a>
                  </div>
                  <div className="blog-audio">
                    <audio controls>
                      <source
                        src={`https://emsmedia.net/storage/uploads/${item.file_name}`}
                        type="audio/mpeg"
                      />
                      Your browser does not support the audio element.
                    </audio>
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
                    className={currentPage === index + 1 ? 'active' : ''}
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
