import React from 'react';
import { Card } from 'react-bootstrap';

const RoomDetails = (props) => {
    const {title, description, img, capacity, facilities, others} = props.room;
    return (
        <div>
            <div className="row">
                <Card className="col-md-4">
                    <Card.Img src={img} alt="Room"/>
                </Card>
                <Card className="col-md-8">
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
    );
};

export default RoomDetails;