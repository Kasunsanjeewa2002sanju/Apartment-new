import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { FaCreditCard, FaEye, FaEyeSlash, FaEdit, FaTimes, FaCheck, FaWifi, FaReceipt, FaLock, FaShieldAlt } from 'react-icons/fa';
import { SiMastercard, SiVisa, SiAmericanexpress, SiDiscover } from 'react-icons/si';
import { STRIPE_CONFIG } from '../../config/stripe';

// Initialize Stripe with configuration
const stripePromise = loadStripe(STRIPE_CONFIG.publishableKey);

const PaymentForm = ({ orderDetails, onPaymentSuccess, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardType, setCardType] = useState(null);
  const [formData, setFormData] = useState({
    fullName: 'Kosala',
    email: 'kos@gmail.com'
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCardChange = (event) => {
    if (event.brand) {
      setCardType(event.brand);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    try {
      // Create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: {
          name: formData.fullName,
          email: formData.email,
        },
      });

      if (error) {
        console.error('Payment error:', error);
        setIsProcessing(false);
        return;
      }

      // Simulate successful payment
      setTimeout(() => {
        setIsProcessing(false);
        onPaymentSuccess && onPaymentSuccess();
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Payment error:', error);
      setIsProcessing(false);
    }
  };

  const getCardIcon = (type) => {
    switch (type) {
      case 'visa':
        return <SiVisa className="w-6 h-6 text-blue-600" />;
      case 'mastercard':
        return <SiMastercard className="w-6 h-6 text-red-500" />;
      case 'amex':
        return <SiAmericanexpress className="w-6 h-6 text-blue-500" />;
      case 'discover':
        return <SiDiscover className="w-6 h-6 text-orange-500" />;
      default:
        return <FaCreditCard className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto animate-in fade-in duration-300" onClick={onClose}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[95vh] overflow-y-auto my-8 animate-in slide-in-from-bottom-4 duration-300" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <div className="flex justify-end p-2">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-200 hover:scale-110"
          >
            <FaTimes className="text-gray-600" />
          </button>
        </div>

        {/* Main Content */}
        <div className="px-8 pb-8">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Secure Checkout */}
            <div className="flex-1 p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Secure Checkout</h1>
                <p className="text-gray-600">Complete your payment to finalize your booking</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 text-lg transition-all duration-200"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 text-lg transition-all duration-200"
                  />
                </div>

                {/* Card Information */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Card Information</label>
                  <div className="relative">
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: '16px',
                            color: '#374151',
                            '::placeholder': {
                              color: '#9CA3AF',
                            },
                            padding: '16px',
                            border: '2px solid #E5E7EB',
                            borderRadius: '12px',
                          },
                          invalid: {
                            color: '#DC2626',
                            borderColor: '#DC2626',
                          },
                        },
                      }}
                      onChange={handleCardChange}
                    />
                    
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{orderDetails?.product || 'Bike and Car Only'}</span>
                      <span className="font-medium">${orderDetails?.total?.replace('$', '') || '350'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-blue-600">{orderDetails?.total || '350'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pay Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-yellow-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-yellow-600 disabled:bg-yellow-400 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaCreditCard className="w-5 h-5" />
                      Pay ${orderDetails?.total?.replace('$', '') || '350'}
                    </>
                  )}
                </button>

                {/* Security Assurance */}
                <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaLock className="text-green-500 w-4 h-4" />
                    <span>Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-blue-500 w-4 h-4" />
                    <span>Your payment information is encrypted and secure</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Section - Order Summary */}
            <div className="lg:w-96 bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              {/* Order Details */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  <div>
                    <div className="font-medium">{orderDetails?.product || 'Bike and Car Only'}</div>
                    <div className="text-2xl font-bold text-blue-600">${orderDetails?.total?.replace('$', '') || '350'}</div>
                  </div>
                </div>
              </div>

              {/* Included Features */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Included Features</h3>
                <div className="space-y-3">
                  {[
                    'Experienced instructors',
                    'Flexible scheduling',
                    'Practice test included',
                    'Certificate upon completion'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheck className="text-green-500 w-4 h-4 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accepted Payment Methods */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">We accept:</h3>
                <div className="flex items-center gap-4">
                  <SiVisa className="w-12 h-8 text-blue-600" />
                  <SiMastercard className="w-12 h-8 text-red-500" />
                  <SiAmericanexpress className="w-12 h-8 text-blue-500" />
                  <SiDiscover className="w-12 h-8 text-orange-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentGateway = ({ isOpen, onClose, orderDetails, onPaymentSuccess }) => {
  // Scroll to top when payment gateway opens
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm 
        orderDetails={orderDetails}
        onPaymentSuccess={onPaymentSuccess}
        onClose={onClose}
      />
    </Elements>
  );
};

export default PaymentGateway; 