import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import albums from "../data/albumsData";
import "../styles/AlbumView.css";

const AlbumView = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    const matchedAlbum = albums.find((a) => a.id === albumId);
    if (!matchedAlbum) return;

    if (matchedAlbum.media) {
      const media = matchedAlbum.media.map((item, i) => ({
        id: i + 1,
        ...item,
        // Use the item.filename directly without modification
        // It should already be pointing to the correct source (either imported or URL)
        src: item.filename,
        alt: `${matchedAlbum.title} ${
          item.type === "video" ? "Video" : "Photo"
        } ${i + 1}`,
        poster: item.poster || null,
      }));
      setAlbum({ ...matchedAlbum, media });
    } else {
      const images = Array.from(
        { length: matchedAlbum.imageCount || 0 },
        (_, i) => ({
          id: i + 1,
          type: "image",
          src: `https://via.placeholder.com/800?text=Image${i + 1}`,
          alt: `${matchedAlbum.title} Photo ${i + 1}`,
        })
      );
      setAlbum({ ...matchedAlbum, media: images });
    }
  }, [albumId]);

  const openLightbox = (media) => {
    setSelectedMedia(media);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = "auto";
  };

  const navigateMedia = (direction) => {
    const currentIndex = album.media.findIndex(
      (m) => m.id === selectedMedia.id
    );
    let newIndex =
      direction === "next"
        ? (currentIndex + 1) % album.media.length
        : (currentIndex - 1 + album.media.length) % album.media.length;

    setSelectedMedia(album.media[newIndex]);
  };

  if (!album) return <div className="loading">Loading album...</div>;

  return (
    <div className="album-view-page">
      <div className="album-header" style={{ paddingTop: "100px" }}>
        <h1>{album.title}</h1>
        <div className="album-details">
          <p>
            {album.date} | {album.location}
          </p>
          <p>{album.description}</p>
        </div>
      </div>

      <div className="album-grid">
        {album.media.map((media) => (
          <div
            className="album-item"
            key={media.id}
            onClick={() => openLightbox(media)}
          >
            <div className="image-container">
              {media.type === "video" ? (
                <video
                  src={media.src}
                  poster={media.poster}
                  preload="metadata"
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="album-media"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={media.src}
                  alt={media.alt}
                  referrerPolicy="no-referrer"
                  className="album-media"
                />
              )}
              <div className="image-overlay">
                <span className="view-icon">
                  {media.type === "video" ? "▶" : "+"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedMedia && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="close-btn" onClick={closeLightbox}>
            ×
          </button>
          <button
            className="nav-btn prev-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigateMedia("prev");
            }}
          >
            ❮
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "video" ? (
              <video
                src={selectedMedia.src}
                poster={selectedMedia.poster}
                controls
                autoPlay
                loop
                controlsList="nodownload"
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={selectedMedia.src} alt={selectedMedia.alt} />
            )}
          </div>
          <button
            className="nav-btn next-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigateMedia("next");
            }}
          >
            ❯
          </button>
        </div>
      )}
    </div>
  );
};

export default AlbumView;
