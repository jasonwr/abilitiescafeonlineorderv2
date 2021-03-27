import React from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import useProductForm from "../hooks/useProductForm";
import validateProductForm from "../validateProductForm";

// TODO: eventually this is going to be used as an edit form too.
// TODO: display errors
const ProductForm = () => {
  const { handleChange, handleSubmit, values, errors } = useProductForm(
    validateProductForm
  );

  return (
    <Card
      bg="light"
      text="dark"
      className="d-flex w-100"
      style={{ maxWidth: "400px" }}
    >
      <Card.Body>
        <Card.Title>Add a new product</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ex: Coffee"
              onChange={handleChange}
              name="name"
              value={values.name}
              required
            />
          </Form.Group>
          <Form.Group controlId="type">
            <Form.Label>Type of product</Form.Label>
            <Form.Control
              as="select"
              onChange={handleChange}
              name="type"
              value={values.type}
            >
              <option>Choose...</option>
              <option>Food</option>
              <option>Drink</option>
              <option>Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Write a short description about the product"
              onChange={handleChange}
              name="description"
              value={values.description}
              required
            />
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>Product price (in USD)</Form.Label>
            <Form.Control
              type="number"
              placeholder="$"
              onChange={handleChange}
              name="price"
              value={values.price}
              required
            />
          </Form.Group>
          {errors && errors.price && (
            <Alert variant="danger">{errors.price}</Alert>
          )}
          <Form.Group>
            <Form.File
              id="image"
              label="Product Image"
              onChange={handleChange}
              name="image"
              required
            />
          </Form.Group>
          {errors.file && <Alert variant="danger">{errors.file}</Alert>}
          <div className="d-flex flex-column align-items-center justify-content-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ProductForm;
