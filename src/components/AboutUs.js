import React from "react";
import Logo from "../images/logo.jpeg";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
import ContactUs from "./ContactUs";
export default function AboutUs() {
  return (
    <>
      <div id="aboutus">
        {/* <Navbar1/> */}
        {/* <div>
          <img src={Logo} alt="company logo" id="logoimage" />
        </div>
        <div id="aboutUsDescription">
          One Page as the name says is a one single platform where you can read
          various topics at the same place. OnePage provides latest news,
          knowledge about History, Finance, Politics and what not. Plus for
          traveling enthusiasts, we give information and glimpses of the
          beautiful tourist attractions all over the world. All this at one
          single place, this is OnePage
        </div> */}
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}
