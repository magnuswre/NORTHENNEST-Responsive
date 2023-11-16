import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ObjectListing from './pages/ObjectListing/ObjectListing'
import BookingConfirmation from './pages/BookingConfirmation/BookingConfirmation'
import PackageCardDetails from './components/Home/PackageCardDetails/PackageCardDetails'
import PaymentConfirmation from './pages/PaymentConfirmation/PaymentConfirmation'
import ObjectListingDetails from './components/ObjectListingDetails/ObjectListingDetails'
import Login from './pages/User/Login'
import Registration from './pages/User/Registration'
import BookingAlterative from './pages/BookingAlternative/BookingAlterative'
import UserProfile from './pages/User/UserProfile'

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/rentalobject" element={<ObjectListing />} />
            <Route path="/rentalobject/:category" element={<ObjectListing />} />
            <Route path="/rentalobjectdetails/:id" element={<ObjectListingDetails />} />
            <Route path="/bookingalternative/:id" element={<BookingAlterative />} />
            <Route path='/register' element={<Registration />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<UserProfile />} />

            <Route path="/packagedetails/:id" element={<PackageCardDetails />} />
            <Route path="/order/:id" element={<BookingConfirmation />} />
            <Route path="/paymentconfirmation/:id" element={<PaymentConfirmation />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
