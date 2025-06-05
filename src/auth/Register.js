import React, { useState, useEffect } from "react";
import api from "../constants/api";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    pass_word: "",
    mobile: "",
    alternate_number: "",
    address1: "",
    address_city: "",
    address_state: "",
    address_country_code: "",
    address_po_code: "",
    otp_no: "",
  });

  const [errors, setErrors] = useState({});
  const [mailId, setMailId] = useState("");
  const [loading, setLoading] = useState(false);

  const generateOTP = () => {
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    setSignupData((prev) => ({ ...prev, otp_no: otp.toString() }));
  };

  const getEmail = async () => {
    try {
      const res = await api.get("/setting/getMailId");
      setMailId(res.data.data[0]?.email || "");
    } catch (err) {
      console.error("Error fetching mail ID:", err);
    }
  };

  const validateField = (name, value) => {
    const patterns = {
      first_name: /^[a-zA-Z\s]+$/,
      last_name: /^[a-zA-Z\s]+$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      pass_word: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
      address_po_code: /^\d{5,6}$/, // Supports 5 or 6-digit PIN codes
    };
    if (patterns[name]) return patterns[name].test(value);
    return value.trim() !== ""; // For fields without specific patterns
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input change
  };

  const validateForm = () => {
    const newErrors = {};
    Object.entries(signupData).forEach(([key, value]) => {
      if (key !== "otp_no" && !validateField(key, value)) {
        newErrors[key] = `Invalid ${key.replace("_", " ")}`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await api.post("/api/register", signupData);
      console.log("Registration successful:", res.data.data);

      // Send email to the user
      await api.post("/commonApi/sendUseremailSignUp", {
        to: signupData.email,
        subject: "Login Registration",
      });

      // Send a copy to the admin
      // await api.post("/commonApi/sendUseremailSignUp", {
      //   to: mailId,
      //   text: JSON.stringify(signupData),
      //   subject: "New User Registration",
      //   dynamic_template_data: {
      //     first_name: signupData.first_name,
      //     email: signupData.email,
      //     pass_word: signupData.pass_word,
      //   },
      // });

      // Navigate to verification page
      // navigate(`/Home/${signupData.email}`, {
      //   state: { otpNo: signupData.otp_no },
      // });

      setTimeout(() => {
        navigate("/Login");
      }, 300);
    } catch (err) {
      console.error("Error during registration:", err);
      setErrors({ email: "This email is already registered." });
    } finally {
      setLoading(false);
    }
  };

  const [allcountries, setallCountries] = useState();
  const getAllCountries = () => {
    api
      .get("/commonApi/getCountry")
      .then((res) => {
        setallCountries(res.data.data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    getEmail();
    generateOTP();
  }, []);

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

      <div className="th-checkout-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-form-login-toggle">
            <div className="woocommerce-info">
              Already have an account?{" "}
              <Link to="/Login" className="showlogin">
                Click here to Login
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <form onSubmit={handleSubmit} className="woocommerce-form-login">
                <div className="row">
                  {/* First Name and Last Name */}
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={signupData.first_name}
                      onChange={handleChange}
                    />
                    {errors.first_name && (
                      <span className="error">{errors.first_name}</span>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      value={signupData.last_name}
                      onChange={handleChange}
                    />
                    {errors.last_name && (
                      <span className="error">{errors.last_name}</span>
                    )}
                  </div>

                  {/* Email and Password */}
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={signupData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </div>
                  {/* <div className="col-md-6 form-group">
                    <input
                      type="password"
                      name="pass_word"
                      placeholder="Password"
                      value={signupData.pass_word}
                      onChange={handleChange}
                    />
                    {errors.pass_word && (
                      <span className="error">Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, special character, and one number</span>
                    )}
                  </div> */}
                  <div className="col-md-6 form-group position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="pass_word"
                      placeholder="Password"
                      value={signupData.pass_word}
                      onChange={handleChange}
                    />
                    <span
                      onClick={() => setShowPassword((prev) => !prev)}
                      style={{
                        position: "absolute",
                        right: "15px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                        zIndex: 2,
                      }}
                    >
                      {showPassword ? <FaEye />: <FaEyeSlash /> }
                    </span>
                    {errors.pass_word && (
                      <span className="error">
                        Password must contain at least 8 characters, including
                        one uppercase letter, one lowercase letter, special
                        character, and one number
                      </span>
                    )}
                  </div>

                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile"
                      value={signupData.mobile}
                      onChange={handleChange}
                    />
                    {errors.mobile && (
                      <span className="error">{errors.mobile}</span>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="alternate_number"
                      placeholder="Alternate Number"
                      value={signupData.alternate_number}
                      onChange={handleChange}
                    />
                    {errors.alternate_number && (
                      <span className="error">{errors.alternate_number}</span>
                    )}
                  </div>

                  {/* Address */}
                  <div className="col-md-12 form-group">
                    <textarea
                      name="address1"
                      placeholder="Address"
                      value={signupData.address1}
                      onChange={handleChange}
                    />
                    {errors.address1 && (
                      <span className="error">{errors.address1}</span>
                    )}
                  </div>

                  {/* City, State, Country, Pincode */}
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="address_city"
                      placeholder="City"
                      value={signupData.address_city}
                      onChange={handleChange}
                    />
                    {errors.address_city && (
                      <span className="error">{errors.address_city}</span>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="address_state"
                      placeholder="State"
                      value={signupData.address_state}
                      onChange={handleChange}
                    />
                    {errors.address_state && (
                      <span className="error">{errors.address_state}</span>
                    )}
                  </div>
                  <div className="col-6 form-group">
                    <select
                      className="form-select"
                      name="address_country_code"
                      onChange={handleChange}
                      value={signupData?.address_country_code || ""}
                    >
                      <option value="" disabled>
                        Please Select Country
                      </option>
                      {allcountries?.map((country) => (
                        <option
                          key={country.country_code}
                          value={country.country_code}
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                    {errors.address_country_code && (
                      <span className="error">
                        {errors.address_country_code}
                      </span>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="address_po_code"
                      placeholder="Pincode"
                      value={signupData.address_po_code}
                      onChange={handleChange}
                    />
                    {errors.address_po_code && (
                      <span className="error">{errors.address_po_code}</span>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="form-group">
                  <button type="submit" className="th-btn" disabled={loading}>
                    {loading ? "Processing..." : "Submit"}
                  </button>
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
