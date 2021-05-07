import React from "react";
import { Container } from "react-bootstrap";
import Button from "@material-ui/core/Button";
const Header = () => {
  return (
    <section className="header">
      <Container className="header-info d-flex justify-content-center align-items-center">
        <div className="header-content text-center text-uppercase">
          <h1 style={{ color: "black" }}>𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 𝐒𝐞𝐫𝐯𝐢𝐜𝐞 𝐏𝐫𝐨𝐯𝐢𝐝𝐞𝐫</h1>
          <p>𝐖𝐞 𝐚𝐫𝐞 𝐡𝐞𝐫𝐞 𝐭𝐨 𝐬𝐨𝐥𝐯𝐞 𝐲𝐨𝐮𝐫 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐬</p>
          <h6>Call Now +801787721193</h6>
          {/* <button className="btn custom-btn mt-3">Get More Info</button> */}
          <Button variant="contained" color="primary">
            Get More Info
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Header;
