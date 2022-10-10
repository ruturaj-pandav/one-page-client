import React, { Component } from "react";
import Navbar1 from "./Navbar1.js";
import Navbar2 from "./Navbar2.js";
import AllFacts from "./AllFacts.js";
import FactOfTheDay from "./FactOfTheDay.js";
import TotalNoOfFacts from "./TotalNoOfFacts.js";
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
      allFacts: [],
      factsNumber: 0,
      randomFact: [],
      tags: [],
      showFactsByTag: false,
      tag: "",
    };
  }
  componentDidMount() {
    console.log("facts mouned");
    this.getAllFacts();
    this.getTags();
  }
  showFactsByTagFunction = (tag) => {
    this.setState({ tag: tag });
    this.setState({ showFactsByTag: true });
  };
  getTags = async () => {
  
    let response = await axios.get(`${process.env.REACT_APP_API_KEY}/all-tags`);

    this.setState({ tags: response.data.tags });
  };

  //
  closeFunction = () => {
    console.log("close function for facts getting called");
    this.setState({ showFactsByTag: false });
  };

  getAllFacts = async () => {

    let response = await axios.get(`${process.env.REACT_APP_API_KEY}/all-facts`);

    this.setState({ allFacts: response.data.facts });
    this.setState({ factsNumber: response.data.facts.length });

    let random = Math.floor(
      Math.random() * (response.data.facts.length - 0) + 0
    );
    this.setState({ randomFact: response.data.facts[random] });
  };

  // ///////////////
  render() {
    return (
      <>
        <Navbar1 />
        <Navbar2 />
        {this.state.factsNumber > 0 ? (
          <div>
            <Container className="p-5">
              <Row>
                <Col sm={9} className="">
                  <FactOfTheDay fact={this.state.randomFact} />
                </Col>
                <Col sm={3}>
                  <TotalNoOfFacts TotalNoOfFacts={this.state.factsNumber} />
                </Col>
              </Row>
            </Container>
            <Container className="px-5   py-4">
              <Row>
                <Col sm={8} className="">
                  {this.state.showFactsByTag === true ? (
                    <FactsByTag
                      closeFunction={this.closeFunction}
                      allFacts={this.state.allFacts}
                      tag={this.state.tag}
                    />
                  ) : null}
                  <AllFacts allFacts={this.state.allFacts} />
                </Col>
                <Col sm={4}>
                  <FactsTag
                    tags={this.state.tags}
                    showFactsByTagFunction={this.showFactsByTagFunction}
                  />
                </Col>
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
