import React from "react";
import "../stylesheets/InfoSection.css";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="video-container">
      <iframe className="video-thumbnail" 
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen ></iframe>
      </div>
      <div className="info-content">
        <div className="tabs">
          <span className="tab active">Buyer</span>
          <span className="tab">Supplier</span>
        </div>
        <ul className="info-list">
          <li>✅ Post your requirements.</li>
          <li>✅ Sit back for multiple suppliers to contact you.</li>
          <li>✅ Choose among the suppliers based on the ratings and reviews.</li>
        </ul>
      </div>
    </section>
  );
};

export default InfoSection;
