
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import About from './Components/Pages/About';
import Index from '../src/Components/Pages/Index';
import Services from './Components/Pages/Services';
import Rooms from './Components/Pages/Rooms';
import RoomsDetails from './Components/Pages/RoomsDetails';
import Checkout from './Components/Pages/Checkout';
import Blogs from './Components/Pages/Blogs';
import Contact from './Components/Pages/Contact';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import Payment from './Components/Pages/PaymentDemo';
import Users from './Components/Pages/Users';
import PaymentRecords from './Components/Pages/PaymentRecords';

// Component to conditionally render navbar and footer
function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isPaymentPage = location.pathname === '/payment';
  const isRegisterPage = location.pathname === '/register';

  return (
    <>
      {!isLoginPage && !isRegisterPage && <Nav />}
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/rooms' element={<Rooms />}></Route>
        <Route path='/rooms/:id' element={<RoomsDetails />}></Route>
        <Route path='/checkout/:id' element={<Checkout />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/payment' element={<Payment />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/payment-records' element={<PaymentRecords />}></Route>
      </Routes>
      {!isLoginPage && !isPaymentPage && !isRegisterPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App
