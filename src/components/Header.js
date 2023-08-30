import React from "react";
// import { Link} from 'react-router-dom';
import "../App.css";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Header() {
    const dispatch = useDispatch();
     const toggleBtnhandler=()=>{
        console.log('sdd')
        dispatch(toggleMenu());
     }

  return (
    <>
    <div className="flex mt-3 justify-between">
        <div className="flex">
          <img src="../images/menu.png" alt=" logo" onClick={()=>toggleBtnhandler()} className="w-9 h-8 cursor-pointer" />
          
          <img
            src="../images/youtube_icon.png"
            alt="youtube logo"
            className="w-28 h-8 ml-3"
          />
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="w-[36rem]  border-solid border-2 rounded-tr-none rounded-br-none p-2 rounded-full h-10 relative"
          />
          <button className=" border rounded-tr-full rounded-br-full pr-2 pl-2">
            <img
              src="../images/searchglass.png"
              alt="search icon"
              className="w-7"
            />
          </button>
        </div>
        <div>
          <img src="../images/usericon.png" alt="user icon" className="w-7" />
        </div>
      </div> 

  
 
    </>
  );
}

export default Header;
