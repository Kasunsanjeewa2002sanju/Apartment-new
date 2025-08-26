import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import sectionElement from "../../assets/section-element.png";
import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

import blog6 from "../../assets/blog-12.jpg";
import blog1 from "../../assets/blog-2.jpg";
import blog2 from "../../assets/blog-3.jpg";
import blog3 from "../../assets/blog-4.jpg";
import blog4 from "../../assets/blog-5.jpg";
import blog5 from "../../assets/blog-6.jpg";
import avatar from "../../assets/review-7.jpg";

function Blogs() {
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
          <h1 className="text-7xl font-semibold text-white">Our Blogs</h1>
          <div className="mt-10 bg-[#eab308] w-[250px] p-2 text-xl rounded text-black font-medium">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &nbsp; / &nbsp;
            <span className="text-black">Blogs</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#222831] py-[60px] w-full pb-0">
        <div className="w-full lg:w-[95%] mx-auto py-16 px-8 md:px-14 bg-gradient-to-br from-[#1a1a1a] to-[#222831] rounded-[20px] shadow-xl relative z-[10] border border-gray-800">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <span className="bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold mt-4 text-white">
              Popular Publications
            </h2>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                image: "https://images.unsplash.com/photo-1705681948348-a449961555dd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                date: "14-08-2025",
                title: "Choosing the Right Countryside Apartment: Space, View, and Access",
                excerpt:
                  "A practical framework to evaluate rural apartments—floor plans, natural light, outdoor access, and proximity to trails—so every stay feels like home.",
              },
              {
                image: "https://images.unsplash.com/photo-1624204386084-dd8c05e32226?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
                date: "07-08-2025",
                title: "Amenities that Matter in Rural Serviced Apartments",
                excerpt:
                  "From full kitchens to private terraces and secure parking—learn which amenities improve comfort, productivity, and family-friendly stays.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#222831] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-800 hover:border-[#eab308]"
              >
                <div className="overflow-hidden rounded-t-3xl">
                  <img
                    src={item.image}
                    alt="Blog"
                    className="w-full h-[320px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 gap-2 mb-4">
                    <img
                      src={avatar}
                      alt="Author"
                      className="w-7 h-7 rounded-full object-cover border-2 border-[#eab308]"
                    />
                    <span className="text-[#eab308] font-medium">Admin</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#eab308] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link
                      to={`/blogs/${index + 1}`}
                      className="text-[#eab308] hover:text-[#fbbf24] font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">5 min read</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More Blog Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Latest Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  image: "https://images.unsplash.com/photo-1680416124510-5eae1beca412?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGx1eHVhcnklMjBhcGFydG1lbnR8ZW58MHwwfDB8fHww",
                  date: "10-03-2025",
                  title: "Top 10 Apartment Stays for 2025",
                  category: "Apartment Living",
                },
                {
                  image: "https://images.unsplash.com/photo-1730819852720-cf8a9c422ba6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
                  date: "08-03-2025",
                  title: "Must-Have Amenities in Modern Apartments",
                  category: "Lifestyle",
                },
                {
                  image: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwYXBhcnRtZW50c3xlbnwwfDB8MHx8fDA%3D",
                  date: "05-03-2025",
                  title: "Eco-Friendly Apartment Rentals: A Sustainable Choice",
                  category: "Sustainability",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#222831] rounded-lg overflow-hidden border border-gray-800 hover:border-[#eab308] transition-all duration-300 group"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt="Blog"
                      className="w-full h-[200px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#eab308] font-medium uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#eab308] transition-colors">
                      {item.title}
                    </h4>

                    <Link
                      to={`/blogs/${index + 3}`}
                      className="text-[#eab308] hover:text-[#fbbf24] text-sm font-medium transition-colors inline-flex items-center"
                    >
                      Read More
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#eab308] to-[#fbbf24] rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Stay Updated</h3>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest travel tips, hotel
              updates, and exclusive offers delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
