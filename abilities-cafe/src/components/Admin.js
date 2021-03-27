import React, { useContext } from "react";
import { Redirect } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { Container } from "react-bootstrap";
import ProductForm from "./ProductForm";

const Admin = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <ProductForm />
    </Container>
  );
};

export default Admin;
