import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from "react-bootstrap/Badge";
export default function FactsTag({ tags , showFactsByTagFunction}) {
  // let tags = ["irani" , "pune" , "bollywoord" , "astronomy" , "design" , "malaysia" , "singapore"]
  const mystyle = {
    cursor: "pointer",
    
  };
  console.log("these are tags " , tags)
  return (
    <Card className="shadow " >
      <Card.Header as="h2">Tags</Card.Header>
      <Card.Body>
        <Card.Title className="mb-4 mt-2">Different tags to search from</Card.Title>
       <Card.Text >
        {tags.map((tag , index) => {
          return (
            <Badge style={mystyle}  className="bg-light text-primary border border-primary mx-1 px-3 py-2 mb-2" onClick={() => {
              showFactsByTagFunction(tag);
            }}>
                #{tag} 
              </Badge>
          )
        })}
        </Card.Text>
       
      </Card.Body>
    </Card>
    // <div id="noOfFacts">
    //     <h1>Total Facts</h1>
    //     <span id="totalNoOfFactsSpan">{TotalNoOfFacts}</span>
    // </div>
  )
}
