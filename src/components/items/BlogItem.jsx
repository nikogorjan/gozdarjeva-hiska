import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentMonth, slugURL } from '../../utility/Utility';
import './BlogItem.css'
const BlogItem = ({ blog }) => {
  const [error, setError] = useState(null);

  // Destructure properties from the blog object, including the location
  const { thumb, title, linkText, location } = blog;

  // Title Convert To Slug (if needed)
  const blogURL = slugURL({ url: 'blog', slug: title });

  // Use handleClick to get user's current location and open Google Maps with directions
  const handleClick = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const origin = `${latitude},${longitude}`;
        // Use the blog's location as the destination
        const dest = encodeURIComponent(location);

        // Construct Google Maps URL with directions from origin to destination
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`;

        // Open the Google Maps URL in a new tab
        window.open(googleMapsUrl, "_blank");
      },
      (err) => {
        setError("Unable to retrieve your location.");
        console.error(err);
      }
    );
  };

  return (
    <div className="blog-item">
      <div className="blog-item__thumb">
        <div className="blog-item__thumb-link">
          <img src={thumb} className="cover-img" alt="Blog Image" />
        </div>
      </div>
      <div className="blog-item__inner">
        <div className="blog-item__content">
          <h6 className="blog-item__title">
            <div className="blog-item__title-link border-effect"> 
              {title}
            </div>
          </h6>
          {/* Clicking this button will trigger handleClick */}
          <div onClick={handleClick} className="simple-btn text-heading fw-semibold cursor-pointer"> 
            {linkText}
            <span className="icon-right text-gradient"> 
              <i className="fas fa-plus"></i> 
            </span>
          </div>
          {error && <p className="error-text">{error}</p>}
        </div>
      </div>
    </div>   
  );
};

export default BlogItem;
