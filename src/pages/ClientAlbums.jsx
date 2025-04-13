import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ClientAlbums.css";
import albums from "../data/albumsData";

const ClientAlbums = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredAlbums =
    activeFilter === "All"
      ? albums
      : albums.filter((album) => album.category === activeFilter);

  const categories = [
    "All",
    "Portrait Photography",
    "Ads Commercial",
    "Drone Shoot",
    "Drone & Camera Rent",
    "Podcast Shoot",
    "Song Shoot",
  ];

  return (
    <div className="client-albums-page">
      <h1 className="page-title">CLIENT ALBUMS</h1>

      <div className="albums-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              activeFilter === category ? "active" : ""
            }`}
            onClick={() => handleFilterClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="albums-grid">
        {filteredAlbums.map((album) => (
          <div className="album-card" key={album.id}>
            <div className="image-container">
              <img
                src={album.coverImage}
                alt={album.title}
                className="media-element"
                referrerPolicy="no-referrer"
              />
              <div className="image-overlay">
                <Link to={`/albums/${album.id}`} className="view-album-btn">
                  View Album
                </Link>
              </div>
            </div>
            <div className="album-info">
              <h3>{album.title}</h3>
              <p>
                {album.category} | {album.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientAlbums;
