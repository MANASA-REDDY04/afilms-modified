import React, { useState } from "react";
import ImageGallery from "../components/ImageGallery";
import "../styles/Portfolio.css";
import imageUrls from "../data/imageLinks";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioImages = [
    {
      id: 1,
      src: imageUrls.portfolio[8],
      alt: "Portrait Photo 1",
      category: "portraits",
    },
    {
      id: 2,
      src: imageUrls.portfolio[0],
      alt: "Commercial Photo 1",
      category: "commercial",
    },
    {
      id: 3,
      src: imageUrls.portfolio[2],
      alt: "Drone Shot 1",
      category: "drone",
    },
    {
      id: 4,
      src: imageUrls.portfolio[6],
      alt: "Podcast Shoot 1",
      category: "podcasts",
    },
    {
      id: 5,
      src: imageUrls.portfolio[4],
      alt: "Filmmaking Photo 1",
      category: "film",
    },
    {
      id: 6,
      src: imageUrls.portfolio[9],
      alt: "Portrait Photo 2",
      category: "portraits",
    },
    {
      id: 7,
      src: imageUrls.portfolio[1],
      alt: "Commercial Photo 2",
      category: "commercial",
    },
    {
      id: 8,
      src: imageUrls.portfolio[3],
      alt: "Drone Shot 2",
      category: "drone",
    },
    {
      id: 9,
      src: imageUrls.portfolio[7],
      alt: "Podcast Shoot 2",
      category: "podcasts",
    },
    {
      id: 10,
      src: imageUrls.portfolio[5],
      alt: "Filmmaking Photo 2",
      category: "film",
    },
  ];

  const filterImages = () => {
    if (activeCategory === "all") return portfolioImages;
    return portfolioImages.filter((image) => image.category === activeCategory);
  };

  return (
    <div className="portfolio-page">
      <h1 className="page-title">PORTFOLIO</h1>

      <div className="portfolio-filter">
        {["all", "portraits", "commercial", "drone", "podcasts", "film"].map(
          (cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "all"
                ? "All"
                : cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ")}
            </button>
          )
        )}
      </div>

      <div className="portfolio-container">
        <ImageGallery images={filterImages()} />
      </div>
    </div>
  );
};

export default Portfolio;
