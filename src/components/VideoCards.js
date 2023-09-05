import React from "react";

const  VideoCards = ({ info})=>{
  
    // console.log(info)
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails,publishedAt} = snippet;
    
    //get in Hours
    const d = new Date(publishedAt);
    let hour = d.getHours();
    return (
        <>
        
            
                <div className="w-[100%]">
                    <img src={thumbnails.medium.url} alt='thumbnails' className="rounded-lg w-auto"/>
                </div>
             
                <div>
                    <h6 className="font-medium mt-2">{title}</h6>
                    <p className="text-sm mt-2 font-medium text-[#969696]"> {channelTitle}</p>
                    <p>
                        <span className="mr-3   text-[#969696]">{statistics.viewCount} views</span>
                        <span className=" text-[#969696]">{hour} hours ago</span>
                    </p>
                </div>
                
           
        </>
    )
}

export default VideoCards;