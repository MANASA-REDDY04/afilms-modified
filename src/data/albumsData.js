// albumsData.js

import imagesUrls from "./imageLinks";

const albums = [
  {
    id: "portrait",
    title: "Self Portraits",
    category: "Portrait Photography",
    coverImage: imagesUrls.albums[4],
    date: "March 22, 2025",
    location: "Aadya Films, Rasoolpura, Hyderabad",
    description: "Classic self portraits in Elegant style.",
    media: [
      { type: "image", filename: imagesUrls.portrait[0] },
      { type: "image", filename: imagesUrls.portrait[1] },
      { type: "image", filename: imagesUrls.portrait[2] },
      { type: "video", filename: imagesUrls.portrait[3] }, // This should be video
      { type: "image", filename: imagesUrls.portrait[4] },
      { type: "image", filename: imagesUrls.portrait[5] },
    ],
  },
  {
    id: "commercial-kims-hospital",
    title: "KIMS Hospital Shoot",
    category: "Ads Commercial",
    coverImage: imagesUrls.albums[1],
    date: "March 2025",
    location: "KIMS, Hyderabad",
    description: "Drone and commercial video shoot at KIMS.",
    media: [
      { type: "image", filename: imagesUrls.kims[0] },
      { type: "video", filename: imagesUrls.kims[1] },
    ],
  },
  {
    id: "drone-skyline",
    title: "Night View Hyderabad",
    category: "Drone Shoot",
    coverImage: imagesUrls.albums[2],
    date: "January 30, 2025",
    location: "Hitech City, Hyderabad",
    description: "Night View of Pearl City Hyderabad.",
    media: [
      { type: "image", filename: imagesUrls.drone[0] },
      { type: "image", filename: imagesUrls.drone[1] },
      { type: "image", filename: imagesUrls.drone[2] },
      { type: "image", filename: imagesUrls.drone[4] },
    ],
  },
  {
    id: "camera-rent",
    title: "Rental Drone Shots",
    category: "Drone & Camera Rent",
    coverImage: imagesUrls.albums[0],
    date: "December 18, 2024",
    location: "Telangana",
    description: "Demo shots from our rental drones and cameras.",
    media: [
      { type: "image", filename: imagesUrls.camerarent[0] },
      { type: "image", filename: imagesUrls.camerarent[1] },
      { type: "image", filename: imagesUrls.camerarent[2] },
      { type: "video", filename: imagesUrls.camerarent[3] }, // This should be video
    ],
  },
  {
    id: "podcasts",
    title: "Podcast Setups",
    category: "Podcast Shoot",
    coverImage: imagesUrls.albums[3],
    date: "November 25, 2024",
    location: "Aadya Films, Rasoolpura",
    description: "Podcast shoots.",
    media: [
      { type: "image", filename: imagesUrls.podcasts[0] },
      { type: "image", filename: imagesUrls.podcasts[1] },
      { type: "image", filename: imagesUrls.podcasts[2] },
    ],
  },
  {
    id: "music",
    title: "Western and Indian",
    category: "Song Shoot",
    coverImage: imagesUrls.albums[6],
    date: "October 12, 2024",
    location: "Hyderabad, Telangana",
    description: "Shoot for our Client's latest single.",
    media: [
      { type: "image", filename: imagesUrls.music[0] },
      { type: "image", filename: imagesUrls.music[1] },
      { type: "image", filename: imagesUrls.music[2] },
      { type: "image", filename: imagesUrls.music[3] },
      { type: "image", filename: imagesUrls.music[4] },
      { type: "image", filename: imagesUrls.music[5] },
    ],
  },
];

export default albums;
