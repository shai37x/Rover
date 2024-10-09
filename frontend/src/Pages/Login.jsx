import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; 

export const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For navigation

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const url = "http://localhost:7001/userAuth/login";
    const data = { username: name, password: password };

    try {
      const response = await axios.post(url, data,{
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
        }
      });
    console.log("login rep", response);

      if (response.status === 200) {
        alert("Login successful");
        navigate("/"); // Navigate to home page after successful login
      }
    } catch (error) {
      alert("Login failed: " + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="login-container"> 
      <div className="brand-logo"> 
        <h1>Rover<span>.</span></h1> 
      </div> 

      <form className="login-form" onSubmit={onSubmit}> 
        <label htmlFor="email">Username</label> 
        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)}
          id="email" 
          name="email" 
          placeholder="Enter your username" 
          required 
        /> 

        <label htmlFor="password">Password</label> 
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          id="password" 
          name="password" 
          placeholder="Enter your password" 
          required 
        /> 

        <button type="submit" className="login-button">Login</button> 

        {/* Link to registration page */}
        <div className="register">
          Don't have an account? <Link to="/register">Click here!</Link>
        </div>
      </form> 
    </div> 
  );
}

export default Login;
