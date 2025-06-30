import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [message , setMessage] = useState("")

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeooTQ0n3TqjSIhsLvhWSDn6NVAjRHkKsrQqhf9XBHBVXij1g/formResponse';
  
    const formDataToSend = new FormData();
    formDataToSend.append('entry.338597090', formData.name);
    formDataToSend.append('entry.1834638589', formData.email);
    formDataToSend.append('entry.431460806', formData.message);
  
    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors', // <--- ye zaroori hai Google Form ke liye
        body: formDataToSend,
      });
  
      // Even though we can't check response.ok, we assume it's successful
      // alert('Message sent successfully!');
      setMessage("Form Submitted Successfully!")
      setFormData({ name: '', email: '', message: '' });
  
    } catch (error) {
      // console.error('Error:', error);
      setMessage("Error")
      alert('There was an error submitting the form.');
    }
  };
  
  

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-container">
          <h1 className="text-green-600 font-semibold" id='style'>Contact Me</h1>
          <p>If you have any questions, suggestions, or collaboration ideas — feel free to reach out!</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
          <p className='response-message mt-5 text-2xl text-green-500'>{message}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
