import React, { useEffect, useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Button from "@material-ui/core/Button";

const ManageItem = ({ _id, name, price, setAlertShow, setAlertErrShow }) => {
  const [id, setId] = useState("");

  useEffect(() => {
    id &&
      axios
        .delete(`https://isp-server0.herokuapp.com/services/delete/${id}`)
        .then(() => {
          setAlertShow(true);
          setAlertErrShow(false);
        })
        .catch(() => {
          setAlertErrShow(true);
          setAlertShow(false);
        });
  }, [id, setAlertShow, setAlertErrShow]);

  return (
    <tr>
      <td>{name}</td>
      <td>${price}</td>
      <td className="text-center bg-danger">
        <Button
          onClick={() => setId(_id)}
          variant="contained"
          color="secondary"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default ManageItem;
