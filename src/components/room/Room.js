import React from 'react';
import RoomDetails from '../roomDetails/RoomDetails';
import room1 from '../../images/Image/room1.png';
import room2 from '../../images/Image/room2.png';
import room3 from '../../images/Image/room3.png';

const Room = () => {
    const rooms = [
        {
            id: `1`,
            title: `Light bright airy stylish apt & safe peaceful stay`,
            capacity: `4 guest 2 bedrooms 2 beds 2 baths`,
            description: `Wifi conditioning Kitchen`,
            facilities: `Cancellation flexibility available`,
            others: `4.9(20) $34/night $167 total`,
            img: `${room1}`,
            location1: `Cox's Bazar`,
            location2: `Sreemangal`,
            location3: `Sundarban`,
            details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...`,
        },
        {
            id: `2`,
            title: `Light bright airy stylish apt & safe peaceful stay`,
            capacity: `4 guest 2 bedrooms 2 beds 2 baths`,
            description: `Wifi conditioning Kitchen`,
            facilities: `Cancellation flexibility available`,
            others: `4.9(20) $34/night $167 total`,
            img: `${room2}`,
            location1: `Cox's Bazar`,
            location2: `Sreemangal`,
            location3: `Sundarban`,
            details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...`,
        },
        {
            id: `3`,
            title: `Light bright airy stylish apt & safe peaceful stay`,
            capacity: `4 guest 2 bedrooms 2 beds 2 baths`,
            description: `Wifi conditioning Kitchen`,
            facilities: `Cancellation flexibility available`,
            others: `4.9(20) $34/night $167 total`,
            img: `${room3}`,
            location1: `Cox's Bazar`,
            location2: `Sreemangal`,
            location3: `Sundarban`,
            details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book...`,
        }
    ];
    return (
        <div>
            {
                rooms.map(room =><RoomDetails room={room} key={room.id}></RoomDetails>)
            }
        </div>
    );
};

export default Room;