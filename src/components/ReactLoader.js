import React from "react";
import ReactLoading from "react-loading";
import Container from "react-bootstrap/Container";
export default function ReactLoader({ type, color }) {
  return (
    <Container className="align-items-center w-25">
      <ReactLoading
        className=""
        type="spinningBubbles"
        color="grey"
        height="100px"
        width="100px"
      />
      <span className="mt-3" style={{ fontSize: "40px" , marginTop: "30px"}}>
        adding fact
      </span>
    </Container>
  );
}
