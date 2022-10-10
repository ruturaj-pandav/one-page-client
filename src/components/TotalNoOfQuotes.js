// import React from 'react'

// export default function TotalNoOfQuotes({TotalNoOfQuotes}) {
//   return (
//     <div id="noOfFacts">
//         <h1>Total Quotes</h1>
//         <span id="totalNoOfFactsSpan">{TotalNoOfQuotes}</span>
//     </div>
//   )
// }

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function TotalNoOfQuotes({ TotalNoOfQuotes }) {
  return (
    <Card className="shadow " style={{ height: "100%" }}>
      <Card.Header as="h2">Statistics</Card.Header>
      <Card.Body>
        <Card.Title>Total No of quotes</Card.Title>
        <Card.Text as="h2">{TotalNoOfQuotes}</Card.Text>
      </Card.Body>
    </Card>
    // <div id="noOfFacts">
    //     <h1>Total Facts</h1>
    //     <span id="totalNoOfFactsSpan">{TotalNoOfFacts}</span>
    // </div>
  );
}
