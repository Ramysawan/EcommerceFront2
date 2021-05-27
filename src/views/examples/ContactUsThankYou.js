import React, { Component } from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";

class ContactUsThankYou extends Component {
  state = {};

  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper">
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/sections/gerrit-vermeulen.jpg").default +
                ")",
            }}
          >
            <div className="filter" />

            <Container style={{ marginTop: "13%" }}>
              <div className="text-center" style={{ marginBottom: "5%" }}>
                <h1>Thank you for contacting us</h1>
                <h4>Our Operators will get back to you as soon as possible.</h4>
              </div>
            </Container>
          </div>
        </div>
        <FooterAboutUs />
      </>
    );
  }
}

export default ContactUsThankYou;
