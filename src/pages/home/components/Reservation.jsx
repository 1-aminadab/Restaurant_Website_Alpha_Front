import React from 'react';

const ReservationSection = () => {
  return (
    <section className="reservation">
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <form action="" className="form-left">
            <h2 className="headline-1 text-center">Online Reservation</h2>
            <p className="form-text text-center">
              Booking request <a href="tel:+88123123456" className="link">+88-123-123456</a> or fill out the order form
            </p>
            <div className="input-wrapper">
              <input type="text" name="name" placeholder="Your Name" autoComplete="off" className="input-field" />
              <input type="tel" name="phone" placeholder="Phone Number" autoComplete="off" className="input-field" />
            </div>
            <div className="input-wrapper">
              <div className="icon-wrapper">
                <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                <select name="person" className="input-field">
                  <option value="1-person">1 Person</option>
                  <option value="2-person">2 Person</option>
                  <option value="3-person">3 Person</option>
                  <option value="4-person">4 Person</option>
                  <option value="5-person">5 Person</option>
                  <option value="6-person">6 Person</option>
                  <option value="7-person">7 Person</option>
                </select>
              </div>
            </div>
            {/* Add additional form fields as needed */}
            <button type="submit" className="btn btn-primary">
              <span className="text text-1">Submit Reservation</span>
              <span className="text text-2" aria-hidden="true">Submit Reservation</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
