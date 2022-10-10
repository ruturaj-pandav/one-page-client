import React, { Component } from "react";
import Navbar1 from "./Navbar1.js";
import Navbar2 from "./Navbar2.js";
import AllFacts from "./AllFacts.js";
import AllTDTY from "./AllTDTY.js";
import FactOfTheDay from "./FactOfTheDay.js";
import TotalNoOfFacts from "./TotalNoOfFacts.js";
import TDTYToday from "./TDTYToday.js";
import TDTYNumber from "./TDTYNumber.js";
import FactsByTag from "./FactsByTag.js";
import Footer from "./Footer.js";
import FactsTag from "./FactsTag.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";
export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      allTDTY: [],
      TDTYNumber: 0
      
    };
  }
  componentDidMount() {
    console.log("trying to get ttdy facts")
    this.getAllTDTY();
  
  }
  
  

  

  getAllTDTY = async () => {
    let response = await axios.get(`${process.env.REACT_APP_API_KEY}/all-tdty`);
    this.setState({ allTDTY: response.data.tdty });
    this.setState({ TDTYNumber: response.data.tdtyl });
    
    
  };

  // ///////////////
  render() {
    return (
      <>
        <Navbar1 />
        <Navbar2 />
        {this.state.TDTYNumber >= 0 ? (
          <div>
            <Container className="py-5">
              <Row>
                <Col sm={12} className="">
                  <TDTYToday allTDTY={this.state.allTDTY} />
                  {/* <FactOfTheDay fact={this.state.randomFact} /> */}
                </Col>
                {/* <Col sm={3}>
                  <TDTYNumber TDTYNumber={this.state.TDTYNumber} />
                </Col> */}
              </Row>
            </Container>
            <Container className="   py-4">
              <Row>
                <Col sm={12} className="">
                  {/* {this.state.showFactsByTag === true ? (
                    <FactsByTag
                      closeFunction={this.closeFunction}
                      allFacts={this.state.allFacts}
                      tag={this.state.tag}
                    />
                  ) : null} */}
                  <AllTDTY allTDTY={this.state.allTDTY} />
                </Col>
                {/* <Col sm={4}>
                  <FactsTag
                    tags={this.state.tags}
                    showFactsByTagFunction={this.showFactsByTagFunction}
                  />
                </Col> */}
              </Row>
            </Container>
            <Footer />
          </div>
        ) : (
          <center>
            <span className="display-6 d-block text-center my-5">
              nothing to show here ... try refreshing{" "}
            </span>
          </center>
        )}
      </>
    );
  }
}
