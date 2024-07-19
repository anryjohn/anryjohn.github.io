import React from 'react';

function ContactPage() {
  return (
    <div className='page-body flex-col'>
      <h1 className='text-5xl font-black pb-4'>Contact Me!</h1>
      <p className='text-xl'>For any and all business-related inqueries (or if you just really want to chat),
        you can email me at&nbsp;
        <a className='font-semibold page-link' href="mailto:arjohnson.se@gmail.com">arjohnson.se@gmail.com</a>.
      </p>
      <p className='t'>And while I'm at it, allow me to shamelessly plug my&nbsp;
        <a className='font-semibold page-link' href="https://www.linkedin.com/in/andrew-johnson/">LinkedIn</a>
        &nbsp;and&nbsp;
        <a className='font-semibold page-link' href="https://www.instagram.com/anryjohnson/">Instagram</a>
        &nbsp;too!</p>
    </div>
  );
}

export default ContactPage;
