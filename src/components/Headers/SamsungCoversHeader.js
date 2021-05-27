import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function SamsungCoversHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/ecommerce/samsungcovers.jpg").default +
            ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container className="text-center">
            <h1>Samsung Covers</h1>
            <h3>A range of the highest quality covers </h3>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SamsungCoversHeader;
