import React from "react";
import moment from "moment";
import { useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
export default function AdminQuotes({
  allQuotes,
  viewQuote,
  editQuote,
  deleteQuote,
  quotesAuthors,
  addQuote,
}) {
  let navigate = useNavigate();
  const [addNewQuoteButtonVisible, setaddNewQuoteButtonVisible] =
    useState(true);
  const [addNewQuoteDivVisible, setaddNewQuoteDivVisible] = useState(false);
  const [newQuoteQuote, setNewQuoteQuote] = useState();
  const [newQuoteAuthor, setNewQuoteAuthor] = useState();

  let th = ["sr no", "quote", "author", "img" ,  "date",  "delete"];



  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  function saveFile(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(e.target.files[0].name);
  }


  function addNewQuoteButtonClicked() {
    setaddNewQuoteButtonVisible(false);
    setaddNewQuoteDivVisible(true);
  }

  function closeThisDiv() {
    setaddNewQuoteDivVisible(false);
    setaddNewQuoteButtonVisible(true);
  }

  function goToQuote() {
    navigate("/quotes");
  }
  async function addQuoteToDatabase() {
    console.log("cliked");
    let quote = newQuoteQuote;
    let author = newQuoteAuthor;

    if (quote != null && quote != "" && author != null && author != "") {
      addQuote(quote, author , file , fileName);
      setaddNewQuoteButtonVisible(true);
      setNewQuoteQuote("");
      setNewQuoteAuthor("");
      setaddNewQuoteDivVisible(false);
    }
  }

  const [showOption, setShowOption] = useState("all");
  if (showOption != "all") {
    allQuotes = allQuotes.filter((quote, index) => {
      return quote.author === showOption;
    });
  }
  // console.log("these are authors", quotesAuthors);
  return (
    <Container className="border border-grey p-5 mt-5 rounded shadow-lg">
      <h1 className="text-capitalize">quotes</h1>
      <span
        className=" text-sm  text-primary"
        style={{ cursor: "pointer" }}
        onClick={() => {
          goToQuote();
        }}
      >
        {" "}
        go to quotes
      </span>
      <Form className="my-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="search by text" />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          className="w-25"
          onChange={(e) => setShowOption(e.target.value)}
        >
          <option value="all" className="text-capitalize">All Authors</option>

          {quotesAuthors.map((author, index) => {
            return <option className="text-capitalize" value={author}> {author}</option>;
          })}
        </Form.Select>
      </Form>

      {allQuotes.length > 0 ? <Table striped bordered hover>
        <thead>
          <tr>
            {th.map((col, index) => {
              return <th>{col}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {allQuotes.map((quote, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  {parseInt(quote.quote.length) > 50
                    ? `${quote.quote.slice(0, 50)} ....`
                    : quote.quote}
                </td>

                <td>{quote.author}</td>
                <td>
                    {" "}
                    <img
                      width="200px"
                      height="100px"
                      src={quote.img}
                      alt="testimage"
                    />{" "}
                  </td>

                <td>{moment(quote.date).format("DD - MM - YYYY")}</td>
                {/* <td>
                  <Button
                    variant="success"
                    onClick={() => {
                      viewQuote(`${quote._id}`);
                    }}
                  >
                    view
                  </Button>
                </td> */}
                {/* <td>
                  <Button
                    variant="warning"
                    onClick={() => {
                      editQuote(`${quote._id}`);
                    }}
                  >
                    edit
                  </Button>
                </td> */}
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      deleteQuote(`${quote._id}`);
                    }}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>: <center><span className="text-muted display-6 ">no data found .. try refreshing the page</span></center>}

      {addNewQuoteButtonVisible && (
        <Button
          variant="success"
          className="my-3 btn-lg d-block"
          onClick={() => {
            addNewQuoteButtonClicked();
          }}
        >
          Add new quote
        </Button>
      )}

      {addNewQuoteDivVisible && (
        <Form className="border border-1 border-grey rounded p-3">
          <h5>add a new quote</h5>
          <Row className="my-4">
            <Col xs={9}>
              <Form.Control
                onChange={(e) => {
                  setNewQuoteQuote(e.target.value);
                }}
                placeholder="quote here"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={(e) => {
                  setNewQuoteAuthor(e.target.value);
                }}
                placeholder="author name"
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
              addQuoteToDatabase();
            }}
          >
            Add Quote
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
