import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  let navigate = useNavigate();
  let footerMaterial = [
    {
      mainHeading: "company",
      contents: [
        { value: "reports", link: "/reports" },
        { value: "shares", link: "/shares" },
        { value: "esops", link: "/esops" },
        { value: "agm", link: "/agm" },
      ],
    },
    {
      mainHeading: "history",
      contents: [
        { value: "reports", link: "/reports" },
        { value: "shares", link: "/shares" },
        { value: "esops", link: "/esops" },
        { value: "agm", link: "/agm" },
      ],
    },
    {
      mainHeading: "investors",
      contents: [
        { value: "reports", link: "/reports" },
        { value: "shares", link: "/shares" },
        { value: "esops", link: "/esops" },
        { value: "agm", link: "/agm" },
      ],
    },
    {
      mainHeading: "careers",
      contents: [
        { value: "work with us", link: "/work-with-us" },
        { value: "perks", link: "/perks" },
        { value: "internships", link: "/internships" },
        { value: "locations", link: "/locations" },
        { value: "admin", link: "/admin-dashboard" },
      ],
    },
  ];

  function handleNavigate(to) {
    navigate(`${to}`);
  }
  return (
     <Container className="  my-4 border-top pt-4  "> 
     {/* <Container style={{marginLeft:"30px"}}className="  my-4 border-top pt-4  "> */}
    {/* <Container className=" mx-5 my-4 border-top pt-4  "> */}
      <Row>
        {footerMaterial.map((material, index) => {
          return (
            <Col className="  " xs={6} md={3} lg={3}>
              <h4 className="mb-4">{material.mainHeading}</h4>
              {material.contents.map((content, index) => {
                return (
                  <>
                    <span
                      style={{ cursor: "pointer" }}
                      className=" d-block my-3 text-muted "
                      onClick={() => {
                        handleNavigate(content.link);
                      }}
                    >
                      {content.value}
                    </span>
                  </>
                );
              })}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
