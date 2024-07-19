import React from 'react';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 purple-600 bg-opacity-90 border-t border-gray-200 dark:bg-purple-950 dark:bg-opacity-90 z-50">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-wrap items-center justify-between">
          <ul className="flex space-x-6 rtl:space-x-reverse">
            <li>
              <a href="https://github.com/anryjohn" className="text-gray-900 dark:text-white hover:underline" target="_blank">
                github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/andrew-johnson/" className="text-gray-900 dark:text-white hover:underline" target="_blank">
                linkedin
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/anryjohnson/" className="text-gray-900 dark:text-white hover:underline" target="_blank">
                instagram
              </a>
            </li>
          </ul>
          <a className="text-gray-900 dark:text-white hover:underline" href="mailto:arjohnson.se@gmail.com">arjohnson.se@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
