import React from "react";
import "./gallery.scss";

const ImageGallery = () => {
  return (
    <div className="carousel-main" id="projects">
      <div className="carousel-center-border">
        <div>
          <h3 className="text-white">Lorem</h3>
          <p className="text-white">subtitle</p>
        </div>
      </div>

      <div className="carousel-img-container">
        <div className="gallery-content-box">
          <img src="/assets/images/gallery-1.png" alt="gallery-image" />
          <div className="gallery-content">
            <h2>01</h2>
            <h3>Lorem ipsum dolor sit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="gallery-content-box">
          <img src="/assets/images/gallery-2.png" alt="gallery-image" />
          <div className="gallery-content">
            <h2>02</h2>
            <h3>Lorem ipsum dolor sit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
        <div className="gallery-content-box">
          <img src="/assets/images/gallery-3.png" alt="gallery-image" />
          <div className="gallery-content">
            <h2>03</h2>
            <h3>Lorem ipsum dolor sit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
