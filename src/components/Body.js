import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
function Body() {
  return (
    <>
     
      <div className="flex mt-4">
        <Sidebar></Sidebar>
      
        <div className="wd-[100%]">
          {/* all childerens comes under oulet  */}
          <Outlet></Outlet>
        </div>
      </div>
     
    </>
  );
}

export default Body;
