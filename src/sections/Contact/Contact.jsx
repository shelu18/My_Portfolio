import { useState } from 'react'
import emailjs from '@emailjs/browser'

// =====================================================
// EmailJS credentials loaded from .env file (gitignored)
//
// Create a .env file in the project root with:
//   VITE_EMAILJS_SERVICE_ID="service_xxxxx"
//   VITE_EMAILJS_TEMPLATE_ID="template_xxxxx"
//   VITE_EMAILJS_PUBLIC_KEY="your_public_key"
//
// Restart the dev server after changing .env values.
// =====================================================
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

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

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      showToast('error', 'EmailJS is not configured. Please add credentials to the .env file.');
      console.error(
        'EmailJS credentials not configured!\n' +
        'Create a .env file in the project root with:\n' +
        '  VITE_EMAILJS_SERVICE_ID="service_xxxxx"\n' +
        '  VITE_EMAILJS_TEMPLATE_ID="template_xxxxx"\n' +
        '  VITE_EMAILJS_PUBLIC_KEY="your_public_key"\n' +
        'Then restart the dev server.'
      );
      return;
    }

    setSending(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      emailjs.init(EMAILJS_PUBLIC_KEY);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      showToast('success', "Message sent! I'll get back to you soon.");

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      let errorMsg = 'Failed to send message.';
      if (error?.status === 400) {
        errorMsg = 'Email service error. Please check your EmailJS template variables match the form fields.';
        console.error(
          'EmailJS 400 Error - Template variable mismatch.\n' +
          'Your EmailJS template should use these variables:\n' +
          '  {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}\n' +
          'Go to emailjs.com -> Email Templates -> edit your template content.'
        );
      } else if (error?.status === 404) {
        errorMsg = 'Email service not found. Please verify your Service ID and Template ID.';
      } else if (error?.status === 403) {
        errorMsg = 'Email service blocked. Check domain restrictions on your EmailJS dashboard.';
      }
      
      showToast('error', errorMsg);
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
            {toast.type === 'success' ? (
              <i className='bx bx-check'></i>
            ) : (
              <i className='bx bx-error'></i>
            )}
          </span>
          <span className="toast-message">{toast.message}</span>
          <button
            className="toast-close"
            onClick={() => setToast({ show: false, type: '', message: '' })}
            aria-label="Close notification"
          >
            &times;
          </button>
        </div>
      )}

      {/* Two-column layout: info cards LEFT, form RIGHT */}
      <div className="contact-grid">

        {/* Left column - Contact Info */}
        <div className="contact-info-column">
          <h3 className="contact-info-heading">Let's Build Something</h3>
          <p className="contact-info-desc">
            Currently open to remote contract &amp; freelance React Native work. Building a mobile product and need someone who can own it end-to-end? Let's talk.
          </p>

          <a href="mailto:shailendraparihar3630@gmail.com" className="contact-info-card">
            <div className="contact-info-icon">
              <i className='bx bx-envelope'></i>
            </div>
            <div className="contact-info-text">
              <h4>Email Me</h4>
              <p>shailendraparihar3630@gmail.com</p>
            </div>
          </a>

          <a href="tel:+919993732470" className="contact-info-card">
            <div className="contact-info-icon">
              <i className='bx bx-phone'></i>
            </div>
            <div className="contact-info-text">
              <h4>Call Me</h4>
              <p>+91 9993732470</p>
            </div>
          </a>
        </div>

        {/* Right column - Form */}
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
              placeholder="Your message" 
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

      </div>
    </section>
  )
}

export default Contact
