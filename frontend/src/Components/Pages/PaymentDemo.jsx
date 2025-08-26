import React, { useState } from 'react';
import PaymentGateway from './Payment';

const PaymentDemo = () => {
  const [showPayment, setShowPayment] = useState(false);

  const demoOrderDetails = {
    company: "HotelUX",
    orderNumber: "DEMO123456",
    product: "Premium Room Package",
    vat: "50.00",
    total: "$300.00"
  };

  const handlePaymentSuccess = () => {
    alert('Payment successful! This is a demo.');
  };

  const handleLaunchPayment = () => {
    // Scroll to top before opening payment gateway
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-yellow-500 mb-6">
          Secure Checkout 
        </h1>
        <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
          Experience our modern, secure payment gateway with Stripe integration. 
          Features automatic card type detection and a clean, professional design.
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Demo Order Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Company:</span>
                <span className="font-medium">{demoOrderDetails.company}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">{demoOrderDetails.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Product:</span>
                <span className="font-medium">{demoOrderDetails.product}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">VAT (20%):</span>
                <span className="font-medium">${demoOrderDetails.vat}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium text-2xl font-bold text-blue-600">{demoOrderDetails.total}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleLaunchPayment}
          className="bg-yellow-500 text-black px-8 py-4 rounded-2xl text-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          🚀 Launch Secure Checkout
        </button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-2">Stripe Integration</h3>
            <p className="text-white">Secure payment processing with automatic card type detection and validation.</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-2">Card Detection</h3>
            <p className="text-white">Automatically detects and displays Visa, Mastercard, AMEX, and Discover cards.</p>
          </div>

          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-2">Modern Design</h3>
            <p className="text-white">Clean, professional interface that matches your brand and provides excellent UX.</p>
          </div>
        </div>
      </div>

      <PaymentGateway
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        orderDetails={demoOrderDetails}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default PaymentDemo; 