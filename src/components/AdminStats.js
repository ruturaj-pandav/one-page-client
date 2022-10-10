import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
export default function AdminStats({
  usersNumber,
  factsNumber,
  quotesNumber,
  feedbackNumber,
}) {
  let rowslist = [
    { colname: "user", value: usersNumber },
    { colname: "facts", value: factsNumber },
    { colname: "quotes", value: quotesNumber },
    { colname: "feedback", value: feedbackNumber },
  ];

  return (
    <Container>
      <Row>
        {rowslist.map((row, index) => {
          return (
            <Col xs={12} md={12} sm = {12} lg = {3} >
              <Card className="shadow-sm py-3 px-2">
                <Card.Body>
                  <Card.Title>{row.colname}</Card.Title>
                  <Card.Subtitle className="my-2 ">{row.value}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
