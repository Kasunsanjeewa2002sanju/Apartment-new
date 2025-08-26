/* Nav.jsx */
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaUser, FaSignOutAlt, FaCaretDown } from "react-icons/fa";
import Bookmark from "../../assets/bookmark.svg";
import "react-datepicker/dist/react-datepicker.css";
import "../../../src/index.css";
import DatePicker from "react-datepicker";

function Nav() {
  const { user, logout, isAuthenticated } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showUserMenu && !event.target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showUserMenu]);

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <>
      {/* navbar */}
      <nav
        className={`navbar bg-[#1a1a1a]  px-8 lg:px-16 h-24 w-full fixed top-5 left-0 lg:left-10 rounded-2xl lg:w-[calc(100%-5rem)] flex justify-between items-center z-50 transition-all duration-300`}
      >
        {/* logo */}
        <Link to="/" className="text-2xl font-bold text-white font-bricolage mr-10">
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
              Rooms
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
              to="/users"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Users
            </Link>
          </li>



          <li>
            <Link
              to="/users"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/payment-records"
              className="uppercase text-base text-yellow-500 hover:text-white transition px-4 py-2 lg:px-0 lg:py-0 block"
            >
              Payments
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
          
          {/* Show login/register only when not authenticated */}
          {!isAuthenticated() && (
            <>
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
            </>
          )}
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

          {/* User Menu - Show when authenticated */}
          {isAuthenticated() && (
            <div className="relative user-menu-container">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 text-white hover:text-yellow-500 transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <FaUser className="w-4 h-4 text-white" />
                </div>
                <span className="hidden lg:block text-sm font-medium">{user?.name}</span>
                <FaCaretDown className="w-3 h-3" />
              </button>

              {/* User Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.gmail}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                  >
                    <FaSignOutAlt className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

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
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(32,79,94,0.9)]">
            <div className="bg-white w-full max-w-[500px] p-[40px] rounded-[15px] shadow-lg relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute hover:bg-[#ecb934] hover:text-white transition duration-300 top-4 right-4 rounded-[50%] w-[50px] h-[50px] text-xl text-black font-bold bg-[#eafbfb] flex items-center justify-center"
              >
                <span className="bi bi-x-lg"></span>
              </button>
              <h2 className="text-3xl font-semibold mb-12">Search</h2>
              <form className="space-y-6">
                <div className="mb-6 relative">
                  <label className="block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2">
                    Check-in
                  </label>
                  <div className="relative ">
                    <DatePicker
                      selected={checkInDate}
                      onChange={(date) => setCheckInDate(date)}
                      placeholderText="Select Check-in Date"
                      className="w-full p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none pr-10"
                      dateFormat="dd/MM/yyyy"
                    />
                    <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                  </div>
                </div>

                <div className="mb-6 relative">
                  <label className="block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2">
                    Check-out
                  </label>
                  <div className="relative">
                    <DatePicker
                      selected={checkOutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      placeholderText="Select Date"
                      className="w-full p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none pl-10"
                      dateFormat="dd/MM/yyyy"
                    />
                    <i className="ri-calendar-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                  </div>
                </div>

                <div className="mb-6 relative">
                  <label className="block text-sm font-medium text-[#204f5e] tracking-widest uppercase mb-2">
                    Adults
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    min="1"
                    className="w-full p-3 h-[60px] bg-[#eafbfb] rounded border border-[#d5f1f1] outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-sky-400 hover:bg-sky-500 text-white py-3 px-5 rounded-full w-full uppercase tracking-widest transition-colors duration-300"
                >
                  Search
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
