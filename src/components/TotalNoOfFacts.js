import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function TotalNoOfFacts({TotalNoOfFacts}) {
  return (
    <Card className="shadow " style={{height  : '100%'}}>
      <Card.Header as="h2">Stats</Card.Header>
      <Card.Body>
        <Card.Title>Total No of facts</Card.Title>
        <Card.Text as="h2">
        {TotalNoOfFacts}
        </Card.Text>
       
      </Card.Body>
    </Card>
    // <div id="noOfFacts">
    //     <h1>Total Facts</h1>
    //     <span id="totalNoOfFactsSpan">{TotalNoOfFacts}</span>
    // </div>
  )
}
