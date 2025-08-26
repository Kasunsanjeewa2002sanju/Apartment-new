import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroImg from "../../assets/about-2.png";
import sectionElement from "../../assets/section-element.png";

import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

import RoomsData from "../../Rooms.json";

import amenit1 from "../../assets/air-conditioning.png";
import amenit2 from "../../assets/wi-fi.png";
import amenit3 from "../../assets/television.png";
import amenit4 from "../../assets/pet.png";
import amenit5 from "../../assets/food.png";
import amenit6 from "../../assets/games.png";
import amenit7 from "../../assets/location.png";

import { button } from "framer-motion/client";
import Index from "./Index";

function RoomsDetails() {
  const { id } = useParams();
  const room = RoomsData.find((room) => room.id === id);
  if (!room) {
    return <div className="text-center py-20 text-xl">Room not Found?</div>;
  }

  return (
    <>
      {/* Section Banner */}
      <div className="section-banner mt-5 pt-6 relative flex items-center justify-center">
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element1 absolute"
          alt=""
        />
        <img
          src={sectionElement}
          className="w-full h-full section-banner-element2 absolute"
          alt=""
        />
        <img
          src={element1}
          className="w-full h-full section-banner-element3 absolute"
          alt=""
        />
        <img
          src={element2}
          className="w-full h-full section-banner-element4 absolute"
          alt=""
        />
        <img
          src={element3}
          className="w-full h-full section-banner-element5 absolute"
          alt=""
        />

        <div className="section-banner-content flex items-center flex-col text-center z-[55]">
          <h1 className="text-7xl font-semibold">
            Choose your <br /> dream Apartment
          </h1>
          <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">ApartmentDetails</span>
          </div>
        </div>
      </div>

      {/* Show Rooms Details */}
      <div className="w-full py-[100px] px-[8%] lg:px-[12%] bg-[#f3fdfd]">
        <h2 className="text-6xl font-briconlage font-bold mb-4 ">
          {room.title}
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Swiper Selection */}
          <div className="w-full lg:w-2/3 p-5 rounded-2xl">
            <Swiper
              spaceBetween={30}
              speed={1000}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              className="w-full h-[420px] bg-white shadow-lg rounded-xl overflow-hidden custom-swiper"
              style={{ padding: "10px" }}
            >
              {room.photos.map((photo, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={photo}
                    alt={`${room.title} ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="py-[50px] pb-">
              <h2 className="text-3xl font-bold my-[20px]">Key features</h2>

              <div className="rooms-features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className="flex items-center gap-3 bg-white ronded-xl shadow-md p-4">
                  <img
                    src={amenit1}
                    className="w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md"
                    alt=""
                  />
                  <p className="font-medium text-gray-600 text-xl">
                    Air Conditioned
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-white ronded-xl shadow-md p-4">
                  <img
                    src={amenit2}
                    className="w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md"
                    alt=""
                  />
                  <p className="font-medium text-gray-600 text-xl">
                    Free Wi-fi
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-white ronded-xl shadow-md p-4">
                  <img
                    src={amenit3}
                    className="w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md"
                    alt=""
                  />
                  <p className="font-medium text-gray-600 text-xl">Smart TV</p>
                </div>

                <div className="flex items-center gap-3 bg-white ronded-xl shadow-md p-4">
                  <img
                    src={amenit4}
                    className="w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md"
                    alt=""
                  />
                  <p className="font-medium text-gray-600 text-xl">
                    Pet Friendly
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-white ronded-xl shadow-md p-4">
                  <img
                    src={amenit5}
                    className="w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md"
                    alt=""
                  />
                  <p className="font-medium text-gray-600 text-xl">
                    Free Lunch
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-white ronded-xl shadow-md p-4">
                  <img
                    src={amenit6}
                    className="w-[50px] h-[50px] p-3 bg-[#d6f6ff] rounded-md"
                    alt=""
                  />
                  <p className="font-medium text-gray-600 text-xl">Game Room</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold my-[20px] pt-[30px]">
                Description
              </h2>

              <p className="py-3" style={{ fontWeight: "300" }}>
                Our hotel rooms are thoughtfully designed to blend modern
                elegance with homely comfort. Each room features contemporary
                décor, warm lighting, and premium furnishings to create a
                relaxing atmosphere. Whether you're traveling for business or
                leisure, you'll find everything you need to unwind after a long
                day from cozy bedding to a well-equipped workspace.
              </p>
              <p className="py-3" style={{ fontWeight: "300" }}>
                Every room comes with a full range of amenities including
                high-speed Wi-Fi, air conditioning, a flat-screen TV, minibar,
                complimentary tea and coffee, and a private bathroom stocked
                with luxurious toiletries. Select rooms offer stunning views of
                the city or garden, private balconies, and upgraded features
                like Jacuzzi tubs or spacious seating areas.
              </p>
              <p className="py-3" style={{ fontWeight: "300" }}>
                We offer a variety of room types from single deluxe and twin
                rooms to family suites and executive spaces ensuring the perfect
                fit for solo travelers, couples, families, and corporate guests
                alike. With 24-hour room service, daily housekeeping, and
                attentive staff always ready to help, your stay will be as
                seamless as it is memorable.
              </p>

              <h2 className="text-3xl font-bold my-[20px] pt-[30px]">
                Amenitites
              </h2>
              <div>
                <div className="flex flex-col lg:flex-row gap-8 items-start mb-5">
                  <div className="w-full lg:w-2/3">
                    <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg">
                      <img
                        src={amenit1}
                        className=" w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6ff] rounded-md"
                        alt=""
                      />
                      <h2 className="text-3xl amenit-text font-semibold">
                        Air Conditioned
                      </h2>
                      <p className="mt-3">
                        Our hotel is situated right on the beach, offering
                        stunning ocen views.
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/3">
                    <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg">
                      <img
                        src={amenit2}
                        className=" w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6ff] rounded-md"
                        alt=""
                      />
                      <h2 className="text-3xl amenit-text font-semibold">
                        Free Wi-fi
                      </h2>
                      <p className="mt-3">
                        Our hotel is situated right on the beach, offering
                        stunning ocen views.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start mb-5">
                  <div className="w-full lg:w-2/3">
                    <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg">
                      <img
                        src={amenit3}
                        className=" w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6ff] rounded-md"
                        alt=""
                      />
                      <h2 className="text-3xl amenit-text font-semibold">
                        Smart TV
                      </h2>
                      <p className="mt-3">
                        Our hotel is situated right on the beach, offering
                        stunning ocen views.
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-2/3">
                    <div className="bg-white p-[40px] flex flex-col rounded-2xl shadow-lg">
                      <img
                        src={amenit7}
                        className=" w-[60px] h-[60px] mb-7 p-3 bg-[#d6f6ff] rounded-md"
                        alt=""
                      />
                      <h2 className="text-3xl amenit-text font-semibold">
                        Free Transfer
                      </h2>
                      <p className="mt-3">
                        Our hotel is situated right on the beach, offering
                        stunning ocen views.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold my-[20px] pt-[30px]">
                Location
              </h2>
              <div className="w-full rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126264.47339565857!2d80.7832!3d6.9483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173c19decb3b7%3A0x1f67d51d4045e97f!2sNuwara+Eliya!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 self-start sticky top-[125px] bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6">
            <div className="border-2 border-yellow-400 rounded-2xl px-6 py-4 text-center flex justify-center items-end">
              <h2 className="text-4xl font-bold text-[#000] flex items-start">
                <span className="text-sm"></span> {room.price}
              </h2>
              <p className="text-gray-500 text-sm font-normal ms-4">
                /per night
              </p>
            </div>
            <div className="flex justify-around bg-[#e8faff] py-3 rounded-xl text-[#1d5c63] font-medium text-sm">
              <div className="flex items-center gap-2">
                <i className="ri-user-line text-lg"></i> Per Person: {room.forPerson}
              </div>
              <div className="flex items-center gap-2">
                <i className="ri-aspect-ratio-line text-lg"></i> Size:{" "}
                {room.size}
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                CHECK-IN
              </label>
              <input
                type="date"
                className="w-full p-3 bg-[#e8faff] rounded-md outline-none "
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                CHECK-OUT
              </label>
              <input
                type="date"
                className="w-full p-3 bg-[#e8faff] rounded-md outline-none "
              />
            </div>

            <Link to={`/checkout/${room.id}`}>
              <button className="w-full py-3 bg-[#23bcec] hover:bg-[#00arr2] transition text-white text-lg rounded-full flex items-center justify-center gap-2 mt-4">
                <i className="ri-bookmark-line"></i> BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta p-[50px] bg-[#f3fdfd]">
        <div className="py-[100px] rounded-xl bg-white shadow flex items-center justify-center">
          <div className="section-title text-center space-y-4">
            <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-briconlage tracking-wider uppercase">
              Call to Action
            </span>
            <h1 className="text-6xl font-semibold text-center">
              Do you have any Question ? <br />
              We are available 24/7{" "}
            </h1>
            <div className="flex items-center justify-center py-[30px] gap-2">
              <button className="w-[170px] h-[50px] bg-[#ecb934] transition hover:bg-[#ffca44] rounded-full text-white">
                <i className="bi bi-envelope pe-2"></i> Get In Touch
              </button>
              <Link to={`/checkout/${room.id}`}>
                <button className="w-[150px] h-[50px] ">
                  BOOK NOW <i className="ri-arrow-right-line ps-2"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recommend */}
      <div className="w-full py-[100px] px-[8%] lg:px-[12%] bg-[#f3fdfd]">
        <div className="section-title text-start space-y-4">
          <span className="bg-[#d5f1f1] rounded-full px-5 py-2 font-briconlage uppercase">
            Welcome Friend
          </span>
          <h1 className="text-5xl font-semibold">we recommend</h1>
        </div>
        <div className="mt-5 pt-5">
          <Swiper
            slidesPerView={3.5}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              1399: { slidesPerView: 3.5 },
              1199: { slidesPerView: 2.5 },
              991: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            style={{ padding: "20px 0" }}
          >
            {RoomsData.map((room) => (
              <SwiperSlide key={room.id}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden show-rooms">
                  <div className="relative">
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      className="w-full h-[280px] custom-swiper"
                    >
                      {room.photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={photo}
                            alt={`${room.title} ${index + 1}`}
                            className="w-full h-[280px] object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="bg-[#e8faff] flex gap-4 px-4 py-3 text-sm">
                    <span className="flex items-center gap-1">
                      <i className="bg-white shadow rounded py-1 px-3 ri-user-line"></i>
                      Adults: {room.adults}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="bg-white shadow rounded py-1 px-3 ri-aspect-ratio-line"></i>
                      Size: {room.size} m²
                    </span>
                  </div>

                  <Link to={`/rooms/${room.id}`}>
                    <div className="px-6 pt-4 pb-4">
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold mb-1">
                          {room.title}
                        </h3>
                        <p className="text-md text-gray-500">
                          {room.description}
                        </p>
                      </div>
                      <div className="border-t mt-4 pt-4 flex justify-between items-center">
                        <p className="text-lg font-bold text-[#000]">
                          {room.price}
                        </p>
                        <button className="w-12 h-12 bg-[#23bcec] rounded-full flex items-center justify-center text-white text-xl">
                          <i className="ri-bookmark-line"></i>
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      


    </>
  );
}

export default RoomsDetails;
