import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import imageUrls from "../data/imageLinks";

const Home = () => {
  // ⭐ State for Testimonials
  const [testimonials, setTestimonials] = useState([
    {
      text: "Aadya films did 100 times more than what we expected. Friendly nature and good supported. They are proving service with very low budjet. Thanks to Aadya Films.",
      name: "Prakash Mane",
    },
    {
      text: "I wish i could give more stars than 5.. this team is highly passionate and truly motived to give the best of the best.. They make videos shoots at our trust health camps.. its been 5 camps so far and each video is a gem.. They are very artistic in selecting music, background scores, picking apt shots. They are truly clear about the objective and delivery time and quality top notch.. Thank you for everything Aadya films.. we loved to associate with u🧡keep growing.. my wishes and blessing on ur way!",
      name: "Ravali",
    },
    {
      text: "I am impressed by the dedication the editor shows to complete the film within the time limit, with excellent quality in the output.",
      name: "Aaditya Mandalemula",
    },
    {
      text: "Ram is a very talented person, he is associated with the industry from a very long time. He is very creative and has a different thinking and view for his work. He gives his best in what ever he does. He is really good in his job and work. Best compilation, best editing and capturing. Highly recommended. Good going. All the best.",
      name: "Pooja Lalchandani Kamra",
    },
    {
      text: "A complete package, this is where we get more than what we expect. He is so down to earth and so patient, makes each and every modification with a healthy discussion. Can get things done without any delays. Genuine Orthodox Creative",
      name: "Varun Vasa",
    },
  ]);

  const [newReview, setNewReview] = useState({ name: "", text: "" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation
  const swipeLeft = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const swipeRight = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Add Review
  const handleAddReview = () => {
    if (newReview.name.trim() && newReview.text.trim()) {
      setTestimonials([...testimonials, newReview]);
      setNewReview({ name: "", text: "" });
      setCurrentIndex(testimonials.length); // Show new review
    }
  };

  return (
    <div className="home">
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-left">
          <div className="hero-content">
            <h1>AADYA FILMS</h1>
            <h2>PHOTOGRAPHY STUDIO</h2>
            <Link to="/contact" className="book-now">
              Book Now
            </Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-box">
            <img
              src={imageUrls.hero[0]}
              alt="Hero Portrait"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* FEATURED WORK */}
      <div className="featured-work">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <div className="featured-grid">
            <div className="featured-item">
              <div className="image-container">
                <img
                  src={imageUrls.featured[0]}
                  alt="Featured Work"
                  referrerPolicy="no-referrer"
                />
                <div className="image-overlay">
                  <Link to="/portfolio" className="view-button">
                    View Portfolio
                  </Link>
                </div>
              </div>
              <h3>Agriculture Drones & Drone Shoots</h3>
            </div>
            <div className="featured-item">
              <div className="image-container">
                <img
                  src={imageUrls.featured[1]}
                  alt="Featured Work"
                  referrerPolicy="no-referrer"
                />
                <div className="image-overlay">
                  <Link to="/portfolio" className="view-button">
                    View Portfolio
                  </Link>
                </div>
              </div>
              <h3>Portrait Sessions</h3>
            </div>
            <div className="featured-item">
              <div className="image-container">
                <img
                  src={imageUrls.featured[2]}
                  alt="Featured Work"
                  referrerPolicy="no-referrer"
                />
                <div className="image-overlay">
                  <Link to="/portfolio" className="view-button">
                    View Portfolio
                  </Link>
                </div>
              </div>
              <h3>Commercial ADS</h3>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS WITH SWIPE + ADD FORM */}
      <div className="testimonials">
        <div className="container">
          <h2 className="section-title">What Clients Say</h2>

          <div className="testimonial-swipe">
            <button onClick={swipeLeft}>←</button>
            <div className="testimonial">
              <p>"{testimonials[currentIndex].text}"</p>
              <h4>{testimonials[currentIndex].name}</h4>
            </div>
            <button onClick={swipeRight}>→</button>
          </div>

          <div className="add-review-form">
            <h3>Add Your Review</h3>
            <textarea
              placeholder="Your review..."
              value={newReview.text}
              onChange={(e) =>
                setNewReview({ ...newReview, text: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Your name"
              value={newReview.name}
              onChange={(e) =>
                setNewReview({ ...newReview, name: e.target.value })
              }
            />
            <button onClick={handleAddReview}>Submit</button>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Book Your Session?</h2>
          <p>Let's create beautiful memories together</p>
          <Link to="/contact" className="book-now">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
