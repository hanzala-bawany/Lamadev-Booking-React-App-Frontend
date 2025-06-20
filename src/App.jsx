import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/home/Home"
import HotelsList from "./pages/hotelsList/hotelsList"
import Hotel from "./pages/hotel/Hotel"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/"  element={<Home />}/>
        <Route path="/hotels"  element={<HotelsList />}/>
        <Route path="/hotels/:id"  element={<Hotel />}/>
        
      </Routes>

    </BrowserRouter>
  )
}

export default App