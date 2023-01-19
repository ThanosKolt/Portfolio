import React from "react";

function Contact() {
  return (
    <section className="contact-container">
      <header className="contact-header">
        <h2 className="contact-title">Contact Me</h2>
        <div className="underline"></div>
        <h3 className="contact-sub">
          Feel free to contact me in any of the following ways
        </h3>
      </header>
      <div className="contact-content">
        <p>Email: thanoskoltsidas@gmail.com</p>
        <p>Phone: +306983908055</p>
        <a
          href="https://www.linkedin.com/in/thanos-koltsidas-842189220/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
