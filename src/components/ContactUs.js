import React from "react";
import { useState } from "react";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Navbar1 from "./Navbar1";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
export default function ContactUs() {
  const [email, setemail] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  // const [feedbackSentMsg, setFeedbackSentMsg] = useState(false);

  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);

  async function sendFeedbackFunction() {
    if (email != "" && title != "" && description != "") {
      setShow(false);
      console.log("ready to send feedback");
      let payload = { email, title, description };

      let response = await axios.post(
        `${process.env.REACT_APP_API_KEY}/create-feedback`,
        { payload }
      );

      if (response.data.feedbackAdded) {
        console.log("feedback added to database");
        setemail("");
        settitle("");
        setdescription("");
        setSent(true);
      } else {
        console.log("some error while adding feedback to database");
        setSent(false);
      }
    } else {
      setShow(true);
    }
  }
  return (
    <>
      <Navbar1 />
      <Container className="w-75  py-2">
        <h2 className="mb-5  rounded shadow-sm p-3">
          Send your feedback to us !{" "}
        </h2>
        <div>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 border border-light rounded "
            onChange={(e) => {
              setemail(e.target.value);
            }}
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="subject"
            className="mb-3 border border-light rounded "
            onChange={(e) => {
              settitle(e.target.value);
            }}
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              onChange={(e) => {
                setdescription(e.target.value);
              }}
              style={{ height: "250px" }}
              className="mb-5"
            />
          </FloatingLabel>
        </div>
        {sent && (
          <Alert variant="success" onClose={() => setSent(false)} dismissible>
            {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
            <p>feedback sent to developer</p>
          </Alert>
        )}
        {show && (
          <center>
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
              <p>Enter all the fields</p>
            </Alert>
          </center>
        )}
        <center>
          <Button
            variant="success"
            className="btn-lg rounded shadow-lg"
            onClick={() => {
              sendFeedbackFunction();
            }}
          >
            Send feedback
          </Button>
        </center>
      </Container>
    </>
  );
}
