import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Sidebar(){
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

   
    return  !isMenuOpen ? null:(
        <>
        <div className="col-span-1 mr-16">
            <ul>
                <li className="mt-3 pr-2  pl-2 pt-1 pb-1 bg-gray-100 rounded-md">
                    <Link to='/'>
                        <i className="fas fa-home text-xl pr-3"></i>
                        <span className="font-semibold text-1xl">Home</span> 
                    </Link>
                  
                </li>
                <li className="mt-3 pr-2  pl-2 pt-1 pb-1 bg-gray-100 rounded-md">
                    <i className="fab fa-cotton-bureau  text-xl pr-3"></i>
                    <span className="font-semibold text-1xl">Shorts</span> 
                </li>
                <li className="mt-3 pr-2  pl-2 pt-1 pb-1 bg-gray-100 rounded-md">
                    <i className="fas fa-subscript  text-xl pr-3"></i>
                    <span className="font-semibold text-1xl">Subscription</span> 
                </li>
            </ul>
            <h3 className="pt-4 border-t mt-6 border-gray-400">Explore</h3>
            <ul>
                <li className="mt-3 pr-2  pl-2 pt-1 pb-1 bg-gray-100 rounded-md">
                    <i className="fas fa-home text-xl pr-3"></i>
                    <span className="font-semibold text-1xl">Trending</span> 
                </li>
                <li className="mt-3 pr-2  pl-2 pt-1 pb-1 bg-gray-100 rounded-md">
                    <i className="fab fa-cotton-bureau  text-xl pr-3"></i>
                    <span className="font-semibold text-1xl">Music</span> 
                </li>
                <li className="mt-3 pr-2  pl-2 pt-1 pb-1 bg-gray-100 rounded-md">
                    <i className="fas fa-subscript  text-xl pr-3"></i>
                    <span className="font-semibold text-1xl">Shopping</span> 
                </li>
            </ul>
        </div>
        </>
    )
    
}
export default Sidebar;