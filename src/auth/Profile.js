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

    if (!contactId) {
        return <p className="text-danger">User session expired. Please <a href="/login">log in</a>.</p>;
    }

    return (
        <div className="section-area account-wrapper" style={{ paddingTop: "150px" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8">
                        <div className="account-form card p-4">
                            <h2 className="text-center mb-4">My Account</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your first name"
                                        name="first_name"
                                        value={userData.first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Phone Number</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                        name="mobile"
                                        value={userData.mobile}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your address"
                                        name="address1"
                                        value={userData.address1}
                                        onChange={handleChange}
                                    />
                                </div>
                                {errorMessage && <span className="text-danger">{errorMessage}</span>}
                                {successMessage && <div className="text-success mt-2">{successMessage}</div>}
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
        </div>
    );
};

export default Profile;
