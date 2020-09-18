import React, { useContext } from 'react';
import RoomDetails from '../roomDetails/RoomDetails';
import room1 from '../../images/Image/room1.png';
import room2 from '../../images/Image/room2.png';
import room3 from '../../images/Image/room3.png';
import { UserContext } from '../../App';
import LocationMap from '../locationMap/LocationMap';

const Room = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const rooms = [
        {
            id: `1`,
            title: `Light bright airy stylish apt & safe peaceful stay`,
            capacity: `4 guest 2 bedrooms 2 beds 2 baths`,
            description: `Wifi conditioning Kitchen`,
            facilities: `Cancellation flexibility available`,
            others: `4.9(20) $34/night $167 total`,
            img: `${room1}`,
        },
        {
            id: `2`,
            title: `Light bright airy stylish apt & safe peaceful stay`,
            capacity: `4 guest 2 bedrooms 2 beds 2 baths`,
            description: `Wifi conditioning Kitchen`,
            facilities: `Cancellation flexibility available`,
            others: `4.9(20) $34/night $167 total`,
            img: `${room2}`,
        },
        {
            id: `3`,
            title: `Light bright airy stylish apt & safe peaceful stay`,
            capacity: `4 guest 2 bedrooms 2 beds 2 baths`,
            description: `Wifi conditioning Kitchen`,
            facilities: `Cancellation flexibility available`,
            others: `4.9(20) $34/night $167 total`,
            img: `${room3}`,
        }
    ];
    return (
        <div  className="pt-5 pl-5">
          <p className="text-success">User Email: {loggedInUser.email}</p>
          <p>Stay in Hotel</p>
            <div className="row">
                <div className="col-md-6">
                    {
                        rooms.map(room =><RoomDetails room={room} key={room.id}></RoomDetails>)
                    }
                </div>
                <div className="col-md-6">
                    <LocationMap/>
                </div>
            </div>
        </div>
    );
};

export default Room;