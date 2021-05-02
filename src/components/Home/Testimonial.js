import React from 'react';

const Testimonial = ({ name, title, description, image }) => {
   // console.log(image);
   return (
      <article className="testimonial mb-4">
         <div className="author mb-3">
            <img src={image} alt={name} />
            <div className="author-title">
               <h6>{name}</h6>
               <p>
                  <small>{title}</small>
               </p>
            </div>
         </div>
         <p> {description}</p>
      </article>
   );
};

export default Testimonial;
