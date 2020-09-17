import React from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Sreemangal = () => {
    const history = useHistory();
    const handleSubmit = () => {
        const url = `/sreemangal`;
        history.push(url);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-4 m-5 p-5">
                <h2 className="display-4 text-dark">SREEMANGAL</h2>
                        <p className="text-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
                </div>
                <div className="col-md-6">
                    <Card className="m-5 p-5">
                        <Form>
                            <Form.Group>
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
                            <Button onClick={handleSubmit} variant="warning" block>Start Booking</Button>
                        </Form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Sreemangal;