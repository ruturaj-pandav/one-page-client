import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
export default function Navbar2() {
  let navigate = useNavigate();


  let links = [  "Quotes", "Facts"  , "This day that year" , "Admin"]
  let linksnavigate = [  "quotes", "facts"  , "this-day-that-year" , "admin-dashboard"]
  // let links = ["news" , "sports", "finance" , "politics","history", "travel", "geography" , "quotes", "facts"]

  function handleNavigate(page) {
    navigate(`/${page}`);
  }
  return (
 <Container>   <Nav
 className="justify-content-center bg-dark text-white py-2 my-3 rounded"
 activeKey="/home"
>

 {links.map((link, index) => {
   return (
     <Nav.Item>
   <Nav.Link
     className="text-white"
     onClick={() => {
       handleNavigate(linksnavigate[index]);
     }}
   >
     {link}
   </Nav.Link>
 </Nav.Item>
   )
 })}
 

 
</Nav></Container>
    // <div id="navbar2">
    //   <div>
    //     <span
    //       onClick={() => {
    //         handleNavigate("news");
    //       }}
    //     >
    //       news
    //     </span>
    //     <span
    //       onClick={() => {
    //         handleNavigate("history");
    //       }}
    //     >
    //       history
    //     </span>
    //     <span>on this day</span>
    //     <span
    //       onClick={() => {
    //         handleNavigate("travel");
    //       }}
    //     >
    //       travel
    //     </span>
    //     <span  onClick={() => {
    //         handleNavigate("sports");
    //       }}>sports</span>
    //     <span
    //       onClick={() => {
    //         handleNavigate("finance");
    //       }}
    //     >
    //       finance
    //     </span>
    //     <span  onClick={() => {
    //         handleNavigate("quotes");
    //       }}>quotes</span>
    //     <span  onClick={() => {
    //         handleNavigate("facts");
    //       }}>facts</span>
    //   </div>
    // </div>
  );
}
