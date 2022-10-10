import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function FactsTag({ tag, allFacts, closeFunction }) {
  let facts = allFacts.filter((fact, index) => {
    let tagt = tag.toLowerCase();
    let result = fact.tags.includes(tagt);
    return result;
  });

  const mystyle = {
    fontSize: "25px",
  };

  return (
    <Container className="border border-grey border-3 rounded py-3 px-4 mb-4 shadow">
      <span className="mb-4 " style={mystyle}>
        all facts by tag- <strong>{tag}</strong>
      </span>
      {facts.map((fact, index) => {
        return (
          <div className="border  border-grey  py-3 px-3 rounded my-2 border-1">
            <div className=" " style={{fontSize : "20px" , fontWeight : "bold"}}>
              {fact.description}
            </div>
            <div>
              {/* <img src= {fact.img} width="100%" height="400px"/> */}
            </div>
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
