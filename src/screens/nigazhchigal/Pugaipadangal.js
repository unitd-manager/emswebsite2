import React,{useState} from 'react'
import './pugaipadamstyle.css';

function Pugaipadangal() {
    // const { id } = useParams();
    // const [gallery, setGallery] = useState([]);
    // const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
    // const [selectedAudioUrl, setSelectedAudioUrl] = useState(null);
    // const [valuelistCountry, setValuelistCountry] = useState([]);
    // const [categoryFilter, setCategoryFilter] = useState({ value: 'All', label: 'All' });
    // const [areaFilter, setAreaFilter] = useState({ value: 'All', label: 'All' });
    // const [searchQuery, setSearchQuery] = useState('');
    // const [valuelistCity, setValuelistCity] = useState([]);
    // const [fromDate, setFromDate] = useState(null);
    // const [toDate, setToDate] = useState(null);
  
    // console.log("sectionid", id);
  
    // const openMediaPopup = (mediaUrl, fileName) => {
    //   if (mediaUrl && fileName && mediaUrl.match(/\bhttps?:\/\/\S+\.(png|jpe?g|gif)\b/g)) {
    //     setSelectedAudioUrl(`https://emsmedia.net/storage/uploads/${fileName}`);
    //   } else {
    //     setSelectedAudioUrl(mediaUrl);
    //   }
    // };
  
    // const closeMediaPopup = () => {
    //   setSelectedAudioUrl(null);
    // };
  
    // useEffect(() => {
    //   const getGallery = () => {
    //     api
    //       .post("/content/getwebPhotoGallery", { category_id: id })
    //       .then((res) => {
    //         setGallery(res.data.data);
    //         AOS.init();
    //       })
    //       .catch(() => {});
    //   };
  
    //   getGallery();
    // }, [id]);
    
    // const handleCategoryChange = (selectedOption) => {
    //   setCategoryFilter(selectedOption || { value: 'All', label: 'All' });
    // };
    // const handleCategoryChanges = (selectedOption) => {
    //   setAreaFilter(selectedOption || { value: 'All', label: 'All' });
    // };
  
    // const getValuelistCountry = () => {
    //   api
    //     .get('/valuelist/getValueListCountry')
    //     .then((res) => {
    //       const options = res.data.data.map(item => ({
    //         value: item.valuelist_id,
    //         label: item.value
    //       }));
    //       setValuelistCountry([{ value: 'All', label: 'All' }, ...options]);
    //     })
    //     .catch((error) => {
    //       console.log('valuelist not found:', error);
    //     });
    // };
    // useEffect(() => {
    //   const countryValue = categoryFilter.label
    //   console.log('countryValue',countryValue)
    //           api
    //           .post('/valuelist/getValueListCity',{value:countryValue})
    //           .then((res1) => {
    //             const options = res1.data.data.map(item => ({
    //               value: item.valuelist_id,
    //               label: item.citi_value
    //             }));
    //             setValuelistCity([{ value: 'All', label: 'All' }, ...options]);
               
    //             console.log('cityrr',res1.data.data)
    //             console.log('city',options)
    //            })
    // }, [categoryFilter]);
  
    // useEffect(() => {
    //   getValuelistCountry();
    // }, []);
  
    // const openVideoPopup = (description, fileName) => {
    //   if (description && description.match(/\bhttps?:\/\/\S+\.(png|jpe?g|gif)\b/g)) {
    //     openMediaPopup(
    //       `https://emsmedia.net/storage/uploads/${fileName}`,
    //       fileName
    //     );
    //     setSelectedVideoUrl(null);
    //   } else if (description) {
    //     setSelectedVideoUrl(description);
    //     setSelectedAudioUrl(null);
    //   } else if (fileName && fileName.endsWith(".mp3")) {
    //     openMediaPopup(
    //       `https://emsmedia.net/storage/uploads/${fileName}`,
    //       fileName
    //     );
    //   } else {
    //     setSelectedVideoUrl(null);
    //     setSelectedAudioUrl(null);
    //   }
    // };
  
    // const closeVideoPopup = () => {
    //   setSelectedVideoUrl(null);
    // };
  
    // const handleDateChange = (event) => {
    //   const { name, value } = event.target;
    //   if (name === 'fromDate') {
    //     setFromDate(value ? new Date(value) : null);
    //   } else if (name === 'toDate') {
    //     setToDate(value ? new Date(value) : null);
    //   }
    // };
  
    // const applyFilters = () => {
    //   let filteredData = [...gallery];
  
    //   if (categoryFilter.value !== 'All') {
    //     filteredData = filteredData.filter(item => item.upload_country === categoryFilter.label);
    //   }
  
    //   if (areaFilter.value !== 'All') {
    //     filteredData = filteredData.filter(item => item.upload_city === areaFilter.label);
    //   }
  
    //   if (fromDate && toDate) {
    //     filteredData = filteredData.filter(item => {
    //       const contentDate = new Date(item.content_date);
    //       return contentDate >= fromDate && contentDate <= toDate;
    //     });
    //   }
  
    //   if (searchQuery !== '') {
    //     filteredData = filteredData.filter(item =>
    //       (item.search_keyword && item.search_keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
    //       (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    //     );
    //   }
  
    //   return filteredData;
    // };
  
    // const filteredGallery = applyFilters();
    // console.log('filteredGallery',filteredGallery)
    // console.log('areaFilter',areaFilter)
    // console.log('valuelistCity',valuelistCity)
    // console.log('categoryFilter.label',categoryFilter.label)
  
    // const customStyles = {
    //   control: (base) => ({
    //     ...base,
    //     minWidth: '200px',
    //     cursor: 'pointer',
    //     color: 'blue',
    //     background: 'none',
    //     border: '1px solid #ccc',
    //     padding: 0
    //   }),
    //   menu: (base) => ({
    //     ...base,
    //     minWidth: '200px'
    //   })
    // };
  
    // const handleSearchChange = (event) => {
    //   setSearchQuery(event.target.value);
    // };
  
    // const handleSearchSubmit = (event) => {
    //   event.preventDefault();
    //   applyFilters();
    // };
    // const handleClearCategory = () => {
    //   setCategoryFilter({ value: 'All', label: 'All' });
    //   setAreaFilter({ value: 'All', label: 'All' });
    //   setFromDate(null)
    //   setToDate(null)
    //   // getSortParams('category', 'default');
    // };
    // const handleClearCategorydate = () => {
    //   setCategoryFilter({ value: 'All', label: 'All' });
    //   setAreaFilter({ value: 'All', label: 'All' });
    //   setFromDate(null)
    //   setToDate(null)
    //   // getSortParams('category', 'default');
    // };

    const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleSubmit = () => {
    // Example: log the state to see selected values
    console.log({
      search,
      country,
      city,
      fromDate,
      toDate,
    });
    // You can also send these values to an API or use them to filter displayed data
  };

  return (
    <>
  
  <div className="top-bar">
      <div className="container">
        <div className="row align-items-center">
          {/* Search Bar */}
          <div className="col-lg-4 col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          {/* Filters */}
          <div className="col-lg-8 col-md-6 d-flex justify-content-end gap-3">
            <select
              className="form-select"
              value={country}
              onChange={handleCountryChange}
            >
              <option value="" disabled>
                Select Country
              </option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            <select
              className="form-select"
              value={city}
              onChange={handleCityChange}
            >
              <option value="" disabled>
                Select City
              </option>
              <option value="Delhi">Delhi</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
            <input
              type="date"
              className="form-control"
              value={fromDate}
              onChange={handleFromDateChange}
            />
            <input
              type="date"
              className="form-control"
              value={toDate}
              onChange={handleToDateChange}
            />
          </div>
        </div>
        <div className="row mt-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  <div className="sidemenu-wrapper sidemenu-1 d-none d-md-block ">
    <div className="sidemenu-content">
      <button className="closeButton sideMenuCls">
        <i className="far fa-times" />
      </button>
      <div className="widget  ">
        <div className="th-widget-about">
          <div className="about-logo">
            <a href="home-newspaper.html">
              <img
                className="light-img"
                src="assets/img/logo-footer-black.svg"
                alt="Tnews"
              />
            </a>
            <a href="home-newspaper.html">
              <img
                className="dark-img"
                src="assets/img/logo-footer.svg"
                alt="Tnews"
              />
            </a>
          </div>
          <p className="about-text">
            Magazines cover a wide subjects, including not limited to fashion,
            lifestyle, health, politics, business, Entertainment, sports,
            science,
          </p>
          <div className="th-social style-black">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.whatsapp.com/">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </div>
      <div className="widget  ">
        <h3 className="widget_title">Recent Posts</h3>
        <div className="recent-post-wrap">
          <div className="recent-post">
            <div className="media-img">
              <a href="blog-details.html">
                <img
                  src="assets/img/blog/recent-post-1-1.jpg"
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="hover-line" href="blog-details.html">
                  Fitness: Your journey to Better, stronger you.
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  21 June, 2023
                </a>
              </div>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="blog-details.html">
                <img
                  src="assets/img/blog/recent-post-1-2.jpg"
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="hover-line" href="blog-details.html">
                  Embrace the game Ignite your sporting
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  22 June, 2023
                </a>
              </div>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="blog-details.html">
                <img
                  src="assets/img/blog/recent-post-1-3.jpg"
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="hover-line" href="blog-details.html">
                  Revolutionizing lives Through technology
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  23 June, 2023
                </a>
              </div>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="blog-details.html">
                <img
                  src="assets/img/blog/recent-post-1-4.jpg"
                  alt="Blog Image"
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="post-title">
                <a className="hover-line" href="blog-details.html">
                  Enjoy the Virtual Reality embrace the
                </a>
              </h4>
              <div className="recent-post-meta">
                <a href="blog.html">
                  <i className="fal fa-calendar-days" />
                  25 June, 2023
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widget newsletter-widget  ">
        <h3 className="widget_title">Subscribe</h3>
        <p className="footer-text">
          Sign up to get update about us. Don't be hasitate your email is safe.
        </p>
        <form className="newsletter-form">
          <input
            className="form-control"
            type="email"
            placeholder="Enter Email"
            required=""
          />
          <button type="submit" className="icon-btn">
            <i className="fa-solid fa-paper-plane" />
          </button>
        </form>
        <div className="mt-30">
          <input type="checkbox" id="Agree2" />
          <label htmlFor="Agree2">
            I have read and accept the{" "}
            <a href="about.html">Terms &amp; Policy</a>
          </label>
        </div>
      </div>
    </div>
  </div>
  <div className="popup-search-box">
    <button className="searchClose">
      <i className="fal fa-times" />
    </button>
    <form action="#">
      <input type="text" placeholder="What are you looking for?" />
      <button type="submit">
        <i className="fal fa-search" />
      </button>
    </form>
  </div>
  {/*==============================
    Mobile Menu
  ============================== */}
  <div className="th-menu-wrapper">
    <div className="th-menu-area text-center">
      <button className="th-menu-toggle">
        <i className="fal fa-times" />
      </button>
      <div className="mobile-logo">
        <a href="home-newspaper.html">
          <img src="assets/img/logo.svg" alt="Tnews" />
        </a>
      </div>
      <div className="th-mobile-menu">
        <ul>
          <li className="menu-item-has-children">
            <a href="home-newspaper.html">Home</a>
            <ul className="sub-menu">
              <li>
                <a href="home-newspaper.html">Home Newspaper</a>
              </li>
              <li>
                <a href="home-magazine.html">Home Magazine</a>
              </li>
              <li>
                <a href="home-sports.html">Home Sports</a>
              </li>
              <li>
                <a href="home-movie.html">Home Movie</a>
              </li>
              <li>
                <a href="home-gadget.html">Home Gadget</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">About Us</a>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Category</a>
            <ul className="sub-menu">
              <li>
                <a href="category.html">Category</a>
              </li>
              <li>
                <a href="blog-three-column.html">Three Column</a>
              </li>
              <li>
                <a href="blog-three-column-sidebar.html">
                  Three Column Sidebar
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li className="menu-item-has-children">
                <a href="#">Shop</a>
                <ul className="sub-menu">
                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="shop-details.html">Shop Details</a>
                  </li>
                  <li>
                    <a href="cart.html">Cart Page</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="team.html">Team</a>
              </li>
              <li>
                <a href="author.html">Author</a>
              </li>
              <li>
                <a href="error.html">Error Page</a>
              </li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Blog</a>
            <ul className="sub-menu">
              <li>
                <a href="blog.html">Blog Standard</a>
              </li>
              <li>
                <a href="blog-masonary.html">Blog Masonary</a>
              </li>
              <li>
                <a href="blog-list.html">Blog List</a>
              </li>
              <li>
                <a href="blog-details.html">Blog Details</a>
              </li>
              <li>
                <a href="blog-details-video.html">Blog Details Video</a>
              </li>
              <li>
                <a href="blog-details-audio.html">Blog Details Audio</a>
              </li>
              <li>
                <a href="blog-details-nosidebar.html">Blog Details Nosidebar</a>
              </li>
              <li>
                <a href="blog-details-full-img.html">Blog Details Full Image</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  {/*==============================
Team Area  
==============================*/}
  <section className="space-top space-extra-bottom">
    <div className="container">
      <div className="row gy-30 mb-30">
        <div className="col-xl-4 col-sm-6">
          <div className="blog-style1">
            <div className="blog-img">
              <img src="assets/img/blog/blog_4_29.jpg" alt="blog image" />
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                kayaking
              </a>
            </div>
            <h3 className="box-title-24">
              <a className="hover-line" href="blog-details.html">
                Paddle your way to adventure, embrace kayaking.
              </a>
            </h3>
            <div className="blog-meta">
              <a href="author.html">
                <i className="far fa-user" />
                By - Tnews
              </a>
              <a href="blog.html">
                <i className="fal fa-calendar-days" />
                29 Mar, 2023
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="blog-style1">
            <div className="blog-img">
              <img src="assets/img/blog/blog_4_30.jpg" alt="blog image" />
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Tennis
              </a>
            </div>
            <h3 className="box-title-24">
              <a className="hover-line" href="blog-details.html">
                Unleash your power, rise with tennis mastery.
              </a>
            </h3>
            <div className="blog-meta">
              <a href="author.html">
                <i className="far fa-user" />
                By - Tnews
              </a>
              <a href="blog.html">
                <i className="fal fa-calendar-days" />
                11 Mar, 2023
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="blog-style1">
            <div className="blog-img">
              <img src="assets/img/blog/blog_4_31.jpg" alt="blog image" />
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                scants
              </a>
            </div>
            <h3 className="box-title-24">
              <a className="hover-line" href="blog-details.html">
                Scants doesnt appear to be a widely recognized term,
              </a>
            </h3>
            <div className="blog-meta">
              <a href="author.html">
                <i className="far fa-user" />
                By - Tnews
              </a>
              <a href="blog.html">
                <i className="fal fa-calendar-days" />
                18 Mar, 2023
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="blog-style1">
            <div className="blog-img">
              <img src="assets/img/blog/blog_4_32.jpg" alt="blog image" />
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Racing
              </a>
            </div>
            <h3 className="box-title-24">
              <a className="hover-line" href="blog-details.html">
                Where strength meets speed, champions emerge.
              </a>
            </h3>
            <div className="blog-meta">
              <a href="author.html">
                <i className="far fa-user" />
                By - Tnews
              </a>
              <a href="blog.html">
                <i className="fal fa-calendar-days" />
                10 Mar, 2023
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="blog-style1">
            <div className="blog-img">
              <img src="assets/img/blog/blog_4_33.jpg" alt="blog image" />
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Mountain Skiing
              </a>
            </div>
            <h3 className="box-title-24">
              <a className="hover-line" href="blog-details.html">
                Ski the majestic, carve memories embrace mountain skiing.
              </a>
            </h3>
            <div className="blog-meta">
              <a href="author.html">
                <i className="far fa-user" />
                By - Tnews
              </a>
              <a href="blog.html">
                <i className="fal fa-calendar-days" />
                20 Mar, 2023
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="blog-style1">
            <div className="blog-img">
              <img src="assets/img/blog/blog_4_34.jpg" alt="blog image" />
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Mountain Skiing
              </a>
            </div>
            <h3 className="box-title-24">
              <a className="hover-line" href="blog-details.html">
                Conquer peaks, carve dreams, embrace adventure
              </a>
            </h3>
            <div className="blog-meta">
              <a href="author.html">
                <i className="far fa-user" />
                By - Tnews
              </a>
              <a href="blog.html">
                <i className="fal fa-calendar-days" />
                19 Mar, 2023
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="blog-style1">
            <div className="blog-img">
              <img src="assets/img/blog/blog_4_35.jpg" alt="blog image" />
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Swimming
              </a>
            </div>
            <h3 className="box-title-24">
              <a className="hover-line" href="blog-details.html">
                Swim with passion, make waves, conquer the waters
              </a>
            </h3>
            <div className="blog-meta">
              <a href="author.html">
                <i className="far fa-user" />
                By - Tnews
              </a>
              <a href="blog.html">
                <i className="fal fa-calendar-days" />
                29 Mar, 2023
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="blog-style1">
            <div className="blog-img">
              <img src="assets/img/blog/blog_4_36.jpg" alt="blog image" />
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Football
              </a>
            </div>
            <h3 className="box-title-24">
              <a className="hover-line" href="blog-details.html">
                Football where dreams take flight, goals rewrite history.
              </a>
            </h3>
            <div className="blog-meta">
              <a href="author.html">
                <i className="far fa-user" />
                By - Tnews
              </a>
              <a href="blog.html">
                <i className="fal fa-calendar-days" />
                19 Mar, 2023
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-sm-6">
          <div className="blog-style1">
            <div className="blog-img">
              <img src="assets/img/blog/blog_4_37.jpg" alt="blog image" />
              <a
                data-theme-color="#4E4BD0"
                href="blog.html"
                className="category"
              >
                Hockey
              </a>
            </div>
            <h3 className="box-title-24">
              <a className="hover-line" href="blog-details.html">
                Relaxation redefined, your beach resort sanctuary
              </a>
            </h3>
            <div className="blog-meta">
              <a href="author.html">
                <i className="far fa-user" />
                By - Tnews
              </a>
              <a href="blog.html">
                <i className="fal fa-calendar-days" />
                16 Mar, 2023
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="th-pagination mt-40 text-center">
        <ul>
          <li>
            <a href="blog.html">01</a>
          </li>
          <li>
            <a href="blog.html">02</a>
          </li>
          <li>
            <a href="blog.html">03</a>
          </li>
          <li>
            <a href="blog.html">
              <i className="fas fa-arrow-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  
  <div className="scroll-top">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      />
    </svg>
  </div>
  
</>

  )
}

export default Pugaipadangal