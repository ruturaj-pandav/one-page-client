import React, { Component } from "react";
import Navbar1 from "./Navbar1.js";
import Navbar2 from "./Navbar2.js";
import AllQuotes from "./AllQuotes.js";
import QuoteOfTheDay from "./QuoteOfTheDay.js";
import QuotesAuthors from "./QuotesAuthors.js";
import QuotesByAuthors from "./QuotesByAuthors.js";
import TotalNoOfQuotes from "./TotalNoOfQuotes.js";
import axios from "axios";

import Footer from "./Footer.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Quotes extends Component {
  constructor() {
    super();
    this.state = {
      allQuotes: [],
      quotesNumber: 0,
      QuotesAuthors: [],
      randomQuote: [],
      author: "",
      showQuotesByAuthors: false,
    };
  }
  componentDidMount() {
    // console.log("quotes mouned");
    this.getAllQuotes();
    this.getUniqueAuthors();
  }
  showQuotesByAuthorFunction = (author) => {
   
    this.setState({ author: author });
    this.setState({ showQuotesByAuthors: true });
  };
  closeFunction = () => {
    console.log("close function getting called")
    this.setState({ showQuotesByAuthors: false });
    // this.state.showQuotesByAuthors =false ;
    console.log(this.state.showQuotesByAuthors)

  };
  getUniqueAuthors = async () => {


    let response = await axios.get(`${process.env.REACT_APP_API_KEY}/all-authors`);
    // let response = await axios.get("http://localhost:8000/all-authors");

    this.setState({ QuotesAuthors: response.data.authors });
  };
  getAllQuotes = async () => {
 
    let response = await axios.get(`${process.env.REACT_APP_API_KEY}/all-quotes`);
    // let response = await axios.get("http://localhost:8000/all-quotes");
    // let response = await axios.get("http://localhost:8000/all-quotes");

    this.setState({ allQuotes: response.data.quotes });
    this.setState({ quotesNumber: response.data.quotes.length });

    let random = Math.floor(
      Math.random() * (response.data.quotes.length - 0) + 0
    );
    this.setState({ randomQuote: response.data.quotes[random] });
  };
  render() {
    return (
      <>
        <Navbar1 />
       <Navbar2 />

       {this.state.quotesNumber > 0 ?<div>
        <Container className="p-5 ">
          <Row>
            <Col sm={9} className="">
              <QuoteOfTheDay quote={this.state.randomQuote} />
            </Col>
            <Col sm={3}>
              <TotalNoOfQuotes TotalNoOfQuotes={this.state.quotesNumber} />
            </Col>
          </Row>
        </Container>
        <Container className="px-5">
          <Row>
            <Col sm={8} className="">
              {this.state.showQuotesByAuthors===true ? <QuotesByAuthors  allQuotes ={this.state.allQuotes}  author = {this.state.author}  closeFunction = {this.closeFunction} /> : null}
              <AllQuotes allQuotes={this.state.allQuotes} />
            </Col>
            <Col sm={4}>
              <QuotesAuthors QuotesAuthors={this.state.QuotesAuthors} showQuotesByAuthorFunction = {this.showQuotesByAuthorFunction } />
              {/* <FactsTag  /> */}
            </Col>
          </Row>
        </Container>
        <Footer />
        </div>:<center><span className="display-6 d-block text-center my-5">nothing to show here ... try refreshing </span></center>}

       
        
          
      
      </>
    );
  }
}
