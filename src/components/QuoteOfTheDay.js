import React from "react";
import Card from 'react-bootstrap/Card';

export default function QuoteOfTheDay({ quote }) {
 
  return (

    <Card>
      <Card.Header><h2>Quote of the day</h2> </Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
      
          {quote.quote}
          </p>
          <footer className="blockquote-footer">
             <cite title="Source Title" className="capitalize"> {quote.author}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    // <div id="quoteOfTheDay">
    //   <h1>QUOTE OF THE DAY</h1>
    //   <span id="quoteOfTheDay_quote">{quote.quote}</span>

    //   <span id="quoteOfTheDay_author">{quote.author}</span>

    //   {/* <span id="factOfTheDay_tags">
    //     <strong>
    //       {" "}
    //       {fact.tags.map((tag, index) => {
    //         return <span id="factOfTheDay_individualTag">#{tag} </span>;
    //       })}
    //     </strong>
    //   </span> */}
    // </div>
  );
}
