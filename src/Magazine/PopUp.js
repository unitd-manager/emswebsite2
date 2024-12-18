// components/Popup.js
import React from "react";
import { Link } from "react-router-dom";
import imageSrc from "../assets/img/magazine.jpg";

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
          <li>
              <Link to="/Home"> Back to Home</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Popup content with the image */}
      <img
        src={imageSrc}
        alt="Popup"
        style={{
          display: "block",
          maxWidth: "90%",
          maxHeight: "90%",
          margin: "50px auto",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default Popup;
