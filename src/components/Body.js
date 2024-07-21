import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
function Body() {
  return (
    <>
     
      <div className="flex mt-4 justify-center">
        <Sidebar></Sidebar>
      
        <div className="">
          {/* all childerens comes under oulet  */}
          <Outlet></Outlet>
        </div>
      </div>
     
    </>
  );
}

export default Body;
