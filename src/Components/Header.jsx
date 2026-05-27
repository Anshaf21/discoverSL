import React from "react";
import { Link } from "react-router-dom"
import './Header.css'

export const Header = () =>{
    return(
        <div className="navbar">
            <div className="logo">Explore Srilanka</div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to={'/cart'}>View</Link>
                </li>
                <li>
                    <Link to='/'>About us</Link>
                </li>
                
            </ul>
        </div>
    )
}
