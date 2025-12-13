import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name can't be blank";
    if (!formData.email.trim()) newErrors.email = "Email can't be blank";
    if (!formData.phone.trim()) newErrors.phone = "Phone number can't be blank";
    if (!formData.subject.trim()) newErrors.subject = "Subject can't be blank";
    if (!formData.message.trim()) newErrors.message = "Please write your message";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Here you would typically send the email using SMTP.js or your backend
    // For now, we'll just show a success message
    alert('Message sent successfully!');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact <span>Me!</span></h2>
      <form onSubmit={handleSubmit} id="form">
        <div className="input-box">
          <div className={`input-field field ${errors.name ? 'error' : ''}`}>
            <input 
              type="text" 
              placeholder="Full Name" 
              id="name"
              className="item" 
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error-txt">{errors.name}</div>}
          </div>
          <div className={`input-field field ${errors.email ? 'error' : ''}`}>
            <input 
              type="text" 
              placeholder="Email Address" 
              id="email" 
              className="item" 
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error-txt email">{errors.email}</div>}
          </div>
        </div>
        <div className="input-box">
          <div className={`input-field field ${errors.phone ? 'error' : ''}`}>
            <input 
              type="text" 
              placeholder="Phone Number" 
              id="phone" 
              className="item" 
              autoComplete="off"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="error-txt">{errors.phone}</div>}
          </div>
          <div className={`input-field field ${errors.subject ? 'error' : ''}`}>
            <input 
              type="text" 
              placeholder="Subject" 
              id="subject"
              className="item" 
              autoComplete="off"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <div className="error-txt">{errors.subject}</div>}
          </div>
        </div>
        <div className={`textarea-field field ${errors.message ? 'error' : ''}`}>
          <textarea 
            id="message" 
            cols="30" 
            rows="10" 
            placeholder="your message" 
            className="item" 
            autoComplete="off"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <div className="error-txt">{errors.message}</div>}
        </div>
        
        <button type="submit">Send message</button>
      </form>
    </section>
  )
}

export default Contact
