import React from "react";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="Gallery-title">
        <div className="Gallery-title-text">Thư viện ảnh</div>
      </div>
      <div className="Gallery-imgs-pc">
        <div className="Gallery-imgs-row">
          <div className="Gallery-img long"></div>
          <div className="Gallery-img sort"></div>
        </div>
        <div className="Gallery-imgs-row">
          <div className="Gallery-img sort"></div>
          <div className="Gallery-img long"></div>
        </div>
      </div>

      <div className="Gallery-imgs-mobile ">
        <div className="Gallery-imgs-row">
          <div className="Gallery-img sort"></div>

          <div className="Gallery-img sort"></div>
        </div>
        <div className="Gallery-imgs-row">
          <div className="Gallery-img long"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
