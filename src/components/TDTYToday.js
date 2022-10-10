import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import moment from "moment";
import Container from "react-bootstrap/Container";

import Stack from "react-bootstrap/Stack";

export default function TDTYToday({ allTDTY }) {
  let today = new Date().toLocaleDateString();
  let events_today = allTDTY.filter((tdty, index) => {
    return (
      moment(new Date().toLocaleDateString()).format("YYYY-MM-DD") ===
      moment(tdty.dateOfEvent).format("YYYY-MM-DD")
    );
  });
  return (
    <Container className="border border-grey border-1 rounded py-3 px-5">
      <h1 className="text-success mb-4">Events that happened today</h1>
      <h2 className="text-secondary mb-4">
        {" "}
        {moment(new Date().toLocaleDateString()).format("DD MMMM YYYY")}
      </h2>
      <hr></hr>
      <Row className="my-4 ">
        {events_today.map((tdty) => {
          return (

            <Col lg={4} xl={4} md={12} sm={12} className="my-2">
              <Card className="border border-1 border-grey " style={{height:"100%"}}>
                <Card.Img variant="top" src={tdty.img} height="200px" />
                
                <Card.Body>
                  <Card.Title
                    style={{ fontSize: "22px" }}
                    className="text-capitalize"
                  >
                    {tdty.topic}
                  </Card.Title>
                  <Card.Text>{tdty.description}</Card.Text>
                </Card.Body>
                {/* <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    {" "}
                    {moment(today).format("DD MMMM YYYY")}
                  </ListGroup.Item>
                </ListGroup> */}
              </Card>
            </Col>
            // <Col sm={12} lg={6} xl={6} md={12}>
            //   {" "}
            //   <Card.Img
            //     className=" rounded  "
            //     height="300px"
            //     variant="top"
            //     src={tdty.img}
            //   />
            // </Col>
            // <Col>
            //   <Stack gap={2} className="h-100">
            //     <div
            //       className=" "
            //       style={{
            //         fontSize: "30px",
            //         fontWeight: "500",
            //         textTransform: "uppercase",
            //       }}
            //     >
            //       {tdty.topic}
            //     </div>
            //     <div
            //       className=""
            //       style={{ fontSize: "20px", fontWeight: "bold" }}
            //     ></div>
            //     <div
            //       className="h-100 py-2 px-2 my-2"
            //       style={{ fontSize: "22px" }}
            //     >
            //       {tdty.description}
            //     </div>
            //   </Stack>
            // </Col>

            // <Card className="shadow my-5 border-success  py-3 px-5 rounded border border-1">
            //   <h2 className="p-3">title comes here</h2>

            //   <center>
            //     <Card.Img
            //       className=" mb-3 "
            //       height="300px"
            //       variant="top"
            //       src={tdty.img}
            //     />
            //   </center>
            //   <Card.Body>
            //     <Card.Subtitle className="">
            //       <h4>{tdty.title}</h4>
            //     </Card.Subtitle>
            //     <Card.Text>{tdty.description}</Card.Text>
            //     <Card.Text style={{ fontWeight: "500", fontSize: "22px" }}>
            //       {moment(new Date().toLocaleDateString()).format("YYYY-MM-DD")}
            //     </Card.Text>
            //   </Card.Body>
            // </Card>
          );
        })}
      </Row>
    </Container>
  );
}
