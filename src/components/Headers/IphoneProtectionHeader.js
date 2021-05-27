import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IphoneProtectionHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/ecommerce/iphoneprotection.jpg").default +
            ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container className="text-center">
            <h1>Iphone Screen Protection</h1>
            <h3>
              Never worry about breaking your screen with our screen protection{" "}
            </h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IphoneProtectionHeader;
