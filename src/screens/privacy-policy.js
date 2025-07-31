import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1>Privacy and Usage Policy</h1>
      <p>
        <strong>Last updated:</strong> [31-07-2025]
      </p>
      <p>
        Welcome to the EMSMedia mobile application and website ("the App").
        Please read this Privacy and Usage Policy carefully to understand how we
        collect, use, and protect your personal information when using our services.
      </p>
      <hr />
      <h2>1. Information We Collect</h2>
      <p>We collect personal information that you provide when:</p>
      <ul>
        <li>Creating an account.</li>
        {/* <li>Booking or managing reservations for sports facilities.</li> */}
        <li>Logging in via third-party platforms like Google or Apple.</li>
        <li>Verifying identity through OTP or mobile authentication.</li>
      </ul>
      <p>This may include your:</p>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Precise location (via GPS)</li>
        <li>Coarse location (e.g., city or region)</li>
        <li>Photos or videos (if uploaded by user)</li>
      </ul>
      <hr />
      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Facilitate reservations and manage your account.</li>
        <li>Improve the quality and functionality of our services.</li>
        <li>Personalize the user experience based on location and preferences.</li>
        <li>Communicate with you regarding bookings, updates, and customer support.</li>
      </ul>
      <hr />
      <h2>3. Data Protection and Security</h2>
      <p>
        We implement appropriate security measures to safeguard your personal data
        against unauthorized access, alteration, disclosure, or destruction.
      </p>
      <hr />
      <h2>4. Information Sharing</h2>
      <p>
        We do not share your personal data with third parties without your explicit
        consent, except:
      </p>
      <ul>
        <li>When required to fulfill your service request (e.g., facility providers).</li>
        <li>When legally required to do so.</li>
      </ul>
      <hr />
      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Request corrections or updates.</li>
        <li>Request deletion of your data, subject to applicable legal requirements.</li>
      </ul>
      <hr />
      <h2>6. Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar technologies to:</p>
      <ul>
        <li>Enhance your experience within the app.</li>
        <li>Personalize content and features based on your preferences.</li>
      </ul>
      <p>You can manage your cookie preferences through your device or browser settings.</p>
      <hr />
      <h2>7. Policy Updates</h2>
      <p>
        We may update this policy from time to time. In case of significant changes,
        we will notify you through the app or via email.
      </p>
      <hr />
      {/* <h2>8. Marketing and Communication</h2>
      <p>We may send you marketing messages:</p>
      <ul>
        <li>If you’ve opted in to receive them.</li>
        <li>Or if you are an existing user, in accordance with applicable regulations.</li>
      </ul>
      <p>You can opt out of these communications at any time.</p>
      <hr /> */}
      <h2>8. Acceptance of Policy</h2>
      <p>
        By accessing or using the EMSMedia mobile application or website, you
        agree to the terms of this Privacy and Usage Policy.
      </p>
      <hr />
      <h2>9. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this policy,
        please contact us at:
      </p>
      <p>
        📧 <a href="mailto:SMARTGEEK596@GMAIL.COM">SMARTGEEK596@GMAIL.COM</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
    color: "#333",
  },
};

export default PrivacyPolicy;
