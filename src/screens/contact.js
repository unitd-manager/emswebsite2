import '../assets/css/style.css'
import '../assets/css/fontawesome.min.css'
import '../assets/css/slick.min.css'
import '../assets/css/magnific-popup.min.css'
import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css.map'

import contact1svg from "../assets/img/icon/contact_1_1.svg"
import contact2svg from "../assets/img/icon/contact_1_2.svg"
import contact3svg from "../assets/img/icon/contact_1_3.svg"


const Contact = () => {
    return (
<>

  <div className="breadcumb-wrapper">
    <div className="container">
      <ul className="breadcumb-menu">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
  {/*==============================
Contact Info Area  
==============================*/}
  <div className="space2">
    <div className="container">
      <div className="row">
        <div className="col-xl-5">
          <div className="pe-xxl-4 me-xl-3 text-center text-xl-start mb-40 mb-lg-0">
            <div className="title-area mb-32">
              <h2 className="sec-title2">Get in Touch</h2>
              <p className="sec-text">
                Aliquam erat volutpat. Morbi sed lectus volutpat nulla laoreet
                maximus vel ac nulla. Maecenas ullamcorper felis
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
                    Street Parker Rd. Allentown, New Mexico 31134{" "}
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
                    <a href="mailto:needhelp@gmail.com">needhelp@gmail.com</a>
                    <a href="mailto:info@gmail.com">info@gmail.com</a>
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
                    <a href="tel:+7025550122">(702) 555-0122</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="quote-form-box">
            <h4 className="form-title">Send Message</h4>
            <form
              action="mail.php"
              method="POST"
              className="contact-form ajax-contact"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    type="tel"
                    className="form-control"
                    name="number"
                    id="number"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="form-group col-md-6">
                  <select name="subject" id="subject" className="form-select">
                    <option value="" disabled="" selected="" hidden="">
                      Select Subject
                    </option>
                    <option value="Writing Article">Writing Article</option>
                    <option value="Become Author">Become Author</option>
                    <option value="Gest Posting">Gest Posting</option>
                    <option value="Personal Question">Personal Question</option>
                  </select>
                </div>
                <div className="form-group col-12">
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={3}
                    className="form-control"
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
                <div className="form-btn col-12">
                  <button className="th-btn">
                    Submit Now
                    <i className="fas fa-arrow-up-right ms-2" />
                  </button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>{" "}
  {/*==============================
Contact Area  
==============================*/}
  <div className="contact-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792000835!2d144.9623021!3d-37.805673299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sbn!2sbd!4v1691473044289!5m2!1sbn!2sbd"
      allowFullScreen=""
      loading="lazy"
    />
  </div>
 
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

  );
};

export default Contact;