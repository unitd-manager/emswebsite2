import React from "react";

const Support = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>EMSMedia Support</h1>
      <p>
        Thank you for using the EMSMedia app. If you have any questions,
        feedback, or issues, we're here to help.
      </p>
      <div style={styles.contactBox}>
        <h2>Contact Us</h2>
        <p>
          <strong>Email: </strong>
          <a href="mailto:SMARTGEEK596@GMAIL.COM">SMARTGEEK596@GMAIL.COM</a>
        </p>
        <p>
          <strong>Support Hours:</strong> 9:00 AM – 6:00 PM (Indianpm insta Standard Time),
          Sunday to Thursday
        </p>
      </div>
      <p>
        For help with bookings, account issues, or technical problems, please
        describe the issue in detail and include your registered email address.
      </p>
      <p>We aim to respond to all support requests within 24–48 hours.</p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
    padding: "40px",
    maxWidth: "800px",
    margin: "auto",
  },
  heading: {
    color: "#0055aa",
  },
  contactBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
    marginTop: "20px",
  },
};

export default Support;
