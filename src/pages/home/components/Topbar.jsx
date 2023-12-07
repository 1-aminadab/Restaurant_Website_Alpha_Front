import React from 'react';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">Ayat Real Estat, Wesen, Addis Ababa, Ethiopia</span>
        </address>

        <div className="separator"></div>

        <div className="topbar-item item-2">
          <div className="icon">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">Daily: 8.00 am to 10.00 pm</span>
        </div>

        <a href="tel:+11234567890" className="topbar-item link">
          <div className="icon">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">+251 934573873</span>
        </a>

        <div className="separator"></div>

        <a href="mailto:sole@gmail.com" className="topbar-item link">
          <div className="icon">
            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
          </div>
          <span className="span">sole@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
