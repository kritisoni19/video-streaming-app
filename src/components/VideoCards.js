import React from "react";

const  VideoCards = ({ info})=>{
  
    // console.log(info)
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails,publishedAt} = snippet;
    
    //get in Hours
    const d = new Date(publishedAt);
    let hour = d.getHours();

    const formatCash = (n) => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
      };
      
      console.log(formatCash(statistics.viewCount));
      
    return (
        <>
        
            
                <div className="">
                    <img src={thumbnails.medium.url} alt='thumbnails' className="rounded-lg w-[100%]"/>
                </div>
             
                <div>
                    <h6 className="font-medium mt-2">{title}</h6>
                    <p className="text-sm mt-2 font-medium text-[#969696]"> {channelTitle}</p>
                    <p>
                        <span className="mr-3   text-[#969696]">{formatCash(statistics.viewCount)} views</span>
                        <span className=" text-[#969696]">{hour} hours ago</span>
                    </p>
                </div>
                
           
        </>
    )
}

export default VideoCards;