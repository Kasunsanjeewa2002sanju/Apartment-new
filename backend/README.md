# Hotel Booking Backend

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory with the following content:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/hotel-booking
NODE_ENV=development
```

If you're using MongoDB Atlas, replace the MONGO_URI with your connection string.

### Running the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on port 5000 (or the port specified in your .env file).

### API Endpoints

- `POST /users` - Create a new user (registration)
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Testing the Registration

You can test the registration endpoint using curl or Postman:

```bash
curl -X POST http://localhost:5000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "gmail": "john@example.com",
    "password": "password123",
    "age": 25,
    "gender": "male",
    "address": "123 Main St",
    "phoneNumber": "1234567890"
  }'
```

### Troubleshooting

1. **MongoDB Connection Error**: Make sure MongoDB is running locally or your Atlas connection string is correct
2. **Port Already in Use**: Change the PORT in your .env file
3. **CORS Issues**: The backend is configured with CORS to allow requests from the frontend
