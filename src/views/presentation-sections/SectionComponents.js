import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionComponents() {
  return (
    <>
      <div className="section section-components section-dark">
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={
                  require("assets/img/presentation-page/laptop-basic.png")
                    .default
                }
              />
              <img
                alt="..."
                className="table-img"
                src={
                  require("assets/img/presentation-page/phones1.png").default
                }
              />
              <img
                alt="..."
                className="share-btn-img"
                src={
                  require("assets/img/presentation-page/share-btn.png").default
                }
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src={
                  require("assets/img/presentation-page/watches1.png").default
                }
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={
                  require("assets/img/presentation-page/airpods5.png").default
                }
              />
              <img
                alt="..."
                className="social-img"
                src={
                  require("assets/img/presentation-page/social-row.png").default
                }
              />
              <img
                alt="..."
                className="pin-btn-img"
                src={
                  require("assets/img/presentation-page/pin-btn.png").default
                }
              />
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h3 className="title">For All Your Electronic Needs</h3>
              <h6 className="category">Phones & Laptops & Phone Accessories</h6>
              <h5 className="description">
                PhoneHub was made so you can find all your electronic needs in
                one place. From phones, earphones, smart watches, to laptops and
                gadget accessories.
              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SectionComponents;
