import React from "react";
import Navbar1 from "./Navbar1.js";
import Navbar2 from "./Navbar2.js";
import Footer from "./Footer.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clock from "../images/clock.png";
import conside from "../images/conside.png";
import verified from "../images/verified.png";
import Typed from "react-typed";
export default function Homepage() {
  return (
    <div id="homepage">
      <Navbar1 />
      <Navbar2 />

      <Container>
        <div class="my-3 mx-1 border-2 border border-success rounded px-3 py-3 text-center">
          <span style={{ fontSize: "35px", fontWeight: "400" }}>
            A single page destination for all info on -
          </span>
          <span className="mx-2" style={{ fontSize: "45px", fontWeight: "500" }}>
            <Typed
              strings={[
                "Facts",
                "News",
                "Articles",
                "Travel",
                "Quotes",
                "Finance",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </span>
        </div>
        <div className="my-3">
          <Row className="">
            <Col className="my-1" xs={12} md={12} sm={12} lg={4}>
              <div className="text-center border border-success mx-1 px-2 rounded py-3 border-2">
                <h2 className="text-success">on time updates</h2>

                <img height="150px " width="150px" src={clock} alt="" />
                <p className="text-success" style={{ fontSize: "19px" }}>
                  {" "}
                  we always strive hard to provide you with on time and latest
                  updates of everything happening
                </p>
              </div>
            </Col>
            <Col className="my-1" xs={12} md={12} sm={12} lg={4}>
              <div className="text-center border border-success mx-1 px-2 rounded py-3 border-2">
                <h2 className="text-success"> concise and brief info</h2>

                <img height="150px " width="150px" src={conside} alt="" />
                <p className="text-success" style={{ fontSize: "19px" }}>
                  We always try to provide you info in a bried manner so that
                  reading it doesnt take much of your time
                </p>
              </div>
            </Col>
            <Col className="my-1" xs={12} md={12} sm={12} lg={4}>
              <div className="text-center border border-success mx-1 px-2 rounded py-3 border-2">
                <h2 className="text-success">accurate and verified</h2>

                <img height="150px " width="150px" src={verified} alt="" />
                <p className="text-success" style={{ fontSize: "19px" }}>
                  {" "}
                  We always make sure that we only provide info that is
                  factually correct and verified
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
