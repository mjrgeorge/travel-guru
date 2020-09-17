import React from 'react';
import { Card } from 'react-bootstrap';

const RoomDetails = (props) => {
    const {title, description, img, capacity, facilities, others} = props.room;
    return (
        <div className="row m-5">
            <div className="col-md-6">
                <div className="row">
                    <Card className="col-md-6">
                        <Card.Img src={img} alt="Room"/>
                    </Card>
                    <div className="col-md-6">
                        <Card>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text><small className="text-muted">{capacity}</small></Card.Text>
                                <Card.Text>{description}</Card.Text>
                                <Card.Text>{facilities}</Card.Text>
                                <Card.Text><small className="text-muted">{facilities}</small></Card.Text>
                                <Card.Text><small className="text-muted">{others}</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="col-md-6">

            </div>
        </div>
    );
};

export default RoomDetails;