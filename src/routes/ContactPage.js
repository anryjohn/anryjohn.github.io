import React from 'react';
import EmailHandler from '../components/emailHandler';

function ContactPage() {
  return (
    <div className='page-body flex justify-center'>
      <div className='max-w-screen-md w-full flex flex-col items-center'>
        <h1 className='text-4xl font-black pb-2'>Contact Me!</h1>
        <div className="experience-border" />
        <p className='text-xl text-center'>For any and all business-related inquiries (or if you just really want to chat),
          fill out the form below, or you can email me directly at&nbsp;
          <a className='font-semibold page-link' href="mailto:arjohnson.se@gmail.com" target="_blank">arjohnson.se@gmail.com</a>.
        </p>
        <div className='w-full max-w-md'>
          <EmailHandler />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
