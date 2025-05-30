import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../constants/api";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

function Navbar() {
  const [sections, setSections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [openSections, setOpenSections] = useState({});
  const [openCategories, setOpenCategories] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    api.get("/section/getSectionMenu")
      .then((res) => setSections(res.data.data))
      .catch((error) => console.error("Error fetching sections:", error));

    api.get("/category/getCategories")
      .then((res) => setCategories(res.data.data))
      .catch((error) => console.error("Error fetching categories:", error));

    api.get("/subcategory/getSubCategory")
      .then((res) => setSubCategories(res.data.data))
      .catch((error) => console.error("Error fetching subcategories:", error));
  }, []);

  // Toggle sections (click-based for both desktop & mobile)
  const toggleSection = (event, sectionId) => {
    event.stopPropagation();
    event.preventDefault();
    setOpenSections((prev) => {
      const newState = { ...prev };
      // Toggle only the clicked section without affecting other sections
      newState[sectionId] = !prev[sectionId];
      return newState;
    });
    // Don't reset categories when toggling sections
  };

  // Toggle categories
  const toggleCategory = (event, categoryId) => {
    event.stopPropagation();
    event.preventDefault();
    setOpenCategories((prev) => {
      const newState = { ...prev };
      // Toggle only the clicked category without affecting other categories
      newState[categoryId] = !prev[categoryId];
      return newState;
    });
  };

  // Filter categories for a specific section
  const getCategoriesForSection = (sectionId) => {
    return categories.filter((category) => category.section_id === sectionId);
  };

  // Filter subcategories for a specific category
  const getSubCategoriesForCategory = (categoryId) => {
    return subCategories.filter((subcategory) => subcategory.category_id === categoryId);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "show" : ""}`}>
      <div className={`main-menuss d-lg-inline-block ${isMenuOpen ? "show" : "d-block"}`}>
        <ul>
          {sections.map((section) => (
            <li key={section.section_id} className="menu-item-has-children">
              <div className="section-container">
                <Link to={`/${section.routes}`} className="nav-link">
                  {section.section_title}
                </Link>
                <span className="dropdown-icon" onClick={(event) => toggleSection(event, section.section_id)}>
                  {openSections[section.section_id] ? <FaChevronDown /> : <FaChevronRight />}
                </span>
              </div>

              {/* Show Categories if Section is Open */}
              {openSections[section.section_id] && (
                <ul className="sub-menu">
                  {getCategoriesForSection(section.section_id).map((category) => (
                    <li key={category.category_id}>
                        <Link to={`/${category.routes}`} className="dropdown-item">
                          {category.category_title}
                        </Link>

                        {/* Toggle Icon for Categories */}
                        {getSubCategoriesForCategory(category.category_id).length > 0 && (
                          <span
                            className="dropdown-icon1"
                            onClick={(event) => toggleCategory(event, category.category_id)}
                          >
                            {openCategories[category.category_id] ? <FaChevronDown /> : <FaChevronRight />}
                          </span>
                        )}
                     

                      {/* Show Subcategories if Category is Open */}
                      {openCategories[category.category_id] && (
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
                                <Link to={`/${subcategory.routes}`} className="dropdown-item">
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
  );
}

export default Navbar;
