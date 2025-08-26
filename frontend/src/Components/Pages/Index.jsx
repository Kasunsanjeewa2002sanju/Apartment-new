import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../src/index.css";

import sercive1 from "../../assets/1.jpeg";
import sercive2 from "../../assets/2.jpeg";
import sercive3 from "../../assets/3.jpeg";
import sercive4 from "../../assets/4.jpeg";



import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

import RoomsData from "../../Rooms.json";

import heroImg from "../../assets/about.png";

import avatar1 from "../../assets/review-1.jpg";
import avatar2 from "../../assets/review-2.jpg";
import avatar3 from "../../assets/review-3.jpg";
import avatar4 from "../../assets/review-4.jpg";
import avatar5 from "../../assets/review-5.jpg";
import avatar6 from "../../assets/review-6.jpg";

import blog1 from "../../assets/blog-2.jpg";
import blog2 from "../../assets/blog-3.jpg";
import blog3 from "../../assets/blog-4.jpg";

function Index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab] = useState("All");
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filteredRooms =
    activeTab === "All"
      ? RoomsData
      : RoomsData.filter((room) => room.type === activeTab);

  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];
  const testimonials = [
    {
      name: "Sarah Newman",
      company: "Envato Market",
      message:
        "An unforgettable stay at Aquarelle! The beachfront location provided breathtaking views, and the hotel's blend of luxury and a relaxed atmosphere was perfect. The attentive staff and excellent amenities, including a refreshing pool and superb dining options, made my experience truly exceptional. Aquarelle is a haven for those seeking relaxation with a touch of indulgence.",
    },
    {
      name: "Ethen Patel",
      company: "Creative Market",
      message:
        "From the friendly reception to the elegant rooms, Aquarelle exceeded my expectations. The beach access is ideal for morning walks, and the restaurant serves some of the freshest seafood I've had. This place blends sophistication with natural beauty effortlessly. Can't wait to return!",
    },
    {
      name: "Amelia Johnson",
      company: "CodeCanyon",
      message:
        "What a relaxing and enjoyable experience! Aquarelle delivered everything I needed - peace, luxury, and delicious food. The poolside area was perfect for spending a lazy afternoon. I appreciated how clean and well-maintained the entire property was. Truly a gem on the coast!",
    },
    {
      name: "Liam Carter",
      company: "ThemeForest",
      message:
        "Aqoarelle is a beautiful retreat! The views from the suite were stunning, and the attention to detail throughout the hotel was impressive. The staff made us feel welcome from the moment we arrived, and the spa treatments were top-notch. I'd recommend this place to anyone looking to unwind in style.",
    },
    {
      name: "Liam Carter",
      company: "ThemeForest",
      message:
        "Aqoarelle is a beautiful retreat! The views from the suite were stunning, and the attention to detail throughout the hotel was impressive. The staff made us feel welcome from the moment we arrived, and the spa treatments were top-notch. I'd recommend this place to anyone looking to unwind in style.",
    },
    {
      name: "Amelia Johnson",
      company: "CodeCanyon",
      message:
        "What a relaxing and enjoyable experience! Aquarelle delivered everything I needed - peace, luxury, and delicious food. The poolside area was perfect for spending a lazy afternoon. I appreciated how clean and well-maintained the entire property was. Truly a gem on the coast!",
    },
  ];

  return (
    <>
      {/* HERO ----------------------------------------------------------- */}
      <div className="hero w-full lg:px-[12%] px-[8%] py-[150px] flex items-center justify-center">
        <div className="hero-content w-full flex flex-col gap-4 z-[9] relative">
          <span className="bg-[#eab308] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase text-black font-extrabold text-[#204f5e] bg-[#d5f1f1] w-fit py-1 px-3 rounded-full text-sm lg:text-base">
            Hello! Welcome..
          </span>
          <h1 className="text-3xl sm:text-5xl xl:text-7xl font-[600] mb-5 text-white">
            Pinpoint your <br /> Dream Heaven.
          </h1>
        </div>
      </div>

      {/* SERVICES ------------------------------------------------------- */}
      <div className="service bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] text-white min-h-screen p-8 w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20">
        <div className="section-title text-center w-full space-y-4 ">
          <span className="bg-[#eab308] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase text-black font-extrabold">
            Services
          </span>
          <h1 className="text-5xl font-semibold text-white">
            Discover the Luxury Collection
          </h1>
        </div>

        <div className="service-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-10 w-full">
          {/* item 1 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px]">
            <img
              src={sercive1}
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Work Area
            </span>
          </div>

          {/* item 2 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px]">
            <img
              src={sercive2}
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Balcony Views
            </span>
          </div>

          {/* item 3 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px]">
            <img
              src={sercive3}
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Swimming Pools
            </span>
          </div>

          {/* item 4 */}
          <div className="service-item relative rounded-lg overflow-hidden flex-shrink-0 snap-center w-[280px]">
            <img
              src={sercive4}
              alt="service"
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white text-center rounded-full py-1 text-sm font-medium text-[#204f5e] tracking-widest uppercase w-[90%] max-w-[250px]">
              Fitness Centers
            </span>
          </div>
        </div>

        <div className="service-bottom mt-20 w-full flex lg:flex-row flex-col justify-between items-center lg:text-start text-center gap-5">
          <p className="lg:w-1/2 text-white">
            More than just a place to stay our apartments offer the perfect
            balance of privacy, convenience, and comfort for every kind of
            traveler. Whether it’s a weekend escape or a month-long stay, you’ll
            feel right at home.
          </p>
          <button className="w-[200px] tracking-[2px] h-[60px] bg-[#ecb934] transition hover:bg-[#ffca44] rounded-full text-white uppercase">
            Read More
          </button>
        </div>
      </div>

      {/* FEATURES ------------------------------------------------------- */}
      <div className="features bg-gradient-to-tl from-[#0f0f0f] via-[#222831] to-[#1a1a1a] w-full lg:px-[12%] px-[8%] py-[150px] flex flex-col items-center justify-center gap-20 z-[999] ">
        {/* title */}
        <div className="section-title text-center w-full space-y-4">
          <span className="bg-[#eab308] text-black font-extrabold rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
            Features
          </span>
          <h1 className="text-5xl font-semibold text-white">
            Amenities That Make Your Stay Feel Like Home
          </h1>
        </div>

        {/* unified grid wrapper */}
        <div className="features-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 z-[9]">
          {/* items */}
          {[
            {
              icon: "ri-restaurant-line",
              title: "Fully Equipped Kitchen",
              desc: "Cook your favorite meals with ease in a private kitchen complete with modern appliances and utensils.",
            },
            {
              icon: "ri-sofa-line",
              title: "Cozy Living Spaces",
              desc: "Relax in tastefully furnished apartments with spacious lounges, modern decor, and natural lighting.",
            },
            {
              icon: "ri-t-shirt-line",
              title: "In-Apartment Laundry",
              desc: "Enjoy the convenience of a washer and dryer in your apartment—perfect for extended stays or families.",
            },
            {
              icon: "ri-wifi-line",
              title: "High-Speed Wi-Fi",
              desc: "Stay connected with fast and reliable Wi-Fi, ideal for remote work, streaming, or video calls.",
            },
            {
              icon: "ri-building-line",
              title: "Private Balcony",
              desc: "Breathe in the fresh air and enjoy city or garden views from your own private balcony space.",
            },
            {
              icon: "ri-parking-box-line",
              title: "Secure Parking",
              desc: "Enjoy peace of mind with dedicated, secure parking facilities included with your apartment stay.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="features-item bg-[#2a2a2a] rounded-xl py-14 px-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="h-[80px] w-[80px] bg-[#3a3a3a] flex items-center justify-center rounded-lg text-yellow-500 text-4xl">
                <i className={item.icon}></i>
              </div>
              <h3 className="mt-12 xxl:text-3xl text-2xl mb-4 font-semibold text-yellow-500">
                {item.title}
              </h3>
              <p className="font-light text-white">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ROOMS ------------------------------------------------------- */}
      <div className="py-[80px] bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f]">
        <div className="section-title text-center w-full space-y-4 ">
          <span className="bg-[#eab308] rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase text-black font-extrabold">
            Rooms
          </span>
          <h1 className="text-2xl sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight text-white">
            Our Best Rooms
          </h1>
        </div>
      </div>

      <div className="w-full lg:px-[12%] px-[8%] pb-[100px] bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#2a2a2a] rounded-2xl shadow-md overflow-hidden show-rooms"
            >
              <div className="relative">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  className="w-full h-[280px] custom-swiper "
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

              <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] flex gap-4 px-4 py-3 text-sm">
                <span className="flex items-center gap-1 text-yellow-500">
                  <i className="text-black bg-yellow-500 shadow rounded py-1 px-3 ri-user-line"></i>
                  Adults: {room.adults}
                </span>
                <span className="flex items-center gap-1 text-yellow-500">
                  <i className="shadow rounded py-1 px-3 ri-aspect-ratio-line text-black bg-yellow-500"></i>
                  Size: {room.size} m²
                </span>
              </div>

              <Link to={`/rooms/${room.id}`}>
                <div className="px-6 pt-4 pb-4">
                  <div className="py-4">
                    <h3 className="text-2xl font-semibold mb-1 text-yellow-500">
                      {room.title}
                    </h3>
                    <p className="text-md text-gray-500 text-white">{room.description}</p>
                  </div>
                  <div className="border-t mt-4 pt-4 flex justify-between items-center ">
                    <p className="text-lg font-bold text-[#000] text-yellow-500">
                      {room.price}
                    </p>
                    <button className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl">
                      <i className="ri-bookmark-line"></i>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT ------------------------------------------------------- */}
      <div className="about bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] about-1 bg-[#f3fdfd] lg:px-[12%] px-[8%] pb-[150px] flex items-center flex-col lg:flex-row justify-between gap-10 relative overflow-hidden">
        <div className="py-[80px]">
          <div className="section-title text-start space-y-4 relative z-[9] lg:w-3/4 w-full">
            <span className="bg-[#eab308] text-black font-extrabold rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
              About Us
            </span>
            <h1 className="pb-5 text-2xl sm:text-5xl font-semibold w-full leading-tight text-white">
              Why more than a million people choose us
            </h1>

            <ul className="flex flex-col gap-10">
              <li className="flex flex-col sm:flex-row items-start gap-5">
                <span className="text-2xl font-bold text-[#ecb934]">01.</span>
                <div>
                  <h4 className="md:text-2xl text-xl font-semibold mb-2 text-yellow-500">
                    Ocean Oasis
                  </h4>
                  <p className="text-base md:text-lg text-white">
                    We reveal the complete experience, crafted by the true
                    originator with thoughtful design and a vision of
                    excellence.
                  </p>
                </div>
              </li>

              <li className="flex flex-col sm:flex-row items-start gap-5">
                <span className="text-2xl font-bold text-[#ecb934]">02.</span>
                <div>
                  <h4 className="md:text-2xl text-xl font-semibold mb-2 text-yellow-500">
                    Beach Heavan
                  </h4>
                  <p className="text-base md:text-lg text-white">
                    We proudly unveil the full experience, thoughtfully crafted
                    by the originator of truth and a visionary architect of
                    bliss.
                  </p>
                </div>
              </li>

              <li className="flex flex-col sm:flex-row items-start gap-5">
                <span className="text-2xl font-bold text-[#ecb934]">03.</span>
                <div>
                  <h4 className="md:text-2xl text-xl font-semibold mb-2 text-yellow-500">
                    Sunset Bliss
                  </h4>
                  <p className="text-base md:text-lg text-white">
                    We reveal the complete truth a creation shaped by the
                    visionary who first imagined it, blending honesty with
                    thoughtful design.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="about-images w-full h-full relative z-[9]">
            <img
              src={sercive1}
              alt="service-image"
              className="about-image about-image1"
            />
            <img
              src={sercive2}
              alt="service-image"
              className="about-image about-image2"
            />
            <img
              src={sercive3}
              alt="service-image"
              className="about-image about-image3"
            />
            <img
              src={sercive4}
              alt="service-image"
              className="about-image about-image4"
            />

            <img
              src={element1}
              alt="elemant-image"
              className="about-elemant1"
            />
            <img
              src={element2}
              alt="elemant-image"
              className="about-elemant2"
            />
            <img
              src={element3}
              alt="elemant-image"
              className="about-elemant3"
            />
          </div>
        </div>
      </div>

      {/* ABOUT 2 ------------------------------------------------------- */}
      <div className="about-2 bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] lg:px-[12%] px-[8%] pb-[150px] relative overflow-hidden">
        <div className="about flex flex-col-reverse lg:flex-row items-center justify-between gap-20 relative z-[10]">
          {/* Right Hero imge */}
          <div className="w-full lg:w-1/2 relative z-[9]">
            <img
              src={heroImg}
              alt="about"
              className="w-full h-full object-contain relative z-10"
            />
          </div>
          <div className="w-full lg:w-1/2 text-start">
            <span className="bg-[#eab308] text-black font-extrabold rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
              About Us
            </span>
            <h1 className=" py-6 text-2xl sm:text-4xl font-semibold leading-tight text-start text-yellow-500">
              Our Goal and Philosophy
            </h1>

            <p className="text-gray-500 mb-4 text-white">
              We honor those who endure and reveal the complete story sharing
              insights of a blessed life, for without effort, no true reward is
              possible
            </p>
            <p className="text-gray-500 mb-8 text-white">
              In our pursuit of joy and fulfillment, we often face challenges
              and discomfort. True reward comes through effort and dedication.
              Pleasure is meaningful only when earned, and comfort follows
              commitment not convenience.
            </p>
            <div className="flex w-full flex-col sm:flex-row items-center gap-4">
              <button className="bg-[#fdc335] text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-[#e6ae00] transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5h2l3 9l3-6l4 10h4"></path>
                </svg>
                Get in Touch
              </button>

              <button className="text-yellow-500 font-semibold flex items-center gap-2 hover:underline transition ">
                Book Now
                <i className="fa-solid fa-arrow-right text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS ------------------------------------------------------- */}
      <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] w-full testimonials  ">
        <div className="bg-[#2a2a2a] w-full lg:w-[95%] mx-auto py-12  rounded-[20px] box-shadow-large relative z-[10]">
          <div className=" text-center mb-12 ">
            <span className="bg-[#eab308]  text-black font-extrabold rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
              Reviews
            </span>
            <h1 className="text-yellow-500 text-2xl sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight mt-12">
              Customer Voices : <br /> Hear What They Say!
            </h1>
            <div className="flex h-[50px] items-center justify-center space-x-4 mb-6 mt-6 text-white">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`avatar${index}`}
                  className={`cursor-pointer rounded-full object-cover ${
                    activeIndex === index ? "w-16 h-16" : "w-12 h-12"
                  } transition-all duration-300`}
                  onClick={() => {
                    setActiveIndex(index);
                    swiperRef.current?.slideToLoop(index);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="max-w-4xl mx-auto relative text-white">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center text-center justify-center px-6 h-[350px] text-white">
                    <div className="text-[#ecb934] text-4xl mb-4">"</div>
                    <p className="text-gray-600 text-base italic max-w-2xl text-white">
                      {testimonial.message}
                    </p>
                    <div className="mt-4">
                      <h4 className="font-bold text-lg text-[#1d2b3a] text-white">
                        {testimonial.name}
                      </h4>
                      <span className="text-sm uppercase tracking-wide text-gray-400 text-white">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={prevRef}
              className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 transition"
            >
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>

            <button
              ref={nextRef}
              className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 transition"
            >
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* BLOGS ------------------------------------------------------- */}
      <div className="bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] lg:px-[12%] px-[8%] pb-[150px] flex flex-col items-center justify-center gap-10 z-[9] relative overflow-hidden pt-[20px]">
        <span className="bg-[#eab308] text-black font-extrabold rounded-full px-5 py-2 font-bricolage tracking-wider text-sm uppercase">
          Our Blogs
        </span>
        <h1 className="text-2xl sm:text-5xl font-semibold w-full xl:w-[50%] mx-auto leading-tight text-yellow-500">
          Latest blog publications
        </h1>

        {/* Blog wrapper  ------------------------------------------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full text-left">
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group p-4">
            <div className="overflow-hidden rounded-t-[16px]">
              <img
                src={blog1}
                alt="blog-image"
                className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#f2fbfb] rounded-b-[16px]">
              <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                <img
                  src={blog1}
                  alt="blog-image"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span>paul T.</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>24.09.2025</span>
              </div>
              <h3 className="font-semibold xl:text-2xl text-xl text-[#1d2b3a] mb-2 leading-snug">
                Why your next amaizing adventure should be on the beach
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                I will explain to you the entire story of how things are said to
                be from the blessed lives of those who are blamed and praised.
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group"
              >
                Read More
                <span className="m1-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line"></span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group p-4">
            <div className="overflow-hidden rounded-t-[16px]">
              <img
                src={blog2}
                alt="blog-image"
                className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#f2fbfb] rounded-b-[16px]">
              <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                <img
                  src={blog2}
                  alt="blog-image"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span>paul T.</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>24.09.2025</span>
              </div>
              <h3 className="font-semibold xl:text-2xl text-xl text-[#1d2b3a] mb-2 leading-snug">
                The Best Travel Insuarance Companies for Seniors
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                I will explain to you the entire story of how things are said to
                be from the blessed lives of those who are blamed and praised.
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group"
              >
                Read More
                <span className="m1-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line"></span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group p-4">
            <div className="overflow-hidden rounded-t-[16px]">
              <img
                src={blog3}
                alt="blog-image"
                className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-[#f2fbfb] rounded-b-[16px]">
              <div className="flex items-center text-sm text-gray-500 gap-2 mb-4">
                <img
                  src={blog3}
                  alt="blog-image"
                  className="w-6 h-6 rounded-full object-cover"
                />
                <span>paul T.</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>24.09.2025</span>
              </div>
              <h3 className="font-semibold xl:text-2xl text-xl text-[#1d2b3a] mb-2 leading-snug">
                18 Easy steps for Planing your Next Trip
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                I will explain to you the entire story of how things are said to
                be from the blessed lives of those who are blamed and praised.
              </p>
              <a
                href="#"
                className="text-sm font-semibold text-[#1d2b3a] inline-flex items-center group"
              >
                Read More
                <span className="m1-1 group-hover:translate-x-1 transition-transform ri-arrow-right-s-line"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
