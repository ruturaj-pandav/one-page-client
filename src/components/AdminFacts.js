import React from "react";
import moment from "moment";
import { useState } from "react";

import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function AdminFacts({
  allFacts,
  viewQuote,
  editQuote,
  factTags,
  deleteFact,
  quotesAuthors,
  addFact,
}) {
  let navigate = useNavigate();
  const [addNewQuoteButtonVisible, setaddNewFactButtonVisible] = useState(true);
  const [addNewQuoteDivVisible, setaddNewFactDivVisible] = useState(false);
  const [title, settitle] = useState();
  const [desc, setdesc] = useState();
  const [tags, settags] = useState();
  let th = ["sr no", "title", "fact", "image", "tags", "date", "delete"];
  // let th = ["sr no", "title", "fact", "image" ,  "tags", "date", "view", "delete"];

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  function saveFile(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(e.target.files[0].name);
  }

  // console.log("these are tags" , factTags)/
  function addNewFactButtonClicked() {
    setaddNewFactButtonVisible(false);
    setaddNewFactDivVisible(true);
  }

  function closeThisDiv() {
    setaddNewFactButtonVisible(true);
    setaddNewFactDivVisible(false);
  }
  async function addFactToDatabase() {
    console.log("cliked");

    if (
      title != null &&
      title != "" &&
      desc != null &&
      desc != "" &&
      tags != null &&
      tags != ""
    ) {
      //   const formdata = new FormData();
      // formdata.append("file", file);
      // formdata.append("fileName", fileName);

      addFact(title, desc, tags, file, fileName);
      setaddNewFactButtonVisible(true);
      settitle("");
      settags("");
      setdesc("");

      console.log(title, tags, desc);
      setaddNewFactDivVisible(false);
    }
  }

  function goToFacts() {
    navigate("/facts");
  }
  const [showOption, setShowOption] = useState("all");
  if (showOption != "all") {
    allFacts = allFacts.filter((fact, index) => {
      // return quote.author === showOption;
      // let tagt = tag.toLowerCase();
      let result = fact.tags.includes(showOption);
      return result;
    });
  }

  return (
    <Container className="border border-grey p-5 rounded my-5 shadow-lg">
      <h1>facts</h1>
      <span
        className=" text-sm  text-primary"
        style={{ cursor: "pointer" }}
        onClick={() => {
          goToFacts();
        }}
      >
        {" "}
        go to quotes
      </span>
      <Form className="my-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="search by facts by text" />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          className="w-25"
          onChange={(e) => setShowOption(e.target.value)}
        >
          <option value="all">All tags</option>

          {factTags.map((tag, index) => {
            return <option value={tag}> {tag}</option>;
          })}
        </Form.Select>
      </Form>

      {allFacts.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              {th.map((col, index) => {
                return <th>{col}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {allFacts.map((fact, index) => {
              {
                console.log(fact.img);
              }
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{fact.title}</td>

                  <td>{fact.description}</td>

                  <td>
                    {" "}
                    <img
                      width="200px"
                      height="100px"
                      src={fact.img}
                      alt="testimage"
                    />{" "}
                  </td>
                  {/* <td>{fact.description}</td> */}
                  <td>
                    <strong>
                      {fact.tags.map((tag, index) => {
                        return <>#{tag} </>;
                      })}
                    </strong>
                  </td>

                  <td>{moment(fact.date).format("DD - MM - YYYY")}</td>
                  {/* <td>
                    <Button
                      variant="success"
                      onClick={() => {
                        viewQuote(`${fact._id}`);
                      }}
                    >
                      view
                    </Button>
                  </td> */}

                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        deleteFact(`${fact._id}`);
                      }}
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <center>
          <span className="text-muted display-6">
            no data found .. try refreshing again
          </span>
        </center>
      )}
      {addNewQuoteButtonVisible && (
        <Button
          variant="success"
          className="mt-3 btn-lg d-block"
          onClick={() => {
            addNewFactButtonClicked();
          }}
        >
          Add new Fact
        </Button>
      )}
      {addNewQuoteDivVisible && (
        <Form className="border border-1 border-grey p-4 rounded">
          <h5>add a new fact</h5>
          <Row className="my-4">
            <Col xs={6}>
              <Form.Control
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                placeholder="description"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={(e) => {
                  settitle(e.target.value);
                }}
                placeholder="title"
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="tags here"
                onChange={(e) => {
                  settags(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Form.Group controlId="formFile" className="mb-3">
              {/* <Form.Label>upload a image for this fact</Form.Label> */}
              <Form.Control
                type="file"
                onChange={(e) => {
                  saveFile(e);
                }}
              />
            </Form.Group>
          </Row>
          <Button
            variant="success"
            className="d-block"
            onClick={() => {
              addFactToDatabase();
            }}
          >
            Add Fact
          </Button>

          <Button
            variant="danger btn-sm"
            className="my-1 d-block"
            onClick={() => {
              closeThisDiv();
            }}
          >
            close
          </Button>
        </Form>
      )}
    </Container>
  );
}
