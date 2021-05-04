import React from 'react';


const IpService = ({ _id, name, description, imageURL }) => {

    console.log(name);
    return (
        <article>
         <div >
            <img src={imageURL} alt={name} />
         </div>
         <div >
            <h6>{name}</h6>
            <p>{description}</p>
         </div>
      </article>
    );
};

export default IpService;