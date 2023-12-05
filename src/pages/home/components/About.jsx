import React from 'react';

import aboutBannerImage from '../assets/images/about-banner.jpg';
import aboutAbsImage from '../assets/images/about-abs-image.jpg';
import badgeImage2 from '../assets/images/badge-2.png';
import shape3 from '../assets/images/shape-3.png';

const AboutSection = () => {
  return (
    <section className="section about text-center" aria-labelledby="about-label" id="about">
      <div className="container">
        <div className="about-content">
          <p className="label-2 section-subtitle" id="about-label">Our Story</p>
          <h2 className="headline-1 section-title">Every Flavor Tells a Story</h2>
          <p className="section-text">
          Indulge your senses in the rich tapestry of culinary delights, where each taste unfolds a unique narrative. Immerse yourself in the world of gastronomic wonders, where every ingredient is a character and every dish is a chapter waiting to be savored. 
          </p>
          <div className="contact-label">Book Through Call</div>
          <a href="tel:+804001234567" className="body-1 contact-number hover-underline">+251 946450835</a>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">Read More</span>
            <span className="text text-2" aria-hidden="true">Read More</span>
          </a>
        </div>
        <figure className="about-banner">
          <img
            src={aboutBannerImage}
            width="570"
            height="570"
            loading="lazy"
            alt="about banner"
            className="w-100"
            data-parallax-item
            data-parallax-speed="1"
          />
          <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
            <img src={aboutAbsImage} width="285" height="285" loading="lazy" alt="" className="w-100" />
          </div>
          <div className="abs-img abs-img-2 has-before">
            <img src={badgeImage2} width="133" height="134" loading="lazy" alt="" />
          </div>
        </figure>
        <img src={shape3} width="197" height="194" loading="lazy" alt="" className="shape" />
      </div>
    </section>
  );
};

export default AboutSection;
