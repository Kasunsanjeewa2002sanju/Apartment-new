import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import sectionElement from "../../assets/section-element.png";

import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

import RoomsData from "../../Rooms.json";


function Rooms() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Economy", "Standard", "Luxury"];
  const filteredRooms =
    activeTab === "All"
      ? RoomsData
      : RoomsData.filter((room) => room.type === activeTab);

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
            Discover the apartment <br /> made for you
          </h1>
          <div className="mt-10 bg-[#eab308] w-[250px] p-2 text-xl rounded text-black font-medium">
            <Link to="/" className='hover:text-white transition-colors'>Home</Link> &nbsp; / &nbsp;
            <span className="text-black">Apartments</span>
          </div>
        </div>
      </div>

      <div className="section-wrapper bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#222831]">
        {/* Rooms search info */}
        <div className="w-100 lg:px-[12%] px-[8%] py-[150px]">
          <div className="rooms-search-info flex flex-col md:flex-row gap-5 md:gap-0">
            <div className="md:w-1/2">
              <h2 className="text-5xl font-bold flex items-center gap-3 text-white">
                Search Results{" "}
                <span className="bg-[#eab308] p-3 py-2 rounded-md text-black text-3xl font-bold">
                  {filteredRooms.length}
                </span>
              </h2>
            </div>
            <div className="md:w-1/2">
              <div className="search-tabs flex justify-end gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md transition duration-200 font-medium ${
                      activeTab === tab
                        ? "bg-[#eab308] text-black"
                        : "bg-transparent text-gray-300 hover:bg-[#eab308] hover:text-black border border-gray-600 hover:border-[#eab308]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Rooms Info */}
        <div className="w-100 lg:px-[12%] px-[8%] pb-[100px]">
          <div className="rooms-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <div key={room.id} className="room-card bg-gradient-to-br from-[#1a1a1a] to-[#222831] rounded-lg overflow-hidden border border-gray-800 hover:border-[#eab308] transition-all duration-300 hover:shadow-2xl hover:shadow-[#eab308]/20 group">
                <div className="room-image relative overflow-hidden">
                  <Swiper
                    modules={[Pagination, Navigation]}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="w-full h-[250px]"
                  >
                    {room.photos.map((photo, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={photo}
                          alt={`${room.title} ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      room.type === 'Luxury' ? 'bg-[#eab308] text-black' :
                      room.type === 'Standard' ? 'bg-blue-600 text-white' :
                      'bg-green-600 text-white'
                    }`}>
                      {room.type}
                    </span>
                  </div>
                </div>
                
                <div className="room-content p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#eab308] transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {room.description}
                  </p>
                  
                  <div className="room-features flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      Per Person: {room.forPerson}
                    </span>
                    <span className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      Size: {room.size}
                    </span>
                  </div>
                  
                  <div className="room-footer flex items-center justify-between">
                    <div className="price-info">
                      <span className="text-2xl font-bold text-[#eab308]">
                        {room.price}
                      </span>
                      <span className="text-gray-400 text-sm ml-1">/night</span>
                    </div>
                    <Link
                      to={`/rooms/${room.id}`}
                      className="px-6 py-2 bg-[#eab308] text-black font-semibold rounded-full hover:bg-[#fbbf24] transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
