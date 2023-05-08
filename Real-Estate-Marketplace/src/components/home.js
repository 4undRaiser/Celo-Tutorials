import React, { useState } from "react";

import {
  Button,
  Modal,
  Form,
  FloatingLabel,
  Nav,
  Badge,
  Container,
  Navbar,
} from "react-bootstrap";

const Home = (props) => {
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");


  const isFormFilled = () => image && location && price;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Real Estate Marketplace</Navbar.Brand>
          <Navbar.Toggle />
          <Nav className="me-auto">
            <Badge bg="secondary" className="ms-auto">
              Balance {props.cUSDBalance}cUSD
            </Badge>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow} variant="dark">
              <h5> New Property </h5>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Property</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <FloatingLabel
              controlId="inputImage"
              label="Image"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setImage(e.target.value);
                }}
                placeholder="Image"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="inputLocation"
              label="location"
              className="mb-3"
            >
              <Form.Control
                type="text"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                placeholder="Enter Location"
              />
            </FloatingLabel>


            <FloatingLabel controlId="inputPrice" label="price" className="mb-3">
              <Form.Control
                type="number"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                placeholder="Enter price"
              />
            </FloatingLabel>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="dark"
            disabled={!isFormFilled()}
            onClick={() => {
              props.addProperty(image, location, price);
              handleClose();
            }}
          >
            Add new property
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
