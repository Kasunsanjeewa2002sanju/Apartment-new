import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

  // Image carousel
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?...',
      title: 'Luxury Suite',
      description: 'Experience ultimate comfort in our premium suites'
    },
    {
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?...',
      title: 'Modern Apartment',
      description: 'Contemporary design meets functionality'
    },
    {
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?...',
      title: 'Cozy Bedroom',
      description: 'Your perfect retreat after a long day'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === carouselImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => setCurrentImageIndex(index);

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "gmail":
        if (!value.trim()) error = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          error = "Please enter a valid email address";
        break;
      case "password":
        if (!value) error = "Password is required";
        else if (value.length < 6) error = "Password must be at least 6 characters";
        else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(value))
          error = "Password must contain uppercase, lowercase, number, special character";
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
        else if (value.trim().length < 5) error = "Please enter a complete address";
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
      // Remove confirmPassword before sending to backend
      const { ...userData } = user;
      delete userData.confirmPassword;
      const res = await axios.post("http://localhost:4000/api/users", userData);
      if (res.data) {
        alert("Registration Successful!");
        history("/login");
      }
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        general: err.response?.data?.error || "Registration failed. Try again.",
      }));
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Carousel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          ))}
        </div>
        <div className="relative z-20 flex flex-col justify-between h-full p-12 text-white">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-4">{carouselImages[currentImageIndex].title}</h2>
            <p className="text-lg text-yellow-200">{carouselImages[currentImageIndex].description}</p>
          </div>
          <div className="space-y-6">
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
            <div className="flex justify-between items-center px-4">
              <button onClick={prevImage} className="p-3 rounded-full bg-black bg-opacity-60 hover:bg-opacity-80">
                <FaChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button onClick={nextImage} className="p-3 rounded-full bg-black bg-opacity-60 hover:bg-opacity-80">
                <FaChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-3">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          </div>

          <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
            {["name", "gmail", "age", "address", "phoneNumber"].map((field) => (
              <div key={field}>
                <input
                  type={field === "age" ? "number" : field === "gmail" ? "email" : "text"}
                  name={field}
                  value={user[field]}
                  onChange={handleInputChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg"
                  required
                />
                {errors[field] && <p className="text-red-500 text-xs">{errors[field]}</p>}
              </div>
            ))}

            {/* Gender */}
            <select
              name="gender"
              value={user.gender}
              onChange={handleInputChange}
              className="block w-full px-3 py-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}

            {/* Password */}
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={user.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg"
                required
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg"
                required
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
            </div>

            {errors.general && <p className="text-red-500 text-xs text-center">{errors.general}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800"
            >
              SIGN UP
            </button>
          </form>

          <div className="text-center mt-5">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-yellow-600 hover:text-yellow-700 font-medium">
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
