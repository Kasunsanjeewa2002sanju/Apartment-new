# User Management System

A comprehensive user management frontend with full CRUD operations, search, filtering, sorting, and statistics.

## Features

### 🎯 Core Functionality
- **Display all users** in a responsive table format
- **Update user details** with modal forms
- **Delete users** with confirmation dialogs
- **View user details** in a dedicated modal
- **Real-time search** across name, email, address, and phone
- **Advanced filtering** by gender and age groups
- **Multi-field sorting** (name, age, email, gender)
- **User statistics** dashboard with counts and averages

### 📊 Statistics Dashboard
- Total user count
- Male/Female user distribution
- Average age calculation
- Real-time updates

### 🔍 Search & Filter
- **Search**: Search across name, email, address, and phone number
- **Gender Filter**: Filter by Male/Female
- **Age Filter**: Filter by age groups (18-25, 26-35, 36-50, 50+)
- **Sorting**: Sort by any field with ascending/descending options

### 🎨 UI/UX Features
- **Responsive design** that works on all devices
- **Modern UI** with Tailwind CSS styling
- **Smooth animations** using Framer Motion
- **Loading states** and error handling
- **Modal dialogs** for actions
- **Hover effects** and interactive elements

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn package manager

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the backend server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:4000`

4. **Add sample users (optional):**
   ```bash
   node test-users.js
   ```
   This will add 8 sample users to test the functionality.

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

**Base URL**: `http://localhost:4000`

## Usage

### Accessing the User Management Page
1. Start both backend and frontend servers
2. Navigate to `http://localhost:5173`
3. Click on "Users" in the navigation menu
4. Or directly visit `http://localhost:5173/users`

### Managing Users

#### Viewing Users
- All users are displayed in a table format
- Use the search bar to find specific users
- Apply filters to narrow down results
- Sort by any column by clicking the sort button

#### Editing Users
1. Click the edit icon (pencil) next to any user
2. Modify the details in the modal form
3. Click "Update" to save changes
4. Click "Cancel" to close without saving

#### Deleting Users
1. Click the delete icon (trash) next to any user
2. Confirm the deletion in the modal dialog
3. Click "Delete" to remove the user
4. Click "Cancel" to abort the operation

#### Viewing User Details
1. Click the view icon (eye) next to any user
2. View all user information in a read-only modal
3. Click "Close" to exit the modal

## File Structure

```
frontend/src/Components/Pages/
└── Users.jsx                 # Main user management component

backend/
├── controllers/
│   └── userController.js     # User CRUD operations
├── models/
│   └── User.js              # User data model
├── routes/
│   └── userRoutes.js        # API routes
├── server.js                # Express server setup
└── test-users.js            # Sample data script
```

## Technologies Used

### Frontend
- **React 19** - UI framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin resource sharing

## Customization

### Adding New Fields
To add new user fields:

1. **Update the User model** (`backend/models/User.js`)
2. **Update the controller** (`backend/controllers/userController.js`)
3. **Update the frontend form** (`frontend/src/Components/Pages/Users.jsx`)

### Styling Changes
The component uses Tailwind CSS classes. You can modify the styling by:
- Changing color classes (e.g., `bg-blue-600` to `bg-green-600`)
- Adjusting spacing classes (e.g., `p-6` to `p-8`)
- Modifying responsive breakpoints

### Adding New Features
The component is modular and can be easily extended with:
- Pagination
- Export functionality
- Bulk operations
- Advanced analytics
- User roles and permissions

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure the backend CORS middleware is properly configured
   - Check that the frontend is making requests to the correct backend URL

2. **Database Connection Issues**
   - Verify MongoDB Atlas connection string
   - Check network connectivity
   - Ensure database credentials are correct

3. **Frontend Not Loading**
   - Check if all dependencies are installed
   - Verify the development server is running
   - Check browser console for errors

4. **API Calls Failing**
   - Ensure backend server is running
   - Check API endpoint URLs
   - Verify request/response formats

### Error Handling
The application includes comprehensive error handling:
- Network errors are displayed to users
- Form validation prevents invalid submissions
- Loading states provide user feedback
- Confirmation dialogs prevent accidental actions

## Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
