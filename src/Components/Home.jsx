import React, { useState } from "react";
import { Link } from "react-router-dom"
import  data from "../assets/product.json" 
import { Product } from "./Product";
import './Home.css';
export const Home = () =>{
    const [products] = useState(data);
    return(
        <div className="product-container">
            {products.map((product) => (    
                <Product key={product.id} 
                product={product}/>        
            ))
            }    
        </div>
    )
}
