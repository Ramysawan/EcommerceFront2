import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";

function LoginPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("full-screen");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/bruno-abatti.jpg").default +
              ")",
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4" md="6" sm="6">
                <Card className="card-register">
                  <CardTitle tag="h3">Welcome</CardTitle>
                  <Form className="register-form">
                    <label>Username</label>
                    <Input
                      className="no-border"
                      placeholder="Username"
                      type="text"
                    />
                    <label>Password</label>
                    <Input
                      className="no-border"
                      placeholder="Password"
                      type="password"
                    />
                    <Button block className="btn-round" color="danger">
                      Login
                    </Button>
                    <br />
                  </Form>
                  <div className="forgot">
                    <p>
                      No account?{" "}
                      <a href="/register-page" style={{ color: "white" }}>
                        Register now
                      </a>
                    </p>
                  </div>
                  <div className="forgot">
                    <Button
                      className="btn-link"
                      style={{ color: "white" }}
                      href="/reset-pass"
                    >
                      Forgot password?
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterAboutUs />
      </div>
    </>
  );
}

export default LoginPage;
