import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

import authorImg from '../../assets/faces-4.jpg';
import signatureImg from '../../assets/signature.png';
import heroImg from '../../assets/about-2.png';
import sectionElement from '../../assets/section-element.png';

import element1 from '../../assets/element-1.png';
import element2 from '../../assets/element-2.png';
import element3 from '../../assets/element-3.png';

function About() {
  return (
    <>
      {/* Hero Banner */}
      <div className='section-banner mt-5 pt-6 relative flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] via-[#222831] to-[#0f0f0f] min-h-[60vh]'>
        <img src={sectionElement} className='w-full h-full section-banner-element1 absolute opacity-20' alt="" />
        <img src={sectionElement} className='w-full h-full section-banner-element2 absolute opacity-20' alt="" />
        <img src={element1} className='w-full h-full section-banner-element3 absolute opacity-20' alt="" />
        <img src={element2} className='w-full h-full section-banner-element4 absolute opacity-20' alt="" />
        <img src={element3} className='w-full h-full section-banner-element5 absolute opacity-20' alt="" />
        
        <div className="section-banner-content flex items-center flex-col text-center z-[55]">
            <h1 className='text-7xl font-semibold text-white'>We are the largest <br />central Hotel</h1>
            <div className='mt-10 bg-[#eab308] w-[250px] p-2 text-xl rounded text-black font-medium'>
                <Link to='/' className='hover:text-white transition-colors'>Home</Link> &nbsp; / &nbsp;
                <span className='text-black'>About</span>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#222831] py-[80px] px-[5%] w-full pb-0'>
        <div className='w-full p-[40px] lg:p-[100px] bg-gradient-to-br from-[#1a1a1a] to-[#222831] rounded-[20px] shadow-2xl relative z-[10] border border-gray-800'>
          <div className="mx-auto">
            <div className="mb-12">
              <span className='bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold'>About Us </span>
              <h2 className='text-3xl sm:text-4xl font-semibold mt-4 text-white'>Story About Us </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white leading-relaxed text-[15px]">
              <div>
                <p className='mb-5 text-gray-300'>
                  At HotelLux, we believe the ocean has a way of bringing people together. Set on a pristine beachfront, our hotel was created to offer a peaceful hideaway where guests can unwind, reconnect, and enjoy the charm of coastal living. Whether you're here for a romantic getaway, a family vacation, or a solo retreat, we're committed to making your stay special with personalized service, breathtaking views, and the soothing rhythm of the sea.
                </p>
                <p className='mb-5 text-gray-300'>
                  Graceful movement and structure bring life to beautiful spaces. I seek comfort and strength even through challenges. Now is the time to focus on balance and well-being. Well-designed spaces and thoughtful decisions create harmony. With confidence and support, we grow. A strong foundation and clean layout bring both style and function.
                </p>
                <p className='mb-5 text-gray-300'>
                  Our space is designed to be smooth, elegant, and easy to navigate. We combine strength with comfort, creating a calm and welcoming atmosphere. Everything is intentionally placed to feel soft and peaceful. We focus on modern design that brings balance and ease to every detail.
                </p>
              </div>

              <div>
                <p className='mb-5 text-gray-300'>
                  At our core, we believe in blending elegance with comfort to create meaningful experiences. Every detail from design to service is built on simplicity, support, and thoughtful care. We aim to provide a smooth, relaxing environment where challenges turn into beauty, and every moment feels well-crafted and calm.
                </p>
                <p className='mb-5 text-gray-300'>
                  We focus on clean, effective design and thoughtful structure that adds beauty and liveliness to any space or experience.
                </p>
                <p className='mb-8 text-gray-300'>
                  We focus on careful attention and excellence built through collaboration. Innovation and dedication guide us as we craft balanced, comfortable, and lively environments.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
                  <div className="flex items-center gap-4">
                    <img src={authorImg} alt="Emma Millar" className='w-12 h-12 rounded-full object-cover border-2 border-[#eab308]'/>
                    <div>
                      <h4 className='font-semibold text-white'>Emma Millar</h4>
                      <span className='text-sm text-[#eab308]'>Hotel Administrator</span>
                    </div>
                  </div>
                  <img src={signatureImg} alt="signature" className='w-32 object-contain' />
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
            <img src={heroImg} alt="" className='w-full max-w-md object-contain'/>
          </div>
          <div className="text-white text-center lg:text-left ">
            <span className='bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold inline-block mb-4'>
              About Us
            </span>

            <h2 className='text-3xl sm:text-4xl font-semibold mb-6 '>Discover the <br /> <span className='text-[#eab308]'>Touch of Nature</span></h2>
            <p className='text-gray-300 text-[15px] mb-4'>
              We acknowledge both the struggles and the beauty of life, uncovering the full story and explaining it clearly. True rewards come only through genuine effort.
            </p>

            <p className='text-gray-300 text-[15px] mb-8'>
              We believe that meaningful results come from dedication and effort. Comfort and reward are not achieved by chance but through intentional work and thoughtful design. Our focus is on delivering value that feels effortless built on a foundation of purpose and care.
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
            <span className='bg-[#eab308] text-xs px-4 py-1 rounded-full uppercase tracking-widest text-black font-bold inline-block mb-4'>
              Our Numbers
            </span>
            <h2 className='text-3xl sm:text-4xl font-semibold text-white mb-4'>Impressive Statistics</h2>
            <p className='text-gray-300 max-w-2xl mx-auto'>
              Our commitment to excellence is reflected in the numbers that tell our story of growth and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#eab308] mb-2">
                <CountUp end={500} duration={2.5} />+
              </div>
              <p className="text-gray-300">Happy Guests</p>
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
                <CountUp end={98} duration={2.5} />%
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