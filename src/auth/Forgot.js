import React, { useState } from "react";
import api from "../constants/api";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/fontawesome.min.css";
import "../assets/css/slick.min.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/bootstrap.min.css";

const Shop = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent form reload
    setEmailError("");

    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    try {
      const res = await api.post("/contact/getForgotPass", { email });

      if (res.status === 200 && res.data?.data) {
        SendEmail(res.data.data);
      } else {
        setEmailError("Please verify the email address and try again.");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setEmailError("Email address not found.");
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  const SendEmail = (emailData) => {
    const to = emailData?.email;
    const password = emailData?.pass_word;

    api
      .post("/commonApi/sendUseremailForgetPassword", {
        to,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Password sent successfully to your email.");
          navigate("/Login");
        } else {
          alert("Failed to send email.");
        }
      })
      .catch(() => {
        alert("Error sending email.");
      });
  };

  return (
    <>
      <div className="breadcumb-wrapper">
        <div className="container">
          <ul className="breadcumb-menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Forgot Password</li>
          </ul>
        </div>
      </div>

      <div className="th-checkout-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-form-login-toggle">
            <div className="woocommerce-info">
              Don't have an account?{" "}
              <Link to="/Register">Click here to Register</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form className="woocommerce-form-login" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>
                    Email Address *
                    <small> (Enter your email to receive your password)</small>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {emailError && (
                    <span className="error text-danger">{emailError}</span>
                  )}
                </div>

                <div className="form-group">
                  <button type="submit" className="th-btn">
                    Submit
                  </button>
                  <p className="mt-3 mb-0">
                    <Link className="text-reset" to="/Login">
                      Back to Login
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
