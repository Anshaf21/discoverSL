import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Cart } from "./Components/Cart";
import './App.css'
import { useState } from "react";

function App() {
  //const [cart,setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart/:id" element={<Cart />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
      
  );
};

export default App
