import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/home/Home"
import HotelsList from "./pages/hotelsList/hotelsList"
import Hotel from "./pages/hotel/Hotel"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "./pages/login/Login"
import SignUp from "./pages/signUp/signUp"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthRoute from "./route/AuthRoute"


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelsList />} />
        <Route path="/hotels/:id" element={<Hotel />} />

        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>

      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      // theme="colored"
      />

    </BrowserRouter>
  )
}

export default App