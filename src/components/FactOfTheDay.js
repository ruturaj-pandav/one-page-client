import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

export default function FactOfTheDay({ fact }) {
  console.log("fact of th edya ");
  console.log(fact);
  return (
    <>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>
            <h1>fact of the day</h1>
          </Card.Title>
          <Card.Subtitle className="mb-2 mt-3 d-5">
            <h4>{fact.title}</h4>
          </Card.Subtitle>
          <Card.Text>{fact.description}</Card.Text>
          {fact.tags
            ? fact.tags.map((tag, index) => {
                return <Badge bg="primary mx-1 px-3">#{tag}</Badge>;
              })
            : null}
        </Card.Body>
      </Card>
    </>
  );
}
