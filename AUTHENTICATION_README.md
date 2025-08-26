# 🔐 Authentication System Implementation

This document describes the authentication system implemented for the Hotel Booking application.

## 🚀 Features Implemented

### ✅ User Authentication
- **JWT Token-based Authentication**: Secure token-based authentication system
- **User Registration**: Complete user registration with validation
- **User Login**: Secure login with email and password
- **Token Storage**: Tokens stored in localStorage for persistence
- **Automatic Redirect**: Users redirected to home page after successful login

### ✅ User Interface
- **Dynamic Navigation**: Login/Register links hidden when user is authenticated
- **User Profile Menu**: Dropdown menu showing user information
- **Logout Functionality**: Secure logout with token removal
- **User Details Display**: Shows user name and email in navbar

### ✅ Security Features
- **JWT Token Validation**: Backend middleware for token verification
- **Password Validation**: Frontend and backend password validation
- **Session Management**: Proper session handling with localStorage
- **Protected Routes**: Ready for implementing route protection

## 🏗️ Architecture

### Backend (Node.js/Express)
```
backend/
├── controllers/
│   └── userController.js     # User CRUD operations + login
├── models/
│   └── User.js              # User schema
├── routes/
│   └── userRoutes.js        # API routes
├── middleware/
│   └── auth.js              # JWT token verification
└── server.js                # Main server file
```

### Frontend (React)
```
frontend/src/
├── context/
│   └── AuthContext.jsx      # Authentication context
├── Components/
│   ├── Nav/
│   │   └── Nav.jsx          # Navigation with user menu
│   └── Pages/
│       ├── Login.jsx        # Login form
│       └── Register.jsx     # Registration form
└── App.jsx                  # Main app with AuthProvider
```

## 🔧 API Endpoints

### Authentication Endpoints
- `POST /api/users` - User registration
- `POST /api/users/login` - User login
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Request/Response Examples

#### Login Request
```javascript
POST /api/users/login
{
  "gmail": "user@example.com",
  "password": "password123"
}
```

#### Login Response
```javascript
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "gmail": "user@example.com",
    "age": 25,
    "gender": "Male",
    "address": "123 Main St",
    "phoneNumber": "1234567890"
  }
}
```

## 🎯 How to Use

### 1. Start the Backend Server
```bash
cd backend
npm install
npm run dev
```
Server will start on `http://localhost:4000`

### 2. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend will start on `http://localhost:5173`

### 3. Test the Authentication
1. Navigate to `/register` to create a new account
2. Navigate to `/login` to sign in
3. After successful login, you'll be redirected to the home page
4. The navbar will show your user information and a logout button

## 🔒 Security Considerations

### Current Implementation
- ✅ JWT tokens with 24-hour expiration
- ✅ Password validation on frontend and backend
- ✅ Secure token storage in localStorage
- ✅ CORS enabled for frontend-backend communication

### Recommended Improvements
- 🔄 Password hashing with bcrypt
- 🔄 Environment variables for JWT secret
- 🔄 Refresh token implementation
- 🔄 Rate limiting for login attempts
- 🔄 Input sanitization and validation
- 🔄 HTTPS in production

## 🧪 Testing

### Manual Testing
1. **Registration Test**: Create a new user account
2. **Login Test**: Sign in with valid credentials
3. **Token Test**: Verify token is stored and used
4. **Logout Test**: Verify logout clears all data
5. **UI Test**: Verify navbar changes based on auth state

### Automated Testing
Run the test file to verify the authentication system:
```bash
node test-auth.js
```

## 🐛 Troubleshooting

### Common Issues

1. **Backend Connection Error**
   - Ensure MongoDB is running
   - Check if port 4000 is available
   - Verify all dependencies are installed

2. **CORS Errors**
   - Backend has CORS enabled for all origins
   - Check if frontend is making requests to correct URL

3. **Token Issues**
   - Clear localStorage if tokens are corrupted
   - Check browser console for JWT errors
   - Verify token expiration

4. **Login Failures**
   - Ensure user exists in database
   - Check password matches exactly
   - Verify email format

## 📝 Future Enhancements

### Planned Features
- [ ] Password reset functionality
- [ ] Email verification
- [ ] Social login (Google, Facebook)
- [ ] Remember me functionality
- [ ] User profile management
- [ ] Admin role implementation
- [ ] Two-factor authentication

### Code Improvements
- [ ] Add comprehensive error handling
- [ ] Implement proper logging
- [ ] Add unit and integration tests
- [ ] Optimize database queries
- [ ] Add API documentation with Swagger

## 🤝 Contributing

When contributing to the authentication system:

1. Follow the existing code structure
2. Add proper error handling
3. Test all authentication flows
4. Update this documentation
5. Ensure security best practices

---

**Note**: This is a development implementation. For production use, ensure all security recommendations are implemented and proper environment variables are configured.
