import React from "react";
import Alert from "react-bootstrap/Alert";

import { useState } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showFill, setShowFill] = useState(false);
  let navigate = useNavigate();

  const [showInvalid, setshowInvalid] = useState(false);
  function navigateToSignup() {
    navigate("/signup");
  }
  function goHome() {
    navigate("/");
  }
  async function Login() {
    console.log("now loggin in ");
    if (email != "" && password != "") {
      setShowFill(false);
      console.log("good to go");
      let payload = { email, password };
    
      
      let response = await axios.post(`${process.env.REACT_APP_API_KEY}/login`, {
        payload,
      });
      if (response.data.userFound) {
        setshowInvalid(false);
        console.log("use found");
      } else {
        console.log("no user found");
        setshowInvalid(true);
        setemail("");
        setpassword("");
      }
    } else {
      console.log("enter everything");
      setShowFill(true);
      setshowInvalid(false);
    }
  }
  return (
    <>
      <Container
        className="align-items-center d-flex justify-content-center flex-column "
        style={{ minHeight: "100vh" }}
      >
        <Row>
          <Col>
            <Form className="border border-grey py-5 px-3 mb-3 rounded shadow-lg w-100">
              <h2 className="my-4">Enter Credentials to login</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="h5">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="h5">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Button variant="primary" onClick={() => Login()}>
                Login
              </Button>

              {showFill && (
                <Alert
                  variant="danger"
                  className="mt-3"
                  onClose={() => setShowFill(false)}
                  dismissible
                >
                  {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
                  <p>Enter email and password</p>
                </Alert>
              )}
              {showInvalid && (
                <Alert
                  variant="danger"
                  className="mt-3"
                  onClose={() => setshowInvalid(false)}
                  dismissible
                >
                  {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
                  <p>credentials not found</p>
                </Alert>
              )}

              <span
                style={{ cursor: "pointer" }}
                className="text-primary d-block mt-3 align-left"
                onClick={() => {
                  navigateToSignup();
                }}
              >
                {" "}
                Create an account
              </span>
            </Form>

            <span
              className=" text-primary"
              onClick={() => {
                goHome();
              }}
            >
              Go to homepage
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}
