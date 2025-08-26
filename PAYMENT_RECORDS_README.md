# Payment Records Management System

A comprehensive payment records management system for the Hotel Booking application, featuring full CRUD operations, search, filtering, and statistics.

## 🚀 Features

### Backend Features
- **Payment Model**: Complete MongoDB schema with all necessary fields
- **RESTful API**: Full CRUD operations for payment records
- **Statistics Endpoint**: Get payment analytics and summaries
- **Error Handling**: Comprehensive error handling and validation

### Frontend Features
- **Payment Records Dashboard**: Complete management interface
- **Search & Filter**: Search by customer, order number, product, or email
- **Status Filtering**: Filter by payment status (pending, completed, failed, refunded)
- **Sorting**: Sort by date, customer, amount, or status
- **Statistics Cards**: Real-time payment statistics
- **CRUD Operations**: View, edit, and delete payment records
- **Responsive Design**: Works on all device sizes

## 📋 Database Schema

The Payment model includes the following fields:

```javascript
{
  orderNumber: String (required, unique),
  customerName: String (required),
  customerEmail: String (required),
  customerPhone: String (required),
  product: String (required),
  amount: Number (required),
  currency: String (default: "USD"),
  paymentMethod: String (required),
  cardType: String,
  last4Digits: String,
  status: String (enum: ['pending', 'completed', 'failed', 'refunded']),
  stripePaymentId: String,
  checkInDate: Date,
  checkOutDate: Date,
  numberOfGuests: Number (default: 1),
  roomType: String,
  specialRequests: String,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🛠️ Setup Instructions

### 1. Backend Setup

1. **Install Dependencies** (if not already installed):
```bash
cd backend
npm install
```

2. **Start the Backend Server**:
```bash
npm run dev
```

The server will start on port 4000 with the following endpoints:
- `GET /api/payments` - Get all payments
- `GET /api/payments/stats` - Get payment statistics
- `GET /api/payments/:id` - Get payment by ID
- `POST /api/payments` - Create new payment
- `PUT /api/payments/:id` - Update payment
- `DELETE /api/payments/:id` - Delete payment

### 2. Frontend Setup

1. **Install Dependencies** (if not already installed):
```bash
cd frontend
npm install
```

2. **Start the Frontend Development Server**:
```bash
npm run dev
```

### 3. Populate Sample Data

To add sample payment records for testing:

```bash
cd backend
node test-payments.js
```

This will create 6 sample payment records with different statuses and amounts.

## 🎯 Usage

### Accessing the Payment Records

1. Start both backend and frontend servers
2. Navigate to the application
3. Click on "Payments" in the navigation menu
4. You'll see the Payment Records dashboard

### Managing Payment Records

#### Viewing Records
- All payment records are displayed in a table format
- Use the search bar to find specific payments
- Filter by status using the dropdown
- Sort by different fields using the sort controls

#### Editing Records
1. Click the edit icon (pencil) next to any payment
2. Modify the fields in the edit modal
3. Click "Update" to save changes

#### Deleting Records
1. Click the delete icon (trash) next to any payment
2. Confirm the deletion in the modal
3. The record will be permanently removed

#### Viewing Details
1. Click the view icon (eye) next to any payment
2. See all payment details in a modal
3. Click "Close" to return to the main view

## 📊 Statistics Dashboard

The dashboard shows real-time statistics:
- **Total Payments**: Count of all payment records
- **Completed**: Count of successful payments
- **Pending**: Count of pending payments
- **Total Amount**: Sum of all completed payment amounts

## 🔍 Search and Filter Options

### Search
Search payments by:
- Customer name
- Customer email
- Order number
- Product name

### Filter
Filter by payment status:
- All Status
- Pending
- Completed
- Failed
- Refunded

### Sort
Sort by:
- Date (newest/oldest)
- Customer name (A-Z/Z-A)
- Amount (high/low)
- Status (A-Z/Z-A)

## 🎨 UI Features

### Design
- **Dark Theme**: Black background with white content cards
- **Yellow Accents**: Consistent with the hotel theme
- **Responsive Layout**: Works on mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion animations for better UX

### Status Indicators
- **Completed**: Green badge
- **Pending**: Yellow badge
- **Failed**: Red badge
- **Refunded**: Blue badge

## 🔧 API Endpoints

### Get All Payments
```http
GET /api/payments
```

### Get Payment Statistics
```http
GET /api/payments/stats
```

### Get Payment by ID
```http
GET /api/payments/:id
```

### Create Payment
```http
POST /api/payments
Content-Type: application/json

{
  "orderNumber": "ORD001",
  "customerName": "John Smith",
  "customerEmail": "john@example.com",
  "customerPhone": "+1-555-0123",
  "product": "Deluxe Suite",
  "amount": 299.99,
  "paymentMethod": "Credit Card",
  "status": "completed"
}
```

### Update Payment
```http
PUT /api/payments/:id
Content-Type: application/json

{
  "status": "completed",
  "amount": 299.99
}
```

### Delete Payment
```http
DELETE /api/payments/:id
```

## 🚨 Error Handling

The system includes comprehensive error handling:
- **Network Errors**: Displays user-friendly error messages
- **Validation Errors**: Form validation with helpful feedback
- **Server Errors**: Graceful handling of backend errors
- **Loading States**: Loading spinners during API calls

## 📱 Responsive Design

The interface is fully responsive:
- **Mobile**: Stacked layout with touch-friendly buttons
- **Tablet**: Side-by-side layout with optimized spacing
- **Desktop**: Full layout with all features visible

## 🔒 Security Considerations

- **Input Validation**: All user inputs are validated
- **XSS Protection**: React automatically escapes user input
- **CSRF Protection**: Backend includes CSRF protection
- **Data Sanitization**: All data is sanitized before database operations

## 🧪 Testing

### Manual Testing
1. **Create Payment**: Use the API to create a new payment
2. **View Records**: Navigate to the Payments page
3. **Search**: Try searching for different terms
4. **Filter**: Test all filter options
5. **Edit**: Modify payment details
6. **Delete**: Remove payment records

### Sample Data
The test script creates 6 sample payments with different:
- Customer names and contact info
- Payment amounts ($129.99 - $799.99)
- Payment statuses (completed, pending, failed, refunded)
- Room types and special requests

## 🚀 Future Enhancements

Potential improvements for the payment records system:
- **Export Functionality**: Export to CSV/PDF
- **Bulk Operations**: Select multiple records for bulk actions
- **Advanced Filters**: Date range, amount range filters
- **Payment Analytics**: Charts and graphs
- **Email Notifications**: Payment status updates
- **Integration**: Connect with actual payment gateways

## 📞 Support

For issues or questions about the payment records system:
1. Check the browser console for error messages
2. Verify the backend server is running
3. Ensure the database connection is working
4. Check the API endpoints are accessible

## 🎉 Conclusion

The Payment Records Management System provides a complete solution for managing hotel booking payments with a modern, user-friendly interface and robust backend API. It includes all essential features for payment management while maintaining consistency with the existing hotel booking application design.


