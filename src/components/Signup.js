import React from "react";
import axios from "axios";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
// import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showFill, setShowFill] = useState(false);

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  function saveFile(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(e.target.files[0].name);
  }

  let navigate = useNavigate();

  function goToLogin() {
    navigate("/login");
  }

  function goHome() {
    navigate("/");
  }

  async function signUpUser() {
    if (
      firstname != null &&
      firstname !== "" &&
      lastname != null &&
      lastname !== "" &&
      email != null &&
      email !== "" &&
      password != null &&
      password !== ""
    ) {
      console.log(firstname, lastname, email, password, file);
      console.log("good to hit request to the backend");
      const formdata = new FormData();
      formdata.append("file", file);
      formdata.append("fileName", fileName);
      formdata.append("firstname", firstname);
      formdata.append("lastname", lastname);
      formdata.append("email", email);
      formdata.append("password", password);

      let response = await axios.post(
        `${process.env.REACT_APP_API_KEY}/create-user`,
        formdata
      );
      if (response.data.userCreated) {
        console.log("user created successfully");
      }
      if (response.data.userAlreadyThere) {
        console.log("user account there already .. login instead");
      }
    } else {
      console.log("in else .. something not wrong");
      console.log(firstname, lastname, email, password, file);
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
            <Form className="border border-grey pb-5 px-3 mb-3 rounded shadow-lg w-100">
              <h3 className="my-3">Enter detadls to register</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="first name"
                  onChange={(e) => {
                    setfirstname(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="last name"
                  onChange={(e) => {
                    setlastname(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="my-3">
                <Form.Label>
                  <strong>Choose a image as your dp</strong>
                </Form.Label>
                <Form.Control
                  type="file"
                  placeholder="choose a file"
                  onChange={(e) => {
                    saveFile(e);
                  }}
                />
              </Form.Group>

              <Button
                variant="primary w-100 mt-3"
                onClick={() => {
                  signUpUser();
                }}
              >
                Create account
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

              <span
                style={{ cursor: "pointer" }}
                className="text-primary d-block mt-3 align-left"
                onClick={() => {
                  goToLogin();
                }}
              >
                {" "}
                Login
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
