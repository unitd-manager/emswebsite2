import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const Shop = () => {
  // const { addToast } = useToasts();
  const [showPassword, setShowPassword] = useState(false);

  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const history = useHistory();
  const navigate = useNavigate();
  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Password validation regex pattern
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordPattern.test(password);
  };
  const handleSigninData = (e) => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
    console.log("signin", signinData);
  };

  const signin = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
  
    if (!validateEmail(email)) {
      setEmailError("Invalid email");
    }
  
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, including one UpperCase letter, one LowerCase letter, special character and one number"
      );
    }
  
    if (validateEmail(email) && validatePassword(password)) {
      api
        .post("/api/login", signinData)
        .then((res) => {
          if (res?.data?.token) {
            localStorage.setItem("user", JSON.stringify(res.data.data));
            localStorage.setItem("token", JSON.stringify(res.data.token));
  
            setTimeout(() => {
              navigate("/home");
            }, 300);
          } else {
            alert("Login failed. Please try again.");
          }
        })
        .catch((err) => {
          if (err.response && err.response.status === 400) {
            alert("Invalid Username or Password");
          } else {
            alert("Something went wrong. Please try again later.");
          }
        });
    }
  };
  
  return (
    <>
      {/* <div className="popup-subscribe-area">
      <div className="container">
        <div className="popup-subscribe">
          <div className="box-img">
            <img src="assets/img/normal/popup_subscribe.jpg" alt="Image" />
          </div>
          <div className="box-content">
            <button className="simple-icon popupClose">
              <i className="fal fa-times" />
            </button>
            <div className="widget newsletter-widget footer-widget">
              <h3 className="widget_title">Subscribe</h3>
              <p className="footer-text">
                Sign up to get update about us. Don't be hasitate your email is
                safe.
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
                <input type="checkbox" id="destroyPopup" />
                <label htmlFor="destroyPopup">
                  I don't want to see this popup again.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Login</li>
          </ul>
        </div>
      </div>
      {/*==============================
  Checkout Arae
  ==============================*/}
      <div className="th-checkout-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-form-login-toggle">
            <div className="woocommerce-info">
              Dont have a account?{" "}
              <Link to="/Register" className="showlogin">
                Click here to Register
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form action="#" className="woocommerce-form-login">
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => {
                      handleSigninData(e);
                      setEmail(e.target.value);
                    }}
                  />
                  {emailError && <span className="error">{emailError}</span>}
                </div>
                <div className="form-group position-relative">
  <label>Password *</label>
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    onChange={(e) => {
      handleSigninData(e);
      setPassword(e.target.value);
    }}
  />
  <span
    onClick={() => setShowPassword(!showPassword)}
    style={{
      position: "absolute",
      right: "10px",
      top: "38px",
      cursor: "pointer",
      zIndex: 2,
    }}
  >
   {showPassword ? <FaEye />: <FaEyeSlash /> }
  </span>
  {passwordError && <span className="error">{passwordError}</span>}
</div>

                {/* <div className="form-group">
                <div className="custom-checkbox">
                  <input type="checkbox" id="remembermylogin" />
                  <label htmlFor="remembermylogin">Remember Me</label>
                </div>
              </div> */}
                <div className="form-group">
                  <button type="submit" className="th-btn" onClick={signin}>
                    Login
                  </button>
                  <p className="mt-3 mb-0">
                    <Link className="text-reset" to="/Forgot">
                      Lost your password?
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
