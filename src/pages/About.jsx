import React, { useEffect } from "react";
import "./About.jsx";
import "../styles/About.css";
import imageUrls from "../data/imageLinks.js";

const About = () => {
  // Fade-in animation on scroll
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeEls.forEach((el) => {
      el.style.animationPlayState = "paused";
      observer.observe(el);
    });
  }, []);

  return (
    <div className="about-page">
      <h1 className="page-title">ABOUT</h1>

      <div className="about-content fade-in">
        <div className="about-image">
          <img
            src={imageUrls.about[0]}
            alt="Meet the Photographer"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="about-text">
          <h2>Meet the Photographer</h2>
          <h3>SAI RAM VASA</h3>
          <br />
          <p>
            Welcome to Aadya Films. I'm passionate about capturing authentic
            moments that tell your unique story.
          </p>
          <p>
            With over 10 years of experience in photography, I specialize in
            creating timeless images that evoke emotion and preserve your most
            precious memories.
          </p>
          <p>
            My approach combines technical expertise with an artistic eye,
            ensuring each photograph is both beautiful and meaningful. I believe
            in creating a comfortable, enjoyable experience that results in
            natural, genuine images.
          </p>
          <p>
            When I'm not behind the camera, you'll find me exploring new places,
            reading photography books, or experimenting with new techniques and
            styles to bring fresh perspectives to my work.
          </p>
          <p>
            I look forward to working with you to create photographs that you'll
            treasure for years to come.
          </p>
        </div>
      </div>

      <div className="philosophy fade-in">
        <div className="container">
          <h2 className="section-title">Our Philosophy</h2>
          <div className="philosophy-content">
            <div className="philosophy-item">
              <h3>Authenticity</h3>
              <p>
                We believe in capturing real moments and genuine emotions rather
                than forced poses.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Artistry</h3>
              <p>
                Each photograph is created with attention to composition, light,
                and storytelling.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Experience</h3>
              <p>
                We prioritize making your photography session comfortable,
                enjoyable, and stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-company fade-in">
        <div className="company-grid">
          <div className="about-section">
            <h3>Overview and Location</h3>
            <p>
              Aadya Films in Bhoiguda, Secunderabad specializes in Documentaries
              and Short Film Makers photography, offering flexible hours every
              day from 9:00 am to 10:00 pm. Conveniently located near the Metro
              Station, they ensure easy access and availability for clients.
            </p>
          </div>

          <div className="about-section">
            <h3>History and Commitment</h3>
            <p>
              Aadya Films has built a solid reputation for delivering stunning
              and memorable images. With a 4.1-star rating from 86 reviews, the
              studio remains committed to providing reliable and creative
              photography services.
            </p>
          </div>

          <div className="about-section">
            <h3>Photography Team</h3>
            <p>
              The team at Aadya Films is composed of skilled, passionate
              professionals known for their creativity and ability to make
              clients feel comfortable. Whether it’s a personal shoot or a major
              event, the team is focused on capturing your best moments.
            </p>
          </div>

          <div className="about-section">
            <h3>Services Offered</h3>
            <p>
              From weddings and corporate events to documentary shoots, Aadya
              Films offers a comprehensive range of photography solutions
              tailored to different occasions and client needs.
            </p>
          </div>

          <div className="about-section">
            <h3>Summary</h3>
            <p>
              Aadya Films is committed to high-quality, artistic photography
              backed by a passion for storytelling. Their professionalism,
              personalized approach, and wide service range make them a top
              choice in Secunderabad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
