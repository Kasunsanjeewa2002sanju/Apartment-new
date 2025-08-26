import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

function Contact() {
  return (
    <>
      {/* Hero Banner */}
      <div className="section-banner mt-5 pt-6 relative flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] min-h-[60vh] overflow-hidden">
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element1 absolute opacity-20"
          alt=""
        />
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element2 absolute opacity-20"
          alt=""
        />
        <img
          src={element1}
          className="w-full h-full section-banner-element3 absolute opacity-20"
          alt=""
        />
        <img
          src={element2}
          className="w-full h-full section-banner-element4 absolute opacity-20"
          alt=""
        />
        <img
          src={element3}
          className="w-full h-full section-banner-element5 absolute opacity-20"
          alt=""
        />

        <div className="section-banner-content flex items-center flex-col text-center z-[55]">
          <h1 className="text-7xl font-semibold text-white">Get In Touch</h1>
          <div className="mt-10 bg-[#eab308] w-[250px] p-2 text-xl rounded text-black font-medium">
            <Link to="/" className='hover:text-white transition-colors'>Home</Link> &nbsp; / &nbsp;
            <span className="text-black">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#222831] py-[100px] w-full px-[5%] md:px-[100px]">
        <div className="w-full px-[5%] bg-gradient-to-br from-[#1a1a1a] to-[#222831] rounded-[20px] border border-gray-800 shadow-2xl relative z-[10] py-20">
          <div className="text-center mb-12">
            <span className="bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold inline-block mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about our services or want to make a reservation? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold uppercase text-white">
                  First Name
                </label>
                <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#eab308] focus-within:border-[#eab308] transition-all duration-200">
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full bg-transparent outline-none text-white placeholder:text-gray-400"
                    required
                  />
                  <i className="ri-user-line text-[#eab308] text-xl ml-2"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold uppercase text-white">
                  Last Name
                </label>
                <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#eab308] focus-within:border-[#eab308] transition-all duration-200">
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full bg-transparent outline-none text-white placeholder:text-gray-400"
                    required
                  />
                  <i className="ri-user-smile-line text-[#eab308] text-xl ml-2"></i>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold uppercase text-white">
                  E-mail
                </label>
                <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#eab308] focus-within:border-[#eab308] transition-all duration-200">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent outline-none text-white placeholder:text-gray-400"
                    required
                  />
                  <i className="ri-mail-line text-[#eab308] text-xl ml-2"></i>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold uppercase text-white">
                  Phone Number
                </label>
                <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#eab308] focus-within:border-[#eab308] transition-all duration-200">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full bg-transparent outline-none text-white placeholder:text-gray-400"
                    required
                  />
                  <i className="ri-phone-line text-[#eab308] text-xl ml-2"></i>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase text-white">
                Subject
              </label>
              <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#eab308] focus-within:border-[#eab308] transition-all duration-200">
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full bg-transparent outline-none text-white placeholder:text-gray-400"
                  required
                />
                <i className="ri-chat-1-line text-[#eab308] text-xl ml-2"></i>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold uppercase text-white">
                Message
              </label>
              <div className="flex items-start bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#eab308] focus-within:border-[#eab308] transition-all duration-200">
                <textarea
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                  className="w-full bg-transparent outline-none text-white placeholder:text-gray-400 resize-none"
                  required
                ></textarea>
                <i className="ri-message-2-line text-[#eab308] text-xl ml-2 mt-2"></i>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="px-12 py-4 bg-[#eab308] text-black font-bold rounded-full hover:bg-[#fbbf24] transition-all duration-300 hover:scale-105 uppercase tracking-wider"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gradient-to-tl from-[#0f0f0f] via-[#1a1a1a] to-[#222831] w-full px-[8%] lg:px-[12%] py-[100px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className='bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold inline-block mb-4'>
              Contact Info
            </span>
            <h2 className='text-3xl sm:text-4xl font-semibold text-white mb-4'>Get In Touch With Us</h2>
            <p className='text-gray-300 max-w-2xl mx-auto'>
              We're here to help and answer any questions you might have. We look forward to hearing from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-[#222831] rounded-lg border border-gray-800 hover:border-[#eab308] transition-colors duration-300">
              <div className="w-16 h-16 bg-[#eab308] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
              <p className="text-gray-300 text-sm">
                12 Hilltop Lane<br />
                Nuwara Eliya, Central Province 22200<br />
                Sri Lanka
              </p>

            </div>

            <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-[#222831] rounded-lg border border-gray-800 hover:border-[#eab308] transition-colors duration-300">
              <div className="w-16 h-16 bg-[#eab308] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone Number</h3>
              <p className="text-gray-300 text-sm">
                +94 77 123 4567<br />
                +94 71 987 6543<br />
                Mon-Fri 9AM-6PM
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-[#222831] rounded-lg border border-gray-800 hover:border-[#eab308] transition-colors duration-300">
              <div className="w-16 h-16 bg-[#eab308] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-2xl text-black"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Address</h3>
              <p className="text-gray-300 text-sm">
                info@heavenpinweb.com<br />
                reservations@heavenpinweb.com<br />
                support@heavenpinweb.com

              </p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

