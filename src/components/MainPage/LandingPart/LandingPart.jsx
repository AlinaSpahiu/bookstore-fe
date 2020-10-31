import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./LandingPage.css";
import Typical from "react-typical";
import { CssBaseline } from "@material-ui/core";

const LandingPart = () => {
  return (
    <>
      <CssBaseline />

      <section id="cover">
        <Row className="justify-content-center">
          {/* <Typical
            className="typing"
            loop={Infinity}
            wrapper="b"
            steps={["Today a READER", 2000, "Tomorrow a LEADER", 6000]}
          /> */}
        </Row>
      </section>
    </>
  );
};

export default LandingPart;
