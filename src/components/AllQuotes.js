import React from "react";
import Card from "react-bootstrap/Card";

export default function AllQuotes({ allQuotes }) {
  return (
    <>
      <h1 className=" border border-light rounded p-3">All Quotes</h1>
      {allQuotes.map((quote, index) => {
        return (
          <Card className="shadow-sm mt-3 ">
            {/* <Card.Header></Card.Header> */}
            <Card.Img
              height="300px"
              className=""
              variant="top"
              src={quote.img}
            />
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>{quote.quote}</p>
                <footer className="blockquote-footer">
                  {/* {quote.author} <cite title="Source Title"></cite> */}
                  {quote.author}
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}
