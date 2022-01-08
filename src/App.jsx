import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";




import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return ( 
    <Router>
      <div>
        <Announcement/>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="card" element={<Card />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register/>} />
            <Route path="product" element={<Product/>} />
            <Route path="shop" element={<ProductList/>} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;