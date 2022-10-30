import React from 'react';
import './Rooms.css'
import singleBed from "../../images/Beds/singleBed.jpg"
import doubleBed from "../../images/Beds/duobleBed.jpg"
import largeBed from "../../images/Beds/familyBed.jpg"
import { useNavigate } from 'react-router-dom';

const Rooms = () => {
    const navigate = useNavigate()

    return (
        <div className='rooms'>
            <h2 className='rooms-title'>Type of Rooms</h2>
            <div className="room-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div>
                    <img src={singleBed} alt="single room img" />
                    <h4>Single Room</h4>
                    <p>Price: 1000 tk/per night</p>
                    <button onClick={() => navigate('/checkout')}>Book Now</button>
                </div>
                <div>
                    <img src={doubleBed} alt="duable room img" />
                    <h4>Duable Room</h4>
                    <p>Price: 2500 tk/per night</p>
                    <button onClick={() => navigate('/checkout')}>Book Now</button>
                </div>
                <div>
                    <img src={largeBed} alt="family room img" />
                    <h4>Family Room</h4>
                    <p>Price: 500 tk/per night</p>
                    <button onClick={() => navigate('/checkout')}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Rooms;