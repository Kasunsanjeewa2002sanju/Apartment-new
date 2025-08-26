import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "@fortawesome/fontawesome-free/css/all.min.css";

function Register() {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    address: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hotel/Apartment images for carousel (same as Login page)
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Luxury Suite',
      description: 'Experience ultimate comfort in our premium suites'
    },
    {
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
      title: 'Modern Apartment',
      description: 'Contemporary design meets functionality'
    },
    {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Cozy Bedroom',
      description: 'Your perfect retreat after a long day'
    },
    {
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Elegant Living Space',
      description: 'Sophisticated interiors for discerning guests'
    },
    {
      url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Scenic View',
      description: 'Breathtaking views from your private balcony'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2)
          error = "Name must be at least 2 characters";
        break;
      case "gmail":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Please enter a valid email address";
        break;
      case "password":
        if (!value) error = "Password is required";
        else if (value.length < 6)
          error = "Password must be at least 6 characters";
        else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(value))
          error =
            "Password must contain uppercase, lowercase, number, special character";
        break;
      case "confirmPassword":
        if (!value) error = "Please confirm your password";
        else if (value !== user.password) error = "Passwords do not match";
        break;
      case "age":
        if (!value) error = "Age is required";
        else if (isNaN(value) || parseInt(value) < 17 || parseInt(value) > 150)
          error = "Please enter valid age (17-150)";
        break;
      case "gender":
        if (!value) error = "Please select a gender";
        break;
      case "address":
        if (!value.trim()) error = "Address is required";
        else if (value.trim().length < 5)
          error = "Please enter a complete address";
        break;
      case "phoneNumber":
        if (!value.trim()) error = "Phone number is required";
        else if (!/^\d{10}$/.test(value.replace(/\D/g, "")))
          error = "Please enter valid 10-digit phone";
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
      general: "",
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    Object.keys(user).forEach((key) => {
      const err = validateField(key, user[key]);
      if (err) valid = false;
      newErrors[key] = err;
    });
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const res = await axios.post("http://localhost:5000/users", user);
      if (res.data) {
        alert("Registration Successful!");
        history("/login");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: "Registration failed. Try again.",
      }));
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image Carousel Section */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden left-carousel-section">
        {/* Carousel Images - Full Coverage */}
        <div className="absolute inset-0 w-full h-full ">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 carousel-image-wrapper ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Carousel Content - Properly Layered */}
        <div className="relative z-20 flex flex-col justify-between h-full p-12 text-white carousel-content-layer">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 logo-container">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            </div>
            <h1 className="text-2xl font-bold text-white">HeavenPin</h1>
          </div>
          
          {/* Hero Content */}
          <div className="max-w-md carousel-content">
            <h2 className="text-4xl font-bold mb-4 text-white">{carouselImages[currentImageIndex].title}</h2>
            <p className="text-lg text-yellow-200">
              {carouselImages[currentImageIndex].description}
            </p>
          </div>
          
          {/* Carousel Navigation */}
          <div className="space-y-6">
            {/* Carousel Dots */}
            <div className="flex justify-center space-x-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-yellow-400 scale-125 shadow-lg' 
                      : 'bg-white bg-opacity-60 hover:bg-opacity-80 hover:scale-110'
                  }`}
                />
              ))}
            </div>
            
            {/* Carousel Arrows */}
            <div className="flex justify-between items-center px-4">
              <button
                onClick={prevImage}
                className="p-3 rounded-full bg-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <FaChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="p-3 rounded-full bg-black bg-opacity-60 hover:bg-opacity-80 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <FaChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-3">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            
          </div>

          {/* Social Icons */}
          

          {/* Registration Form */}
          <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
            {/* Input Field Component */}
            {[
              {
                name: "name",
                type: "text",
                icon: "fas fa-user",
                placeholder: "Name",
              },
              {
                name: "gmail",
                type: "email",
                icon: "fas fa-envelope",
                placeholder: "Email",
              },
              {
                name: "age",
                type: "number",
                icon: "fas fa-user",
                placeholder: "Age",
              },
              {
                name: "address",
                type: "text",
                icon: "fas fa-map-marker-alt",
                placeholder: "Address",
              },
              {
                name: "phoneNumber",
                type: "tel",
                icon: "fas fa-phone",
                placeholder: "Phone Number",
              },
            ].map((f) => (
              <div key={f.name} className="form-field">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className={`${f.icon} text-gray-400`}></i>
                  </div>
                  <input
                    type={f.type}
                    name={f.name}
                    value={user[f.name]}
                    onChange={handleInputChange}
                    placeholder={f.placeholder}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 form-input"
                    required
                  />
                </div>
                {errors[f.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[f.name]}
                  </p>
                )}
              </div>
            ))}

            {/* Gender */}
            <div className="form-field">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-venus-mars text-gray-400"></i>
                </div>
                <select
                  name="gender"
                  value={user.gender}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 form-input appearance-none"
                  required
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <i className="fas fa-chevron-down text-gray-400"></i>
                </div>
              </div>
              {errors.gender && (
                <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
              )}
            </div>

            {/* Password Fields */}
            {[
              {
                name: "password",
                state: showPassword,
                setState: setShowPassword,
                placeholder: "Password",
              },
              {
                name: "confirmPassword",
                state: showConfirmPassword,
                setState: setShowConfirmPassword,
                placeholder: "Confirm Password",
              },
            ].map((f) => (
              <div key={f.name} className="form-field">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-gray-400"></i>
                  </div>
                  <input
                    type={f.state ? "text" : "password"}
                    name={f.name}
                    value={user[f.name]}
                    onChange={handleInputChange}
                    placeholder={f.placeholder}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 form-input"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => f.setState(!f.state)}
                  >
                    {f.state ? (
                      <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors[f.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[f.name]}
                  </p>
                )}
              </div>
            ))}

            {errors.general && (
              <p className="text-red-500 text-xs text-center">
                {errors.general}
              </p>
            )}

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-200 hover:bg-gray-800 hover:transform hover:-translate-y-1"
            >
              SIGN UP
            </button>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-5">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
              >
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
