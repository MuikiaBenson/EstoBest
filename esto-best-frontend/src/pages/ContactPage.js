// src/pages/ContactPage.js
import React from 'react';

function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-2">
        For any inquiries or assistance, please reach out to us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> support@estobest.com
      </p>
      <p className="mb-4">
        <strong>Phone:</strong> +123-456-7890
      </p>
      <p className="mb-4">
        <strong>Address:</strong> 123 EstoBest Lane, Property City, PC 12345
      </p>
      <p className="mb-4">
        You can also fill out the contact form below and we will get back to you as soon as possible.
      </p>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
