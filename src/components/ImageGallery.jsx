import React, { useState, useEffect } from "react";
import "../styles/ImageGallery.css";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts to trigger animations
    setIsLoaded(true);

    // Calculate navbar height and apply padding to prevent overlap
    const navbar =
      document.querySelector("nav") || document.querySelector("header");
    if (navbar) {
      const navbarHeight = navbar.offsetHeight;
      const galleryElement = document.querySelector(".image-gallery");
      if (galleryElement) {
        galleryElement.style.paddingTop = `${navbarHeight + 20}px`;
      }
    }
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % images.length;
    } else {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    }

    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (!selectedImage) return;

    if (e.key === "Escape") {
      closeLightbox();
    } else if (e.key === "ArrowRight") {
      navigateImage("next");
    } else if (e.key === "ArrowLeft") {
      navigateImage("prev");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className={`image-gallery ${isLoaded ? "loaded" : ""}`}>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={image.id}
            onClick={() => openLightbox(image)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="image-container">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="image-overlay">
                <span className="view-text">View</span>
              </div>
            </div>
            {image.caption && <p className="image-caption">{image.caption}</p>}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="close-btn"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <span>×</span>
          </button>
          <button
            className="nav-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              />
            </svg>
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="lightbox-image"
            />
            {selectedImage.caption && (
              <div className="lightbox-caption">{selectedImage.caption}</div>
            )}
          </div>
          <button
            className="nav-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path
                fill="currentColor"
                d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
              />
            </svg>
          </button>
          <div className="image-counter">
            {images.findIndex((img) => img.id === selectedImage.id) + 1} /{" "}
            {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
