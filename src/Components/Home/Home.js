import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="home">
            <div className="text-center">
                <h1>Enjoy a luxury <br /> experience</h1>
                <button onClick={() => navigate("/rooms")}>Choose Your Room</button>
            </div>
        </div>
    );
};

export default Home;