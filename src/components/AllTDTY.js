import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import moment from "moment";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
export default function AllTDTY({ allTDTY }) {
  let navigate = useNavigate();

  // function handleNavigate(tag) {
  //   navigate(`/facts/tags/${tag}`);
  // }
  console.log(allTDTY);
  let today = new Date().toLocaleDateString();
  return (
    <>
      <h1 className="border border-grey rounded  px-3 py-2 ">All events</h1>

      <Row>
       

      {allTDTY.map((tdty, index) => {
        return (
          <Col lg={3}  xl={3} md={12} sm={12}  >
            <Card className="border border-2 border-grey" style={{height:"100%"}}>
              <Card.Img variant="top" src={tdty.img} height="200px"  />
              <Card.Body>
                <Card.Title style={{ fontSize: "22px" }} className="text-capitalize">{tdty.topic}</Card.Title>
                <Card.Text>
                 {tdty.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item> {moment(today).format("DD MMMM YYYY")}</ListGroup.Item>
                
              </ListGroup>
              
            </Card>
          </Col>
          // <Card className="shadow-sm  mt-3 mb-3  ">
          //   <h2 className="p-3">{tdty.topic}</h2>

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
          //     <Card.Text className="px-3" style={{ fontSize: "22px" }}>{tdty.description}</Card.Text>
          //     <Card.Text className="px-3" style={{ fontWeight: "500", fontSize: "22px" }}>
          //       {moment(today).format("DD MMMM YYYY")}
          //     </Card.Text>
          //   </Card.Body>
          // </Card>
        );
      })}
            </Row>

    </>
  );
}
