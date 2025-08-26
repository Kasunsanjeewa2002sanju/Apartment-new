import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

import authorImg from "../../assets/faces-4.jpg";
import signatureImg from "../../assets/signature.png";
import heroImg from "../../assets/about-2.png";
import sectionElement from "../../assets/section-element.png";

import sercive1 from "../../assets/services-1.jpg";
import sercive2 from "../../assets/services-2.jpg";
import sercive3 from "../../assets/services-3.jpg";
import sercive4 from "../../assets/services-4.jpg";

import feature1 from "../../assets/feature-icon-1.svg";
import feature2 from "../../assets/feature-icon-2.svg";
import feature3 from "../../assets/feature-icon-3.svg";
import feature4 from "../../assets/feature-icon-4.svg";
import feature5 from "../../assets/feature-icon-5.svg";
import feature6 from "../../assets/feature-icon-6.svg";

import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

function Services() {
  return (
    <>
      {/* Hero Banner */}
      <div className="section-banner mt-5 pt-6 relative flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] min-h-[60vh]">
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
          <h1 className="text-7xl font-semibold text-white">Our Services</h1>
          <div className="mt-10 bg-[#eab308] w-[250px] p-2 text-xl rounded text-black font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &nbsp; / &nbsp;
            <span className="text-black">Services</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="service bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] text-white min-h-screen p-8 w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20">
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#eab308] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase text-black font-bold">
            Services
          </span>
          <h1 className="text-5xl font-semibold text-white">
            Discover Comfort in Every Room
          </h1>
        </div>

        <div className="service-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full">
          {/* item 1 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px] group hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1580312068767-ebae16ef7af1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVybiUyMGx1eHVyeSUyMEZ1cm5pc2hlZCUyMHJvb21zfGVufDB8MXwwfHx8MA%3D%3D"
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-[#eab308] text-center rounded-full py-2 px-4 text-sm font-medium text-black tracking-widest uppercase">
                Fully Furnished Rooms
              </span>
            </div>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#eab308] text-center rounded-full py-1 text-sm font-medium text-black tracking-widest uppercase w-[90%] max-w-[250px] group-hover:opacity-0 transition-opacity duration-300">
              Fully Furnished Rooms
            </span>
          </div>

          {/* item 2 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px] group hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1652961221362-4ea2d7af5b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVybiUyMGx1eHVyeSUyMEZ1cm5pc2hlZCUyMHJvb21zfGVufDB8MXwwfHx8MA%3D%3D"
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-[#eab308] text-center rounded-full py-2 px-4 text-sm font-medium text-black tracking-widest uppercase">
                Easy Online Booking
              </span>
            </div>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#eab308] text-center rounded-full py-1 text-sm font-medium text-black tracking-widest uppercase w-[90%] max-w-[250px] group-hover:opacity-0 transition-opacity duration-300">
              Easy Online Booking
            </span>
          </div>

          {/* item 3 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px] group hover:scale-105 transition-transform duration-300">
            <img
              src="https://plus.unsplash.com/premium_photo-1661759245158-9b90e7400dae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q1VTVE9NRVIlMjBTVVBQT1JUfGVufDB8MXwwfHx8MA%3D%3D"
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-[#eab308] text-center rounded-full py-2 px-4 text-sm font-medium text-black tracking-widest uppercase">
                24/7 Customer Support
              </span>
            </div>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#eab308] text-center rounded-full py-1 text-sm font-medium text-black tracking-widest uppercase w-[90%] max-w-[250px] group-hover:opacity-0 transition-opacity duration-300">
              24/7 Customer Support
            </span>
          </div>

          {/* item 4 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px] group hover:scale-105 transition-transform duration-300">
            <img
              src="https://plus.unsplash.com/premium_photo-1661945231649-e884addfa092?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGVuam95JTIwaW4lMjBhcHJ0bXJudHxlbnwwfDF8MHx8fDA%3D"
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-[#eab308] text-center rounded-full py-2 px-4 text-sm font-medium text-black tracking-widest uppercase">
                Flexible Stay Plans
              </span>
            </div>
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-[#eab308] text-center rounded-full py-1 text-sm font-medium text-black tracking-widest uppercase w-[90%] max-w-[250px] group-hover:opacity-0 transition-opacity duration-300">
              Flexible Stay Plans
            </span>
          </div>
        </div>

        <div className="service-bottom mt-20 w-full flex lg:flex-row flex-col justify-between items-center lg:text-start text-center gap-5">
          <p className="lg:w-1/2 text-gray-300">
            Enjoy modern, comfortable apartments designed for convenience and
            flexibility. From easy online booking to personalized support, our
            services ensure a smooth and stress-free experience every time.
          </p>
          <button className="w-[200px] tracking-[2px] h-[60px] bg-[#eab308] transition hover:bg-[#fbbf24] rounded-full text-black font-semibold uppercase">
            View All Services
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-tl from-[#0f0f0f] via-[#1a1a1a] to-[#222831] w-full px-[8%] lg:px-[12%] py-[100px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Comfort, Convenience & Trust
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore what makes our apartments the ideal choice for your next
              booking, offering modern comforts, trusted service, and a seamless
              living experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: feature1,
                title: "24/7 Concierge",
                desc: "Round-the-clock assistance for all your needs and requests.",
              },
              {
                icon: feature2,
                title: "Free WiFi",
                desc: "High-speed internet access throughout the property.",
              },
              {
                icon: feature3,
                title: "Room Service",
                desc: "Delicious meals delivered to your room anytime.",
              },
              {
                icon: feature4,
                title: "Fitness Center",
                desc: "State-of-the-art equipment for your workout routine.",
              },
              {
                icon: feature5,
                title: "Swimming Pool",
                desc: "Relaxing pool with stunning ocean views.",
              },
              {
                icon: feature6,
                title: "Spa Services",
                desc: "Rejuvenating treatments for ultimate relaxation.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#222831] p-6 rounded-lg border border-gray-800 hover:border-[#eab308] transition-colors duration-300 group"
              >
                <div className="w-16 h-16 bg-[#eab308] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] w-full px-[8%] lg:px-[12%] py-[100px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold inline-block mb-4">
              Our Success
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Numbers That Speak
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in the numbers that tell
              our story of growth and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eab308] mb-2">
                <CountUp end={1000} duration={2.5} />+
              </div>
              <p className="text-gray-300">Happy Guests</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eab308] mb-2">
                <CountUp end={25} duration={2.5} />+
              </div>
              <p className="text-gray-300">Services Offered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eab308] mb-2">
                <CountUp end={15} duration={2.5} />+
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eab308] mb-2">
                <CountUp end={99} duration={2.5} />%
              </div>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
