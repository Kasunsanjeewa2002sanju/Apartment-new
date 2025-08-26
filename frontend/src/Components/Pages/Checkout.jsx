import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PaymentGateway from "./Payment";

import sectionElement from "../../assets/section-element.png";

import element1 from "../../assets/element-1.png";
import element2 from "../../assets/element-2.png";
import element3 from "../../assets/element-3.png";

import RoomsData from "../../Rooms.json";


function Checkout() {
  const { id } = useParams();
  const room = RoomsData.find((room) => room.id === id);
  if (!room) {
    return <div className="text-center py-20 text-xl">Room not Found?</div>;
  }

  const [ showModal , setShowModal] = useState(false);
  const [ showPaymentGateway, setShowPaymentGateway] = useState(false);


  return (
    <>
      {/* Section Banner */}
      <div className="section-banner booking-banner mt-5 pt-6 relative flex flex-col items-center justify-center">
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
            Booking <br /> Confirmation
          </h1>
          <div className="mt-10 bg-[#d5f1f1] w-[250px] p-2 text-xl rounded">
            <Link to="/">Home</Link> &nbsp; / &nbsp;
            <span className="text-gray-500">Checkout</span>
          </div>
        </div>

        {/* booking Content */}

        <div className="py-[150px] px-[8%] w-full">
          <div className="bg-[#f7fefe] rounded-3xl shadow-md p-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* form Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Confirm & Payment</h2>
              <form 
                className="space-y-6" 
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowPaymentGateway(true);
                }}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">First Name</label>
                    <input type="text" placeholder="First Name" className="w-full p-3 rounded-md bg-[#e8fafa] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Last Name</label>
                    <input type="text" placeholder="Last Name" className="w-full p-3 rounded-md bg-[#e8fafa] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Email Address</label>
                    <input type="email" placeholder="Your email address" className="w-full p-3 rounded-md bg-[#e8fafa] outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Phone Number</label>
                    <input type="text" placeholder="Phone Number" className="w-full p-3 rounded-md bg-[#e8fafa] outline-none" />
                  </div>
                  <button type="submit" className="bg-[#1cb6be] text-white px-6 py-3 rounded-full font-medium mt-4 hover:bg-[#16a3aa] transition duration 300">
                    <i className="ri-bookmark-line mr-2"></i>Confirm & Pay
                  </button>

              </form>
            </div>
            {/* Booking summary */}
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <img src={room.photos[0]} alt={room.title} className="rounded-xl mb-4 w-full h-[200px] object-cover" />
              <div className="flex justify-between text-sm text-gray-600 mb-2 px-1 mt-3">
                <div className="flex items-center gap-2">
                  <i className="ri-user-line"></i>Adults: {room.adults}
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-expand-left-right-line"></i>Size: {room.size}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-3">{room.title}</h3>

              <div className="mt-4 space-y-3 text-sm text-gray-600 border-t border-gray-200 pt-4">
                <p className="flex justify-between "><span>Check In Date:</span> <span>2025-07-03</span></p>
                <p className="flex justify-between "><span>Check Out Date:</span> <span>2025-07-04</span></p>
                <p className="flex justify-between "><span>Total Nights:</span> <span>1</span></p>
                <p className="flex justify-between font-bold text-lg"><span>Total Cost:</span> <span className="text-[#1cb6be]">{room.price}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

            {/* Payment Gateway */}
      <PaymentGateway
        isOpen={showPaymentGateway}
        onClose={() => setShowPaymentGateway(false)}
        orderDetails={{
          company: "HotelUX",
          orderNumber: Math.floor(Math.random() * 1000000) + 100000,
          product: room.title,
          vat: (parseFloat(room.price.replace('$', '')) * 0.2).toFixed(2),
          total: room.price
        }}
        onPaymentSuccess={() => {
          setShowModal(true);
          setShowPaymentGateway(false);
        }}
      />

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md shadow-lg text-center relative">
            <h2 className="text-3xl font-bold text-[#1cb6be] mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600">Thank you for your reservation. <br />A confirmation Mail has been sent to you.</p>
            <button 
              className="mt-6 bg-[#1cb6be] hover:bg-[16a3aa] text-white px-6 py-2 rounded-full" 
              onClick={()=> setShowModal(false)}     
            >
              Close
            </button>
            <button 
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl" 
              onClick={()=> setShowModal(false)}     
            >
              &times;
            </button>
          </div>
        </div>
      )}


    </>
  );
}

export default Checkout;
