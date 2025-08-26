import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 w-full py-[100px]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Section */}
        <div className="flex border-b border-gray-700 pb-[50px] flex-col lg:flex-row lg:justify-between gap-10">
          <div className="lg:w-7/12">
            <Link to="/" className="text-4xl font-bold text-white">
              Heaven<span className="text-yellow-500">Pin</span>
            </Link>
            <p className="mt-5 font-light tracking-wide text-gray-300">
              Discover your perfect stay with our exclusive newsletter:{" "}
            </p>
            <div className="mt-5 flex items-center bg-gray-800 px-5 py-3 w-full max-w-md rounded-full border border-gray-600 focus-within:border-yellow-500 transition-colors">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent flex-1 outline-none placeholder:text-gray-400 text-white text-sm"
              />
              <button className="text-xl bg-yellow-500 w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer hover:bg-yellow-600 transition-colors">
                <FaEnvelope className="text-white text-sm" />
              </button>
            </div>
          </div>

          <div className="lg:w-6/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Quick Links
                </h4>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/rooms"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    Apartments
                  </Link>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Support
                </h4>
                <div className="flex flex-col gap-3">
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    Help Center
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex lg:pt-[50px] pt-[40px] flex-col lg:flex-row lg:justify-between gap-10">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                <FaFacebook className="text-gray-300 hover:text-white text-lg" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                <FaTwitter className="text-gray-300 hover:text-white text-lg" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram className="text-gray-300 hover:text-white text-lg" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300"
              >
                <FaLinkedin className="text-gray-300 hover:text-white text-lg" />
              </a>
            </div>
            <p className="font-light tracking-wide text-gray-300">
              {" "}
              &copy; 2025 HeavenPin. All Rights Reserved.{" "}
              <span className="text-yellow-400 font-medium">
                Your Perfect Stay Awaits
              </span>
            </p>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <FaMapMarkerAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-lg text-white">
                      Main Office
                    </h5>
                    <p className="text-gray-300 text-sm">
                      12 Hilltop Lane
                      <br />
                      Nuwara Eliya, Central Province 22200
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-lg text-white">
                      Contact
                    </h5>
                    <p className="text-gray-300 text-sm">
                      +94 71 987 6543
                      <br />
                      +94 71 987 6543
                      <br />
                      info@heavenpinweb.com
                      <br />
                      reservations@heavenpinweb.com
                      <br />
                      support@heavenpinweb.com
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <FaMapMarkerAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-lg text-white">
                      Branch Office
                    </h5>
                    <p className="text-gray-300 text-sm">
                      12 Hilltop Lane
                      <br />
                      Nuwara Eliya, Central Province 22200
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-lg text-white">
                      Support
                    </h5>
                    <p className="text-gray-300 text-sm">
                      081 2051052
                      <br />
                      support@heavenpin.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
