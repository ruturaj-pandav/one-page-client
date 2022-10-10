import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

export default function AllFacts({ allFacts }) {


  let navigate = useNavigate();
  

  function handleNavigate(tag) {
    navigate(`/facts/tags/${tag}`);
  }
  return (
    <>
    <h1 className="border border-grey rounded  px-3 py-2 ">All facts</h1>
    {allFacts.map((fact , index) => {
      {console.log(fact.img)}
      return (
        <Card className="shadow-sm  mt-3 mb-3">
          <Card.Img height="300px"  variant="top" src={fact.img} />
        <Card.Body>
          <Card.Subtitle className="">
            <h4>{fact.title}</h4>
          </Card.Subtitle>
          <Card.Text>{fact.description}</Card.Text>
          {fact.tags
            ? fact.tags.map((tag, index) => {
                return (
                  <Badge  bg="primary mx-1 px-3 py-2">
                    #{tag}
                  </Badge>
                );
              })
            : null}
        </Card.Body>
      </Card>
      )
    })}
      {/* <Card className="shadow  ">
      <Card.Header as="h1" className="mb-3">All Facts</Card.Header>
      {allFacts.map((fact, index) => {
        return (
        
        
        );
      })}
    </Card> */}
    </>
  

    // <div id="allFacts">
    //   <h1>All Facts</h1>
    //   {allFacts.map((fact, index) => {
    //     return (
    //       <div>
    //         <span id="factTitle">{fact.title}</span>
    //         <span id="factDescription">{fact.description}</span>
    //         <span id="factTags">
    //           {fact.tags.map((tag, index) => {
    //             return <span id="factIndividual" onClick={() => {
    //               handleNavigate(`${tag}`)
    //             }}> #{tag} </span>;
    //           })}
    //         </span>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
