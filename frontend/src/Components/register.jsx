import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './register.css';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneno: '',
    address: '',
    pincode: '',
    gender: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate and submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata::",formData);
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
        setErrors({});  // Clear errors if validation passes

        try {
            const response = await fetch('http://localhost:7001/userAuth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Registration successful!');
                navigate('/login'); // Redirect to login after successful registration
            } else {
                const errorData = await response.json();
                alert('Registration failed: ' + errorData.message);
            }
        } catch (error) {
            alert('Registration failed: ' + error.message);
        }
    } else {
        setErrors(validationErrors);
    }
  };

  // Basic form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'First name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.phoneno) errors.phoneno = 'Phone number is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.pincode || !/^\d{6}$/.test(formData.pincode)) {
      errors.pincode = 'Pincode must be 6 digits';
    }
    if (!formData.gender) errors.gender = 'Gender is required';
    
    return errors;
  };

  return (
    <div className="register-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phoneno"
            value={formData.phoneno}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          {errors.pincode && <p className="error">{errors.pincode}</p>}
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
