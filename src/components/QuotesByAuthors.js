import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function QuotesByAuthors({ author, allQuotes, closeFunction }) {



  let quotes = allQuotes.filter((quote, index) => {
    return quote.author == author;
  });


  const mystyle = {
    fontSize : '25px',
    textTransform : 'capitalize' ,
     

  };



  return (
    <Container className="border border-grey border-3 rounded py-3 px-4 mb-4 shadow">
      <span className="mb-1" style={mystyle}> quotes by - <strong>{author}</strong></span>
      {quotes.map((quote, index) => {
        return (
          <div className=" border border-3 border-grey  py-3 px-3 rounded my-2 border-1">
            {quote.quote}
          </div>
        );
      })}
      <br />
      <Button
        className="btn btn-sm "
        variant="danger"
        onClick={() => {
          closeFunction();
        }}
      >
        close
      </Button>
    </Container>
  );
}
