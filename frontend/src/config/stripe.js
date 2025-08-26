// Stripe Configuration
// Replace these with your actual Stripe keys

export const STRIPE_CONFIG = {
  // Test keys (for development)
  publishableKey: 'pk_test_your_publishable_key_here',
  
  // Production keys (uncomment when ready for production)
  // publishableKey: 'pk_live_your_production_key_here',
  
  // Optional: Add your Stripe account country
  country: 'US',
  
  // Optional: Add supported currencies
  currency: 'usd',
};

// How to get your Stripe keys:
// 1. Go to https://dashboard.stripe.com/
// 2. Sign in to your account
// 3. Go to Developers > API keys
// 4. Copy your publishable key (starts with 'pk_test_' or 'pk_live_')
// 5. Replace the value above

export default STRIPE_CONFIG; 