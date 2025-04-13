import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="page-title">CONTACT</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you! For bookings and inquiries, reach out
            via email, WhatsApp, call, or SMS.
          </p>

          <div className="info-item">
            <h3>
              <FaEnvelope /> Email
            </h3>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aadyafilms22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              aadyafilms22@gmail.com
            </a>
          </div>

          <div className="info-item">
            <h3>
              <FaPhone /> Phone
            </h3>
            <p>
              <a href="tel:+919160971717">+91 91609 71717</a>,{" "}
              <a href="tel:+918296861099">+91 82968 61099</a>
            </p>
          </div>

          <div className="info-item">
            <h3>
              <FaWhatsapp /> WhatsApp
            </h3>
            <a
              href="https://wa.me/919160971717"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="info-item">
            <h3>
              <FaMapMarkerAlt /> Studio Address
            </h3>
            <p>
              Flat No 110, Near Paradise, Bhoiguda,
              <br />
              Secunderabad - 500003 <br />
              (Near Metro Station)
            </p>
            <a
              href="https://www.google.com/maps?q=17.445833333333,78.477755555556"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Location on Google Maps
            </a>
          </div>

          <div className="info-item">
            <h3>
              <FaClock /> Open Until
            </h3>
            <p>10 PM</p>
          </div>

          {/* <div className="social-links">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <FaPinterestP size={20} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
