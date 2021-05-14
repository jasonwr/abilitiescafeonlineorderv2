import React, { useState } from 'react';
import { Container, Row, Col } from 'react-materialize';

export default () => {

    // testing array that will contain products before we stablish online conectivity
    const [products] = useState([
    {
        name: "Cookies",
        price: "$3.00",
        image: "test_images/cookie.jpg",
        description: "Cookies.  Need I say more?",
        double_price: 3.0
    },
    {
        name: "Sandwich",
        price: "$10.00",
        image: "test_images/Sandwich.jpg",
        description: "Artisan sandwiches",
        double_price: 10.0
    },
    {
        name: "Coffee",
        price: "$4.00",
        image: "test_images/Coffee.jpg",
        description: "Coffee, available in 'for here' and 'to go' cups",
        double_price: 4.0
    },
    {
        name: "Scones",
        price: "$5.50",
        image: "test_images/Scone.jpg",
        description: "Housemade scones",
        double_price: 5.50
    },
 ]);

// function to display products based on Daniel's code

    return (
        <Container>
            <Row>
                <Col className="categories" s={12} m={3}>Holder text</Col>
                <Col s={12} m={9}>
                    <div className="products">
                        {products.map((product, idx) => (
                            <div className="holder">
                                <div className="product" key={idx}>
                                    <img src ={require("./" + product.image)} alt={product.name}></img>
                                    {/*
                                    The following will be used when the back end is set
                                    <img src ={product.image} alt={product.name}></img>
                                    <p> {product.description} </p> -> add a feature to display this
                                    Note: add feature to customize your coffee
                                    */}
                                    <p> {product.name} </p>
                                    <span>
                                        <button class="button" height = "20px">Add to cart ({product.price})</button>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};