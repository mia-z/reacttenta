import React, { useState } from 'react';
import { Container, Button, Col, Row, Form } from "react-bootstrap";

const AddProduct = (props) => {
    const [validated, setValidated] = useState(false);
    const handleFormSubmit = (event) => {
        if (event.currentTarget.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setValidated(true);
            event.preventDefault();
            const newItem = {
                Name: event.target.productname.value,
                Colour: event.target.productcolour.value,
                Sizes: [
                    event.target.productsizes.checked, 
                    event.target.productsizem.checked, 
                    event.target.productsizel.checked
                ],
                Price: event.target.productprice.value,
                ImageUrl: event.target.productimage.value
            };
            props.products.push(newItem);
            props.setProducts(props.products);
            props.setChoice(0);
        }
         
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                <Form noValidate validated={validated} onSubmit={event => handleFormSubmit(event)}>
                    <Form.Group>
                        <Form.Label>Name:&nbsp;</Form.Label>
                        <Form.Control required name="productname" type="text" placeholder="Product name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Colour:&nbsp;</Form.Label>
                        <Form.Control required name="productcolour" type="text" placeholder="Product colour"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check name="productsizes" inline label="S" type="checkbox" id={`inline-s-1`} />
                        <Form.Check name="productsizem" inline label="M" type="checkbox" id={`inline-s-2`} />
                        <Form.Check name="productsizel" inline label="L" type="checkbox" id={`inline-s-3`} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price:&nbsp;</Form.Label>
                        <Form.Control required name="productprice" type="number" placeholder="Product price"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image Url:&nbsp;</Form.Label>
                        <Form.Control required name="productimage" type="text" placeholder="Product image URL"/>
                    </Form.Group>
                    <Row className="justify-content-center">
                        <Col md={5}>
                            <Button type="submit" block>Submit item</Button>
                        </Col>
                        <Col md={5}>
                            <Button block onClick={() => props.setChoice(0)}>Back</Button>
                        </Col>
                    </Row>
                </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddProduct;