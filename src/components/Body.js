import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";
function Body() {
  return (
    <>
     
      <div className="grid grid-flow-col mt-4">
        <Sidebar></Sidebar>
       
        <div className="col-span-11">
          {/* all childerens comes under oulet  */}
          <Outlet></Outlet>
        </div>
      </div>
     
    </>
  );
}

export default Body;
