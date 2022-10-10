import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
export default function QuotesAuthors({
  QuotesAuthors,
  showQuotesByAuthorFunction,
}) {
  // let tags = ["irani" , "pune" , "bollywoord" , "astronomy" , "design" , "malaysia" , "singapore"]
  return (
    <Card className="shadow ">
      <Card.Header as="h2">QuotesAuthors</Card.Header>
      <Card.Body>
        <Card.Title className="mb-4 mt-2">
          Different authors to search from
        </Card.Title>
        <Card.Text>
          {QuotesAuthors.map((author, index) => {
            return (
              <Badge
                style={{ cursor: "pointer" }}
                pill
                className="bg-light text-primary border border-primary mx-1 px-3 py-2 mb-2 text-capitalize"
                onClick={() => {
                  showQuotesByAuthorFunction(author);
                }}
              >
                {author}
              </Badge>
            );
          })}
        </Card.Text>
      </Card.Body>
    </Card>
    // <div id="noOfFacts">
    //     <h1>Total Facts</h1>
    //     <span id="totalNoOfFactsSpan">{TotalNoOfFacts}</span>
    // </div>
  );
}
