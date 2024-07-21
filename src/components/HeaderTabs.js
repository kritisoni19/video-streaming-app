import React, { useState } from "react";
import HeaderTabsList from '../components/HeaderTabsList';
// import { useHeaderTabsFilter } from "../hooks/useHeaderTabsFilter";

function HeaderTabs(){
    const listTabs = ['All','Music','Gaming','Sports','Entertainment','Movies','Cooking','Volleyball','News','Mantras','Guiter','All','Music']
    // const [currentIndex, setCurrentIndex] = useState(0)

    // const handlePrevClick = () => {
    //     if (currentIndex === 0) {
    //       setCurrentIndex(listTabs.length - 1);
    //     }
    //     else{
    //       setCurrentIndex(currentIndex - 1);
    //     }
    //   };
      
    //   const handleNextClick = () => {
      
    //       setCurrentIndex((currentIndex + 1)% listTabs.length);
    
    //   };
      
 
    return(
    <>

    <div className="">
        <div>
        {/* <button onClick={handlePrevClick}>Previous</button>     */}

            {
                listTabs.map((currentIndex,index)=>{
                    return <HeaderTabsList key={index} name={currentIndex} ></HeaderTabsList>
                })
            }
         
                {/* <button onClick={handleNextClick}>Next</button> */}
            
            {/* <HeaderTabsList name="Music"></HeaderTabsList>
            <HeaderTabsList name="Gaming"></HeaderTabsList>
            <HeaderTabsList name="Sports"></HeaderTabsList>
            <HeaderTabsList name="Entertainment"></HeaderTabsList>
            <HeaderTabsList name="Movies"></HeaderTabsList> */}
        </div>
    </div>
    
    
    </>
    ) 
}

export default HeaderTabs;