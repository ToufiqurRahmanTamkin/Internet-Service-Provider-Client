import React from 'react';

const Booking = ({
   servicesName,
   image,
   description,
   price,
   bookingStatus,
}) => {
   return (
      <article className="service mb-4">
         <img src={image} alt={servicesName} />
         <div className="service-info">
            <h6>{servicesName}</h6>
            <p>{description}</p>
            <div className="d-flex justify-content-between align-items-center">
               <h6 className="mb-0">${price}</h6>
               <button className={`btn custom-btn ${bookingStatus}`}>
                  {bookingStatus}
               </button>
            </div>
         </div>
      </article>
   );
};

export default Booking;
