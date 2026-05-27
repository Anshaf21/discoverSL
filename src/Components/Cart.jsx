import React from "react";
import { useParams } from "react-router-dom";
import data from "../assets/product.json";
//import sigiriyaImg from '../assets/images/id1_sigiriya.jpg';
import './Cart.css';

export const Cart = () => {

    const { id } = useParams();

    const product = data.find((item) => item.id === id);

    return (

        <div className="cart-container">

            <div className="cart-container-details">
                <div className="img">
                    <img src={product.image} alt="" />
                </div>

                <div className="cart-container-include">
                <h1>{product.name}</h1>    
                <h3>📍 City: {product.city}</h3>
                <h3>🌍 Category: {product.category}</h3>
                <h3>💰 Entry Fee: {product.entryFee}</h3>
                <h3>🕒 Visiting Hours: {product.visitingHours}</h3>
                <p><span>✨ Highlights: </span>{product.description}</p>
                </div>
                
            </div>
            
        </div>

    );
}
/*
import React from "react";
import data from "../assets/product.json";
import './Cart.css';

export const Cart = () => {

    return (
        <div className="cart-container">

            {data.map((product) => (

                <div className="cart-card" key={product.id}>

                    <h2>{product.name}</h2>

                    <p>{product.description}</p>

                    <h3>{product.city}</h3>

                </div>

            ))}

        </div>
    );
}
..................
import React from "react";
import { Link } from "react-router-dom";
import './Cart.css';

export const Cart = () =>{
    return(
        <>    
        <div>
                   
        </div>
        
        </>
    )
}
*/