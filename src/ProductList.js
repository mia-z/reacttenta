import React from 'react';
import { Button, Row, Col, Card, Container } from "react-bootstrap";
const ProductList = (props) => {
    return (
        <main>
        <Container>
            <Row>
                {
                    props.products.map((item, index) => (
                        <Col key={index} md={4}>
                            <Card style={{width: "18rem"}} >
                                <Card.Img variant="top" src={item.ImageUrl} />
                                <Card.Body>
                                    <Card.Title className="lead">{item.Name} -- {item.Colour}</Card.Title>
                                    <Card.Text>
                                        Sizes:&nbsp;
                                        {item.Sizes.map((size, index) => (
                                            <span key={index}> 
                                                {size && index === 0 ? "S" : ""}
                                                {size && index === 1 ? "M" : ""}
                                                {size && index === 2 ? "L" : ""} </span>
                                        ))}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <div>Price:&nbsp;{item.Price}:-</div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            <br/>
        </Container>
        <Row className="justify-content-center">
            <Col md={4}>
                <Button onClick={() => props.setChoice(1)}>Add new product</Button>
            </Col>
        </Row>
        </main>
    );
}

export default ProductList;