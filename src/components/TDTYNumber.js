import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function TDTYNumber({TDTYNumber}) {
  return (
    <Card className="shadow " style={{height  : '100%'}}>
      <Card.Header as="h2">Stats</Card.Header>
      <Card.Body>
        <Card.Title>Total events today</Card.Title>
        <Card.Text as="h2">
        {TDTYNumber}
        </Card.Text>
       
      </Card.Body>
    </Card>
    // <div id="noOfFacts">
    //     <h1>Total Facts</h1>
    //     <span id="totalNoOfFactsSpan">{TotalNoOfFacts}</span>
    // </div>
  )
}
