import React from "react";
import Select from "react-select";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
} from "reactstrap";

// core components

import ImageUpload from "components/CustomUpload/ImageUpload.js";
import FooterAboutUs from "components/Footers/FooterAboutUs";
import DangerNavbar from "components/Navbars/DangerNavbar";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";

function BrandManagement() {
  const [categories, setCategories] = React.useState(["Food", " Drink"]);
  const [vTabs, setVTabs] = React.useState("1");
  const dataCategory = [
    { label: "Mobile", value: 1 },
    { label: "Laptops", value: 2 },
    { label: "Accessories", value: 3 },
  ];
  const dataBrand = [
    { label: "Apple", value: 1 },
    { label: "Samsung", value: 2 },
  ];
  const dataVendor = [
    { label: "Ali Fakih", value: 1 },
    { label: "Ramy Sawan", value: 2 },
  ];
  const dataSize = [
    { label: "5'", value: 1 },
    { label: "7.5'", value: 2 },
  ];
  const dataColor = [
    { label: "Black", value: 1 },
    { label: "White", value: 2 },
    { label: "Red", value: 3 },
  ];
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const customStyles = {
    option: (provided, state) => ({
      ...provided,

      color: state.isSelected ? "black" : "black",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...provided, opacity, transition };
    },
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("brand-management");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("brand-management");
    };
  });

  return (
    <>
      <DangerNavbar />
      <Container className="tim-container">
        <div id="description-areas" style={{ marginTop: "10%" }}>
          <Row>
            <Col md="12" sm="12">
              <h4>
                <small>Brand Management</small>
              </h4>
              <Row>
                <Col md="3" sm="4" xs="6">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <Nav
                        className="flex-column nav-stacked"
                        role="tablist"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={vTabs === "1" ? "active" : ""}
                            onClick={() => {
                              setVTabs("1");
                            }}
                          >
                            New brand
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "2" ? "active" : ""}
                            onClick={() => {
                              setVTabs("2");
                            }}
                          >
                            Edit brand
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "3" ? "active" : ""}
                            onClick={() => {
                              setVTabs("3");
                            }}
                          >
                            Delete brand
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={vTabs === "4" ? "active" : ""}
                            onClick={() => {
                              setVTabs("4");
                            }}
                          >
                            View brand
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                </Col>
                <Col md="9" sm="8" xs="6">
                  <TabContent activeTab={"vTabs" + vTabs}>
                    {/* Add Section */}
                    <TabPane tabId="vTabs1">
                      <Container>
                        <div>
                          <Row>
                            <Col md="5" sm="5">
                              <h6>Brand Image</h6>
                              <ImageUpload />
                            </Col>
                            <Col md="7" sm="7">
                              <FormGroup>
                                <h6>
                                  Name <span className="icon-danger">*</span>
                                </h6>
                                <Input
                                  className="border-input"
                                  placeholder="Brand name..."
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row
                            className="buttons-row"
                            style={{ marginTop: "4%" }}
                          >
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
                    </TabPane>

                    {/* Edit Section */}
                    <TabPane tabId="vTabs2">
                      <Container>
                        <Table responsive striped>
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th className="text-center">Brand Name</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center">1</td>
                              <td className="text-center">Brand 1</td>
                              <td className="td-actions text-center">
                                <Button
                                  className="btn-link mr-1"
                                  color="info"
                                  data-toggle="tooltip"
                                  id="tooltip542628903"
                                  size="sm"
                                  type="button"
                                  href="/edit-brand"
                                >
                                  <i className="fa fa-edit" />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">2</td>
                              <td className="text-center">Brand 2</td>
                              <td className="td-actions text-center">
                                <Button
                                  className="btn-link mr-1"
                                  color="info"
                                  data-toggle="tooltip"
                                  id="tooltip542628903"
                                  size="sm"
                                  type="button"
                                  href="/edit-brand"
                                >
                                  <i className="fa fa-edit" />
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Container>
                    </TabPane>

                    {/* Delete Section */}
                    <TabPane tabId="vTabs3">
                      <Container>
                        <Table responsive striped>
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th />
                              <th className="text-center">Brand Name</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center">1</td>
                              <td>
                                <FormGroup check>
                                  <Label check>
                                    <Input defaultValue="" type="checkbox" />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              </td>
                              <td className="text-center">Brand 1</td>
                              <td className="td-actions text-center">
                                <Button
                                  className="btn-link mr-1"
                                  color="danger"
                                  data-toggle="tooltip"
                                  id="tooltip542628903"
                                  size="sm"
                                  type="button"
                                  onClick={handleClickOpen}
                                >
                                  <i className="fa fa-remove" />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">2</td>
                              <td>
                                <FormGroup check>
                                  <Label check>
                                    <Input
                                      defaultChecked
                                      defaultValue=""
                                      type="checkbox"
                                    />
                                    <span className="form-check-sign" />
                                  </Label>
                                </FormGroup>
                              </td>
                              <td className="text-center">Brand 2</td>
                              <td className="td-actions text-center">
                                <Button
                                  className="btn-link mr-1"
                                  color="danger"
                                  data-toggle="tooltip"
                                  id="tooltip542628903"
                                  size="sm"
                                  type="button"
                                  onClick={handleClickOpen}
                                >
                                  <i className="fa fa-remove" />
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                        <Button
                          color="danger"
                          outline
                          type="button"
                          className="mr-1"
                          onClick={handleClickOpen}
                        >
                          Delete selected brand
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>Delete Brand ?</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Are you sure you want to delete selected brand
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              onClick={handleClose}
                              color="default"
                              autoFocus
                            >
                              Cancel
                            </Button>
                            <Button onClick={handleClose} color="danger">
                              Delete
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </Container>
                    </TabPane>

                    {/* View Section */}
                    <TabPane tabId="vTabs4">
                      <Container>
                        <Table responsive striped>
                          <thead>
                            <tr>
                              <th className="text-center">#</th>
                              <th className="text-center">Brand Name</th>
                              <th className="text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="text-center">1</td>
                              <td className="text-center">Brand 1</td>
                              <td className="td-actions text-center">
                                <Button
                                  className="btn-link mr-1"
                                  color="info"
                                  data-toggle="tooltip"
                                  id="tooltip542628903"
                                  size="sm"
                                  type="button"
                                  href="/view-brand"
                                >
                                  <i className="fa fa-eye" />
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td className="text-center">2</td>
                              <td className="text-center">Brand 2</td>
                              <td className="td-actions text-center">
                                <Button
                                  className="btn-link mr-1"
                                  color="info"
                                  data-toggle="tooltip"
                                  id="tooltip542628903"
                                  size="sm"
                                  type="button"
                                  href="/view-brand"
                                >
                                  <i className="fa fa-eye" />
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Container>
                    </TabPane>
                  </TabContent>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="main">
        <div className="section"></div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default BrandManagement;
