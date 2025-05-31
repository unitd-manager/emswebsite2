import React, { useState, useEffect } from "react";
import api from "../constants/api";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";

import contact1svg from "../assets/img/icon/contact_1_1.svg";
import contact2svg from "../assets/img/icon/contact_1_2.svg";
import contact3svg from "../assets/img/icon/contact_1_3.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    phone: "",
    subject: "",
    comments: "",
  });
  const [email, setEmail] = useState([]);
  const [mailId, setMailId] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch email data on component load
    api
      .get("/setting/getEnquiryMailId")
      .then((res) => setMailId(res.data.data[0]))
      .catch((err) => console.error("Error fetching mail ID:", err));

    api
      .get("/content/getEmail")
      .then((res) => setEmail(res.data.data[0]))
      .catch((err) => console.error("Error fetching emails:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendMail = () => {
    if (window.confirm("Are you sure you want to send Mail?")) {
      const { first_name, email, phone, comments } = formData;
      const to = mailId.email;
      const text = comments;
      const subject = formData.subject || "General Inquiry";

      const dynamic_template_data = { first_name, email, phone, comments };

      api
        .post("/contact/sendenquiryemail", {
          to,
          text,
          subject,
          dynamic_template_data,
        })
        .then(() => alert("Email sent successfully"))
        .catch((err) => console.error("Unable to send email:", err));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/enquiry/insertEnquiry", formData)
      .then(() => {
        alert("Contact inserted successfully");
        setFormData({
          first_name: "",
          email: "",
          phone: "",
          subject: "",
          comments: "",
        });
        sendMail();
      })
      .catch((err) => console.error("Error inserting contact:", err));
  };

  return (
    <>
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li><a href="/Home">Home</a></li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className="space2">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="pe-xxl-4 me-xl-3 text-center text-xl-start mb-40 mb-lg-0">
                <div className="title-area mb-32">
                  <h2 className="sec-title2">Get in Touch</h2>
                  <p className="sec-text">
                    Aliquam erat volutpat. Morbi sed lectus volutpat nulla
                    laoreet maximus vel ac nulla. Maecenas ullamcorper felis
                  </p>
                </div>
                <div className="contact-feature-wrap">
                  <div className="contact-feature">
                    <div className="box-icon">
                      <img src={contact1svg} alt="icon" />
                    </div>
                    <div className="box-content">
                      <h3 className="box-title-22">Our Address</h3>
                      <p className="box-text">
                        Street Parker Rd. Allentown, New Mexico 31134
                      </p>
                    </div>
                  </div>
                  <div className="contact-feature">
                    <div className="box-icon">
                      <img src={contact2svg} alt="icon" />
                    </div>
                    <div className="box-content">
                      <h3 className="box-title-22">Email Address</h3>
                      <p className="box-text">
                        <a href="mailto:info@ems.unitdtechnologies.com">info@ems.unitdtechnologies.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="contact-feature">
                    <div className="box-icon">
                      <img src={contact3svg} alt="icon" />
                    </div>
                    <div className="box-content">
                      <h3 className="box-title-22">Phone Number</h3>
                      <p className="box-text">
                        <a href="tel:+1234055550128">+123 (405) 555-0128</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="quote-form-box">
                <h4 className="form-title">Send Message</h4>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                      />
                    </div>
                    <div className="form-group col-12">
                      <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Your Message"
                        rows={3}
                      />
                    </div>
                    <div className="form-btn col-12">
                      <button type="submit" className="th-btn">
                        Submit Now
                        <i className="fas fa-arrow-up-right ms-2" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792000835!2d144.9623021!3d-37.805673299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1691473044289!5m2!1sbn!2sbd"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </>
  );
};

export default Contact;
