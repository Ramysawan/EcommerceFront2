import React from "react";
import Select from 'react-select';
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
  UncontrolledTooltip,
} from "reactstrap";

// core components

import ImageUpload from "components/CustomUpload/ImageUpload.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";
import DangerNavbar from "components/Navbars/DangerNavbar";


function EditCategory() {
  const [categories, setCategories] = React.useState(["Food", " Drink"]);
  const [vTabs, setVTabs] = React.useState("1");
  const dataCategory = [
    { label: "Mobile", value: 1},
    { label: "Laptops", value: 2},
    { label: "Accessories", value: 3}
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      
      color: state.isSelected ? 'black' : 'black',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, transition };
    }
  }
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("product-management");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("product-management");
    };
  });
  
  return (
    <>
      <DangerNavbar />
      <Container className="tim-container">
        <div id="description-areas" style={{marginTop:"10%"}}>
          <Row>
            <Col md="12" sm="12">
              <Container>
                <div>
                  <Row>
                    <Col md="12" sm="12">
                      <FormGroup>
                        <h6>
                          Title <span className="icon-danger">*</span>
                        </h6>
                        <Input
                          className="border-input"
                          placeholder="Category title"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" sm="12">
                      <FormGroup>
                        <h6>
                          Parent Category <span className="icon-danger">*</span>
                        </h6>
                        <Select 
                          placeholder={'Parent Category'}
                          options={dataCategory}
                          styles={customStyles} 
                        /> 
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12" sm="12">
                      <FormGroup>
                        <h6>
                          Description <span className="icon-danger">*</span>
                        </h6>
                        <Input
                          className="textarea-limited"
                          maxLength="150"
                          placeholder="This is a textarea limited to 150 characters."
                          rows="8"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="buttons-row" style={{marginTop:"4%"}}>
                    <Col md="6" sm="6">
                      <Button
                        block
                        className="btn-round"
                        color="danger"
                        outline
                        type="reset"
                      >
                        Cancel
                      </Button>
                    </Col>
                    <Col md="6" sm="6">
                      <Button
                        block
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Save
                      </Button>
                    </Col>
                    </Row>
                </div>
              </Container>
            </Col>
          </Row>
        </div>
        </Container>

      <div className="main">
        <div className="section">
          
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default EditCategory;
