import React from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";

const Service = ({ _id, name, description, price, imageURL }) => {
  const history = useHistory();
  const handleServiceClick = (id) => {
    history.push(`/dashboard/book/${id}`);
  };

  return (
    <article className="service mb-4">
      <div className="service-image">
        <img src={imageURL} alt={name} />
      </div>
      <div className="service-info">
        <h6>{name}</h6>
        <p>{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0">${price}</h6>
          <Button onClick={() => handleServiceClick(_id)} variant="contained" color="primary">get Service</Button>
        </div>
      </div>
    </article>
  );
};

export default Service;
