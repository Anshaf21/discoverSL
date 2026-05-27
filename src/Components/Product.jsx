import './Product.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobeAsia,FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Product = ({product,cart,setCart}) =>{
    const description = product.description.length > 53 ?
    product.description.substring(0,52) : product.description
    
    const category = product.category;

    return(
        <div className='card'>
            <p className='name'>{product.name}</p>
            <p>{description}</p>
            <Link to={`/cart/${product.id}`}>more...</Link>
            <div className='desc'>
               <FaLocationDot className="location-icon"/>
               <p className='city'>{product.city}</p>
            </div>   
            <div className='category'>
                <FaGlobeAsia className="world-icon" /> 
                <p>{product.category}</p>
                <FaMapMarkedAlt className="map-icon" />
            </div>
        </div>
    )
}
