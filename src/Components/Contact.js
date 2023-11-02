import React, { useState } from 'react';
import './Contact.css'; // Create a CSS file for styling
import Footer from './Footer';
import { Box } from '@mui/material'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add code here to handle form submission, e.g., send data to a server
    // For this example, we'll just log the form data to the console.
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        {/* ...your form fields and input elements... */}
      </form>
      <Box>
        <Footer/>
      </Box>
    </div>
  );
}

export default Contact;
