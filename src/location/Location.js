import React from 'react';
import './Location.css';
import { Button, Carousel } from 'react-bootstrap';
import coxbazar from '../images/Image/Sajek.png';
import sreemongol from '../images/Image/Sreemongol.png';
import sundorbon from '../images/Image/sundorbon.png';
import { useHistory } from 'react-router-dom';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Location = () => {
    const history = useHistory();
    const handleBooking = () => {
        const url = `/book`;
        history.push(url);
    }
    return (
        <Carousel>
            <Carousel.Item>
                <div className="slide row m-5">
                    <div className="col-md-6">
                        <h2 className="display-2 text-white">COX'S BAZAR</h2>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
                        <Button onClick={handleBooking}  variant="warning">
                            Booking 
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </Button>
                    </div>
                    <div className="col-md-6">
                        <img src={coxbazar} alt="Cox's Bazar"/>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide row m-5">
                    <div className="col-md-6">
                        <h2 className="display-2 text-white">SREEMANGAL</h2>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
                        <Button onClick={handleBooking}  variant="warning">
                            Booking 
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </Button>
                    </div>
                    <div className="col-md-6">
                        <img src={sreemongol} alt="Sreemangal"/>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="slide row m-5">
                    <div className="col-md-6">
                        <h2 className="display-2 text-white">SUNDARBANS</h2>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...</p>
                        <Button onClick={handleBooking}  variant="warning">
                            Booking 
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </Button>
                    </div>
                    <div className="col-md-6">
                        <img src={sundorbon} alt="Sundarbans"/>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default Location;