import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function EmailHandler() {
  const serviceId = "service_e77x9ti";
  const templateId = "template_5axol4j";
  const userId = "Xjn-a5GIW5--FMmUx";  


  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
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

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }, (error) => {
        console.log(error.text);
        alert('Failed to Send Message. Please try again later.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-4">
        <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.name}
            onChange={handleChange}
            required
            className="email-form"
            placeholder="Name"
        />
        </div>
        <div className="mb-4">
        <input
            type="email"
            id="reply_to"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            required
            className="email-form"
            placeholder="Email"
        />
        </div>
        <div className="mb-4">
        <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="email-form"
            rows="5"
            placeholder=" Message"
        />
        </div>
        <button
            type="submit"
            className="px-6 py-2 text-white bg-purple-800 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
        Send Message
        </button>
    </form>
  );
}

export default EmailHandler;
