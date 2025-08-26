import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api/users';

// Test function
async function testAPI() {
  console.log('🧪 Testing API endpoints...\n');

  try {
    // Test 1: Get all users
    console.log('1. Testing GET /api/users');
    const getResponse = await axios.get(API_BASE_URL);
    console.log('✅ Success:', getResponse.data.users ? `${getResponse.data.users.length} users found` : 'No users found');
    console.log('Response structure:', Object.keys(getResponse.data));
    console.log('');

    // Test 2: Create a test user
    console.log('2. Testing POST /api/users');
    const testUser = {
      name: "Test User",
      gmail: "test@example.com",
      password: "TestPass123!",
      age: 25,
      gender: "Male",
      address: "123 Test Street, Test City",
      phoneNumber: "+1-555-0123"
    };

    const createResponse = await axios.post(API_BASE_URL, testUser);
    console.log('✅ Success: User created');
    console.log('Created user ID:', createResponse.data.user.id);
    console.log('');

    // Test 3: Get the created user by ID
    console.log('3. Testing GET /api/users/:id');
    const userId = createResponse.data.user.id;
    const getUserResponse = await axios.get(`${API_BASE_URL}/${userId}`);
    console.log('✅ Success: User retrieved');
    console.log('User name:', getUserResponse.data.name);
    console.log('');

    // Test 4: Update the user
    console.log('4. Testing PUT /api/users/:id');
    const updateData = {
      name: "Updated Test User",
      age: 26
    };
    const updateResponse = await axios.put(`${API_BASE_URL}/${userId}`, updateData);
    console.log('✅ Success: User updated');
    console.log('Updated name:', updateResponse.data.name);
    console.log('Updated age:', updateResponse.data.age);
    console.log('');

    // Test 5: Delete the test user
    console.log('5. Testing DELETE /api/users/:id');
    const deleteResponse = await axios.delete(`${API_BASE_URL}/${userId}`);
    console.log('✅ Success: User deleted');
    console.log('Delete message:', deleteResponse.data.message);
    console.log('');

    console.log('🎉 All API tests passed successfully!');

  } catch (error) {
    console.error('❌ API test failed:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    } else if (error.request) {
      console.error('No response received. Is the server running?');
    } else {
      console.error('Error:', error.message);
    }
  }
}

// Run the test
testAPI();
