import React, { Component } from "react";
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
import UserService from "services/UserService";

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      loginPassword: "",
      email: "",
    };

    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser = (e) => {
    e.preventDefault();
    let user = {
      username: this.state.username,
      loginPassword: this.state.loginPassword,
      email: this.state.email,
    };
    console.log("user => " + JSON.stringify(user));
    if (
      this.state.username != "" &&
      this.state.loginPassword != "" &&
      this.state.email != ""
    ) {
      UserService.createUser(user).then((res) => {
        this.props.history.push("/login-page");
      });
    } else {
      alert("Enter all required informations");
    }
  };

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ loginPassword: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

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
                require("assets/img/sections/soroush-karimi.jpg").default +
                ")",
            }}
          >
            <div className="filter" />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Container>
              <Row>
                <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="fa fa-umbrella" />
                    </div>
                    <div className="description">
                      <h3>Join us</h3>
                      <p>
                        Create an account here in order to have the best
                        shopping experience
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon">
                      <i className="fa fa-user-secret" />
                    </div>
                    <div className="description">
                      <h3>We value your privacy</h3>
                      <p>
                        We guarantee full privacy and security for your personal
                        information.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                  <Card className="card-register">
                    <CardTitle className="text-center" tag="h3">
                      Register
                    </CardTitle>
                    <div className="division" />
                    <Form className="register-form">
                      <Input
                        placeholder="Username"
                        type="text"
                        value={this.state.username}
                        onChange={this.changeUsernameHandler}
                      />
                      <Input
                        placeholder="Email"
                        type="text"
                        value={this.state.email}
                        onChange={this.changeEmailHandler}
                      />
                      <Input
                        placeholder="Password"
                        type="password"
                        value={this.state.loginPassword}
                        onChange={this.changePasswordHandler}
                      />
                      <Input placeholder="Confirm Password" type="password" />
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        onClick={this.registerUser}
                      >
                        Register
                      </Button>
                    </Form>
                    <div className="login">
                      <p>
                        Already have an account?{" "}
                        <a href="/login-page">Log in</a>
                      </p>
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
}

export default RegisterPage;

// function RegisterPage() {
//   document.documentElement.classList.remove("nav-open");
//   React.useEffect(() => {
//     document.body.classList.add("register-page");
//     document.body.classList.add("full-screen");
//     window.scrollTo(0, 0);
//     document.body.scrollTop = 0;
//     return function cleanup() {
//       document.body.classList.remove("register-page");
//       document.body.classList.remove("full-screen");
//     };
//   });
//   return (
//     <>
//       <ColorNavbar />
//       <div className="wrapper">
//         <div
//           className="page-header"
//           style={{
//             backgroundImage:
//               "url(" +
//               require("assets/img/sections/soroush-karimi.jpg").default +
//               ")",
//           }}
//         >
//           <div className="filter" />
//           <Container>
//             <Row>
//               <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
//                 <div className="info info-horizontal">
//                   <div className="icon">
//                     <i className="fa fa-umbrella" />
//                   </div>
//                   <div className="description">
//                     <h3>Join us</h3>
//                     <p>
//                       Create an account here in order to have the best shopping
//                       experience
//                     </p>
//                   </div>
//                 </div>
//                 <div className="info info-horizontal">
//                   <div className="icon">
//                     <i className="fa fa-user-secret" />
//                   </div>
//                   <div className="description">
//                     <h3>We value your privacy</h3>
//                     <p>
//                       We guarantee full privacy and security for your personal
//                       information.
//                     </p>
//                   </div>
//                 </div>
//               </Col>
//               <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
//                 <Card className="card-register">
//                   <CardTitle className="text-center" tag="h3">
//                     Register
//                   </CardTitle>
//                   <div className="division" />
//                   <Form className="register-form">
//                     <Input placeholder="Username" type="text" />
//                     <Input placeholder="Email" type="text" />
//                     <Input placeholder="Password" type="password" />
//                     <Input placeholder="Confirm Password" type="password" />
//                     <Button block className="btn-round" color="default">
//                       Register
//                     </Button>
//                   </Form>
//                   <div className="login">
//                     <p>
//                       Already have an account?{" "}
//                       <a href="/login-page">
//                         Log in
//                       </a>
//                     </p>
//                   </div>
//                 </Card>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//         <FooterAboutUs />
//       </div>
//     </>
//   );
// }

// export default RegisterPage;
