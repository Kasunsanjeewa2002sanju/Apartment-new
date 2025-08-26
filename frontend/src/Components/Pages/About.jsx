import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

import authorImg from "../../assets/faces-4.jpg";
import signatureImg from "../../assets/signature.png";
import heroImg from "../../assets/about-2.png";
import sectionElement from "../../assets/section-element.png";

import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

function About() {
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
          <h1 className="text-7xl font-semibold text-white">
            Find Your Perfect <br /> Apartment Room
          </h1>

          <div className="mt-10 bg-[#eab308] w-[250px] p-2 text-xl rounded text-black font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &nbsp; / &nbsp;
            <span className="text-black">About</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#222831] py-[80px] px-[5%] w-full pb-0">
        <div className="w-full p-[40px] lg:p-[100px] bg-gradient-to-br from-[#1a1a1a] to-[#222831] rounded-[20px] shadow-2xl relative z-[10] border border-gray-800">
          <div className="mx-auto">
            <div className="mb-12">
              <span className="bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold">
                About Us{" "}
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold mt-4 text-white">
                Our Story
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white leading-relaxed text-[15px]">
              <div>
                <p className="mb-5 text-gray-300">
                  At <b>StayEase Apartments</b>, we believe that finding the
                  right place to stay should be simple, comfortable, and
                  stress-free. Our booking platform was built to help guests
                  easily discover and reserve well-designed apartments that feel
                  like home—whether you’re traveling for business, leisure, or
                  long-term stays.
                </p>
                <p className="mb-5 text-gray-300">
                  Each apartment is carefully selected to ensure comfort,
                  convenience, and modern living standards. From cozy single
                  rooms to spacious family apartments, we provide options
                  tailored to every lifestyle and need. We value reliability and
                  transparency, making sure your booking experience is smooth
                  and secure.
                </p>
                <p className="mb-5 text-gray-300">
                  Our goal is to create a platform where guests feel at ease and
                  owners can confidently connect with the right audience. With a
                  focus on modern design, accessibility, and user-friendly
                  booking, we bridge the gap between comfort and convenience.
                </p>
              </div>

              <div>
                <p className="mb-5 text-gray-300">
                  At the heart of our service is the belief that a great stay
                  begins with thoughtful choices. That’s why we emphasize
                  quality, affordability, and personalized experiences—making
                  sure every guest finds an apartment that suits their unique
                  needs.
                </p>
                <p className="mb-5 text-gray-300">
                  We work closely with trusted property owners to maintain high
                  standards across all listings. Every detail is designed to
                  ensure that your stay is not only functional but also
                  enjoyable and memorable.
                </p>
                <p className="mb-8 text-gray-300">
                  Innovation, trust, and care guide everything we do. With
                  StayEase Apartments, you can relax knowing that your next stay
                  is just a few clicks away.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
                  <div className="flex items-center gap-4">
                    <img
                      src={authorImg}
                      alt="Emma Millar"
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#eab308]"
                    />
                    <div>
                      <h4 className="font-semibold text-white">Emma Millar</h4>
                      <span className="text-sm text-[#eab308]">
                        Apartment Booking Manager
                      </span>
                    </div>
                  </div>
                  <img
                    src={signatureImg}
                    alt="signature"
                    className="w-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-tl from-[#0f0f0f] via-[#1a1a1a] to-[#222831] w-full px-[8%] lg:px-[12%] py-[100px] overflow-hidden pb-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start relative">
            <img
              src={heroImg}
              alt=""
              className="w-full max-w-md object-contain"
            />
          </div>
          <div className="text-white text-center lg:text-left ">
            <span className="bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold inline-block mb-4">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 ">
              Discover the <br />{" "}
              <span className="text-[#eab308]">Touch of Nature</span>
            </h2>
            <p className="text-gray-300 text-[15px] mb-4">
              We understand that finding the right apartment can be both
              exciting and challenging. Our goal is to make this journey easier
              by offering a platform where every detail is clear, reliable, and
              designed to give you confidence in your choice.
            </p>

            <p className="text-gray-300 text-[15px] mb-8">
              We believe that true comfort comes from thoughtful planning and
              dedicated service. Every booking is built on a foundation of
              trust, care, and simplicity so you can focus on enjoying your stay
              while we handle the details.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <button className="px-8 py-3 bg-[#eab308] text-black font-semibold rounded-full hover:bg-[#fbbf24] transition-colors duration-300">
                Learn More
              </button>
              <button className="px-8 py-3 border-2 border-[#eab308] text-[#eab308] font-semibold rounded-full hover:bg-[#eab308] hover:text-black transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] w-full px-[8%] lg:px-[12%] py-[100px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold inline-block mb-4">
              Our Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Apartment Booking Highlights
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform’s impact is shown through numbers that reflect
              trusted bookings, happy guests, and a growing community of
              satisfied residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eab308] mb-2">
                <CountUp end={500} duration={2.5} />+
              </div>
              <p className="text-gray-300">Happy customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eab308] mb-2">
                <CountUp end={50} duration={2.5} />+
              </div>
              <p className="text-gray-300">Luxury Rooms</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eab308] mb-2">
                <CountUp end={10} duration={2.5} />+
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

export default About;
