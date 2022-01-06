import React from "react";

const IpService = ({ _id, name, description, imageURL }) => {
  console.log("this is ip service");
  return (
    <article className="service mb-4">
      <div className="service-image">
        <img src={imageURL} alt={name} />
      </div>
      <div className="service-info">
        <h6>{name}</h6>
        <p>{description}</p>
        {/* <div className="d-flex justify-content-between align-items-center">
          <p className="hello">${_id}</p>
        </div> */}
      </div>
    </article>
    // <article className="service mb-4 text-center">
    //   <div className="">
    //     <img  src={imageURL} alt={name} />
    //   </div>
      
    //   <div className="service-info">
    //     <h6>{name}</h6>
    //     <p>{description}</p>
    //   </div>
    // </article>
  );
};

export default IpService;
