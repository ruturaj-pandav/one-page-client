import React, { Component } from "react";
import axios from "axios";
import AdminQuotes from "./AdminQuotes";
import AdminUsers from "./AdminUsers";
import AdminStats from "./AdminStats";
import AdminThisDayThatYear from "./AdminThisDayThatYear";
import Navbar2 from "./Navbar2";
import AdminFacts from "./AdminFacts";
import AdminFeedback from "./AdminFeedback";
import Container from "react-bootstrap/Container";

export default class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {
      allQuotes: [],
      quotesAuthors: [],
      factTags: [],
      allUsers: [],
      allFacts: [],
      allTDTY: [],
      tdtyNumber: 0,
      allFeedback: [],
      quotesNumber: 0,
      usersNumber: 0,
      feedbackNumber: 0,
      factsNumber: 0,
    };
  }
  viewQuote = async (id) => {};

  addTDTY = async (topic, description, date, file, fileName) => {
    const formdata = new FormData();
    formdata.append("topic", topic);
    formdata.append("description", description);
    formdata.append("date", date);
    formdata.append("file", file);
    formdata.append("fileName", fileName);

    console.log("in tdty add");
    console.log("topic ", topic);
    console.log("description ", description);

    let response = await axios.post(
      `${process.env.REACT_APP_API_KEY}/create-tdty`,
      formdata
    );
    if (response.data.tdtyCreated) {
      this.getAllTDTY();
    }
  };
  addQuote = async (quote, author, file, fileName) => {
    const formdata = new FormData();
    formdata.append("quote", quote);
    formdata.append("author", author);
    formdata.append("file", file);
    formdata.append("fileName", fileName);

    let response = await axios.post(
      `${process.env.REACT_APP_API_KEY}/create-quote`,
      formdata
    );
    if (response.data.quoteCreated) {
      this.getAllQuotes();
    }
  };

  addFact = async (title, desc, tags, file, fileName) => {
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("title", title);
    formdata.append("desc", desc);
    formdata.append("tags", tags);
    formdata.append("fileName", fileName);

    console.log("now  sending formdta to backend...");

    let response = await axios.post(
      `${process.env.REACT_APP_API_KEY}/create-fact`,
      formdata
    );
    if (response.data.factCreated) {
      this.getAllFacts();
    }
  };
  deleteFeedback = async (id) => {
    let response = await axios.delete(
      `${process.env.REACT_APP_API_KEY}/delete-feedback/${id}`
    );
    if (response.data.feedback_deleted) {
      this.getAllFeedback();
    }
  };

  deleteQuote = async (id) => {
    let response = await axios.delete(
      `${process.env.REACT_APP_API_KEY}/delete-quote/${id}`
    );
    if (response.data.quote_deleted) {
      this.getAllQuotes();
    }
  };
  deleteFact = async (id) => {
    console.log("delet efact");

    let response = await axios.delete(
      `${process.env.REACT_APP_API_KEY}/delete-fact/${id}`
    );
    if (response.data.fact_deleted) {
      this.getAllFacts();
    }
  };
  deleteTDTY = async (id) => {
    console.log("deleting tdty with id ", id);

    let response = await axios.delete(
      `${process.env.REACT_APP_API_KEY}/delete-tdty/${id}`
    );
    if (response.data.tdty_deleted) {
      this.getAllTDTY();
    }
  };
  editQuote = async (id) => {
    console.log("edit ", id);
  };
  getAllQuotes = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_API_KEY}/all-quotes`
    );

    this.setState({ allQuotes: response.data.quotes });
    this.setState({ quotesNumber: response.data.quotes.length });
    this.setState({ quotesAuthors: response.data.authors });
  };

  getAllTDTY = async () => {
    console.log("now trying to get all tdty");
    let response = await axios.get(`${process.env.REACT_APP_API_KEY}/all-tdty`);

    this.setState({ allTDTY: response.data.tdty });
    this.setState({ tdtyNumber: response.data.tdty.length });
  };
  getAllFacts = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_API_KEY}/all-facts`
    );
    // let response = await axios.get("http://localhost:8000/all-facts");

    this.setState({ allFacts: response.data.facts });
    this.setState({ factsNumber: response.data.facts.length });
    this.setState({ factTags: response.data.tags });
    // this.setState({ quotesAuthors: response.data.authors });
  };

  getAllUsers = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_API_KEY}/all-users`
    );

    if (response) {
      this.setState({ allUsers: response.data.user });
      this.setState({ usersNumber: response.data.user.length });
    }
  };
  getAllFeedback = async () => {
    let response = await axios.get(
      `${process.env.REACT_APP_API_KEY}/all-feedback`
    );
    // let response = await axios.get("http://localhost:8000/all-feedback");

    if (response) {
      // console.log(response.data.feedback.length)
      this.setState({ allFeedback: response.data.feedback });
      this.setState({ feedbackNumber: response.data.feedbacks });
    }
  };
  componentDidMount = () => {
    this.getAllQuotes();
    this.getAllFacts();
    this.getAllFeedback();
    this.getAllUsers();
    this.getAllTDTY();
  };
  render() {
    return (
      <Container className="py-5 bg-light">
        <Navbar2 />
        <AdminStats
          quotesNumber={this.state.quotesNumber}
          factsNumber={this.state.factsNumber}
          usersNumber={this.state.usersNumber}
          feedbackNumber={this.state.feedbackNumber}
        />
        <div>
          <AdminQuotes
            allQuotes={this.state.allQuotes}
            viewQuote={this.viewQuote}
            deleteQuote={this.deleteQuote}
            addQuote={this.addQuote}
            editQuote={this.editQuote}
            quotesAuthors={this.state.quotesAuthors}
            testtext="testtext"
          />
          <AdminFacts
            factTags={this.state.factTags}
            allFacts={this.state.allFacts}
            viewQuote={this.viewQuote}
            deleteFact={this.deleteFact}
            addFact={this.addFact}
            editQuote={this.editQuote}
            quotesAuthors={this.state.quotesAuthors}
          />
          <AdminUsers allUsers={this.state.allUsers} />
          <AdminThisDayThatYear
            allTDTY={this.state.allTDTY}
            addTDTY={this.addTDTY}
            deleteTDTY={this.deleteTDTY}
            tdtyNumber={this.state.tdtyNumber}
          />
          <AdminFeedback
            allFeedback={this.state.allFeedback}
            deleteFeedback={this.deleteFeedback}
          />
        </div>
        {/* <Footer/> */}
      </Container>
    );
  }
}
