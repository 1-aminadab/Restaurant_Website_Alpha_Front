import React from 'react';

const ReservationSection = () => {
  return (
    <section className="" style={{display:"flex",height:"fit-content", alignItems:"center",padding:"250px 0px"}}>
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <form action="" className="form-left">
            <h2 className="headline-1 text-center">Contact Us</h2>
            <p className="form-text text-center">
              Booking request <a href="tel:+88123123456" className="link">+251946450835</a> or fill out the order form
            </p>
            <div className="input-wrapper">
              <input type="text" name="name" placeholder="Your Name" autoComplete="off" className="input-field" />
              <input type="tel" name="phone" placeholder="Phone Number" autoComplete="off" className="input-field" />
              <input type="email" name="email" placeholder="Email" autoComplete="off" className="input-field" />
            </div>
            <div className="input-wrapper">
          
                 <textarea name="text" id="" placeholder='Message' cols="30" rows="10" className="input-field"></textarea>
             
            </div>
            {/* Add additional form fields as needed */}
            <button type="submit" className="btn btn-primary">
              <span className="text text-1">Submit</span>
              <span className="text text-2" aria-hidden="true">Submit</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
