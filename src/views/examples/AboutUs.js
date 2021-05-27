import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

function AboutUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  });
  return (
    <>
      <ColorNavbar />
      <AboutUsHeader />
      <div className="main">
        <div className="section">
          <Container>
            <h3 className="title-uppercase">We sell great products.</h3>
            <p>We assure highest quality products.</p>
            <p>
              Directly imported from the best quality producers, our products
              will meet your highest expectations.
            </p>
            <h3 className="title-uppercase">
              We
              <i className="fa fa-heart heart mr-3 ml-1" />
              what we do.
            </h3>
            <p>
              This business is driver by passion as its founder has started
              PhoneHub when he was just 16 years old
            </p>
            <h2 className="text-center creators">Founder</h2>
            <Row>
              <Col>
                <Card className="card-profile card-plain">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          src={require("assets/img/faces/alimerhi.png").default}
                        />
                        <CardTitle tag="h4">Ali Merhi</CardTitle>
                      </a>
                    </div>
                    <p className="card-description text-center">
                      "Trust in your own product and you don't have to do any
                      effort to sell it." <br /> - Ali Merhi
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      color="linkedin"
                      href="https://www.linkedin.com/in/ali-merhi-87037314b/"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="instagram"
                      href="https://instagram.com/phonehub.lb?utm_medium=copy_link"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <h3 className="more-info">Need more information?</h3>
            <Row className="coloured-cards">
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <CardBody>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Contact us
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        If you have any questions, feel free to contact us by
                        clicking here and we will get back to you as soon as
                        possible.
                      </p>
                    </CardBody>
                  </Card>
                  {/* end card */}
                </div>
              </Col>
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="green"
                    data-radius="none"
                  >
                    <CardBody>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Pass By Our Shop
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Please do pass by our Shop and our employees will be
                        more than happy to answer any questions.
                      </p>
                    </CardBody>
                  </Card>
                  {/* end card */}
                </div>
              </Col>
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text"
                    data-background="color"
                    data-color="yellow"
                    data-radius="none"
                  >
                    <CardBody>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Give us a call
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Feel free to give us a call if you need more information
                        and our operator will answer all your questions :
                        +96170727050
                      </p>
                    </CardBody>
                  </Card>
                  {/* end card */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default AboutUs;
