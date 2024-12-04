import React from "react";
import "../stylesheets/HowItWorks.css";
import firstImage from "../../assets/1.png";
import secondImage from "../../assets/2.png";
import thirdImage from "../../assets/3.png";
import fourthImage from "../../assets/4.png";
import fifthImage from "../../assets/5.png";
import sixthImage from "../../assets/6.png";

const HowItWorks = () => {
  const steps = [
    {
      icon: firstImage, // Local image file
      title: "Select Your Role and Sign Up",
    },
    {
      icon: secondImage, // Local image file
      title: "Buyers Post Your Requirements",
    },
    {
      icon: thirdImage, // Local image file
      title: "Review, Select, and Contact the Best Suppliers",
    },
    {
      icon: fourthImage, // Local image file
      title: "Suppliers Complete your Profile and Get Notified for Opportunities",
    },
    {
      icon: fifthImage, // Local image file
      title: "Contact to Buyers and Share your Quote for the Service",
    },
    {
      icon: sixthImage, // Local image file
      title: "Both Parties can Connect and Make Business Leave a Feedback",
    },
  ];


  return (
    <section className="how-it-works">
      <h2 className="section-title">How it works?</h2>
      <p className="section-description">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.
      </p>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className={index % 2 === 0 ? "blueBackground step-card" : "whiteBackground step-card"} key={index}>
            <img src={step.icon} alt={step.title} className="step-icon" />
            <h3 className="step-title">{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
