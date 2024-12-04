import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css.map";

const Register = () => {
  const { addToast } = useToasts();

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
    // Reset previous errors
    setEmailError("");
    setPasswordError("");

    // Perform email and password validation
    if (!validateEmail(email)) {
      setEmailError("Invalid email");
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, including one UpperCase letter,one LowerCase letter,special characer and one number"
      );
    }

    // If both email and password are valid, proceed with form submission
    if (validateEmail(email) && validatePassword(password)) {
      api
        .post("/api/login", signinData)
        .then((res) => {
          if (res && res.status === "400") {
            alert("Invalid Username or Password");
            addToast("Invalid Username or Password", {
              appearance: "error",
              autoDismiss: true,
            });
          } else {
            localStorage.setItem("user", JSON.stringify(res.data.data));
            localStorage.setItem("token", JSON.stringify(res.data.token));

            setTimeout(() => {
              navigate("/home");
            }, 300);
          }
        })
        .catch(() => {
          addToast("Invalid Username or Password", {
            appearance: "error",
            autoDismiss: true,
          });
        });
    }
  };
  return (
    <>
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <a href="home-newspaper.html">Home</a>
            </li>
            <li>Register</li>
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
              Already you have a account?{" "}
              <Link to ="/Login" className="showlogin">
                Click here to Login              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form action="#" className="woocommerce-form-login">
                <div className="form-group">
                  <label>Username or email *</label>
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
                <div className="form-group">
                  <label>Password *</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      handleSigninData(e);
                      setPassword(e.target.value);
                    }}
                  />
                  {passwordError && (
                    <span className="error">{passwordError}</span>
                  )}
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
                    <a className="text-reset" href="#">
                      Lost your password?
                    </a>
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

export default Register;
