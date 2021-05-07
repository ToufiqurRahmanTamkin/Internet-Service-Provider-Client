import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../image/about.jpg";
import Button from "@material-ui/core/Button";

const About = () => {
  return (
    <section className="about">
      <Container>
        <div className="title mb-5">
          <h3>𝐀𝐛𝐨𝐮𝐭 𝐔𝐬</h3>
        </div>
        <Row className="align-items-center">
          <Col md={6}>
            <img style={{ borderRadius: "5px" }} src={about} alt="about" />
          </Col>
          <Col md={6}>
            <h6>𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 𝐒𝐮𝐩𝐩𝐨𝐫𝐭</h6>
            <p className="text-justify mb-0">
              𝐖𝐞 𝐩𝐫𝐨𝐯𝐢𝐝𝐞 𝐭𝐡𝐞 𝐛𝐞𝐬𝐭 𝐢𝐧𝐭𝐞𝐫𝐧𝐞𝐭 𝐬𝐞𝐫𝐯𝐢𝐜𝐞 𝐚𝐥𝐥 𝐨𝐯𝐞𝐫 𝐭𝐡𝐞 𝐜𝐨𝐮𝐧𝐭𝐫𝐲. 𝐖𝐞 𝐚𝐥𝐬𝐨
              𝐩𝐫𝐨𝐯𝐢𝐝𝐞 𝐛𝐨𝐭𝐡 𝐭𝐡𝐞 <strong>𝐒𝐡𝐚𝐫𝐞𝐝 𝐈𝐏</strong> ,{" "}
              <strong>𝐃𝐲𝐧𝐚𝐦𝐢𝐜 𝐑𝐞𝐚𝐥 𝐈𝐏</strong> , 𝐚𝐧𝐝{" "}
              <strong>𝐒𝐭𝐚𝐭𝐢𝐜 𝐑𝐞𝐚𝐥 𝐈𝐩</strong> 𝐚𝐜𝐜𝐨𝐫𝐝𝐢𝐧𝐠 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐜𝐡𝐨𝐢𝐜𝐞. 𝐘𝐨𝐮 𝐰𝐢𝐥𝐥
              𝐠𝐞𝐭 𝟐𝟒/𝟕 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐟𝐫𝐨𝐦 𝐨𝐮𝐫 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐬𝐞𝐬𝐬𝐢𝐨𝐧.𝐅𝐨𝐫 𝐦𝐨𝐫𝐞 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧
              𝐩𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐭𝐨 𝐨𝐮𝐫 𝐡𝐞𝐥𝐩𝐥𝐢𝐧𝐞 𝐨𝐫 𝐝𝐢𝐫𝐞𝐜𝐭𝐥𝐲 𝐜𝐚𝐥𝐥 𝐭𝐨
              <strong style={{ color: "black" }}> +𝟖𝟖𝟎𝟏𝟕𝟖𝟕𝟕𝟐𝟏𝟏𝟗𝟑 </strong>.
            </p>
            {/* <button className="btn custom-btn mt-3">
                            Read More
                        </button> */}
            <Button className="mt-3" variant="contained" color="primary">Know More</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
