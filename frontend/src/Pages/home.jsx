import React from 'react'
import { useNavigate } from 'react-router'
import '../css/Home.css'

const Home = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/Shop");
     };
     return(
        <div className="home">
            <div className="overlay">
            <h2>Welcome to Rover !</h2>
            <button className='trynow' onClick={handleButtonClick}>Try now!</button>
            </div>
            
        </div>
     );

};
export default Home;