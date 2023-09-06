import React from "react";
import HeaderTabsList from '../components/HeaderTabsList';

function HeaderTabs(){
    const listTabs = ['All','Music','Gaming','Sports','Entertainment','Movies','Cooking','Volleyball','News','Mantras','Guiter']
   

   
 
    return(
    <>

    <div className="">
        <div>
            {
                listTabs.map((e,index)=>{
                    return <HeaderTabsList key={index} name={e}></HeaderTabsList>
                })
            }
            
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