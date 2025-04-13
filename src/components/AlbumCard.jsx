import React from "react";
import { Link } from "react-router-dom";
import "../styles/AlbumCard.css";

const AlbumCard = ({ album }) => {
  return (
    <div className="album-card">
      <div className="image-container">
        <img src={album.coverImage} alt={album.title} />
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
  );
};

export default AlbumCard;
