import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../constants/api";

function Navbar() {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null); // Add state for selected section
    const [hoveredCategoryId, setHoveredCategoryId] = useState(null); // Track hovered category
    const [hoveredSectionId, setHoveredSectionId] = useState(null); // Track hovered section
  const [sectiones, setSectiones] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Fetch sections, categories, and subcategories
    api
      .get("/section/getSectionMenu")
      .then((res) => {
        setSections(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching sections:", error);
      });

  

    api
      .get("/category/getCategories", {
        section_id: sectiones && sectiones.section_id,
      })
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    api
      .get("/subcategory/getSubCategory", {
        section_id: categories && categories.section_id,
      })
      .then((res) => {
        setSubCategories(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching subcategories:", error);
      });
  }, []);

  // Function to filter categories for a specific section
  const getCategoriesForSection = (sectionId) => {
    return categories.filter((category) => category.section_id === sectionId);
  };

  // Function to filter subcategories for a specific category
  const getSubCategoriesForCategory = (categoryId) => {
    return subCategories.filter(
      (subcategory) => subcategory.category_id === categoryId
    );
  };

  // Handle section click event
  const handleSectionClick = (sectionId) => {
    console.log("Selected Section:", sectionId); // Log the selected section
    setSelectedSection(sectionId);
    setSelectedCategoryId(null); // Reset selected category
  };

  // Handle category click event
  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

   // Handle hover for section
   const handleSectionHover = (sectionId) => {
    setHoveredSectionId(sectionId);
  };

  // Handle hover for category
  const handleCategoryHover = (categoryId) => {
    setHoveredCategoryId(categoryId);
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
<nav className={`navbar ${isMenuOpen ? "show" : ""}`}>
        
        <div
          className={`main-menuss d-lg-inline-block ${isMenuOpen ? "show" : "d-block"}`}          
        >
           <ul>
                    {sections.map((section) => (
                      <li
                        className="menu-item-has-children"
                        key={section.section_id}
                        onMouseEnter={() => handleSectionHover(section.section_id)}
                      >
                        <Link
                          to={`/${section.routes}`} // Unique path for each section
                          className="nav-link"
                        >
                          {section.section_title}
                        </Link>
        
                        {hoveredSectionId === section.section_id && getCategoriesForSection(section.section_id).length > 0 && (
                          <ul className="sub-menu">
                            {getCategoriesForSection(section.section_id).map((category) => (
                              <li
                                key={category.category_id}
                                onMouseEnter={() => handleCategoryHover(category.category_id)} // Hover on category
                              >
                                <Link
                                  to={`/${category.routes}`}
                                  className="dropdown-item"
                                >
                                  {category.category_title}
                                </Link>
        
                                {hoveredCategoryId === category.category_id && getSubCategoriesForCategory(category.category_id).length > 0 && (
                                      <ul className="sub-menu">
                                        {getSubCategoriesForCategory(category.category_id).map((subcategory) => (
                                          <li key={subcategory.sub_category_id}>
                                            {subcategory.external_link ? (
                                              <a
                                                href={subcategory.external_link}
                                                className="dropdown-item"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                {subcategory.sub_category_title}
                                              </a>
                                            ) : (
                                              <Link
                                                to={`${subcategory.routes}`}
                                                className="dropdown-item"
                                              >
                                                {subcategory.sub_category_title}
                                              </Link>
                                            )}
                                          </li>
                                        ))}
                                      </ul>
                                    )}
        
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
