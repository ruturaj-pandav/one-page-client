import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import logo from "../images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
export default function Navbar1() {
  let navigate = useNavigate();
  function handleNavigate(page) {
    navigate(`/${page}`);
  }
  return (
    <Container>
      <Navbar bg="white" expand={"md"} className=" rounded">
        <Container fluid>
          <Navbar.Brand
            onClick={() => {
              handleNavigate("/");
            }}
          >
            <img src={logo} height="50px" width="50px" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  onClick={() => {
                    handleNavigate("");
                  }}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  onClick={() => {
                    handleNavigate("about-us");
                  }}
                >
                  About us
                </Nav.Link>
                <Nav.Link
                  onClick={() => {
                    handleNavigate("contact-us");
                  }}
                >
                  Contact us
                </Nav.Link>
              </Nav>

              {/* <Button
                variant="success"
                className="px-3 mx-1"
                onClick={() => {
                  handleNavigate("login");
                }}
              >
                Login
              </Button>
              <Button
                variant="grey "
                className="px-3 mx-1 btn-outline-success"
                onClick={() => {
                  handleNavigate("signup");
                }}
              >
                Sign up
              </Button> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Container>
    // <div id="navbar1">
    //   <div>
    //     <div id="logoDiv">logo</div>
    //     <div id="contentsDiv">
    //       <span onClick={() =>{
    //         handleNavigate("")
    //       }}>home</span>
    //       <span onClick={() =>{
    //         handleNavigate("about-us")
    //       }}>about us</span>
    //       <span onClick={() =>{
    //         handleNavigate("contact-us")
    //       }}>contact us</span>
    //       <span onClick={() =>{
    //         handleNavigate("discover")
    //       }}>discover</span>
    //     </div>
    //     <div id="buttonsDiv">
    //       <button id="loginButton">login</button>
    //       <button id="registerButton">register</button>
    //     </div>
    //   </div>
    // </div>
  );
}
