/* Nav.jsx */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bookmark from "../../assets/bookmark.svg";
import "react-datepicker/dist/react-datepicker.css";
import "../../../src/index.css";
import DatePicker from "react-datepicker";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* navbar */}
      <nav
        className={`navbar bg-[#1a1a1a]  px-8 lg:px-16 h-24 w-full fixed top-5 left-0 lg:left-10 rounded-2xl lg:w-[calc(100%-5rem)] flex justify-between items-center z-50 transition-all duration-300`}
      >
        {/* logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white font-bricolage mr-10"
        >
          Heaven<span className="text-yellow-500">Pin</span>
        </Link>

        {/* menu */}
        <ul
          className={`menu flex flex-col lg:flex-row absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
          } gap-2 lg:gap-10 text-sm font-medium`}
        >
          <li>
            <Link
              to="/"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Apartments
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/payment"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Payment
            </Link>
          </li>
        </ul>

        {/* right‑side buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-yellow-500 hover:bg-yellow-600 flex items-center lg:py-3 lg:px-8 py-2 px-4 rounded-full gap-3 text-white uppercase tracking-widest transition-colors duration-300"
          >
            <img
              src={Bookmark}
              alt="bookmark"
              className="invert brightness-0 w-4 h-4"
            />
            <span className="hidden xl:block">Book&nbsp;Now</span>
          </button>

          {/* mobile menu toggle */}
          <div className="lg:hidden block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black text-3xl"
            >
              {isOpen ? (
                <i className="ri-close-line" />
              ) : (
                <i className="ri-menu-line" />
              )}
            </button>
          </div>
        </div>

        {/* modal form */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(0,0,0,0.85)]">
            <div className="bg-[#1e293b] w-full max-w-[500px] p-[40px] rounded-[15px] shadow-xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute hover:bg-red-500 hover:text-white transition duration-300 top-4 right-4 rounded-full w-[50px] h-[50px] text-xl text-gray-200 font-bold bg-[#334155] flex items-center justify-center"
              >
                <span className="bi bi-x-lg"></span>
              </button>

              <h2 className="text-3xl font-semibold mb-12 text-gray-100">
                Book Your Apartment
              </h2>

              <form className="space-y-6">
                {/* Check-in */}
                <div className="mb-6 relative">
                  <label className="block text-sm font-medium text-gray-300 tracking-widest uppercase mb-2">
                    Check-in
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={checkInDate}
                      onChange={(date) => setCheckInDate(date)}
                      placeholderText="Select Check-in Date"
                      className="w-full p-3 h-[60px] bg-[#0f172a] text-gray-100 rounded border border-[#334155] outline-none pr-10"
                      dateFormat="dd/MM/yyyy"
                    />
                    <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>

                {/* Check-out */}
                <div className="mb-6 relative">
                  <label className="block text-sm font-medium text-gray-300 tracking-widest uppercase mb-2">
                    Check-out
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={checkOutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      placeholderText="Select Check-out Date"
                      className="w-full p-3 h-[60px] bg-[#0f172a] text-gray-100 rounded border border-[#334155] outline-none pr-10"
                      dateFormat="dd/MM/yyyy"
                    />
                    <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>

                {/* Adults */}
                <div className="mb-6 relative">
                  <label className="block text-sm font-medium text-gray-300 tracking-widest uppercase mb-2">
                    Adults
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    min="1"
                    className="w-full p-3 h-[60px] bg-[#0f172a] text-gray-100 rounded border border-[#334155] outline-none"
                  />
                </div>

                {/* Children */}
                <div className="mb-6 relative">
                  <label className="block text-sm font-medium text-gray-300 tracking-widest uppercase mb-2">
                    Children
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    min="0"
                    className="w-full p-3 h-[60px] bg-[#0f172a] text-gray-100 rounded border border-[#334155] outline-none"
                  />
                </div>

                {/* Apartment type */}
                <div className="mb-6 relative">
                  <label className="block text-sm font-medium text-gray-300 tracking-widest uppercase mb-2">
                    Apartment Type
                  </label>
                  <select className="w-full p-3 h-[60px] bg-[#0f172a] text-gray-100 rounded border border-[#334155] outline-none">
                    <option>Studio</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedrooms</option>
                    <option>3 Bedrooms</option>
                    <option>Luxury Suite</option>
                    <option>Penthouse</option>
                    <option>Duplex</option>
                    <option>Villa</option>
                    <option>Loft</option>
                    <option>Townhouse</option>
                  </select>
                </div>

                {/* Special Requests */}
                
                <div className="mb-6 relative">
                  <label className="block text-sm font-medium text-gray-300 tracking-widest uppercase mb-2">
                    Special Requests
                  </label>
                  <textarea
                    placeholder="Any additional needs?"
                    className="w-full p-3 bg-[#0f172a] text-gray-100 rounded border border-[#334155] outline-none"
                    rows="3"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-sky-600 hover:bg-sky-500 text-white py-3 px-5 rounded-full w-full uppercase tracking-widest transition-colors duration-300"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Nav;
