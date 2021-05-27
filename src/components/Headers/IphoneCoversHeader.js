import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IphoneCoversHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/ecommerce/iphonecovers.jpg").default +
            ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container className="text-center">
            <h1>Iphone Covers</h1>
            <h3>A range of the highest quality covers </h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IphoneCoversHeader;
