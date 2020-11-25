import React from 'react';
import { Container, Row, Col, TextInput } from 'react-materialize';

export default () => {
    return (
        <Container>
            <Row>
                <Col className="teal" s={12} m={3}>Categories</Col>
                <Col className="red" s={12} m={9}>Menu Items</Col>
            </Row>
        </Container>
    );
};