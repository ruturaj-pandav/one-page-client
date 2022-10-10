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

export default function AdminThisDayThatYear({
  allTDTY,
  addTDTY,
  deleteTDTY,
  tdtyNumber,
}) {
  let navigate = useNavigate();

  const [addNewQuoteButtonVisible, setaddNewFactButtonVisible] = useState(true);
  const [addNewQuoteDivVisible, setaddNewFactDivVisible] = useState(false);

  const [description, setdescription] = useState();
  const [date, setdate] = useState();
  const [topic, settopic] = useState();
  let th = ["sr no", "desc", "image", "date", "delete"];
  // let th = ["sr no", "title", "fact", "image" ,  "tags", "date", "view", "delete"];

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  function saveFile(e) {
    setFile(e.target.files[0]);
    
    setFileName(e.target.files[0].name);
   
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
  async function addTDTYtoDatabase() {
    console.log("cliked");

    if (
      description != null &&
      description != "" &&
      date != null &&
      date != ""
    ) {
      //   const formdata = new FormData();
      // formdata.append("file", file);
      // formdata.append("fileName", fileName);

      console.log("description and date ", description, date);
      addTDTY(topic, description, date, file, fileName);
      setaddNewFactButtonVisible(true);
      setdescription("");
      setdate("");

      setaddNewFactDivVisible(false);
    }
  }

  function goToTDTY() {
    navigate("/this-day-that-year");
  }
  const [showOption, setShowOption] = useState("all");
  if (showOption != "all") {
    allTDTY = allTDTY.filter((fact, index) => {
      // return quote.author === showOption;
      // let tagt = tag.toLowerCase();
      let result = fact.tags.includes(showOption);
      return result;
    });
  }

  return (
    <Container className="border border-grey p-5 rounded my-5 shadow-lg">
      <h1>This Day that year</h1>
      <span
        className=" text-sm  text-primary"
        style={{ cursor: "pointer" }}
        onClick={() => {
          goToTDTY();
        }}
      >
        {" "}
        go to this-day-that-year
      </span>
      <Form className="my-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="search by text" />
        </Form.Group>
        {/* <Form.Select
          aria-label="Default select example"
          className="w-25"
          onChange={(e) => setShowOption(e.target.value)}
        >
          <option value="all">All tags</option>

          {factTags.map((tag, index) => {
            return <option value={tag}> {tag}</option>;
          })}
        </Form.Select> */}
      </Form>

      {allTDTY.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              {th.map((col, index) => {
                return <th>{col}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {allTDTY.map((fact, index) => {
              {
                console.log(fact.img);
              }
              return (
                <tr>
                  <td>{index + 1}</td>
                  

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
                  {/* <td>
                    <strong>
                      {fact.tags.map((tag, index) => {
                        return <>#{tag} </>;
                      })}
                    </strong>
                  </td> */}

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
                        deleteTDTY(`${fact._id}`);
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
          Add new event
        </Button>
      )}
      {addNewQuoteDivVisible && (
        <Form className="border border-1 border-grey p-4 rounded">
          <h5>add a new event</h5>
          <Row className="my-4">
            <Col xs={9}>
              <Form.Control
                onChange={(e) => {
                  settopic(e.target.value);
                }}
                placeholder="enter topic here"
              />
            </Col>
            <Col>
              <Form.Control
                type="date"
                onChange={(e) => {
                  setdate(e.target.value);
                }}
                placeholder="title"
              />
            </Col>
          </Row>
          <Row>
            <Form.Group controlId="formFile" className="mb-3">
              {/* <Form.Label>upload a image for this fact</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="enter description here"
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
            </Form.Group>
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
              addTDTYtoDatabase();
            }}
          >
            Add Event
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
