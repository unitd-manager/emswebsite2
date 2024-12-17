import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import api from "../constants/api";

const Profile = () => {
    const [userData, setUserData] = useState({
        first_name: '',
        mobile: '',
        email: '',
        address1: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});
    // const [loading, setLoading] = useState(false);



    const user = localStorage.getItem('user');
    const contactId = user ? JSON.parse(user).contact_id : null;
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        if (!contactId) {
            setErrorMessage("User not logged in. Please log in.");
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await api.post('/contact/getContactsById', { contact_id: contactId });
                if (response.data.msg === 'Success') {
                    setUserData(response.data.data[0]);
                } else {
                    setErrorMessage('Failed to fetch user data');
                }
            } catch (error) {
                setErrorMessage('Failed to fetch user data');
            }
        };

        fetchUserData();
    }, [contactId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!contactId) {
            setErrorMessage("User not logged in. Cannot update data.");
            return;
        }

        try {
            const response = await api.post('/contact/editContactProfile', {
                contact_id: contactId,
                ...userData,
            });

            if (response.data.msg === 'Success') {
                setSuccessMessage('User details updated successfully!');
            } else {
                setErrorMessage('Failed to update user details');
            }
        } catch (error) {
            setErrorMessage('Failed to update user details');
        }
    };

    const goBackToHome = () => {
        navigate('/'); // Navigate to the home page
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

    if (!contactId) {
        return <p className="text-danger">User session expired. Please <a href="/login">log in</a>.</p>;
    }

    return (
        <div className="th-checkout-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-form-login-toggle">
            <div className="woocommerce-info">
                            <h2>My Account</h2>
                            <form onSubmit={handleSubmit} className="woocommerce-form-login">
                <div className="row">
                  {/* First Name and Last Name */}
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      value={userData.first_name}
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
                      value={userData.last_name}
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
                      value={userData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="password"
                      name="pass_word"
                      placeholder="Password"
                      value={userData.pass_word}
                      onChange={handleChange}
                    />
                    {errors.pass_word && (
                      <span className="error">{errors.pass_word}</span>
                    )}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="mobile"
                      placeholder="Mobile"
                      value={userData.mobile}
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
                      value={userData.alternate_number}
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
                      value={userData.address1}
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
                      value={userData.address_city}
                      onChange={handleChange}
                    />
                    {errors.address_city && <span className="error">{errors.address_city}</span>}
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="address_state"
                      placeholder="State"
                      value={userData.address_state}
                      onChange={handleChange}
                    />
                    {errors.address_state && <span className="error">{errors.address_state}</span>}
                  </div>
                  <div className="col-6 form-group">
                      <select
                        className="form-select"
                        name="address_country_code"
                        onChange={handleChange}
                        value={userData?.address_country_code || ""}
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
                      <span className="error">{errors.address_country_code}</span>
                    )}
                    </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="address_po_code"
                      placeholder="Pincode"
                      value={userData.address_po_code}
                      onChange={handleChange}
                    />
                    {errors.address_po_code && (
                      <span className="error">{errors.address_po_code}</span>
                    )}
                  </div>
                  
                </div>

                {/* Submit Button */}
                <div className="form-group">
                <button type="submit" className="btn btn-primary w-100">Update</button>
                </div>
              </form>
                            <button
                                onClick={goBackToHome}
                                className="btn btn-secondary w-100 mt-3"
                            >
                                Go Back to Home
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
