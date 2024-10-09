
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';      // Ensure these components are imported
import ShopCat from './Pages/ShopCat';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Home from './Pages/home';
import Register from './Components/register';
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
       <Navbar /> 
      <Routes>
        {/* <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCat category="men" />} />
        <Route path="/women" element={<ShopCat category="women" />} />
        <Route path="/kid" element={<ShopCat category="kid" />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

