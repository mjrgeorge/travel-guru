import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Header from '../header/Header';

const Book = () => {
    return (
        <div>
            <Header></Header>
            <div className="row">
                <div className="col-md-4 m-5 p-5">
                <h2 className="display-4 text-dark">COX'S BAZAR</h2>
                        <p className="text-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
                </div>
                <div className="col-md-6">
                    <Card className="m-5 p-5">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Origin</Form.Label>
                                <Form.Control type="text"/>
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text"/>
                                <Row>
                                    <Col>
                                        <Form.Label>Form</Form.Label>
                                        <Form.Control type="date"/>
                                    </Col>
                                    <Col>
                                        <Form.Label>To</Form.Label>
                                        <Form.Control type="date"/>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Button variant="warning" type="submit" block>Submit</Button>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Book;