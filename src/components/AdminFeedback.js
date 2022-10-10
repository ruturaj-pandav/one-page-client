import React from "react";
import moment from "moment";
import { useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function AdminQuotes({ allFeedback, deleteFeedback }) {

  let th = ["sr no " , "email " , "title " , "description " , "date" , "reply" , "delete"]
  //   const [addNewQuoteButtonVisible, setaddNewQuoteButtonVisible] =
  //     useState(true);
  //   const [addNewQuoteDivVisible, setaddNewQuoteDivVisible] = useState(false);
  //   const [newQuoteQuote, setNewQuoteQuote] = useState();
  //   const [newQuoteAuthor, setNewQuoteAuthor] = useState();

  //   function addNewQuoteButtonClicked() {
  //     setaddNewQuoteButtonVisible(false);
  //     setaddNewQuoteDivVisible(true);
  //   }

  //   function closeThisDiv() {
  //     setaddNewQuoteDivVisible(false);
  //     setaddNewQuoteButtonVisible(true);
  //   }
  //   async function addQuoteToDatabase() {
  //     console.log("cliked");
  //     let quote = newQuoteQuote;
  //     let author = newQuoteAuthor;

  //     if (quote != null && quote != "" && author != null && author != "") {
  //       addQuote(quote, author);
  //       setaddNewQuoteButtonVisible(true);
  //       setNewQuoteQuote("");
  //       setNewQuoteAuthor("");
  //       setaddNewQuoteDivVisible(false);
  //     }
  //   }

  function replyToFeedback() {}

  return (
    <Container className="border border-grey rounded p-5 mt-5 shadow-lg">
      <h1>feedbacks</h1>
      {/* <div id="filterDiv">
        <input type="text" placeholder="enter text to search" />
        <select
          name="filterByAuthors"
          id="filterByAuthors"
          onChange={(e) => {
            // authorChangeFunction(e.target.value)
          }}
        >
          <option value="all">all</option>
          {quotesAuthors.map((author, index) => {
            return <option value={author}>{author}</option>;
          })}
        </select>
      </div> */}

      {allFeedback.length > 0 ?<Table striped bordered hover>

<thead>
  <tr>
    {th.map((col, index) => {
      return <th>{col}</th>;
    })}
  </tr>
</thead>
<tbody>
  {allFeedback.map((feedback, index) => {
    return (
      <tr>
        <td>{index}</td>
        <td>{feedback.email}</td>
        <td>{feedback.title}</td>
        <td>
          {feedback.description.length > 30
            ? feedback.description.slice(0, 30)
            : feedback.description}
        </td>
        <td>{moment(feedback.date).format("DD - MM - YYYY")}</td>
        <td>
        
          <Button
            variant="warning"
            className="text-white"
            onClick={() => {
              replyToFeedback();
            }}
          >
            reply
          </Button>
        </td>
        <td>
          <Button
            variant="danger"
            onClick={() => {
              deleteFeedback(`${feedback._id}`);
            }}
          >
            delete
          </Button>
        </td>
      </tr>
    );
  })}
</tbody>
</Table> : <center><span className="text-muted display-6 ">no data found ... try refreshing again</span></center>}
    </Container>
  );
}
