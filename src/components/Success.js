// src/components/Success.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Success.css'; // Import the CSS file

const Success = () => {
  const { state } = useLocation();

  return (
    <div className="success-container">
      <h2>Form Submitted Successfully</h2>
      <div className="success-details">
        <p><strong>First Name:</strong> {state?.firstName}</p>
        <p><strong>Last Name:</strong> {state?.lastName}</p>
        <p><strong>Username:</strong> {state?.username}</p>
        <p><strong>Email:</strong> {state?.email}</p>
        <p><strong>Phone Number:</strong> {state?.phoneNo}</p>
        <p><strong>Country:</strong> {state?.country}</p>
        <p><strong>City:</strong> {state?.city}</p>
        <p><strong>PAN Number:</strong> {state?.panNo}</p>
        <p><strong>Aadhar Number:</strong> {state?.aadharNo}</p>
      </div>
    </div>
  );
};

export default Success;
