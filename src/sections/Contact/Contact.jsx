import { useState } from 'react'
import emailjs from '@emailjs/browser'

// =====================================================
// ⚠️  REPLACE THESE WITH YOUR EMAILJS CREDENTIALS  ⚠️
// 
// 1. Sign up at https://www.emailjs.com (free)
// 2. Add Gmail as an email service → copy Service ID
// 3. Create an email template → copy Template ID
// 4. Go to Account → API Keys → copy Public Key
// =====================================================
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. 'service_abc1234'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // e.g. 'template_xyz5678'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';    // e.g. 'aBcDeFgHiJkLmNoPq'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, type: '', message: '' });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: '', message: '' });
    }, 5000);
  };

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

  const validateEmail = (email) => {
    const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name can't be blank";
    if (!formData.email.trim()) {
      newErrors.email = "Email can't be blank";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number can't be blank";
    if (!formData.subject.trim()) newErrors.subject = "Subject can't be blank";
    if (!formData.message.trim()) newErrors.message = "Please write your message";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Check if credentials are configured
    if (
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      showToast('error', 'EmailJS is not configured. Please update the credentials in Contact.jsx');
      console.error(
        'EmailJS credentials not configured!\n' +
        'Open src/components/Contact.jsx and replace:\n' +
        '  - YOUR_SERVICE_ID\n' +
        '  - YOUR_TEMPLATE_ID\n' +
        '  - YOUR_PUBLIC_KEY\n' +
        'with your actual EmailJS credentials.'
      );
      return;
    }

    // Send email via EmailJS
    setSending(true);

    try {
      // Template params must match your EmailJS template variables
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      showToast('success', "Message sent! I'll get back to you soon.");

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast('error', 'Failed to send message. Please try again or email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact <span>Me!</span></h2>

      {/* Toast Notification */}
      {toast.show && (
        <div className={`toast-notification ${toast.type}`}>
          <span className="toast-icon">
            {toast.type === 'success' ? '✓' : '✕'}
          </span>
          <span className="toast-message">{toast.message}</span>
          <button
            className="toast-close"
            onClick={() => setToast({ show: false, type: '', message: '' })}
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}

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
              disabled={sending}
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
              disabled={sending}
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
              disabled={sending}
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
              disabled={sending}
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
            disabled={sending}
          />
          {errors.message && <div className="error-txt">{errors.message}</div>}
        </div>
        
        <button type="submit" disabled={sending} className={sending ? 'btn-sending' : ''}>
          {sending ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            'Send message'
          )}
        </button>
      </form>
    </section>
  )
}

export default Contact
