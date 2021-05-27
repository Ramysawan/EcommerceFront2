import React from "react";
// reactstrap components
import { Row, Col } from "reactstrap";

// core components

function SectionCards() {
  return (
    <>
      <div className="section section-cards section-gold">
        <div className="codrops-header">
          <Row>
            <Col lg="4" md="6">
              <div className="section-description">
                <h3 className="title">Our Products</h3>
                <h6 className="category">Highest Quality, Lowest Prices</h6>
                <h5 className="description">
                  All our products are brought from the highest quality
                  manufacturers, and in the same time, we offer the lowest
                  prices in the market for such a good quality.
                </h5>
              </div>
            </Col>
          </Row>
        </div>
        <section className="section-intro">
          <div className="isolayer isolayer--deco1 isolayer--shadow js">
            <ul className="grid grid--loaded">
              <li className="grid__item first-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={
                      require("assets/img/presentation-page/try/applewatch.png")
                        .default
                    }
                  />
                </a>
              </li>
              <li className="grid__item second-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={
                      require("assets/img/presentation-page/try/protection.jpg")
                        .default
                    }
                  />
                </a>
              </li>
              <li className="grid__item third-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={
                      require("assets/img/presentation-page/try/backcover.png")
                        .default
                    }
                  />
                </a>
              </li>
              <li className="grid__item fourth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={
                      require("assets/img/presentation-page/try/iphone.png")
                        .default
                    }
                  />
                </a>
              </li>
              <li className="grid__item fifth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={
                      require("assets/img/presentation-page/try/allprods.png")
                        .default
                    }
                  />
                </a>
              </li>
              {/* <li className="grid__item sixth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={
                      require("assets/img/presentation-page/try/bands.png")
                        .default
                    }
                  />
                </a>
              </li> */}
              <li className="grid__item seventh-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={
                      require("assets/img/presentation-page/try/airpods1.png")
                        .default
                    }
                  />
                </a>
              </li>
              <li className="grid__item eight-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={
                      require("assets/img/presentation-page/try/backcover.png")
                        .default
                    }
                  />
                </a>
              </li>
              <li className="grid__item ninth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={
                      require("assets/img/presentation-page/try/airpods.png")
                        .default
                    }
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default SectionCards;
