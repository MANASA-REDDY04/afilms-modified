import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";
import imageUrls from "../data/imageLinks";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Film Making",
      duration: "Custom",
      price: "Contact for Quote",
      description:
        "Craft compelling stories with cinematic quality for films of all genres.",
      image: imageUrls.services[4],
    },
    {
      id: 2,
      title: "Web Series",
      duration: "Per Episode",
      price: "Custom Packages",
      description:
        "Create engaging web series with professional production and direction.",
      image: imageUrls.services[10],
    },
    {
      id: 3,
      title: "Podcasts",
      duration: "1-2 hr",
      price: "Price Varies",
      description:
        "Record and produce high-quality podcasts with professional audio setup.",
      image: imageUrls.services[5],
    },
    {
      id: 4,
      title: "Song Shoots",
      duration: "4-6 hr",
      price: "Contact for Quote",
      description:
        "Capture vibrant music videos with creative visuals and dynamic shots.",
      image: imageUrls.services[7],
    },
    {
      id: 5,
      title: "Story Writing",
      duration: "Custom",
      price: "Price Varies",
      description:
        "Develop unique and captivating stories for films, series, or books.",
      image: imageUrls.services[8],
    },
    {
      id: 6,
      title: "Portrait Photography",
      duration: "2-3 hr",
      price: "Price Varies",
      description:
        "Timeless black-and-white portraits showcasing your unique essence.",
      image: imageUrls.services[6],
    },
    {
      id: 7,
      title: "Drone Shoots & Rentals",
      duration: "Custom",
      price: "Contact for Quote",
      description:
        "Stunning aerial footage for films, events, or promotional content.",
      image: imageUrls.services[3],
    },
    {
      id: 8,
      title: "Camera & Lenses Rentals",
      duration: "Daily/Weekly",
      price: "Price Varies",
      description:
        "Rent professional cameras and gear for your creative projects.",
      image: imageUrls.services[2],
    },
    {
      id: 9,
      title: "Agriculture Drones",
      duration: "Custom",
      price: "Contact for Quote",
      description:
        "Precision drone services for agricultural mapping and monitoring.",
      image: imageUrls.services[1],
    },
    {
      id: 10,
      title: "Commercial Ads",
      duration: "Custom",
      price: "Contact for Quote",
      description:
        "Create impactful advertisements with bold visuals and storytelling.",
      image: imageUrls.services[0],
    },
    {
      id: 11,
      title: "Video Editing & Shooting",
      duration: "Custom",
      price: "Price Varies",
      description:
        "End-to-end video production with expert shooting and editing.",
      image: imageUrls.services[9],
    },
  ];

  return (
    <div className="services-page">
      {/* Page Title */}
      <h1 className="page-title">SERVICES</h1>

      {/* Services Section */}
      <div className="services-container">
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <div className="service-image">
              <img
                src={service.image}
                alt={service.title}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="service-details">
              <h2>{service.title}</h2>
              <div className="service-info">
                <p>{service.duration}</p>
                <p>{service.price}</p>
              </div>
              <Link to="/contact" className="book-now">
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="service-cta">
        <h2>Ready to Create Something Extraordinary?</h2>
        <Link to="/contact" className="book-now">
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default Services;
